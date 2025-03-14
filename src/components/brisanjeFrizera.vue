<template>

<div>
    Brisanje frizera: 
    <button v-for="frizer in frizeri" @click="izbrisiFrizera">{{ frizer.ime }} {{ frizer.prezime }} - {{ frizer.iskustvo }} </button>
</div>

</template>

<script setup>

import backend from '@/backend';
import {onMounted, ref} from 'vue'

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

onMounted(() => {
    dohvatiFrizera()
})
</script>