<template>
    <div class="products">
        <div class="panel product-data">
            <div class="panel-title">
                <div class="select-price">
                    <span class="label">Price:</span>
                    <input type="text" name="giftee" value="Min"/>
                    <span>to</span>
                    <input type="text" name="giftee" value="Max"/>
                    <a href="javascript:void(0)" class="btn-yes">GO</a>
                </div>
                <!--div class="sorting">
                    <select>
                        <option>Sort by Days</option>
                        <option>Sort by Price</option>
                    </select>
                </div-->
                <h3>{{activeProdName}} Subscriptions</h3>
                <div class="select-validity">
                    <div class="checkbox">
                        <input type="checkbox" name="validity-1" id="validity-1" v-model="days.d30" value="30"
                               @click="toggleDaysCheckBox"/>
                        <label for="validity-1">30 days</label>
                    </div>
                    <div class="checkbox">
                        <input type="checkbox" name="validity-2" id="validity-2" v-model="days.d90" value="90"
                               @click="toggleDaysCheckBox"/>
                        <label for="validity-2">90 days</label>
                    </div>
                    <div class="checkbox">
                        <input type="checkbox" name="validity-3" id="validity-3" v-model="days.d180" value="180"
                               @click="toggleDaysCheckBox"/>
                        <label for="validity-3">6 months</label>
                    </div>
                    <div class="checkbox">
                        <input type="checkbox" name="validity-4" id="validity-4" v-model="days.d365" value="365"
                               @click="toggleDaysCheckBox"/>
                        <label for="validity-4">1 year</label>
                    </div>
                </div>
            </div>
            <div class="panel-content">
                <div v-bind:class="activeProdName.toLowerCase()">
                    <ul class="products" v-masonry origin-left="true" transition-duration="1s" item-selector=".item"
                        fit-width="true">
                        <li v-masonry-tile class="item" v-for="product in products">
                            <div class="desc">
                                <p>{{product.name}}</p>
                            </div>
                            <div class="price">
                                <sup class="c1">$</sup>{{product.price}}<span class="c2">/mo!</span>
                            </div>
                            <div class="gift" v-if="product.autoRenew === 'N'">
                                <div class="textbox">
                                    <input type="text" name="giftee" value="" placeholder="Enter Nick"/>
                                    <i class="icon-success hide"></i>
                                </div>
                                <div class="checkbox">
                                    <input type="checkbox" v-bind:name="product.pid" v-bind:id="product.pid"/>
                                    <label v-bind:for="product.pid">Gift</label>
                                </div>
                            </div>
                            <div class="buttons">
                                <a href="javascript:void(0)" class="btn-reset">Buy Now</a>
                                <a href="javascript:void(0)" class="btn-apply">Add to Cart</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
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
</style>
