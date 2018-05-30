<template>
    <header>
        <div class="left-col">
            <div class="logo">
                <div class="orion-logo">Orion<span>Tracing tool</span></div>
            </div>
            <button type="button" class="toggle-icon" id="sidebarCollapse" @click="toggleNav()">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
        <div class="right-col">
            <div class="user-details">
                <div class="user-info">
                    <p>Welcome Santhosh</p>
                    <p>Monday, 10th May</p>
                </div>
                <div class="thumb">
                    <img src="/static/img/avatar.png" alt="avatar" />
                </div>
            </div>
            <div class="search-container">
                <div class="search">
                    <input type="text" id="traceId" name="search" placeholder="Lookup by Trace ID..."
                           v-model="keyword" v-bind:class="{ error : isKeywordError}"
                           @keyup.enter="search()" :readonly="isKeywordLoading"/>
                    <a class="icon-search" id="iSearch" @click="search" v-show="!isKeywordLoading"></a>
                    <vue-simple-spinner line-bg-color="#ccc" size="20" class="loading-spinner" v-show="isKeywordLoading"></vue-simple-spinner>
                </div>
                <div class="alert-error hide">
                    <p>Trace ID not found</p>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
//    import axios from 'axios';
    import * as Spinner from 'vue-simple-spinner';
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
            isKeywordError: false,
            isKeywordLoading: false,
            // day: new Date().getDay(),
            // month: new Date().getMonth()
        }),
        components: {
            'vue-simple-spinner': Spinner
        },
//        mounted() {
//            axios.get('https://jsonplaceholder.typicode.com/posts/1').then(response => {
//                this.user = response.data.userId;
//            })
//            .catch(error => {
//                console.log(error);
//            });
//        },

        methods: {
            toggleNav() {
                this.$parent.$emit('toggleNav');
            },
            search() {
                if (this.keyword.trim().length === 0) {
                    this.isKeywordError = true;
                    return;
                }
                this.isKeywordError = false;
                const isTraceID = Utils.validTraceId(this.keyword);
                if (isTraceID) {
                    this.isKeywordLoading = true;
                    UserService.getInfoByTraceID(this.keyword)
                        .then(resp => {
                            this.isKeywordLoading = false;
//                            if (!resp.data.status) {
//                                this.$notify(NotifyUtil.toastError(resp.data.message));
//                                return;
//                            }
                            const result = {
                                users: resp.data.id,
                                traceid: this.keyword,
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
                    const link = `/home/${this.keyword}`;
                    this.$router.push({ path: link });
                }
            }
        },
    };
</script>

<style lang="scss" scoped>
    @import '../styles/layout/header.scss';
</style>
