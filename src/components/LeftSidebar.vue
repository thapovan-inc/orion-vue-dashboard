<template>
    <div id="sidebar" class="active">
        <section>
            <div class="title">
                <h4><i class="icon-dashboard-white"></i> Dashboard</h4>
            </div>
            <div class="content">
                <div class="search">
                    <input type="text" name="search" value="Lookup by Trace ID..." />
                    <a href="javascript:void(0)" class="icon-search"></a>
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
                        <input type="text" id="service_name" name="search" value="Service  Name..." />
                        <a href="javascript:void(0)" class="icon-search"></a>
                    </div>
                </div>
                <div class="form-group">
                    <label for="lookback">Lookback</label>
                    <input type="text" id="lookback" name="search" value="Lookback..." />
                </div>
                <div class="form-group">
                    <label for="service_name">Min Duration</label>
                    <input type="text" id="min_duration" name="search" value="Min Duration..." />
                </div>
                <div class="form-group">
                    <label for="service_name">Max Duration</label>
                    <input type="text" id="max_duration" name="search" value="Max Duration..." />
                </div>
                <div class="form-group">
                    <label for="service_name">Limit Result</label>
                    <input type="text" id="limit_result" name="search" value="Limit Result..." />
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import ProductService from '@/services/ProductsService';

    export default {
        name: 'left-sidebar',
        data: () => ({
            products: [
                {
                    prod: 'PalPlus',
                    subProds: [
                        'Plus',
                        'Extreme',
                        'VIP',
                        'Prime'
                    ]
                },
                {
                    prod: 'Room',
                    subProds: [
                        'Deluxe',
                        'Ultimate',
                        'Elite'
                    ]
                }
            ],
            credits: [
                /* {
                    prod: 'Price',
                    subprods: [
                        '$1.99 - $16',
                        '$17.99 - $54.99',
                        '$80 - $149.99',
                        '$200 - $500',
                        '$649.99 - $15000'
                    ]
                },
                {
                    prod: 'Credits',
                    subprods: [
                        '25 - 500 Credits',
                        '520 - 1530 Credits',
                        '3500 - 5000 Credits',
                        '9000 - 20000 Credits',
                        '25000 - 1000000 Credits'
                    ]
                } */
            ]
        }),
        methods: {
            async filterProducts(prod, s) {
                const subProd = (s === 'Plus') ? 'PalPlus' : s;
                const filters = this.$store.getters.searchFilters;
                filters.prod = prod.toLowerCase();
                filters.subProd = subProd.toLowerCase();
                const response = await ProductService.searchProducts(filters);
                this.$store.dispatch('setActiveProducts', response.data.results);
                this.$store.dispatch('editFilters', filters);
                this.$store.dispatch('editActiveProdName', s);
            }
        },
        computed: mapGetters([
            'searchFilters',
            'activeProdName'
        ]),
    };
</script>

<style lang="scss">
    @import '../styles/layout/sidebar.scss';
</style>
