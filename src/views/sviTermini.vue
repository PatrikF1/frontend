<template>
<div class="popisTrenutnih">
    <h1>Trenutni rezervirani termini: </h1>
    <li v-for="termin in termini"> {{ termin.korisnik }} {{ termin.frizer.ime }} {{ termin.usluga.usluga }} {{ termin.datum }}</li>
</div>
<div class="popisProslih">
    <h1>Prošli termini: </h1>
</div>
</template>


<script setup>
import backend from '@/backend';
import {onMounted, ref} from 'vue'

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

onMounted(() => {
    dohvatiTermine()
})

</script>


<style>
</style>