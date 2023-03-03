import {createRouter, createWebHistory} from 'vue-router'
import NotFound from '../views/404.vue'
import HomeView from "../views/HomeView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '',
            component: HomeView,
            name: 'Home',
            meta: {
                title: 'Home'
            }
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFound,
            meta: {
                title: '404 - Not Found'
            }
        },

    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {top: 0}
        }
    }
})

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} - SimplyRecipes`
    next();
})
export default router
