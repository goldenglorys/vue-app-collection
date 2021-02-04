import { createRouter, createWebHistory } from 'vue-router'

import Calendar from './pages/Calendar';
import Home from './pages/Home';
import Quiz from './pages/Quiz';

const routes = [
    {path: '/', component: Home},
    {path: '/calendly', component: Calendar},
    {path: '/quiz', component: Quiz},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;