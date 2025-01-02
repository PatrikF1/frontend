import { defineStore } from "pinia";
import backend from "@/backend";
import { ref } from "vue";

useTerminStore = defineStore('Store', () => {
    const korisnik = ref(null)
    const frizer = ref(null)
    const usluga = ref(null)
    const datum = ref(null)


    function postaviKorisnika(noviKorisnik) {
        korisnik.value = noviKorisnik
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
        postaviKorisnika,
        postaviFrizera,
        postaviUslugu,
        postaviDatum,
        spremiTermin,
      };

})