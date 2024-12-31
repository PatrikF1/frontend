<template>
 <div class="termin">
    <li v-for="termin in termini" :key="termin.email">
        {{ termin.email }}
    </li>
 </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import backend from '@/backend';
const termini = ref([])
async function dohvatiTermin() {
    
  try {
    const response = await backend.get('/termini')
    termini.value = response.data
  } catch (error) {
    console.error(error.message)
  }
}

onMounted(()=>{
    dohvatiTermin()
})

</script>

<style>

</style>