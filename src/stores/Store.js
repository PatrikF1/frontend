import { defineStore } from "pinia";
import backend from "@/backend";
import { ref } from "vue";

export const useTerminStore = defineStore('Store', () => {
    const korisnik = ref(null)
    const frizer = ref(null)
    const usluga = ref(null)
    const datum = ref(null)
    const termini = ref([])


    function postaviKorisnika(email) {
        korisnik.value = {
            email,
            isAdmin: email.endsWith("@sharpapp.hr")
        };
    }
    

    function postaviFrizera(noviFrizer) {
        frizer.value = noviFrizer
    }

    function postaviUslugu(novaUsluga) {
        usluga.value = novaUsluga
    }

    function postaviDatum(noviDatum) {
        datum.value = noviDatum
    }

    async function dohvatiTermine() {
        try {
            const response = await backend.get('/termini')
            termini.value = response.data 
        } catch (error) {
            console.log("Greška prilikom dohvaćanja termina")
        }
    }
    
    async function spremiTermin() {
        try {
            const response = await backend.post('/termini', {
                korisnik: korisnik.value,
                frizer: frizer.value,
                usluga: usluga.value,
                datum: datum.value,
            })
            console.log("Termin spremljen", response.data)
        } catch (error) {
            console.log("Greska prilikom spremanja")
        }
    }

    return {
        korisnik,
        frizer,
        usluga,
        datum,
        termini,
        postaviKorisnika,
        postaviFrizera,
        postaviUslugu,
        postaviDatum,
        spremiTermin,
        dohvatiTermine
      };
},
      {
        persist: {
            key: 'termin-store',  
            storage: sessionStorage  
        } 
})