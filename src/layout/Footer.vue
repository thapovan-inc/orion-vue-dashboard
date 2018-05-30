<template>
    <footer>
        <p>Copyright &copy; {{ year }} Thapovan Info Systems, Inc. All rights reserved.</p>
    </footer>
</template>

<script>
    export default {
        name: 'app-footer',
        data: () => ({
            year: new Date().getFullYear(),
        }),
    };
</script>

<style lang="scss" scoped>
    @import '../styles/layout/footer.scss';
</style>
