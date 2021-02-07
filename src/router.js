import { createRouter, createWebHistory } from 'vue-router'

import Calendar from './pages/Calendar';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Markdown from './pages/Markdown';
import Chat from './pages/Chat';
import Crud from './pages/Crud';
import Tensorflow from './pages/Tensorflow';
import AdoptPet from './pages/AdoptPet';

import store from './store/index';


const routes = [
    {path: '/', component: Home},
    {path: '/calendly', component: Calendar},
    {path: '/quiz', component: Quiz},
    {path: '/markdown', component: Markdown},
    {
        path: '/chat',
        component: Chat,
        meta: {middleware: 'auth'}, 
    },
    {path: '/crud', component: Crud},
    {path: '/tensorflow', component: Tensorflow},
     {path: '/adopt-pet', component: AdoptPet},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, _, next) => {
    if(to.meta.middleware){
        if(!store.state.isLoggedIn){
            next('/')
            alert("Please login first")
        } else {
            next();
        }
    } else {
        next();
    }
})
export default router;