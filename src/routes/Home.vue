<template>
    <div id="orion">
        <app-header></app-header>

        <div id="content" class="active">
            <left-sidebar></left-sidebar>
            <div id="main-content">
                <div id="dashboard">
                    <SearchOrion></SearchOrion>
                    <div class="main-wrapper">
                        <section id="charts">
                            <article>
                                <charts></charts>
                            </article>
                            <article>
                                <img src="/static/img/map.jpg" alt="Map" />
                            </article>
                        </section>
                        <Breadcrumb></Breadcrumb>
                        <Accordion></Accordion>
                    </div>
                </div>
                <app-footer></app-footer>
            </div>
        </div>
    </div>
</template>

<script>
    import AppHeader from '@/layout/Header';
    import AppFooter from '@/layout/Footer';
    import LeftSidebar from '@/components/LeftSidebar';
    import SearchOrion from '@/components/SearchOrion';
    import Charts from '@/components/Charts';
    import Breadcrumb from '@/components/Breadcrumb';
    import Accordion from '@/components/Accordion';

    export default {
        name: 'app',
        components: {
            AppHeader,
            AppFooter,
            LeftSidebar,
            SearchOrion,
            Charts,
            Breadcrumb,
            Accordion,
        },
    };
</script>

<style lang="scss">
    @import '../styles/Roboto.scss';
    @import '../styles/orion.scss';
    @import '../styles/pages/dashboard.scss';
</style>
