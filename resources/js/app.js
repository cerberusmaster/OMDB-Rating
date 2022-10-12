/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import { createApp, h, Vue} from 'vue';
import { routes } from './routes';
import { createRouter, createWebHistory } from 'vue-router';

import './bootstrap';

import App from './layouts/App'
import Home from './pages/Home';
import Guessing from './pages/Guessing';
import Results from './pages/Results';
import Header from './layouts/Header';

// import Home from './components/Home'
// import About from './components/About'

// const routes = [
//     {
//       path: "/",
//       name: "Home",
//       component: Home,
//     },
//     {
//       path: "/about",
//       name: "About",
//       component: About,
//     },
// ];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(Home);

/** Declare Vue Component Pages */
app.component("HomePage", Home);
app.component("ResultsPage", Results);
app.component("GuessingPage", Guessing);

/** Declare Vue Component Pages */
app.component("header-component", Header);

app.use(router).mount('#app');

// app.component('example-component', ExampleComponent);

// Object.entries(import.meta.glob('./**/*.vue', { eager: true })).forEach(([path, definition]) => {
//     app.component(path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
// });