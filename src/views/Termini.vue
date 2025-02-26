<template>
  <div>
    <h2>Pregled termina</h2>
    <p v-if="Store.korisnik">Korisnik: {{ Store.korisnik }}</p>
    <p v-if="Store.frizer">Frizer: {{ Store.frizer.ime }} {{ Store.frizer.prezime }}</p>
    <p v-if="Store.usluga">Usluga: {{ Store.usluga.usluga }} {{ Store.usluga.trajanje }} min {{ Store.usluga.cijena }} €</p>
    
    <Kalendar/>
    
  </div>
</template>

<script setup>
import Kalendar from '@/components/Kalendar.vue';
import { useTerminStore } from '@/stores/Store';

const Store = useTerminStore();


</script>

<style>
</style>