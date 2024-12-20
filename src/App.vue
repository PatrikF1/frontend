<template>
  <div id="app" class="app-container">
  
    <img src="/images/logo.png" alt="logo" class="logo">

    <div class="button-container">
      <button class="gumblog">
        <router-link to="/login" class="link-text">Prijava</router-link>
      </button>
      <button class="gumbreg">
        <router-link to="/registration" class="link-text">Registracija</router-link>
      </button>
    </div>

    <img src="/images/pocetna.png" alt="pocetna" class="bottom-image">
  </div>
</template>

<script setup></script>

<style>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  background-color: #DDE6ED;
  position: relative;
}

.logo {
  width: 200px;
  height: auto;
  margin-top: 3.5rem; 
}

.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4.5rem;
  flex-grow: 0;
}

.gumblog, .gumbreg {
  background-color: #27374D;
  padding: 0.6rem 1.0rem; 
  border-radius: 0.5rem; 
  color: white;
  font-size: 20px; 
  font-weight: bold;
  width: 10rem; 
  transition: background-color 0.3s;
}

.gumblog:hover, .gumbreg:hover {
  background-color: #1D2B3A;
}

.gumblog { 
  margin-right: 2rem;
}

.gumbreg {
  margin-top: 1rem; 
  margin-right: -2rem;
}

.link-text {
  color: white;
  text-decoration: none;
}

.bottom-image {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 0;
}
</style>