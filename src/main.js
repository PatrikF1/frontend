import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/style.css'
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';

const pinia = createPinia()


createApp(App).use(router).use(pinia).use(VCalendar).mount('#app')
