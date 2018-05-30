<template>
    <div id="search-section">
        <div class="page-title">
            <h2><i class="icon-dashboard"></i> Dashboard</h2>
        </div>
        <div class="search-filters">
            <div class="label">Filter By</div>
            <div class="checkbox">
                <input name="filterby" id="passed" type="checkbox">
                <label for="passed">Passed</label>
            </div>
            <div class="checkbox">
                <input name="filterby" id="slow" type="checkbox">
                <label for="slow">Slow</label>
            </div>
            <div class="checkbox">
                <input name="filterby" id="failed" type="checkbox">
                <label for="failed">Failed</label>
            </div>
            <div class="form-group">
                <input type="text" name="location" placeholder="Location"
                       v-model="keyword" v-bind:class="{ error : isKeywordError}"
                       @keyup.enter="search()" :readonly="isKeywordLoading"/>
                <input type="text" name="ip" placeholder="IP"
                       v-model="keyword" v-bind:class="{ error : isKeywordError}"
                       @keyup.enter="search()" :readonly="isKeywordLoading"/>
                <input type="text" name="date" placeholder="Date"
                       v-model="keyword" v-bind:class="{ error : isKeywordError}"
                       @keyup.enter="search()" :readonly="isKeywordLoading"/>
            </div>
        </div>
    </div>
</template>

<script>
    import * as Spinner from 'vue-simple-spinner';
    import Utils from '@/services/Utils';
    import UserService from '@/services/UserService';
    import { serverBus } from '../main';
    //    import NotifyUtil from '@/services/NotifyUtil';

    export default {
        name: 'app-seach',
        data: () => ({
            keyword: '',
            isKeywordError: false,
            isKeywordLoading: false
        }),
        components: {
            'vue-simple-spinner': Spinner
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
            }
        },
    };
</script>

<style lang="scss" scoped>
    @import '../styles/components/search.scss';
</style>
