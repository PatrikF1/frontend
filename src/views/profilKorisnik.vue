<template>
<p v-if="trenutniKorisnik">{{ trenutniKorisnik.username }} - {{ trenutniKorisnik.email }} </p>
<p v-else-if="!trenutniKorisnik">Nema korisnika</p>



<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="homeButton"> Home </button>

</template>

<script setup>
import backend from '@/backend';
import { ref, onMounted, computed } from 'vue'
import { useTerminStore } from '@/stores/Store';
import router from '@/router';


const Store = useTerminStore()

const korisnici = ref([])
const poruka = ref("")

const trenutniKorisnik = computed(() => {
  return korisnici.value.find(k => k.email === Store.korisnik.email);
});

console.log("ovo je korisnik email:" + Store.korisnik.email)
console.log("ovo je korisnik bez emaila:" + Store.korisnik)

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

async function homeButton() {
  router.push({path: '/home'})
}

onMounted(() => {
    dohvatiKorisnika()
})
</script>

<style>

</style>
