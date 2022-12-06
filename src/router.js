import Vue from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/todos',
        component: () => import('./views/Todos.vue')
    },
    {
        path: '/projects',
        component: () => import('./views/Projects.vue')
    },
    {
        path: '/provodki',
        component: () => import('./views/Provodki.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;