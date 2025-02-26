<template>
    
    <VDatePicker v-model="date" mode="dateTime" :rules="rules" is24hr/>
    <button @click="spremiTermin">Spremi Termin</button>
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
  