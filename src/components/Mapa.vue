<template>
  <div>
    <div id="map" class="map-container"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'


import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
})

L.Marker.prototype.options.icon = DefaultIcon

onMounted(() => {
  const map = L.map('map').setView([45.431, 13.524], 13) 

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
  }).addTo(map)

  const marker = L.marker([45.431, 13.524]).addTo(map)
  marker
    .bindPopup('<b>Trgovačka 12')
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
