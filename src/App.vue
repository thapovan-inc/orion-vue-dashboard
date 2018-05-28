<template>
    <div class="app">
        <div id="orion">
            <app-header></app-header>

            <div id="content" class="active">
                <left-sidebar></left-sidebar>
                <div id="main-content">
                    <div id="dashboard">
                        <SearchOrion></SearchOrion>
                        <div class="main-wrapper">
                            <charts></charts>
                            <Breadcrumb></Breadcrumb>
                            <Accordion></Accordion>
                        </div>
                    </div>
                </div>
                <transition>
                    <router-view></router-view>
                </transition>
                <app-footer></app-footer>
            </div>
        </div>
    </div>
</template>

<script>
    import AppHeader from '@/components/Header';
    import AppFooter from '@/components/Footer';
    import LeftSidebar from '@/components/LeftSidebar';
    import SearchOrion from '@/components/SearchOrion';
    import charts from '@/components/charts';
    import Breadcrumb from '@/components/Breadcrumb';
    import Accordion from '@/components/Accordion';

    export default {
        name: 'app',
        components: {
            AppHeader,
            AppFooter,
            LeftSidebar,
            SearchOrion,
            charts,
            Breadcrumb,
            Accordion,
        },
    };
</script>

<style lang="scss">
    @import url('https://www.palassets.com/fonts/Roboto.css');
    @import url('https://www.palassets.com/web/responsive/css/select2-3.4.3.css');
    @import 'styles/common';
    @import 'styles/content';
    @import 'styles/virtual-terminal';
    @import 'styles/header.scss';
    @import 'styles/orion.scss';
    @import 'styles/pages/dashboard.scss';

    .icon-cart {
        display: inline-block;
        background: transparent url(/static/img/icon-cart.png) no-repeat;
        width: 25px;
        height: 19px;
    }

    .count {
        display: inline-block;
        background-color: #ff745f;
        border-radius: 100%;
        font-size: 12px;
        font-weight: 500;
        line-height: 16px;
        position: absolute;
        top: -15px;
        right: -15px;
        text-align: center;
        padding: 2px 5px;
        min-width: 10px;
    }
</style>
