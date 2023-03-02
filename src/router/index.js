import {createRouter, createWebHistory} from 'vue-router'
import NotFound from '../views/404.vue'
import webRoutes from './web';
import MainLayout from "../layouts/MainLayout.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: MainLayout,
            children: webRoutes
        },
        {path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound},

    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {top: 0}
        }
    }
})
export default router
