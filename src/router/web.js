import HomeView from "../views/HomeView.vue";

const routes = [
    {
        path: '',
        component: HomeView,
        name: 'Home',
        meta: {
            title: 'Home'
        }
    }

]

export default routes;