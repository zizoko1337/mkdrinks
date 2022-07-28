import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import HomePage from './components/pages/HomePage.vue';
import LogIn from './components/pages/LogIn.vue';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '', component: HomePage },
        { path: '/login', component: LogIn },
    ]
});

const app = createApp(App);

app.use(router);

app.mount('#app')
