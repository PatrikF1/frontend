<template>

<div>
    Brisanje frizera: 
    <button class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" v-for="frizer in frizeri" @click="izbrisiFrizera(frizer._id)">{{ frizer.ime }} {{ frizer.prezime }} - {{ frizer.iskustvo }} </button>
</div>

</template>

<script setup>

import backend from '@/backend';
import {onMounted, ref} from 'vue'

const frizeri = ref([])
const poruka = ref('')
const loading = ref(true)

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


async function izbrisiFrizera(id) {
    try {
        const response = await backend.delete(`/frizeri/${id}`)
        frizeri.value = frizeri.value.filter(frizer => frizer._id !== id)
        window.location.reload()
        console.log(response.data)
    } catch (error) {
        console.error(error.message)
    }
}

onMounted(() => {
    dohvatiFrizera()
})


</script>