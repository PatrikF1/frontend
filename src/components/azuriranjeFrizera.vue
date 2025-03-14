<template>
    <div>
      <h2>Ažuriranje frizera:</h2>
  
      <div class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" v-for="frizer in frizeri" >
        <button @click="odabraniFrizer = frizer">
          {{ frizer.ime }} {{ frizer.prezime }} - {{ frizer.iskustvo }} 
        </button>
        <input v-model="novoIskustvo" placeholder="Unesi iskustvo" type="text" class="text-black bg-gray-200 px-3 py-1 rounded-md ml-2"/>
        <button @click="azurirajFrizera(frizer._id)">Spremi</button>
      </div>
    </div>
  </template>

    <script setup>
import backend from '@/backend';
import {onMounted, ref} from 'vue'

const frizeri = ref([])
const poruka = ref('')
const loading = ref(true)
const novoIskustvo = ref('')


async function dohvatiFrizera () {
  poruka.value = ''
  try {
    const response = await backend.get('/frizeri')
    console.log(response.data)
    frizeri.value = response.data
  } catch (error) {
    console.error(error.message)
    if (error.response && error.response.data) {
      poruka.value = error.response.data.message || error.response.data
    } else {
      poruka.value = 'Doslo je do greske'
    }

    alert(poruka.value)
  } finally {
    loading.value = false
  }
}

async function azurirajFrizera(id) {
    try {
        const respone = await backend.patch(`/frizeri/${id}`, {
            iskustvo: novoIskustvo.value
        })
        console.log(respone.data)
        window.location.reload()
    } catch (error) {
        console.error(error.message)
    }
}

onMounted(() => {
    dohvatiFrizera()
})
</script>