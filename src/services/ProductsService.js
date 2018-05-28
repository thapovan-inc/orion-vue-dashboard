import Api from '@/services/Api';

export default {
    getUser() {
        return Api.get('/data.json');
    },
    searchProducts(filters) {
        const f = JSON.stringify(filters);
        return Api.get(`ControllerServlet?RequestId=vt.ProductDetails&payload=${f}`);
    },
};
