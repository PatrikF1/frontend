<template>
  <dodavanjeFrizera />
  <brisanjeFrizera />
  <azuriranjeFrizera />
  <br>
  <dodavanjeUsluge />
  <div>
    <h1>Termini:</h1>
    <ul>
  <li v-for="termin in termini">
    Frizer: {{ termin.frizer.ime }} – Datum: {{ termin.datum }}
  </li>
</ul>

  <br>
  <button class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" @click="nazad()">Login</button> 
  </div>
</template>


<script setup>
import dodavanjeFrizera from '@/components/dodavanjeFrizera.vue';
import brisanjeFrizera from '@/components/brisanjeFrizera.vue'
import azuriranjeFrizera from '@/components/azuriranjeFrizera.vue';
import dodavanjeUsluge from '@/components/dodavanjeUsluge.vue';

import router from '@/router';
import { onMounted, ref } from 'vue';
import backend from '@/backend';


const termini = ref([])
const poruka = ref('')

async function dohvatiTermine () {
    poruka.value = ''
try {
    const response = await backend.get('/termini')
    console.log(response.data)
    termini.value = response.data
} catch (error) {
    console.error(error.message)
    if (error.response && error.response.data) {
      poruka.value = error.response.data.message || error.response.data
    } else {
      poruka.value = 'Doslo je do greske'
    }

    alert(poruka.value)
}
}


async function nazad() {
  router.push({path:"/login"})
}

onMounted(() => {
    dohvatiTermine()
})

</script>

