<template>
    <div class="usluge">
      <h1>Odabrali ste frizera: {{ ime }} {{ prezime }} </h1>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  
  const dohvati = useRoute();
  const ime = dohvati.query.ime;
  const prezime = dohvati.query.prezime;
  
  </script>
  
  <style>
 
  </style>
  