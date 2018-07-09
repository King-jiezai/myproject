



<style scoped>

    .body {
        float: left;
        width: 400px;
        overflow:hidden;      
        box-shadow:0px 2px  1px 1px #ccc;
    }

    #main {
        width: 400px;
        height: 350px;
        float: left;
    }
    .access {
        float: left;
        width: 400px;
        height: 50px;
        background: #00BBD4;
        line-height: 50px;
        color: #fff;
       
    }
    .access p {
        float: left;
        font-size: 16px;
        margin-left: 20px;
    }
    .chevs {
        float: right;
        margin-top: 15px;
        margin-right: 20px;
    }

</style>

<template>

    <div class="body">
        <div class="access">
            <p @click="oo">网站访问</p>
            <Icon type="chevron-right" class="chevs"></Icon>
        </div>
        <div id='main'></div>

    </div>

</template>

<script>

    // 引入 ECharts 主模块
    var echarts = require('echarts/lib/echarts');
    // 引入柱状图
    require('echarts/lib/chart/bar');
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

                res : [6000, 6000, 5200, 2334, 3390, 4330, 7220],

                reg : ['Mon','Tuh','Wed','Thu','Fir','Sta','Sun']


             
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
                    color: ['#3398DB'],
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data :this.reg,
                            axisTick: {
                                alignWithLabel: true
                            }
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'网站访问',
                            type:'bar',
                            radius: [0, '50%'],
                            center:['35%','50%'],
                            barWidth: '60%',
                            data: this.res 
                        }
                    ]
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
