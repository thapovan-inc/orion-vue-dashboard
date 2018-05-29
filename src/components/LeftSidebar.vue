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

<style lang="scss" scoped>
    @import '../styles/components/sidebar.scss';
</style>
