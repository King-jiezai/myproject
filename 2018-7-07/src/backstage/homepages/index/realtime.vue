






<style scoped>

    .realtime {
        position: relative;
    }
    #myChart {
        width: 550px;
        height: 400px;
    }
    .zin {
        font-size: 14px;
        position: absolute;
        top: 30px;
        left: 178px;
    }
    .realtime-re {
        position: absolute;
        top: 0;
        left: 400px;
        cursor: pointer;
    }
    .realtime-re .sp1 {
        font-size: 14px;
    }
    .icon {
        position: relative;
        top: 1px;
        left: 5px;
    }
    .ss {
        text-align: center;
        padding: 2px 13px;
    }
    .ss:hover {
        background: #EEE;
    }
    .pics {
        position: absolute;
        top: 43px;
        left: 0px;
    }

</style>

<template>

    <div class="realtime">
    	
        <div id="myChart"></div>

        <div class="zin">更新时间：2018-6-27 14:20:60</div>

        <div class="realtime-re">
            <span class="sp1" @click='time'>实时<Icon class='icon' type="chevron-down"></Icon></span>
            
            <div class="tims" v-show='so'>
                <div class="ss" v-for='(item, index) in res' @click='lis(index)'>{{item.fon}}</div>
            </div>

            <div class="pics" v-show='ss'>
                <DatePicker type="date" :disabled="true" :options='options2' @on-change='onchan'></DatePicker>
            </div>
        </div>

    </div>

</template>

<script>

    // 引入基本模板
    let echarts = require('echarts/lib/echarts')
    // 引入柱状图组件
    require('echarts/lib/chart/Line')
    // 引入提示框和title组件
    require('echarts/lib/component/tooltip')
    require('echarts/lib/component/title'  )
    require('echarts/lib/component/legend' )

    import { Icon, DatePicker } from 'iview'

    export default {

        components : {

            Icon,
            DatePicker,

        },

        data () {

            return {

                oop : ['6.27','6.28','6.29','6.30','7.01','7.02','7.03'],

                oos : [5, 30, 20, 20, 40, 0, 50],

                oob : [10, 110, 30, 50, 50, 80, 20],

                so  : false,

                ss  : false,

                res : [{
                    fon : '实时'
                },{
                    fon : '日'
                }],

                options2: {
                    disabledDate (date) {
                        let initdate = new Date()+1 - 86400000
                        return (date && date.valueOf() > initdate) || (date && date.valueOf() >= new Date())
                    }
                },

                os : '',
                ts : '',
                rs : '',
                fs : '',
                vs : '',
                ss : '',
                es : ''

            }

        },

        methods : {

            lis (index) {

                if (this.res[index].fon == '实时') {

                    let myChart = echarts.init(document.getElementById('myChart'))

                    myChart.setOption({
                        xAxis: {
                            data: ['04:00','05:00','06:00','07:00','08:00','9:00','10:00']
                        },
                        series: [{
                            data: [5, 30, 20, 20, 40, 0, 30]
                        },{
                            data: [50, 80, 30, 60, 50, 80, 100]
                        }]
                    })

                }

            },

            onchan (index) {

                var dd = new Date(index);
                dd.setDate(dd.getDate()-1);
                var y = dd.getFullYear(); 
                var m = dd.getMonth()+1;//获取当前月份的日期 
                var d = dd.getDate(); 
                this.os = y+"-"+m+"-"+d;

                var dd = new Date(this.os);
                dd.setDate(dd.getDate()-1);
                var y = dd.getFullYear(); 
                var m = dd.getMonth()+1;//获取当前月份的日期 
                var d = dd.getDate(); 
                this.ts = y+"-"+m+"-"+d;

                var dd = new Date(this.ts);
                dd.setDate(dd.getDate()-1);
                var y = dd.getFullYear(); 
                var m = dd.getMonth()+1;//获取当前月份的日期 
                var d = dd.getDate(); 
                this.rs = y+"-"+m+"-"+d;

                var dd = new Date(this.rs);
                dd.setDate(dd.getDate()-1);
                var y = dd.getFullYear(); 
                var m = dd.getMonth()+1;//获取当前月份的日期 
                var d = dd.getDate(); 
                this.fs = y+"-"+m+"-"+d;

                let myChart = echarts.init(document.getElementById('myChart'))

                myChart.setOption({
                    xAxis: {
                        data: ['6.27', '6.28', this.fs, this.rs, this.ts, this.os, index]
                    },
                    series: [{
                        data: [5, 10, 20, 30, 40, 10, 70]
                    },{
                        data: [50, 20, 30, 60, 10, 30, 50]
                    }]
                })

            },

            time () {

                this.so = !this.so

                this.ss = !this.ss

            },

            drawLine(){
                // 基于准备好的dom，初始化echarts实例
                let myChart = echarts.init(document.getElementById('myChart'))
                // 绘制图表
                myChart.setOption({
                    title: {
                        text: '实时榜单',
                        subtext: '',
                        textStyle: {
                            fontSize: 18,
                            fontWeight: 'normal',
                            color: '#000'
                        },
                        subtextStyle: {
                            color: '#666',
                            align: 'center'
                        }
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['客流量','支付笔数']
                    },
                    xAxis:  {
                        type: 'category',
                        boundaryGap: false,
                        data: this.oop
                    },
                    yAxis: {
                        type: 'value',
                        axisLabel: {
                            formatter: '{value}'
                        }
                    },
                    series: [
                        {
                            name:'客流量',
                            type:'line',
                            itemStyle : {
                                normal : {
                                    color:'#298FFD',
                                    lineStyle:{
                                        color:'#298FFD'
                                    }
                                }
                            },
                            data: this.oos
                        },
                        {
                            name:'支付笔数',
                            type:'line',
                            itemStyle : {
                                normal : {
                                    color:'#35C35F',
                                    lineStyle:{
                                        color:'#35C35F'
                                    }
                                }
                            },
                            data: this.oob
                        }
                    ]
                })

            }

        },

        created () {

        },

        mounted () {

            this.drawLine();

        }

    }

</script>
