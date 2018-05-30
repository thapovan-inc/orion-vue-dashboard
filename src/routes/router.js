import Vue from 'vue';
import Router from 'vue-router';
import NotFound from '@/routes/NotFound';
import Home from '@/routes/Home';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/not-found', alias: '*', name: 'not-found', component: NotFound, meta: { allowAnonymous: true } },
    ],
});

// Sample routing "gates"
router.beforeEach((to, from, next) => {
    next();
});

export default router;
