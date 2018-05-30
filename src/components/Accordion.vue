<template>
    <section class="accordion-section">
        <ul class="accordion">
            <li>
                <!--<a class="toggle collapse error" href="javascript:void(0);" v-on:click="toggle(index)" v-for="(item, index) in contents">{{item.title}}</a>-->
                <a class="toggle collapse error" href="javascript:void(0);">Signup</a>
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
        </ul>
    </section>
</template>

<!--<script>-->
    <!--export default {-->
        <!--name: 'app-accordion',-->
        <!--props: {-->
            <!--contents: {-->
                <!--type: Array,-->
                <!--default: [-->
                    <!--{-->
                        <!--title: 'Signup',-->
                        <!--msg: 'Tracing info',-->
                    <!--},-->
                <!--],-->
            <!--},-->
        <!--},-->
        <!--methods: {-->
            <!--toggle(num) {-->
                <!--if (this.$el.children[num].classList.contains('open')) {-->
                    <!--this.$el.children[num].classList.remove('open');-->
                    <!--this.$el.children[num].querySelectorAll('.inner')[0].style.display = 'none';-->
                <!--} else {-->
                    <!--const prevFaqQuestion = this.$el.querySelectorAll('.open');-->
                    <!--if (prevFaqQuestion.length !== 0) {-->
                        <!--prevFaqQuestion[0].classList.remove('open');-->
                        <!--prevFaqQuestion[0].querySelectorAll('.inner')[0].style.display = 'none';-->
                    <!--}-->
                    <!--this.$el.children[num].classList.add('open');-->
                    <!--this.$el.children[num].querySelectorAll('.inner')[0].style.display = '';-->
                <!--}-->
            <!--},-->
        <!--},-->
    <!--};-->
<!--</script>-->

<style lang="scss" scoped>
    @import '../styles/components/accordion.scss';
</style>
