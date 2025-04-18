<template>
    
    <VDatePicker class="kalendar" v-model="date" mode="dateTime" :rules="rules" is24hr/>
    <div class="gumbo">
    <button @click="spremiTermin" type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-grey-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Spremi Termin!</button>
  </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  import { useTerminStore } from '@/stores/Store';
  import { ref } from 'vue';

  const date = ref(new Date());
  const rules = ref({
    hours: { min: 9, max: 20 },
    minutes: { interval: 30 },
  });

  const Store = useTerminStore()
  const router = useRouter()

 let poruka = ref("")

 async function spremiTermin() {
  poruka = "Termin je uspiješno rezerviran!"
    Store.postaviDatum(date.value)
    await Store.spremiTermin()
    router.push({path: '/home'})
    alert(poruka)
  }
  
 

  </script>
  
  <style>

  .kalendar {
    margin-top: 2rem; 
  }

  .gumbo {
    margin-top: 1rem;
  }
  </style>