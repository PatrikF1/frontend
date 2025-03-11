<template>
<div>
    <h1>Dodaj frizera</h1>
    <form @submit.prevent="dodajFrizera" action="#" method="POST">
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label for="first-name" class="block text-sm/6 font-medium text-gray-900">First name</label>
            <div class="mt-2">
              <input v-model="ime" type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="last-name" class="block text-sm/6 font-medium text-gray-900">Last name</label>
            <div class="mt-2">
              <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            </div>
          </div>
          </div>
          <div class="col-span-full">
            <label for="photo" class="block text-sm/6 font-medium text-gray-900">Photo</label>
            <div class="mt-2 flex items-center gap-x-3">
              <UserCircleIcon class="size-12 text-gray-300" aria-hidden="true" />
              <button type="button" class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">Change</button>
            </div>
          </div>
</form>
</div>
</template>

<script setup>
import backend from '@/backend';
import { ref } from 'vue'

const ime = ref("")
const prezime = ref("")
const iskustvo = ref("")
const poruka = ref("")


async function dodajFrizera() {
    poruka.value = ""
    try {
        const response = await backend.post("/frizer", {
            ime: ime.value,
            prezime: prezime.value,
            iskustvo: iskustvo.value
        })
        console.log("Frizer dodan: " + response.data)
    } catch (error) {
        if (error.response && error.response.data) {
      poruka.value = error.response.data.message || error.response.data; 
    } else {
      poruka.value = "Doslo je do greske";
    }
    alert(poruka.value)
    }
}
</script>

<style>

</style>