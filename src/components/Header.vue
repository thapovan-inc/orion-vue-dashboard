<template>
    <header>
        <div class="left-col">
            <div class="logo">
                <div class="orion-logo">Orion<span>Tracing tool</span></div>
            </div>
            <button type="button" class="toggle-icon" id="sidebarCollapse">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
        <div class="right-col">
            <div class="user-details">
                <div class="user-info">
                    <p>Welcome {{ user }}</p>
                    <p>Monday, 10th May</p>
                </div>
                <div class="thumb">
                    <img src="/static/img/avatar.png" alt="Vaidy" />
                </div>
            </div>
            <div class="search-container">
                <div class="search">
                    <input type="text" name="search" value="Lookup by Trace ID..." />
                    <a href="javascript:void(0)" class="icon-search"></a>
                </div>
            </div>
        </div>
    </header>
</template>
<script>

    import axios from 'axios';


    export default {
        name: 'app-header',
        data: () => ({
//            user: 'Santhosh',
//            day: new Date().getDay(),
//            month: new Date().getMonth()
            user: ''
        }),
        mounted() {
            axios.get('https://jsonplaceholder.typicode.com/posts/1').then(response => {
                this.user = response.data.userId;
            })
                .catch(error => {
                    console.log(error);
                });
        },
    };
</script>

<style lang="scss">
    @import '../styles/layout/header.scss';
</style>
