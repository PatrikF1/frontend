<template>
    
    <VDatePicker v-model="date" mode="dateTime" :rules="rules" is24hr/>
    <button @click="spremiTermin">Spremi Termin</button>
  </template>
  
  <script setup>
  import { useTerminStore } from '@/stores/Store';
  import { onMounted, ref } from 'vue';

  const date = ref(new Date());
  const rules = ref({
    hours: { min: 9, max: 20 },
    minutes: { interval: 30 },
  });

  const Store = useTerminStore()

 async function spremiTermin() {
    Store.postaviDatum(date.value)

    await Store.spremiTermin()
  }
  
 

  </script>
  