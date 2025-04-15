<template>
    <div class="app">
  <img class="mx-auto h-40 w-50" src="/images/logo.png" alt="sharpapp" />
  
  
  <div class="button-container">
        <button class="gumbR">
          <router-link to="/frizer" class="link-text">Rezerviraj</router-link>
        </button>
        <button class="gumbT">
          <router-link to="/svitermini" class="link-text">Termini</router-link>
        </button>
        <button class="gumbP">
          <router-link to="/profil" class="link-text">Profil</router-link>
        </button>
      </div>

      <button class="gumbL" v-on:click="logout">Logout</button>

      <div class="strelica-dolje">↓</div>
<img class="homepage" src="/images/homepage.png" alt="sharpapp" />


  <img class="homepage" src="/images/homepage.png" alt="sharpapp" />
  <img class="oblak" src="/images/oblak.png" alt="sharpapp" />
  <img class="oblak1" src="/images/oblak.png" alt="sharpapp" />

  <div class="info">
    <h1 class="about">O nama</h1>
    <br>
    <p class="txt">Mi smo ekipa koja zna - prava frizura je više od frizure. To je tvoj osobni potpis, i mi smo tu da ti pomognemo da izgledaš kao pravi kralj. Naša aplikacija ti omogućuje da brzo i jednostavno zakoračiš u svijet vrhunskih barbera, bez čekanja i gubljenja vremena.
Pronađi svog barbera, rezerviraj termin u nekoliko klikova i dođi po frizuru koja će te izdići iz mase. Jer tvoj stil je naša misija. </p>

    <div class="block-element"></div> 


    <p class="frizeri">Frizeri</p> 
    
    <div class="imena-frizera">
  <li v-for="frizer in frizeri" :key="frizer.id" class="ime">
    <img v-if="frizer.slikaId" :src="`http://localhost:3000/api/upload/${frizer.slikaId}`" class="profil" alt="Slika frizera">
    {{ frizer.ime }}
  </li>
</div>
<br>
    <div class="block-element1"></div>

    <div class="raspored">
        <h1 class="naslovR">Radno vrijeme</h1>
        <hr class="linija">
        <p class="p1">Ponedeljak - Petak <br> 9:00 - 21:00</p>
        <br>
        <hr class="linija">
        <p class="p1"> Subota <br> 9:00 - 15:00</p>
        <br>
        <hr class="linija">
        <p class="p1"> Nedelja <br> Zatvoreno</p>
    </div>
    <h1 class="lokacija">Lokacija</h1>
    <Mapa />
    <h1 class="kontakt">Kontakt</h1>
    <p class="kontakt1">Telefon: 091 992 9787 <br> Email: info@shrapapp.hr</p>
  </div>
</div>
</template>

<script setup>
import Mapa from '@/components/Mapa.vue';
import backend from '@/backend';
import { onMounted, ref } from 'vue'
import router from '@/router';


const frizeri = ref([])
const poruka = ref("")
const loading = ref(null)

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

async function logout() {
  sessionStorage.clear()
  router.push({path: '/login'})
}

onMounted(() => {
  dohvatiFrizera()
})
</script>

<style>

.app {
    background-color: #DDE6ED;
    flex-direction: column;
    min-height: 270vh;
    overflow: auto;
    overflow-x: hidden;
}

.gumbR, .gumbT, .gumbP, .gumbL {
    background-color: #27374D;
    padding: 0.6rem 1.0rem; 
    border-radius: 0.5rem; 
    color: white;
    font-size: 20px; 
    font-weight: bold;
    width: 10rem; 
    transition: background-color 0.3s;
    display: block;
  }
  
  .gumbR:hover, .gumbT:hover, .gumbP:hover {
    background-color: #1D2B3A;
  }
  
  .gumbR { 
    margin-left: 3rem;
  }
  
  .gumbT {
    margin-top: 1rem; 
    margin-right: 2rem;
  }

  .gumbP {
    margin-top: 1rem; 
    margin-right: 6rem;
  }

  .gumbL {
    margin-top: 1rem; 
    margin-left: 2rem;
  }

  .homepage {
    height: 30rem;
    width: auto;
    margin-left: 8rem;
    margin-top: -4rem;
  }

  .oblak {
    height: 35rem;
    width: auto;
    margin-top: -15rem;
  }

  .oblak1 {
    height: 33rem;
    width: auto;
    margin-top: -35rem;
  }

  .about {
    color: #1D2B3A;
    margin-top: -6rem;
    font-size: 2rem;
    text-align: center;
  }

  .txt {
    color: #1D2B3A;
    text-align: center;
  }

  .block-element { 
    padding: 150px;
    margin: 45px;
    background-color: #526D82; 
    width: 300px; 
  }
  
  .frizeri {
    font-size: 1.2rem;
    margin-top: -19rem;
    color: white;
    text-align: center;
  }

  .profil {
    height: 3rem;
    margin-top: 2rem;
    border-radius: 15px;
  }

  .ime {
    list-style-type: none;
    color: white;
    margin-left:6rem;
    margin-top: 0.5rem;
    
  }

  .block-element1 { 
    padding: 150px;
    margin: 45px;
    background-color: #526D82; 
    width: 300px; 
    position: relative;
    top: 5rem;
  }

  .naslovR {
    position: relative;
    color: white;
    text-align: center;
    top: -14rem;
    font-size: 1.2rem;
  }

  .linija {
    position: relative;
    top: -13rem;
    width: 50%;
    right: -6rem;
  }

  .p1 {
    color: white;
    position: relative;
    top: -12rem;
    right: -4rem
  }

  .lokacija {
    color: #1D2B3A;
    text-align: center;
    font-size: 2rem;
    position: relative;
    top: -9rem;
  }

  .kontakt {
    color: #1D2B3A;
    position: relative;
    text-align: center;
    top: -5rem;
    font-size: 1.5rem;
  }

  .kontakt1 {
    color: #1D2B3A;
    text-align: center;
    position: relative;
    top: -4rem;
  }

  .link-text {
    display: inline-block;

  }

  .strelica-dolje {
  position: absolute;
  top: 30rem; 
  left: 10%;
  transform: translateX(-50%);
  font-size: 3rem;
  color: #1D2B3A;
  animation: bounce 1.5s infinite;
  z-index: 10;
}


@keyframes bounce {
  0%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(10px);
  }
}


</style>
