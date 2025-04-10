<template>
<div class="popisTrenutnih">
    <h1>Trenutni rezervirani termini: </h1>
    <li v-for="termin in trenutniTermin"> {{ termin.korisnik }} - {{ termin.frizer.ime }} - {{ termin.usluga.usluga }} - {{ formatirajDatum(termin.datum) }} </li>
</div>
<div class="popisProslih">
    <h1>Prošli termini: </h1>
    <li v-for="termin in prosliTermin"> {{ termin.korisnik }} - {{ termin.frizer.ime }} - {{ termin.usluga.usluga }} - {{ formatirajDatum(termin.datum) }} </li>
</div>

<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="nazad">Home</button>

</template>


<script setup>
import backend from '@/backend';
import {onMounted, ref, computed} from 'vue'
import { useRouter } from 'vue-router';

const termini = ref([])
const poruka = ref('')
const router = useRouter()



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

const trenutniTermin = computed(() => {
    return termini.value.filter(termin => new Date(termin.datum) > new Date())
})

const prosliTermin = computed(() => {
    return termini.value.filter(termin => new Date(termin.datum) <= new Date())
})

function formatirajDatum(formatDatum) {
  const datum = new Date(formatDatum);
  return datum.toLocaleDateString("hr-HR", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" });
}


function nazad() {
    router.push({path: '/home'})
}

onMounted(() => {
    dohvatiTermine()
})

</script>


<style>
</style>