<template>
    <div id="search-section">
        <div class="page-title">
            <h2><i class="icon-dashboard"></i> Dashboard</h2>
        </div>
        <div class="search-filters">
            <div class="label">Filter By</div>
            <div class="checkbox">
                <input name="filterby" id="passed" type="checkbox">
                <label for="passed">Passed</label>
            </div>
            <div class="checkbox">
                <input name="filterby" id="slow" type="checkbox">
                <label for="slow">Slow</label>
            </div>
            <div class="checkbox">
                <input name="filterby" id="failed" type="checkbox">
                <label for="failed">Failed</label>
            </div>
            <div class="form-group">
                <input type="text" name="location" value="Location" />
                <input type="text" name="ip" value="IP" />
                <input type="text" name="date" value="Date" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '../styles/components/search.scss';
</style>
