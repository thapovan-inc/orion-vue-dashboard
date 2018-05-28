<template>
    <section class="accordion-section">
        <ul class="accordion">
            <li>
                <a class="toggle collapse error" href="javascript:void(0);">Paltalk : / signup</a>
                <ul class="inner">
                    <li>
                        <div class="label">Trace ID</div>
                        <div class="value">43ffeea3-e2e8-4038-b697-795d94e6094a</div>
                    </li>
                    <li>
                        <div class="label">Device Info</div>
                        <div class="value">
                            <ul>
                                <li>
                                    <span>Model</span>
                                    <span>GT-P5100</span>
                                </li>
                                <li>
                                    <span>Phone Type</span>
                                    <span>Tablet</span>
                                </li>
                                <li>
                                    <span>Brand</span>
                                    <span>Samsung</span>
                                </li>
                                <li>
                                    <span>Screen Size</span>
                                    <span>1280 x 752</span>
                                </li>
                                <li>
                                    <span>Android Version</span>
                                    <span>4.0.3</span>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="label">Location</div>
                        <div class="value">Chennai</div>
                    </li>
                    <li>
                        <a class="toggle collapse error" href="javascript:void(0);">LIFE CYCLE</a>
                        <ul class="inner">
                            <li>
                                <a class="toggle collapse error" href="javascript:void(0);">Mobile signup</a>
                                <ul class="inner">
                                    <li>
                                        <a class="error" href="javascript:void(0);">Proxy server</a>
                                    </li>
                                    <li>
                                        <a class="toggle collapse success" href="javascript:void(0);">Auth service</a>
                                        <ul class="inner">
                                            <li>
                                                <a class="error" href="javascript:void(0);">Signup</a>
                                            </li>
                                            <li>
                                                <a class="toggle collapse success" href="javascript:void(0);">Create User</a>
                                                <ul class="inner">
                                                    <li>
                                                        <div class="list-items">
                                                            <ul>
                                                                <li>
                                                                    <span>Model</span>
                                                                    <span>GT-P5100</span>
                                                                </li>
                                                                <li>
                                                                    <span>Phone Type</span>
                                                                    <span>Tablet</span>
                                                                </li>
                                                                <li>
                                                                    <span>Brand</span>
                                                                    <span>Samsung</span>
                                                                </li>
                                                                <li>
                                                                    <span>Screen Size</span>
                                                                    <span>1280 x 752</span>
                                                                </li>
                                                                <li>
                                                                    <span>Android Version</span>
                                                                    <span>4.0.3</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div class="list-items">
                                                            <ul>
                                                                <li>
                                                                    <span>Model</span>
                                                                    <span>GT-P5100</span>
                                                                </li>
                                                                <li>
                                                                    <span>Phone Type</span>
                                                                    <span>Tablet</span>
                                                                </li>
                                                                <li>
                                                                    <span>Brand</span>
                                                                    <span>Samsung</span>
                                                                </li>
                                                                <li>
                                                                    <span>Screen Size</span>
                                                                    <span>1280 x 752</span>
                                                                </li>
                                                                <li>
                                                                    <span>Android Version</span>
                                                                    <span>4.0.3</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <a class="toggle collapse success" href="javascript:void(0);">Paltalk : / products</a>
            </li>
            <li>
                <a class="toggle collapse success" href="javascript:void(0);">Paltalk : / orderplaced</a>
            </li>
            <li>
                <a class="toggle collapse success" href="javascript:void(0);">Paltalk : / signin</a>
            </li>
        </ul>
    </section>
</template>

<script>
    import Vue from 'vue';
    import { mapGetters } from 'vuex';
    import { VueMasonryPlugin } from 'vue-masonry';
    import ProductsService from '@/services/ProductsService';

    Vue.use(VueMasonryPlugin);

    export default {
        name: 'products',
        components: {
        },
        data: () => ({
            days: {
                d30: false,
                d90: false,
                d180: false,
                d365: false,
            },
        }),
        computed: mapGetters([
            'products',
            'searchFilters',
            'activeProdName',
        ]),
        methods: {
            async toggleDaysCheckBox(event) {
                const daysFilter = [];
                const filters = this.$store.getters.searchFilters;
                const isSelected = event.target.checked;
                const val = parseInt(event.target.value, 10);
                if (val === 30) this.days.d30 = isSelected;
                else if (val === 90) this.days.d90 = isSelected;
                else if (val === 180) this.days.d180 = isSelected;
                else if (val === 365) this.days.d365 = isSelected;

                if (this.days.d30) daysFilter.push('30');
                if (this.days.d90) daysFilter.push('90');
                if (this.days.d180) daysFilter.push('180');
                if (this.days.d365) daysFilter.push('365');

                filters.days = '';

                if (daysFilter.length > 0) {
                    filters.days = daysFilter.join(',');
                }

                const response = await ProductsService.searchProducts(filters);
                this.$store.dispatch('setActiveProducts', response.data.results);
                this.$store.dispatch('editFilters', filters);
            },
        },
        updated() {
            this.$redrawVueMasonry();
        },
    };
</script>

<style lang="scss">
    @import '../styles/layout/accordion.scss';
</style>
