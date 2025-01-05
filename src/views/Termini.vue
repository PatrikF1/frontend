<template>
  <div>
    <h2>Pregled termina</h2>
    <p>Korisnik: {{ Store.korisnik }}</p>
    <p>Frizer: {{ Store.frizer }}</p>
    <p>Usluga: {{ Store.usluga }}</p>
    <p>Datum: {{ Store.datum }}</p>
    <button @click="potvrdiTermin">Potvrdi termin</button>
  </div>
</template>

<script setup>
import { useTerminStore } from '@/stores/Store';

const Store = useTerminStore();

async function potvrdiTermin() {
  await Store.spremiTermin();
}
</script>
