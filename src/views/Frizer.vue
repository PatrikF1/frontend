<template>
  <div class="frizer">
    <h1 class="naslov">Frizeri</h1>
    <div class="lista-frizera">
      <div v-if="loading" class="loading">Pricekajte...</div>
      <button v-for="frizer in frizeri" :key="frizer.ime + frizer.prezime" class="gumb-frizer" @click="odabir(frizer)">
        <h2 class="info">{{ frizer.ime }} {{ frizer.prezime }}</h2>
        <p>{{ frizer.iskustvo }}</p>
        <img v-if="frizer.slikaId" :src="`http://localhost:3000/api/upload/${frizer.slikaId}`" alt="Slika frizera">

        <p class="click">&#x2702;&#xFE0F</p>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import backend from '@/backend'
import router from '@/router'
import { useTerminStore } from '@/stores/Store'

const Store = useTerminStore()
const frizeri = ref([])
const poruka = ref('')
const loading = ref(true)

async function dohvatiFrizera () {
  poruka.value = ''
  try {
    const response = await backend.get('/frizeri')
    console.log(response.data)
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

async function odabir(frizer) {
  Store.postaviFrizera(frizer)
  router.push({path: '/usluge'})

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
  overflow: hidden;
}

.naslov {
  text-align: center;
  font-size: 2rem;
  position: relative;
  top: 5rem;
  color: #27374D;
}

.lista-frizera {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  position: relative;
  top: 12rem;
  right: -2rem;
  font-size: 1.2rem;
}

.gumb-frizer {
  background-color: #526D82;
  color: white;
  border-radius: 8px;
  padding: 20px;
  width: 320px;
  text-align: left;
  transition: all 0.3s ease;
}

.click {
  position: relative;
  right: -13rem;
  font-size: 30px;
  top: -2rem;
  padding: 0;
  margin: 0;
  border: 0;
}

.gumb-frizer:hover {
  background-color: #80acce; 
  transform: scale(1.05);
}


</style>
