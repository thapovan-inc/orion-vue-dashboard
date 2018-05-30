<script>
    /* eslint-disable import/first */

    import { Scatter } from 'vue-chartjs';
    import { serverBus } from '../main';
    import zoom from 'chartjs-plugin-zoom';


    export default {
        name: 'Charts',
        data() {
            return {
                result: null
            };
        },
        created() {
            // Using the service bus
            serverBus.$on('Charts', result => {
                this.result = result;
            });
        },
        extends: Scatter,
        mounted() {
            this.addPlugin(zoom);
            this.renderChart({
                datasets: [
                    {
                        label: 'Data One',
                        backgroundColor: '#F82422',
                        data: [
                            {
                                x: 20,
                                y: 25,
                                r: 5
                            },
                            {
                                x: 40,
                                y: 10,
                                r: 10
                            },
                            {
                                x: 30,
                                y: 22,
                                r: 30
                            }
                        ]
                    },
                    {
                        label: 'Data Two',
                        backgroundColor: '#39f83b',
                        data: [
                            {
                                x: 10,
                                y: 30,
                                r: 15
                            },
                            {
                                x: 20,
                                y: 20,
                                r: 10
                            },
                            {
                                x: 15,
                                y: 8,
                                r: 30
                            }
                        ]
                    },
                    {
                        label: 'Data Three',
                        backgroundColor: '#f8e315',
                        data: [
                            {
                                x: 3,
                                y: 8,
                                r: 5
                            },
                            {
                                x: 22,
                                y: 25,
                                r: 15
                            },
                            {
                                x: 9,
                                y: 25,
                                r: 22
                            }
                        ]
                    }
                ]
            }, { responsive: true, maintainAspectRatio: false });
        },
        methods: {
            beforeOpen(resp) {
                this.users = resp.params.users;
                this.traceid = resp.params.traceid;
            }
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            // Container for pan options
            pan: {
                // Boolean to enable panning
                enabled: true,

                // Panning directions. Remove the appropriate direction to disable
                // Eg. 'y' would only allow panning in the y direction
                mode: 'xy'
            },

            // Container for zoom options
            zoom: {
                // Boolean to enable zooming
                enabled: true,

                // Zooming directions. Remove the appropriate direction to disable
                // Eg. 'y' would only allow zooming in the y direction
                mode: 'xy',
            }
        }
    };
</script>
