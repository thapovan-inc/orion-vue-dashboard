<template>
    <div id="sidebar" :class="{ active: active}">
        <section>
            <div class="title">
                <h4><i class="icon-dashboard-white"></i> Dashboard</h4>
            </div>
            <div class="content">
                <div class="search">
                    <input type="text" name="search" placeholder="Lookup by Trace ID..."
                           v-model="keyword" v-bind:class="{ error : isKeywordError}"
                           @keyup.enter="search()" :readonly="isKeywordLoading"/>
                    <a class="icon-search" id="iSearch" @click="search" v-show="!isKeywordLoading"></a>
                    <vue-simple-spinner line-bg-color="#ccc" size="20" class="loading-spinner" v-show="isKeywordLoading"></vue-simple-spinner>
                </div>
            </div>
        </section>
        <section>
            <div class="title">
                <h4>Find Traces</h4>
            </div>
            <div class="content">
                <div class="form-group">
                    <label for="service_name">Service  Name</label>
                    <div class="search">
                        <input type="text" id="service_name" name="search" placeholder="Service  Name..."
                               v-model="serviceNameKeyword" v-bind:class="{ error : isKeywordError}"
                               @keyup.enter="searchByServiceName()" :readonly="isKeywordLoading"/>
                        <a class="icon-search" @click="search" v-show="!isKeywordLoading"></a>
                        <vue-simple-spinner line-bg-color="#ccc" size="20" class="loading-spinner" v-show="isKeywordLoading"></vue-simple-spinner>
                    </div>
                </div>
                <div class="form-group">
                    <label for="lookback">Lookback</label>
                    <input type="text" id="lookback" name="search" placeholder="Lookback..."
                           v-model="lookbackKeyword" v-bind:class="{ error : isKeywordError}"
                           @keyup.enter="searchByLookback()" :readonly="isKeywordLoading"/>
                </div>
                <div class="form-group">
                    <label for="service_name">Min Duration</label>
                    <input type="text" id="min_duration" name="search" placeholder="Min Duration..."
                           v-model="minDurationKeyword" v-bind:class="{ error : isKeywordError}"
                           @keyup.enter="searchByMinDuration()" :readonly="isKeywordLoading"/>
                </div>
                <div class="form-group">
                    <label for="service_name">Max Duration</label>
                    <input type="text" id="max_duration" name="search" placeholder="Max Duration..."
                           v-model="maxDurationKeyword" v-bind:class="{ error : isKeywordError}"
                           @keyup.enter="searchByMaxDuration()" :readonly="isKeywordLoading"/>
                </div>
                <div class="form-group">
                    <label for="service_name">Limit Result</label>
                    <input type="text" id="limit_result" name="search" placeholder="Limit Result..."
                           v-model="limitResultKeyword" v-bind:class="{ error : isKeywordError}"
                           @keyup.enter="searchByLimitResult()" :readonly="isKeywordLoading"/>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    //    import axios from 'axios';
    import * as Spinner from 'vue-simple-spinner';
    import Utils from '@/services/Utils';
    import UserService from '@/services/UserService';
    import { serverBus } from '../main';
    //    import NotifyUtil from '@/services/NotifyUtil';

    export default {
        name: 'app-sidebar',
        data: () => ({
            keyword: '',
            active: true,
            serviceNameKeyword: '',
            lookbackKeyword: '',
            limitResultKeyword: '',
            maxDurationKeyword: '',
            minDurationKeyword: '',
            isKeywordError: false,
            isKeywordLoading: false
        }),
        components: {
            'vue-simple-spinner': Spinner
        },
        mounted() {
            this.$parent.$on('toggleNav', () => {
                this.active = !this.active;
            });
        },
        methods: {
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
            },
            searchByServiceName() {
                if (this.serviceNameKeyword.trim().length === 0) {
                    this.isKeywordError = true;
                    return;
                }
                this.isKeywordError = false;
                const isTraceID = Utils.validTraceId(this.serviceNameKeyword);
                if (isTraceID) {
                    this.isKeywordLoading = true;
                    UserService.getInfoByTraceID(this.serviceNameKeyword)
                        .then(resp => {
                            this.isKeywordLoading = false;
//                            if (!resp.data.status) {
//                                this.$notify(NotifyUtil.toastError(resp.data.message));
//                                return;
//                            }
                            const result = {
                                users: resp.data.id,
                                traceid: this.serviceNameKeyword,
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
                    const link = `/home/${this.serviceNameKeyword}`;
                    this.$router.push({ path: link });
                }
            },
            searchByLookback() {
                if (this.lookbackKeyword.trim().length === 0) {
                    this.isKeywordError = true;
                    return;
                }
                this.isKeywordError = false;
                const isTraceID = Utils.validTraceId(this.lookbackKeyword);
                if (isTraceID) {
                    this.isKeywordLoading = true;
                    UserService.getInfoByTraceID(this.lookbackKeyword)
                        .then(resp => {
                            this.isKeywordLoading = false;
//                            if (!resp.data.status) {
//                                this.$notify(NotifyUtil.toastError(resp.data.message));
//                                return;
//                            }
                            const result = {
                                users: resp.data.id,
                                traceid: this.lookbackKeyword,
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
                    const link = `/home/${this.lookbackKeyword}`;
                    this.$router.push({ path: link });
                }
            },
            searchByMinDuration() {
                if (this.minDurationKeyword.trim().length === 0) {
                    this.isKeywordError = true;
                    return;
                }
                this.isKeywordError = false;
                const isTraceID = Utils.validTraceId(this.minDurationKeyword);
                if (isTraceID) {
                    this.isKeywordLoading = true;
                    UserService.getInfoByTraceID(this.minDurationKeyword)
                        .then(resp => {
                            this.isKeywordLoading = false;
//                            if (!resp.data.status) {
//                                this.$notify(NotifyUtil.toastError(resp.data.message));
//                                return;
//                            }
                            const result = {
                                users: resp.data.id,
                                traceid: this.minDurationKeyword,
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
                    const link = `/home/${this.minDurationKeyword}`;
                    this.$router.push({ path: link });
                }
            },
            searchByMaxDuration() {
                if (this.maxDurationKeyword.trim().length === 0) {
                    this.isKeywordError = true;
                    return;
                }
                this.isKeywordError = false;
                const isTraceID = Utils.validTraceId(this.maxDurationKeyword);
                if (isTraceID) {
                    this.isKeywordLoading = true;
                    UserService.getInfoByTraceID(this.maxDurationKeyword)
                        .then(resp => {
                            this.isKeywordLoading = false;
//                            if (!resp.data.status) {
//                                this.$notify(NotifyUtil.toastError(resp.data.message));
//                                return;
//                            }
                            const result = {
                                users: resp.data.id,
                                traceid: this.maxDurationKeyword,
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
                    const link = `/home/${this.maxDurationKeyword}`;
                    this.$router.push({ path: link });
                }
            },
            searchByLimitResult() {
                if (this.limitResultKeyword.trim().length === 0) {
                    this.isKeywordError = true;
                    return;
                }
                this.isKeywordError = false;
                const isTraceID = Utils.validTraceId(this.limitResultKeyword);
                if (isTraceID) {
                    this.isKeywordLoading = true;
                    UserService.getInfoByTraceID(this.limitResultKeyword)
                        .then(resp => {
                            this.isKeywordLoading = false;
//                            if (!resp.data.status) {
//                                this.$notify(NotifyUtil.toastError(resp.data.message));
//                                return;
//                            }
                            const result = {
                                users: resp.data.id,
                                traceid: this.limitResultKeyword,
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
                    const link = `/home/${this.limitResultKeyword}`;
                    this.$router.push({ path: link });
                }
            }
        },
    };
</script>

<style lang="scss" scoped>
    @import '../styles/components/sidebar.scss';
</style>
