import {createRouter, createWebHistory} from 'vue-router'
import NotFound from '../views/404.vue'
import HomeView from "../views/HomeView.vue";
import Recipes from "../views/Recipes.vue";
import Tags from "../views/Tags.vue";

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
            path: '/recipes',
            component: Recipes,
            name: 'Recipes',
            meta: {
                title: 'Recipes'
            }
        },
        {
            path: '/tags/:tag',
            component: Tags,
            name: 'Tags',
            meta: {
                title: 'Tags'
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
})

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} - SimplyRecipes`
    next();
})
export default router
