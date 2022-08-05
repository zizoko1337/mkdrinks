import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import { createStore } from 'vuex';
import App from './App.vue';
import HomePage from './components/pages/HomePage.vue';
import ProfilePage from './components/pages/ProfilePage.vue';
import LogIn from './components/pages/LogIn.vue';
import NotFound from './components/pages/NotFound.vue';
import RegisterNewUser from './components/pages/RegisterNewUser.vue';


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// Routing

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: HomePage },
        { path: '/login', component: LogIn },
        { path: '/register', component: RegisterNewUser },
        { path: '/profile/:id', component: ProfilePage, props: true },
        { path: '/:notFound(.*)', component: NotFound }
    ]
});

// Vuex

const store = createStore({
    state() {
        return {
            isLogged: false,
            username: null,
        };
    },
    mutations: {
        userLogIn(state, username) {
            state.isLogged = true;
            state.username = username;
        },
        userLogOut(state) {
            state.isLogged = false;
            state.username = null;
        }
    },
    getters: {
        userState(state) {
            return state.isLogged;
        },
        userName(state) {
            return state.username;
        }
    },
});

const app = createApp(App);

app.use(router);
app.use(store);
app.mount('#app');
