import { createRouter, createWebHistory } from 'vue-router'

import Calendar from './pages/Calendar';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Markdown from './pages/Markdown';

const routes = [
    {path: '/', component: Home},
    {path: '/calendly', component: Calendar},
    {path: '/quiz', component: Quiz},
    {path: '/markdown', component: Markdown},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;