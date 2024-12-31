<template>
    <div class="usluge">
      <h1>Odabrali ste frizera: {{ ime }} {{ prezime }} </h1>
      <button v-for="usluga in usluge" :key="usluga.usluga" class="gumb-usluge">
        <h2>{{ usluga.usluga }} {{ usluga.trajanje }} min {{ usluga.cijena }} € </h2>
      </button>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  import backend from '@/backend';
  import {ref, onMounted} from 'vue'


  const dohvati = useRoute();
  const ime = dohvati.query.ime;
  const prezime = dohvati.query.prezime;
  
  const usluge = ref([])

  async function dohvatiUsluge() {
    try {
        let response = await backend.get('/usluge')
        usluge.value = response.data
    } catch (error) {
        console.error(error.message)
    }
  }

onMounted(() =>{
    dohvatiUsluge()
})

  </script>
  
  <style>
 
  </style>
  