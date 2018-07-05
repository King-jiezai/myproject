



<style scoped>


   .realtimes {
        float: left;
        width: 400px;
        overflow: hidden;
        box-shadow:0px 2px  1px 1px #ccc;
    }
    #myCharts {
        width: 400px;
        height: 350px;
        float: left;
    }
    .access {
        float: left;
        width: 400px;
        height: 50px;
        background: #F54337;
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
        margin-top: 20px;
        margin-right: 20px;
    }

</style>

<template>

     <div class="realtimes">
         <div class="access">
            <p>地区占比排行</p>
            <Icon type="chevron-right" class="chevs"></Icon>
        </div>
        <div id="myCharts"></div>

    </div>

</template>

<script>

     // 引入基本模板
    let echarts = require('echarts/lib/echarts')
    // 引入柱状图组件
    require('echarts/lib/chart/Pie');
    // 引入提示框和title组件
    require('echarts/lib/component/tooltip')
    require('echarts/lib/component/title'  )
    require('echarts/lib/component/legend' )

    import { Icon } from 'iview'

    export default {

        components : {
      
            Icon
        },

        data () {

            return {

                res1 : 12000,
                res2 : 6948,
                res3 : 7215,
                res4 : 8522,
                res5 : 12543,
             
            }
            
        },

        computed : {

        },

        methods : {

            drawLine () {

                var myCharts = echarts.init(document.getElementById('myCharts'))

                myCharts.setOption({
                        tooltip: {
                            trigger: 'item',
                            formatter: "{a} <br/>{b}: {c} ({d}%)",

                        },

                        legend: {
                            orient: 'vertical',
                            x: 'right',
                            left:300,
                            top:110,
                            data:[{
                                    name:'广东',
                                    textStyle:{color:'#0367A5'}
                                },{
                                    name:'北京',
                                    textStyle:{color:'#D93D4A'}
                                },{
                                    name:'上海',
                                    textStyle:{color:'#0DB3D9'}
                                },{
                                    name:'安徽',
                                    textStyle:{color:'#F29422'}
                                },{
                                    name:'其他',
                                    textStyle:{color:'#F2CB04'}
                                }]
                        },

                        series: [
                            {
                                name:'访问来源',
                                type:'pie',
                                selectedMode: 'single',
                                radius: [0, '60%'],
                                center:['35%','50%'],

                                label: {
                                    normal: {
                                        formatter: ' {d}%',
                                        position: 'inner',
                                         textStyle : {                   
                                            align : 'center',
                                            baseline : 'middle',
                                            fontFamily : '微软雅黑',
                                            fontSize : 13,
                                            fontWeight : 'bolder'
                                         }
                                    }
                                },
                                labelLine: {
                                    normal: {
                                        show: true
                                    }
                                },
                                data:[
                                    {value:this.res1, name:'广东',itemStyle:{color:'#0367A5'}},
                                    {value:this.res2, name:'北京',itemStyle:{color:'#D93D4A'}},
                                    {value:this.res3, name:'上海',itemStyle:{color:'#0DB3D9'}},
                                    {value:this.res4, name:'安徽',itemStyle:{color:'#F29422'}},
                                    {value:this.res5, name:'其他',itemStyle:{color:'#F2CB04'}}
                                ],
                            },
                            
                        ]
                })

            }


        },

        created () {

            
        },

        mounted () {

            this.drawLine()

        }

    }

</script>
