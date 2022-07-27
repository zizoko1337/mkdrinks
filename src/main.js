import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const router = createRouter({
    history: createWebHistory(),
    routes: [

    ]
});

createApp(App).mount('#app')
