<template>
  <div class="usluge">
    <h1 class="naslov">Usluge</h1>
    <div class="lista-usluga">
      <div v-if="loading" class="loading">Pricekajte...</div>
      
      <button v-for="usluga in usluge" class="gumb-usluge" @click="odabir(usluga)">
        <h2>{{ usluga.usluga }}</h2>
        <p>{{ usluga.trajanje }} min</p>
        <p>{{ usluga.cijena }} €</p>
      </button>
    </div>
  </div>
</template>

<script setup>
import backend from '@/backend'
import { ref, onMounted } from 'vue'
import router from '@/router'
import { useTerminStore } from '@/stores/Store'

const Store = useTerminStore()


const loading = ref(true)
const usluge = ref([])
const poruka = ref('')

async function dohvatiUsluge () {
  try {
    let response = await backend.get('/usluge')
    usluge.value = response.data
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

async function odabir(usluga) {
  Store.postaviUslugu(usluga)
  router.push({path:'/termini'})
}

onMounted(() => {
  dohvatiUsluge()
})
</script>

<style>
.usluge {
  background-color: #dde6ed;
  flex-direction: column;
  min-height: 100vh;
  display: flex;
  overflow: scroll;
}

.gumb-usluge {
  background-color: #526d82;
  color: white;
  border-radius: 8px;
  padding: 10px;
  width: 95%;
  text-align: left;
  position: relative;
  transition: all 0.3s ease;
}

.gumb-usluge:hover {
  background-color: #80acce;
  transform: scale(1.02);
}

.lista-usluga {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  position: relative;
  top: 5rem;
  right: -0.5rem;
  font-size: 0.9rem;
}

.friz {
    color: #27374D;
    font-size: 0.9rem;
}
</style>
