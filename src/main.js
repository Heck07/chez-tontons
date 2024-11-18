import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@/assets/styles/global.css'; // Importation du fichier CSS global


createApp(App).use(router).mount('#app');