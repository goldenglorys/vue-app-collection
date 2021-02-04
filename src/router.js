import { createRouter, createWebHistory } from 'vue-router'

import Calendar from './components/Calendar';

const routes = [
    {path: '/calendly', component: Calendar},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;