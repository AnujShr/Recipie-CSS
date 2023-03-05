import {createRouter, createWebHistory} from 'vue-router'

const HomeView = () => import('../views/HomeView.vue')
const About = () => import('../views/About.vue')
const Tags = () => import('../views/Tags.vue')
const TagDetails = () => import('../views/TagDetails.vue')
const Recipes = () => import('../views/Recipes.vue')
const Contact = () => import('../views/Contact.vue')
const NotFound = () => import('../views/404.vue')

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
            path: '/tags',
            component: Tags,
            name: 'Tags',
        }, {
            path: '/tags/:tag',
            component: TagDetails,
            name: 'TagDetails',
        },
        {
            path: '/about',
            component: About,
            name: 'About',
            meta: {
                title: 'About'
            }
        },
        {
            path: '/contact',
            component: Contact,
            name: 'Contact',
            meta: {
                title: 'Contact'
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
    if (to.meta.title)
        document.title = `${to.meta.title} - SimplyRecipes`
    next();
})
export default router
