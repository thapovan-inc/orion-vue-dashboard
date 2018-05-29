<script>
    import { Scatter } from 'vue-chartjs';

    export default {
        extends: Scatter,
        mounted() {
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
        }
    };
</script>
