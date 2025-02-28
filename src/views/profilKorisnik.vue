<template>
<p v-if="trenutniKorisnik">{{ trenutniKorisnik.username }} - {{ trenutniKorisnik.email }} </p>
</template>

<script setup>
import backend from '@/backend';
import { ref, onMounted, computed } from 'vue'
import { useTerminStore } from '@/stores/Store';


const Store = useTerminStore()

const korisnici = ref([])
const poruka = ref("")

const trenutniKorisnik = computed(() => {
  return korisnici.value.find(k => k.email === Store.korisnik);
});


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
