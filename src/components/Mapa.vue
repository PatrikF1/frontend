<template>
  <div>
    <div id="map" class="map-container"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import 'leaflet/dist/leaflet.css'

import L from 'leaflet'



onMounted(() => {
  const map = L.map('map').setView([45.431, 13.524], 13) 

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
  }).addTo(map)

  const marker = L.marker([45.431, 13.524]).addTo(map)
  marker
    .bindPopup('<b>Ovdje smo')
    .openPopup()

 
})
</script>

<style scoped>
.map-container {
  height: 350px;
  width: 100%;
  position: relative;
  top: -7rem;
}
</style>
