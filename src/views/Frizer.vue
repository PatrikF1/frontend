<template>
  <div class="frizer">
    <h1 class="naslov">Frizeri</h1>
    <div class="lista-frizera">
      <div v-if="loading" class="loading">Pricekajte...</div>
      <button v-for="frizer in frizeri" :key="frizer.ime + frizer.prezime" class="gumb-frizer" @click="odabir(frizer)">
        <h2 class="info">{{ frizer.ime }} {{ frizer.prezime }}</h2>
        <p>{{ frizer.iskustvo }}</p>
        <img v-if="frizer.slikaId" :src="`http://localhost:3000/api/upload/${frizer.slikaId}`" class="slikaProfila" alt="Slika frizera">

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
  align-items: center;
  overflow-x: hidden; 
}

.naslov {
  text-align: center;
  font-size: 2rem;
  margin-top: 3rem;
  color: #27374D;
}

.lista-frizera {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  max-height: auto;
  overflow-y: auto;
  margin-top: 50px;
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
  text-align: right;
  font-size: 30px;
}

.gumb-frizer:hover {
  background-color: #80acce;
  transform: scale(1.05);
}

.slikaProfila {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
</style>