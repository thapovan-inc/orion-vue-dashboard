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
    @import '../styles/layout/breadcrumb.scss';
</style>
