import Vue from 'vue';
import Vuex from 'vuex';
import es6Promise from 'es6-promise';

Vue.use(Vuex);
es6Promise.polyfill();

const store = new Vuex.Store({
    state: {
        products: [],
        credits: [],
        filteredProducts: [],
        activeProdName: 'Extreme',
        filters: {
            prod: 'palplus',
            subProd: 'extreme',
            rebill: 'Y',
            bogo: 'N',
            price_min: '',
            price_max: '',
            days: '',
        },
    },
    mutations: {
        ALL_PRODUCTS: (state, list) => {
            const s = state;
            s.products = list;
        },
        ACTIVE_PRODUCTS: (state, list) => {
            const s = state;
            s.filteredProducts = list;
        },
        UPDATE_FILTERS: (state, list) => {
            const s = state;
            s.filters = list;
        },
        UPDATE_ACTIVE_PROD_NAME: (state, name) => {
            const s = state;
            s.activeProdName = name;
        },
        ACTIVE_CREDITS: (state, list) => {
            const s = state;
            s.credits = list;
        },
    },
    actions: {
        setAllProducts({ commit }, list) {
            commit('ALL_PRODUCTS', list);
        },
        setActiveProducts({ commit }, list) {
            commit('ACTIVE_PRODUCTS', list);
        },
        editFilters({ commit }, list) {
            commit('UPDATE_FILTERS', list);
        },
        editActiveProdName({ commit }, name) {
            commit('UPDATE_ACTIVE_PROD_NAME', name);
        },
        setActiveCredits({ commit }, list) {
            commit('ACTIVE_CREDITS', list);
        },
    },
    getters: {
        findProductById: (state, pid) => state.products.filter(p => p.pid === pid),
        products: state => state.filteredProducts,
        searchFilters: state => state.filters,
        activeProdName: state => state.activeProdName,
        credits: state => state.credits,
    },
});

export default store;
