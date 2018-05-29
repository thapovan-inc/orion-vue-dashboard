import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
    mode: 'history',
});

// Sample routing "gates"
router.beforeEach((to, from, next) => {
    next();
});

export default router;
