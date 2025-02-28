<template>
<p v-for="korisnik in korisnici">{{ korisnik.username }}</p>
</template>

<script setup>
import backend from '@/backend';
import { ref, onMounted } from 'vue'

const korisnici = ref([])
const poruka = ref("")

async function dohvatiKorisnika() {
    poruka.value = ""
    try {
        const response = await backend.get('/korisnici')
        korisnici.value = response.data
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
    dohvatiKorisnika()
})
</script>

<style>

</style>
