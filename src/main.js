/* eslint-disable import/prefer-default-export */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueTouch from 'vue-touch';

import App from '@/App';
import router from '@/routes/router';
import store from '@/store';

Vue.use(VueTouch);

Vue.config.productionTip = false;
export const serverBus = new Vue();

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App },
});
