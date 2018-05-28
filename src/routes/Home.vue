<template>
    <!--<div class="home">-->
        <!--<div id="content">-->
            <!--<div class="right-col">-->
                <!--<div class="main-content">-->
                    <!--&lt;!&ndash;<user-info></user-info>&ndash;&gt;-->
                    <!--&lt;!&ndash;<products></products>&ndash;&gt;-->
                <!--</div>-->
            <!--</div>-->
            <!--<div class="clearfix"></div>-->
        <!--</div>-->
    <!--</div>-->
</template>

<script>
    import LeftSidebar from '@/components/LeftSidebar';
    import Products from '@/components/Products';
    import UserInfo from '@/components/UserInfo';
    import ProductsService from '@/services/ProductsService';

    export default {
        name: 'home',
        components: {
            UserInfo,
            LeftSidebar,
            Products
        },
        methods: {},
        async created() {
            const response = await ProductsService.searchProducts(this.$store.getters.searchFilters);
            this.$store.dispatch('setActiveProducts', response.data.results);
        },
    };
</script>

<style lang="scss">
</style>
