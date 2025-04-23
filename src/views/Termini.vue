<template>
  <div class="termini">
    <h1 class="naslov">Pregled termina</h1>
    <div class="tekst">
    <p v-if="Store.korisnik">Korisnik: {{ Store.korisnik.email }}</p>
    <p v-if="Store.frizer">Frizer: {{ Store.frizer.ime }} {{ Store.frizer.prezime }}</p>
    <p v-if="Store.usluga">Usluga: {{ Store.usluga.usluga }} </p>
    <hr>
  </div>
    <Kalendar/>
    
<div class="kuca">
    <svg @click="home" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
</div>

  </div>
</template>

<script setup>
import Kalendar from '@/components/Kalendar.vue';
import { useTerminStore } from '@/stores/Store';
import router from '@/router';

const Store = useTerminStore();

async function home() {
  sessionStorage.clear()
  router.push({path: "/home"})
}

</script>

<style>

.termini {
  background-color: #dde6ed;
  flex-direction: column;
  min-height: 100vh;
  display: flex;
  overflow: scroll;
  align-items: center;
}

.tekst {
  margin-right: 2rem;
  margin-top: 4rem;
}

.kuca {
  margin-top: 7rem;
  position: relative;
}

</style>