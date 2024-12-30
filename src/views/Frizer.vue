<template>
  <div class="frizer">
    <h1 class="naslov">Frizeri</h1>
    <div class="lista-frizera">
      <div v-if="loading" class="loading">Pricekajte...</div>
      <button v-for="frizer in frizeri" :key="frizer._id" class="gumb-frizer">
        <h2 class="info">{{ frizer.ime }} {{ frizer.prezime }}</h2>
        <p>{{ frizer.iskustvo }}</p>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import backend from '@/backend'

const frizeri = ref([])
const poruka = ref('')
const loading = ref(true)

async function dohvatiFrizera () {
  poruka.value = ''
  try {
    const response = await backend.get('/frizeri')
    frizeri.value = response.data
  } catch (error) {
    console.error(error.message)
    if (error.response && error.response.data) {
      poruka.value = error.response.data.message || error.response.data
    } else {
      poruka.value = 'Doslo je do greske'
    }

    alert(poruka.value)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  dohvatiFrizera()
})
</script>

<style>
.frizer {
  background-color: #dde6ed;
  flex-direction: column;
  min-height: 100vh;
  display: flex;
}

.naslov {
  text-align: center;
  font-size: 2rem;
  position: relative;
  top: 5rem;
}

.lista-frizera {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  position: relative;
  top: 12rem;
  right: -2rem;
}

.gumb-frizer {
  background-color: #526D82;
  color: white;
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 200px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
}
</style>
