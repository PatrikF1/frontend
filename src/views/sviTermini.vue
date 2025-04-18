<template>
<div class="sviTermini">
<section>
    <div>
      <h1 class="naslov">
        Termini
      </h1>
    </div>
    <div>
        <h1 class="centar">Trenutni rezervirani termini: </h1>
        <div class="popisTrenutnih">
          <div v-if="trenutniTermin.length > 0">
            <div v-for="termin in trenutniTermin">
              <li>
                <div>{{ termin.korisnik.email }}</div>
                <div>{{ termin.frizer.ime }}</div>
                <div>{{ termin.usluga.usluga }}</div>
                <div>{{ formatirajDatum(termin.datum) }}</div>
              </li>
            </div>
          </div>
          <div v-else>
            <p>Nema trenutnih termina!</p>
          </div>
        </div>
        <h1 class="centar">Prošli termini: </h1>
        <div class="popisProslih">
          <div v-if="prosliTermin.length > 0">
            <div v-for="termin in prosliTermin">
              <li>
                <div>{{ termin.korisnik.email }}</div>
                <div>{{ termin.frizer.ime }}</div>
                <div>{{ termin.usluga.usluga }}</div>
                <div>{{ formatirajDatum(termin.datum) }}</div>
              </li>
            </div>
          </div>
          <div v-else>
            <p>Nema prošlih termina!</p>
          </div>
        </div>
    </div>
</section>
<div class="kuca">
    <svg @click="home" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
</div>
</div>
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


async function home() {
  sessionStorage.clear()
  router.push({path: "/home"})
}

onMounted(() => {
    dohvatiTermine()
})

</script>


<style>
.sviTermini {
  background-color: #dde6ed;
  flex-direction: column;
  min-height: 100vh;
  display: flex;
  overflow: scroll;
  align-items: center;
}

.kuca {
  margin-top: 47rem;
  position: absolute;
  color: #1D2B3A;
}

.centar {
    font-size: 1.25rem;
    margin-top: 3rem;
    text-align: center;
    color: #1D2B3A;
    
}

.popisTrenutnih, .popisProslih{
    margin-top: 1rem;
    list-style-type: none;
    text-align: center;
    color: #1D2B3A;
}
</style>