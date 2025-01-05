<template>
  <div>
    <h2>Pregled termina</h2>
    <p>Korisnik: {{ Store.korisnik }}</p>
    <p>Frizer: {{ Store.frizer.ime }} {{ Store.frizer.prezime }}</p>
    <p>Usluga: {{ Store.usluga.usluga }} {{ Store.usluga.trajanje }} min {{ Store.usluga.cijena }} €</p>
    
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