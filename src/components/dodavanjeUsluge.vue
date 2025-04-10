<template>
    <div>
      <h1>Dodaj frizera</h1>
      <form @submit.prevent="dodajUslugu" action="#" method="POST">
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label for="name" class="block text-sm/6 font-medium text-gray-900">Usluga</label>
            <div class="mt-2">
              <input v-model="usluga" type="text" name="name" id="name" autocomplete="given-name" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            </div>
          </div>
  
          <div class="sm:col-span-3">
            <label for="price" class="block text-sm/6 font-medium text-gray-900">Cijena</label>
            <div class="mt-2">
              <input v-model="cijena" type="number" name="price" id="price" autocomplete="family-name" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            </div>
          </div>
  
          <div class="sm:col-span-3">
            <label for="time" class="block text-sm/6 font-medium text-gray-900">Trajanje</label>
            <div class="mt-2">
              <input v-model="trajanje" type="number" name="time" id="time" autocomplete="family-name" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            </div>
          </div>
        </div>
        
        <div class="mt-6">
          <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Dodaj uslugu
          </button>
        </div>
      </form>
    </div>
  </template>
        

    <script setup>
    import backend from '@/backend';
    import { ref } from 'vue'

    const usluga = ref("")
    const cijena = ref(null)
    const trajanje = ref(null)
    const poruka = ref("")

    async function dodajUslugu() {
        
        try {
            await backend.post("/usluge", {
                usluga: usluga.value,
                cijena: cijena.value,
                trajanje: trajanje.value
            })
            poruka.value = `Uspijesno ste dodali uslugu ${usluga.value}`
            alert(poruka.value)
        } catch (error) {
            console.error(error.message)
        }
    }

    </script>

    <style>

    
    </style>