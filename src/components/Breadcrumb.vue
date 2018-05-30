<template>
    <section id="breadcrumbs">
        <div class="status">
            <ul class="breadcrumb">
                <li><a href="#">Sign Up</a></li>
                <li class="success"><a href="#">500</a></li>
                <li class="warning"><a href="#">30</a></li>
                <li class="error"><a href="#">10</a></li>
            </ul>
        </div>
        <div class="status">
            <ul class="breadcrumb">
                <li><a href="#">Sign In</a></li>
                <li class="success"><a href="#">500</a></li>
                <li class="warning"><a href="#">30</a></li>
                <li class="error"><a href="#">10</a></li>
            </ul>
        </div>
        <div class="status">
            <ul class="breadcrumb">
                <li><a href="#">Products</a></li>
                <li class="success"><a href="#">500</a></li>
                <li class="warning"><a href="#">30</a></li>
                <li class="error"><a href="#">10</a></li>
            </ul>
        </div>
        <div class="status">
            <ul class="breadcrumb">
                <li><a href="#">Order Placement</a></li>
                <li class="success"><a href="#">500</a></li>
                <li class="warning"><a href="#">30</a></li>
                <li class="error"><a href="#">10</a></li>
            </ul>
        </div>
    </section>
</template>

<script>
    import Utils from '@/services/Utils';
    import UserService from '@/services/UserService';
    import { serverBus } from '../main';
    //    import NotifyUtil from '@/services/NotifyUtil';

    export default {
        name: 'app-header',
        data: () => ({
            active: true,
            user: '',
            keyword: '',
            status: 'error',
            isKeywordError: false,
            isKeywordLoading: false,
            // day: new Date().getDay(),
            // month: new Date().getMonth()
        }),
//        mounted() {
//            axios.get('https://jsonplaceholder.typicode.com/posts/1').then(response => {
//                this.user = response.data.userId;
//            })
//            .catch(error => {
//                console.log(error);
//            });
//        },

        methods: {
            toggleError() {
                const isTraceID = Utils.validTraceId(this.status);
                if (isTraceID) {
                    this.isKeywordLoading = true;
                    UserService.getInfoByTraceID(this.status)
                        .then(resp => {
                            this.isKeywordLoading = false;
//                            if (!resp.data.status) {
//                                this.$notify(NotifyUtil.toastError(resp.data.message));
//                                return;
//                            }
                            const result = {
                                users: resp.data.id,
                                traceid: this.status,
                            };
                            serverBus.$emit('Charts', result);
//                            this.$modal.show('modal-selectNick', result);
                        }).catch(err => {
                            this.isKeywordLoading = false;
                            // this.$notify(NotifyUtil.toastError(err.response));
                            if (err.response.status > 400 && err.response.status < 500) {
                                this.$router.push({ path: '/' });
                            }
                        });
                } else {
                    const link = `/home/${this.status}`;
                    this.$router.push({ path: link });
                }
            }
        },
    };
</script>

<style lang="scss" scoped>
    @import '../styles/components/breadcrumb.scss';
</style>
