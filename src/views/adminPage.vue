<template>
  <dodavanjeFrizera />
  <brisanjeFrizera />
  <azuriranjeFrizera />
  <br>
  <dodavanjeUsluge />
  <div>
  <br>
  <button class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" @click="nazad()">Login</button> 
  </div>
</template>


<script setup>
import dodavanjeFrizera from '@/components/dodavanjeFrizera.vue';
import brisanjeFrizera from '@/components/brisanjeFrizera.vue'
import azuriranjeFrizera from '@/components/azuriranjeFrizera.vue';
import dodavanjeUsluge from '@/components/dodavanjeUsluge.vue';

import router from '@/router';

async function nazad() {
  router.push({path:"/login"})
}

</script>

