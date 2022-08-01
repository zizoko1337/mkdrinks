import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import { createStore } from 'vuex';
import App from './App.vue';
import HomePage from './components/pages/HomePage.vue';
import LogIn from './components/pages/LogIn.vue';
import RegisterNewUser from './components/pages/RegisterNewUser.vue';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// Routing

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '', component: HomePage },
        { path: '/login', component: LogIn },
        { path: '/register', component: RegisterNewUser },
    ]
});

// Vuex

const store = createStore({
    state() {
        return{
            isLogged: false,
            login: null,
        };
    }
});

const app = createApp(App);

app.use(router);
app.use(store);
app.mount('#app');
