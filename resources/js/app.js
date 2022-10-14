/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import { createApp, h, Vue} from 'vue';
import { routes } from './routes';
import { createRouter, createWebHistory } from 'vue-router';
import { createStore } from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
import './bootstrap';

import App from './App.vue';
import Home from './pages/Home';
import Guessing from './pages/Guessing';
import Results from './pages/Results';

const store = createStore({
    store() {
        return {
            username: '',
            terminator: '',
            score: 0
        }
    },
    mutations: {
    }
})

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App);

/** Declare Vue Component Pages */
app.component("HomePage", Home);
app.component("ResultsPage", Results);
app.component("GuessingPage", Guessing);

/** Declare Vue Component Pages */
// app.use(VueAxios, axios);
app.use(router).use(store).mount('#app');

// app.component('example-component', ExampleComponent);

// Object.entries(import.meta.glob('./**/*.vue', { eager: true })).forEach(([path, definition]) => {
//     app.component(path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
// });