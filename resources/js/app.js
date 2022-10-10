/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import { createApp, h } from 'vue';
import { routes } from './routes';
import { createRouter, createWebHistory } from 'vue-router';

import './bootstrap';

import ExampleComponent from './components/ExampleComponent'
import App from './layouts/App'

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App).use(router).mount('#app');

// app.component('example-component', ExampleComponent);

// Object.entries(import.meta.glob('./**/*.vue', { eager: true })).forEach(([path, definition]) => {
//     app.component(path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
// });