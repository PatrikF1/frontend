<template>
  <div>
    <h2>Pregled termina</h2>
    <p>Korisnik: {{ Store.korisnik }}</p>
    <p>Frizer: {{ Store.frizer.ime }} {{ Store.frizer.prezime }}</p>
    <p>Usluga: {{ Store.usluga.usluga }} {{ Store.usluga.trajanje }} min {{ Store.usluga.cijena }} €</p>
    <p>Datum: {{ Store.datum }}</p>
    <button @click="potvrdiTermin" class="gumbT">Potvrdi termin</button>
  </div>
</template>

<script setup>
import { useTerminStore } from '@/stores/Store';

const Store = useTerminStore();

async function potvrdiTermin() {
  await Store.spremiTermin();
}
</script>

<style>
</style>