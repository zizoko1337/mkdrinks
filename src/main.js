import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import { createStore } from 'vuex';
import App from './App.vue';
import HomePage from './components/pages/HomePage.vue';
import ProfilePage from './components/pages/ProfilePage.vue';
import DrinkPage from './components/pages/DrinkPage.vue';
import LogIn from './components/pages/LogIn.vue';
import NotFound from './components/pages/NotFound.vue';
import RegisterNewUser from './components/pages/RegisterNewUser.vue';

import TestId from './components/elements/TestId.vue'; // component for testing available id's. It should be removed, but will stay for code review


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// Routing

const router = createRouter({
    history: createWebHistory(),
    routes: [

        { path: '/', redirect: '/mkdrinks' },
        { path: '/mkdrinks', component: HomePage },
        { path: '/login', component: LogIn },
        { path: '/register', component: RegisterNewUser },
        { path: '/profile/:id', component: ProfilePage, props: true },
        { path: '/drink/:drink', component: DrinkPage, props: true },
        { path: '/:notFound(.*)', component: NotFound },

        { path: '/testid', component: TestId },
    ]
});

// Vuex

const store = createStore({
    state() {
        return {
            isLogged: false,
            username: null,
            userFavs: null,
        };
    },
    mutations: {
        userLogIn(state, username) {
            state.isLogged = true;
            state.username = username;
        },
        userLogInFavs(state, favs) {
            state.userFavs = favs;
        },
        userLogOut(state) {
            state.isLogged = false;
            state.username = null;
            state.userFavs = [];
        },
        addToFav(state, id) {
            state.userFavs.push(id)
            state.userFavs.filter( (el) => {return el != null })
            console.log(state.userFavs)
        },
        removeFromFav(state, value) {
           const key = Object.keys(state.userFavs).find(key => state.userFavs[key] === value);
           delete state.userFavs[key]
           state.userFavs.filter( (el) => {return el != null })
           console.log(state.userFavs)
        },
    },
    getters: {
        userState(state) {
            return state.isLogged;
        },
        userName(state) {
            return state.username;
        },
        userFavs(state) {
            return state.userFavs;
        }
    },
});



const app = createApp(App);

app.use(router);
app.use(store);
app.mount('#app');
