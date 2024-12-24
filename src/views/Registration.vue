<template>
 
    <div class="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-[#DDE6ED]">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-40 w-50" src="/images/logo.png" alt="Your Company" />
        <h2 class="mt-10 text-center text-2xl/9 tracking-tight text-[#27374D] ">Sign in to your account</h2>
      </div>
  
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form @submit.prevent="registracija" class="space-y-6" action="#" method="POST">

            <div>
            <label for="username" class="block text-sm/6 font-medium text-[#27374D]">Username</label>
            <div class="mt-2">
              <input v-model="username" type="username" name="username" id="username" autocomplete="username" required="" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            </div>
          </div>
          
          <div>
            <label for="email" class="block text-sm/6 font-medium text-[#27374D]">Email address</label>
            <div class="mt-2">
              <input v-model="email" type="email" name="email" id="email" autocomplete="email" required="" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            </div>
          </div>
  
          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm/6 font-medium text-[#27374D]">Password</label>
            </div>
            <div class="mt-2">
              <input v-model="password" type="password" name="password" id="password" autocomplete="current-password" required="" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            </div>
          </div>
          
          <div>
            <div class="flex items-center justify-between">
              <label for="repeat_password" class="block text-sm/6 font-medium text-[#27374D]">Repeat Password</label>
              <div class="text-sm">
              
              </div>
            </div>
            <div class="mt-2">
              <input v-model="repeat_password" type="password" name="repeat_password" id="repeat_password" autocomplete="current-password" required="" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            </div>
          </div>
          <br>
          <a href="#" class="font-semibold text-[#27374D] ">Forgot password?</a>
          <div>
            <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
          </div>
        </form>
  
       
      </div>
    </div>
  </template>
  
  
  <script setup>
  
  import { ref } from "vue";
  import axios from "axios"
  import backend from "@/backend";
  import router from "@/router";
  
  const username = ref("")
  const email = ref("")
  const password = ref("")
  const repeat_password = ref("")
  const poruka = ref("") 
  
  
  async function registracija() {
    poruka.value = ""
    try {
      const response = await backend.post("/registration", {
        username: username.value,
        email: email.value,
        password: password.value,
        repeat_password: repeat_password.value
      })


      poruka.value = "Korisnik je uspijesno prijavljen"
      alert(poruka.value)
      console.log("korisnik prijavljen", response.data)
  
      router.push({path: '/login'})


    } catch (error) {

      if (error.response && error.response.data) {
        poruka.value = error.response.data.message || error.response.data; 
    } else {
      poruka.value = "Doslo je do greske";
    }
    
      alert(poruka.value)
      console.error(error)

      username.value = ""
      email.value = ""
      password.value = ""
      repeat_password.value = "" 
    }
  }
  
  
  
  </script>
  
  <style>
  
  </style>