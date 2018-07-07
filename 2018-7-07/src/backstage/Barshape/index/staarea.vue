



<style scoped>

    #main {
        width: 490px;
        height: 435px;
        float: left;
    }

</style>

<template>

    <div class="body">
    
        <div id='main'></div>

    </div>

</template>

<script>

    // 引入 ECharts 主模块
    var echarts = require('echarts/lib/echarts');
    // 引入柱状图
    require('echarts/lib/chart/line');
    // 引入提示框和标题组件
    require('echarts/lib/component/tooltip');

    require('echarts/lib/component/title');

    import { Icon } from 'iview'

    export default {

        components : {
      
            Icon
        },

        data () {

            return {          

             
            }
            
        },

        computed : {

        },

        methods : {

             oo () {
                this.res = [0, 6000, 5200, 2334, 3390, 4330, 7220]
               
                console.log(this.res)
            },

            drawLine () {

                var myChart = echarts.init(document.getElementById('main'))

                myChart.setOption({

                    tooltip : {
                        trigger: 'axis',
                            axisPointer: {
                                type: 'cross',
                                label: {
                                    backgroundColor: '#6a7985'
                            }
                        }
                    },
                        legend: {
                            data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
                        },

                        toolbox: {
                            feature: {
                                saveAsImage: {}
                            }
                        },

                        grid: {
                            left: '30%',
                            right: '20%',
                            bottom: '60%',
                            containLabel: true
                        },

                        xAxis : [{
                            type : 'category',
                            boundaryGap : false,
                            data : ['周一','周二','周三','周四','周五','周六','周日']
                        }],

                        yAxis : [{
                            type : 'value'
                        }],

                        series : [{
                                name:'直接访问',
                                type:'line',
                                stack: '总量',
                                areaStyle: {normal: {color:'yellow'}},
                                itemStyle : {
                                    normal : {
                                    color:'red',
                                    lineStyle:{
                                    color:'#298FFD',
                                    width:3
                                    }
                                }
                            },
                                data:[320, 332, 301, 334, 390, 330, 320]
                        },]
                    })

                },
        },

        created () {

            
        },

        mounted () {

            this.drawLine()

        }

    }

</script>
