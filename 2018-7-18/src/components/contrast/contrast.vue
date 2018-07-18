







<style scoped>

    .contrast {
        position: relative;
    }
    .contrast-bottom {
        width: 100%;
        height: 100%;
        border-top: 2px solid #000;
        background: #fff;
        position: relative;
        z-index: 1;
    }
    .box {
        width: 1200px;
        margin: 0 auto;
    }
    .obs-top {
        padding: 10px 0;
        border-bottom: 1px dashed #575757;
    }
    .obs-top .sp {
        padding: 2px;
        background: #e60012;
        margin-right: 10px;
    }
    .obs-top span {
        font-size: 15px;
        color: #434444;
        margin-right: 5px;
    }
    .obs-bottom .fos {
        height: 98px;
        color: #1b1b1b;
        text-align: center;
        padding-top: 30px;
    }
    .fos span {
        font-size: 26px;
    }
    .fos p {
        font-size: 11px;
    }
    .fsl-left {
        width: 984px;
        overflow: hidden;
        border-left: 1px solid #ccc;
        border-top: 1px solid #ccc;
        margin-right: 12px;
        background: #fff;
        float: left;
        position: relative;
    }
    .mix {
        float: left;
    }
    .mixs {
        float: left;
        position: relative;
        z-index: 1;
    }
    .mixs:nth-child(odd) {
        background: #f2fefc;
    }
    .mixs:nth-child(even) {
        background: #fef6ec;
    }
    .mixss {
        float: left;
        position: relative;
        z-index: 1;
    }
    .mixss:nth-child(even) {
        background: #f2fefc;
    }
    .mixss:nth-child(odd) {
        background: #fef6ec;
    }
    .fsl-left .pic {
        width: 158px;
        height: 39px;
        text-align: right;
        line-height: 39px;
        font-size: 18px;
        color: #1b1b1b;
        padding: 0 32px;
    }
    .fs {
        border-right: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
    }
    .fo {
        width: 158px;
        height: 256px;
        text-align: center;
        line-height: 256px;
        font-size: 24px;
        color: #353535;
    }
    .oos {
        width: 275px;
        height: 256px;
        text-align: center;
    }
    .oos img {
        margin-top: 39px;
    }
    .oos p {
        font-size: 24px;
        margin-top: 5px;
    }
    .pics {
        width: 275px;
        height: 39px;
        font-size: 16px;
        color: #434444;
        line-height: 39px;
        text-align: left;
        padding: 0 20px;
    }
    .boxs {
        position: absolute;
        left: 158px;
        z-index: 0;
    }
    .mixss .mo {
        font-size: 24px;
        color: #ccc;
    }
    .mixss .po {
        font-size: 18px;
        color: #e60012;
        cursor: pointer;
    }
    .fsl-right {
        width: 204px;
        height: 735px;
        border: 1px solid #ccc;
        float: right;
    }
    .recom {
        height: 39px;
        line-height: 39px;
        text-align: center;
        color: #fff;
        font-size: 16px;
        background: #d2d2d2;
    }
    .pos {
        height: 232px;
        text-align: center;
        border-bottom: 2px dotted #ccc;
    }
    .pos:last-child {
        border-bottom: 0;
    }
    .pos .p {
        font-size: 18px;
        padding: 35px 0 5px;
    }
    .boxs .oo {
        padding-top: 110px;
    }

</style>

<template>

    <div class="contrast">
        <div class="contrast-top">
            <zlsp-hear></zlsp-hear>
        </div>

        <div class="contrast-bottom">
            <div class="box">
                <div class="obs-top">
                    <span class="sp"></span>

                    <router-link to='/'>
                        <span>广租首页</span>
                    </router-link>

                    <span>></span>

                    <router-link to='/zlsp'>
                        <span>租赁频道</span>
                    </router-link>

                    <span>></span>
                    <span>笔记本</span>
                </div>

                <div class="obs-bottom">
                    <div class="fos">
                        <span>基本信息对比</span>
                        <p>Comparison of basic information</p>
                    </div>

                    <div class="fsl">
                        <div class="fsl-left">
                            <div class="mix">
                                <div class="fo fs">
                                    <p>商品信息</p>
                                </div>

                                <div class="pic fs" v-for='item in res'>{{item}}</div>
                            </div>

                            <div class="mixs" v-for='(item, index) in reo'>
                                <div class="oos fs">
                                    <span><img :src="item.img"></span>
                                    <p>{{item.pop}}</p>
                                </div>

                                <div class="pics fs" v-for='item in item.bos'>
                                    <span>{{item}}</span>
                                </div>
                            </div>

                            <div class="boxs">
                                <div class="mixss" v-for='(item, index) in roo'>
                                    <div class="oos fs oo">
                                        <span class="mo">{{item.img}}</span>
                                        <p class="po" @click='lis(index)'>{{item.pop}}</p>
                                    </div>

                                    <div class="pics fs" v-for='item in item.bos'>
                                        <span>{{item.bos}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="fsl-right">
                            <div class="recom">
                                <span>相关推荐</span>
                            </div>

                            <div class="pos" v-for='(item, index) in obs'>
                                <p class="p">{{item.fon}}</p>

                                <contrast-os :fsl='item.fsl'></contrast-os>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

    import zlspHear   from '@/components/public/zlsp-hear.vue'
    import contrastOs from './index/contrast-os.vue'

    export default {

        components : {

            zlspHear  ,
            contrastOs,

        },

        data () {

            return {

                res : ['价格',  '品牌', '上市时间', '缓存', '显卡', '硬盘容量', '内存容量',
                    '内存类型', '处理器', 'Cpu 型号', '主频', '机型大小', '外形尺寸', '屏幕比例',
                    '屏幕尺寸', '屏幕分辨率', '光驱', '产品定位', '适用场景'
                ],

                reo : [{
                    img : '../../../static/images/com/x230.png',
                    pop : 'ThinkPad X230',
                    bos : ['519', 'ThinkPad X230', '2012-6', '3MB', 'Intel GMA HD 4000', '500GB',
                        '16GB', 'DDR3 1600MHz', '英特尔', 'Intel 酷睿 i5 3320M', '2.6GHz', '1.5Kg',
                        '长度305mm 宽度206.5mm', '16:9', '12.5英寸', '1366*768', '无内置光驱',
                        '轻薄便携本，商务办公本', '商务办公、日常学习、游戏娱乐'
                    ]
                },{
                    img : '../../../static/images/com/250.png',
                    pop : 'ThinkPad X250',
                    bos : ['519', 'ThinkPad X230', '2012-6', '3MB', 'Intel GMA HD 4000', '500GB',
                        '16GB', 'DDR3 1600MHz', '英特尔', 'Intel 酷睿 i5 3320M', '2.6GHz', '1.5Kg',
                        '长度305mm 宽度206.5mm', '16:9', '12.5英寸', '1366*768', '无内置光驱',
                        '轻薄便携本，商务办公本', '商务办公、日常学习、游戏娱乐'
                    ]
                }],

                roo : [{
                    img : '暂无对比项',
                    pop : '添加',
                    bos : ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
                },{
                    img : '暂无对比项',
                    pop : '添加',
                    bos : ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
                },{
                    img : '暂无对比项',
                    pop : '添加',
                    bos : ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
                }],

                obs : [{
                    fon : '办公电脑',
                    fsl : [{
                        img : '../../../static/images/com/rec-1.png',
                        fon : 'ThinkPad T440'
                    },{
                        img : '../../../static/images/com/rec-2.png',
                        fon : 'ThinkPad T450'
                    }]
                },{
                    fon : '出差办公',
                    fsl : [{
                        img : '../../../static/images/com/rec-2.png',
                        fon : 'ThinkPad X230'
                    },{
                        img : '../../../static/images/com/rec-1.png',
                        fon : 'ThinkPad X240'
                    }]
                },{
                    fon : '游戏娱乐',
                    fsl : [{
                        img : '../../../static/images/com/rec-2.png',
                        fon : 'ThinkPad W530'
                    },{
                        img : '../../../static/images/com/rec-1.png',
                        fon : 'ThinkPad W540'
                    }]
                }]

            }

        },

        computed : {

        },

        watch : {

        },

        methods : {

            lis (index) {
                this.$router.push('bjb?pid='+true)
            }

        },

        created () {
            
        },

        mounted () {

        }

    }

</script>
