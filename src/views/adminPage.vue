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
              <input v-model="prezime" type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            </div>
          </div>
          </div>
         

<h3>Iskustvo</h3>
<ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
        <div class="flex items-center ps-3">
            <input v-model="iskustvo" id="list-radio-license" type="radio" value="Junior" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            <label for="list-radio-license" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Junior </label>
        </div>
    </li>
    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
        <div class="flex items-center ps-3">
            <input v-model="iskustvo" id="list-radio-id" type="radio" value="Senior" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            <label for="list-radio-id" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Senior</label>
        </div>
    </li>
    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
        <div class="flex items-center ps-3">
            <input v-model="iskustvo" id="list-radio-military" type="radio" value="Expert" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            <label for="list-radio-military" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Expert</label>
        </div>
    </li>
    
</ul>

<div>
        <label for="slika">Odaberi sliku</label>
        <input type="file" @change="uploadFile" accept="image/*" required />
      </div>

<button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Dodaj</button>
</form>
</div>
</template>

<script setup>
import backend from '@/backend';
import { ref } from 'vue';

const ime = ref("");
const prezime = ref("");
const iskustvo = ref("");
const file = ref(null);
const poruka = ref("");

const uploadFile = (event) => {
  file.value = event.target.files[0];
};

async function dodajFrizera() {
    if (!file.value) {
        alert("Molimo dodajte sliku.");
        return;
    }

    poruka.value = "";
    try {
        const formData = new FormData();
        formData.append("ime", ime.value);
        formData.append("prezime", prezime.value);
        formData.append("iskustvo", iskustvo.value);
        formData.append("file", file.value);

        const response = await backend.post("/upload", formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        poruke.value = "Uspijesno je dodan frizer!"
        alert(poruka.value)
        console.log("Frizer dodan: ", response.data);
    } catch (error) {
        poruka.value = "Došlo je do greške";
        alert(poruka.value);
    }
}


</script>


<style>

</style>