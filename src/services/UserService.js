import Api from '@/services/Api';

export default {
    getInfoByTraceID(traceID) {
        return Api.get(`/posts/${traceID}`);
    },
    getUserInfo(UserId) {
        return Api.get(`/posts/${UserId}`);
    }
};
