import store from '../store';

export default {
    validTraceId(value) {
        if (value.length < 1) {
            return false;
        }
        return true;
    },
    setNewProfile() {
        store.dispatch('setPaymentFilter', {});
        this.resetCart();
    },
    resetCart() {
        const cart = {
            count: 0,
            total: 0,
            products: {},
        };
        store.dispatch('resetShoppingCart', cart);
    },
    clearSession() {
        store.dispatch('setProfile', {});
        store.dispatch('setPaymentFilter', {});
        this.resetCart();
    },
};
