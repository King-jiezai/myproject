







<style scoped>

    .comclass {
        position: relative;
    }
    .comclass-bottom {
        width: 100%;
        height: 100%;
        border-top: 2px solid #000;
        background: #fff;
        position: relative;
        z-index: 1;
    }
    .comclass-cen {
        width: 1200px;
        padding-bottom: 38px;
        margin: 0 auto 35px;
    }
    .obs-top {
        padding: 35px 0 20px 0;
    }
    .obs-top span {
        font-size: 15px;
        color: #999;
        margin-right: 5px;
    }
    .obs-cen {
        width: 1200px;
        height: 36px;
        color: #000;
        font-size: 13px;
        line-height: 36px;
        background: #eee;
        padding: 0 10px;
    }
    .obs-bottom {
        position: relative;
    }
    .comclass-box {
        width: 1200px;
        overflow: hidden;
        background: #fff;
        margin: 0 auto;
    }
    .mos-left {
        float: left;
        margin-right: 10px;
    }
    .mos-right {
        width: 992px;
        float: left;
    }
    .tos-top {
        width: 992px;
        height: 34px;
        background: #eee;
        padding: 0 10px;
        margin-bottom: 10px;
    }
    .tos-cen {
        overflow: hidden;
    }
    .tos-bottom {
        width: 992px;
        height: 30px;
        margin: 30px 0;
    }
    .tos-rig {
        float: right;
    }
    .comclass-browse {
        width: 100%;
        height: 200px;
        margin-bottom: 15px;
    }
    .comclass-foor {
        padding-bottom: 50px;
        background: #fafafa;
    }
    .comclass-foor .heas {
        border-bottom: 1px solid #666;
    }

</style>

<template>

    <div class="comclass">
        <div class="comclass-top">
            <zlsp-hear></zlsp-hear>
        </div>

        <div class="comclass-bottom">
            <zlsp-hot :res='res'></zlsp-hot>

            <div class="comclass-cen">
                <div class="obs-top">
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

                <div class="obs-cen">
                    <div>
                        <span>租赁筛选</span>
                        <span>></span>
                    </div>
                </div>

                <div class="obs-bottom">
                    <zlsp-screen :pos='pos' :reo='reo'></zlsp-screen>
                </div>
            </div>

            <div class="comclass-box">
                <div class="mos-left">
                    <zlsp-week :oob='oob'></zlsp-week>
                </div>

                <div class="mos-right">
                    <div class="tos-top">
                        <zlsp-com :lis='lis'></zlsp-com>
                    </div>

                    <div class="tos-cen">
                        <zlsp-box :oop='oop'></zlsp-box>
                    </div>

                    <div class="tos-bottom">
                        <div class="tos-rig">
                            <zlsp-page></zlsp-page>
                        </div>
                    </div>
                </div>
            </div>

            <div class="comclass-browse">
                <zlsp-lately :bow='bow'></zlsp-lately>
            </div>

            <div class="comclass-foor">
                <div class="heas">
                    <tail-hear></tail-hear>
                </div>

                <tail-foor></tail-foor>
            </div>
        </div>
    </div>

</template>

<script>

    import zlspHear   from '@/components/public/zlsp-hear.vue'
    import zlspPage   from '@/components/public/zlsp-page.vue'
    import zlspScreen from '@/components/zlsp-public/zlsp-screen.vue'
    import zlspCom    from '@/components/zlsp-public/zlsp-com.vue'
    import zlspLately from '@/components/zlsp-public/zlsp-lately.vue'
    import zlspHot    from '@/components/zlsp-public/zlsp-hot.vue'
    import zlspWeek   from '@/components/zlsp-public/zlsp-week.vue'
    import zlspBox    from '@/components/zlsp-public/zlsp-box.vue'
    import tailHear   from '@/components/public/tail-hear.vue'
    import tailFoor   from '@/components/public/tail-foor.vue'

    export default {

        components : {

            zlspHear  ,
            zlspHot   ,
            zlspWeek  ,
            zlspBox   ,
            tailHear  ,
            tailFoor  ,
            zlspScreen,
            zlspCom   ,
            zlspPage  ,
            zlspLately,

        },

        data () {

            return {

                res : [{
                    id  : '1',
                    img : '../../../static/images/comclass/T420.jpg',
                    spn : 'ThinkPad T420 14.0英寸商务笔记本出租(Core i5/4G内存/320G机械 HD',
                    pos : '￥100/天',
                    poo : '立即租赁'
                },{
                    id  : '2',
                    img : '../../../static/images/comclass/T420.jpg',
                    spn : 'ThinkPad T420 14.0英寸商务笔记本出租(Core i5/4G内存/320G机械 HD',
                    pos : '￥100/天',
                    poo : '立即租赁'
                },{
                    id  : '3',
                    img : '../../../static/images/comclass/T420.jpg',
                    spn : 'ThinkPad T420 14.0英寸商务笔记本出租(Core i5/4G内存/320G机械 HD',
                    pos : '￥100/天',
                    poo : '立即租赁'
                },{
                    id  : '4',
                    img : '../../../static/images/comclass/T420.jpg',
                    spn : 'ThinkPad T420 14.0英寸商务笔记本出租(Core i5/4G内存/320G机械 HD',
                    pos : '￥100/天',
                    poo : '立即租赁'
                }],

                reo : [{
                    img : '../../../static/images/comclass/logo4.png',
                    zin : 'ThinkPad'
                },{
                    img : '../../../static/images/comclass/logo3.jpg',
                    zin : 'Lenovo'
                },{
                    img : '../../../static/images/comclass/logo6.jpg',
                    zin : 'Apple'
                },{
                    img : '../../../static/images/comclass/logo.jpg',
                    zin : 'HP'
                },{
                    img : '../../../static/images/comclass/logo8.jpg',
                    zin : 'Dell'
                },{
                    img : '../../../static/images/comclass/logo2.jpg',
                    zin : 'MI'
                },{
                    img : '../../../static/images/comclass/logo7.jpg',
                    zin : 'HUAWEI'
                },{
                    img : '../../../static/images/comclass/logo5.jpg',
                    zin : 'Microsoft'
                }],

                pos : [{
                    ooo : '租金：',
                    fon : ['不限', '0-99元', '100-199元', '200-299元', '300-399元']
                },{
                    ooo : '便捷租赁：',
                    fon : ['不限', '商务办公', '出差办公', '轻薄便携', '图形工作', '网站设计开发']
                },{
                    ooo : '新旧属性：',
                    fon : ['不限', '全新设备', '非全新设备']
                },{
                    ooo : '屏幕尺寸：',
                    fon : ['不限', '11.6英寸', '12.5英寸', '14英寸', '15.6英寸', '17.3英寸', '其他']
                },{
                    ooo : '分辨率：',
                    fon : ['不限', '1366*768', '1600*900', '1920*1080']
                },{
                    ooo : '处理器：',
                    fon : ['不限', 'i3系列', 'i5系列', 'i7系列', '其他']
                },{
                    ooo : '显卡：',
                    fon : ['不限', '集成显卡', '双显卡', '独立显卡', '1G独立显卡', '2G独立显卡']
                },{
                    ooo : '内存：',
                    fon : ['不限', '2G', '4G', '8G', '16G', '32G']
                },{
                    ooo : '硬盘：',
                    fon : ['不限', '320G', '500G', '1TB', '128固态', '256固态', '128G+500G', '256G+500G', '128G+1TB']
                }],

                bow : [{
                    img : '../../../static/images/comclass-2/browse.jpg',
                    num : '￥3.9/天',
                    ino : 'Thinkpad X240 12英寸商务超极本租赁（Core m4 处理器'
                },{
                    img : '../../../static/images/comclass-2/browse.jpg',
                    num : '￥3.9/天',
                    ino : 'Thinkpad X240 12英寸商务超极本租赁（Core m4 处理器'
                },{
                    img : '../../../static/images/comclass-2/browse.jpg',
                    num : '￥3.9/天',
                    ino : 'Thinkpad X240 12英寸商务超极本租赁（Core m4 处理器'
                },{
                    img : '../../../static/images/comclass-2/browse.jpg',
                    num : '￥3.9/天',
                    ino : 'Thinkpad X240 12英寸商务超极本租赁（Core m4 处理器'
                },{
                    img : '../../../static/images/comclass-2/browse.jpg',
                    num : '￥3.9/天',
                    ino : 'Thinkpad X240 12英寸商务超极本租赁（Core m4 处理器'
                },{
                    img : '../../../static/images/comclass-2/browse.jpg',
                    num : '￥3.9/天',
                    ino : 'Thinkpad X240 12英寸商务超极本租赁（Core m4 处理器'
                }],

                oob : [{
                    mos : 'MacBook Air13.3英寸笔记本租赁',
                    ooo : '../../../static/images/comclass-2/fen_7.png',
                    fon : '1',
                    img : '../../../static/images/comclass-2/list.jpg',
                    zen : 'MacBook Air13.3英寸笔记本租赁',
                    num : '￥8.8/天'
                },{
                    mos : 'MacBook Air13.3英寸笔记本租赁',
                    ooo : '../../../static/images/comclass-2/fen_7.png',
                    fon : '2',
                    img : '../../../static/images/comclass-2/list.jpg',
                    zen : 'MacBook Air13.3英寸笔记本租赁',
                    num : '￥8.8/天'
                },{
                    mos : 'MacBook Air13.3英寸笔记本租赁',
                    ooo : '../../../static/images/comclass-2/fen_7.png',
                    fon : '3',
                    img : '../../../static/images/comclass-2/list.jpg',
                    zen : 'MacBook Air13.3英寸笔记本租赁',
                    num : '￥8.8/天'
                },{
                    mos : 'MacBook Air13.3英寸笔记本租赁',
                    ooo : '../../../static/images/comclass-2/fen_6.png',
                    fon : '4',
                    img : '../../../static/images/comclass-2/list.jpg',
                    zen : 'MacBook Air13.3英寸笔记本租赁',
                    num : '￥8.8/天'
                },{
                    mos : 'MacBook Air13.3英寸笔记本租赁',
                    ooo : '../../../static/images/comclass-2/fen_6.png',
                    fon : '5',
                    img : '../../../static/images/comclass-2/list.jpg',
                    zen : 'MacBook Air13.3英寸笔记本租赁',
                    num : '￥8.8/天'
                },{
                    mos : 'MacBook Air13.3英寸笔记本租赁',
                    ooo : '../../../static/images/comclass-2/fen_6.png',
                    fon : '6',
                    img : '../../../static/images/comclass-2/list.jpg',
                    zen : 'MacBook Air13.3英寸笔记本租赁',
                    num : '￥8.8/天'
                }],

                lis : ['综合', '销量', '新品', '价格'],

                oop : [{
                    img : '../../../static/images/comclass-2/X240.jpg',
                    num : '￥3.0/天',
                    ino : 'Thinkpad X240 12英寸商务超极本租赁（Core m4 处理器',
                    ims : '../../../static/images/comclass-2/fen_1.png',
                    fon : '已有',
                    nub : '1000',
                    fos : '人评价',
                    reo : [{
                        img : '../../../static/images/comclass-2/fen_2.png',
                        ims : '../../../static/images/comclass-2/fen_2_1.png'
                    },{
                        img : '../../../static/images/comclass-2/fen_3.png',
                        ims : '../../../static/images/comclass-2/fen_3_1.png'
                    },{
                        img : '../../../static/images/comclass-2/fen_4.png',
                        ims : '../../../static/images/comclass-2/fen_4_1.png'
                    },{
                        img : '../../../static/images/comclass-2/fen_5.png',
                        ims : '../../../static/images/comclass-2/fen_5_1.png'
                    }]
                },{
                    img : '../../../static/images/comclass-2/X240.jpg',
                    num : '￥3.1/天',
                    ino : 'Thinkpad X240 12英寸商务超极本租赁（Core m4 处理器',
                    ims : '../../../static/images/comclass-2/fen_1.png',
                    fon : '已有',
                    nub : '1000',
                    fos : '人评价',
                    reo : [{
                        img : '../../../static/images/comclass-2/fen_2.png',
                        ims : '../../../static/images/comclass-2/fen_2_1.png'
                    },{
                        img : '../../../static/images/comclass-2/fen_3.png',
                        ims : '../../../static/images/comclass-2/fen_3_1.png'
                    },{
                        img : '../../../static/images/comclass-2/fen_4.png',
                        ims : '../../../static/images/comclass-2/fen_4_1.png'
                    },{
                        img : '../../../static/images/comclass-2/fen_5.png',
                        ims : '../../../static/images/comclass-2/fen_5_1.png'
                    }]
                },{
                    img : '../../../static/images/comclass-2/X240.jpg',
                    num : '￥3.2/天',
                    ino : 'Thinkpad X240 12英寸商务超极本租赁（Core m4 处理器',
                    ims : '../../../static/images/comclass-2/fen_1.png',
                    fon : '已有',
                    nub : '1000',
                    fos : '人评价',
                    reo : [{
                        img : '../../../static/images/comclass-2/fen_2.png',
                        ims : '../../../static/images/comclass-2/fen_2_1.png'
                    },{
                        img : '../../../static/images/comclass-2/fen_3.png',
                        ims : '../../../static/images/comclass-2/fen_3_1.png'
                    },{
                        img : '../../../static/images/comclass-2/fen_4.png',
                        ims : '../../../static/images/comclass-2/fen_4_1.png'
                    },{
                        img : '../../../static/images/comclass-2/fen_5.png',
                        ims : '../../../static/images/comclass-2/fen_5_1.png'
                    }]
                },{
                    img : '../../../static/images/comclass-2/X240.jpg',
                    num : '￥3.3/天',
                    ino : 'Thinkpad X240 12英寸商务超极本租赁（Core m4 处理器',
                    ims : '../../../static/images/comclass-2/fen_1.png',
                    fon : '已有',
                    nub : '1000',
                    fos : '人评价',
                    reo : [{
                        img : '../../../static/images/comclass-2/fen_2.png',
                        ims : '../../../static/images/comclass-2/fen_2_1.png'
                    },{
                        img : '../../../static/images/comclass-2/fen_3.png',
                        ims : '../../../static/images/comclass-2/fen_3_1.png'
                    },{
                        img : '../../../static/images/comclass-2/fen_4.png',
                        ims : '../../../static/images/comclass-2/fen_4_1.png'
                    },{
                        img : '../../../static/images/comclass-2/fen_5.png',
                        ims : '../../../static/images/comclass-2/fen_5_1.png'
                    }]
                },{
                    img : '../../../static/images/comclass-2/T430.jpg',
                    num : '￥3.9/天',
                    ino : 'Thinkpad X240 12英寸商务超极本租赁（Core m4 处理器',
                    ims : '../../../static/images/comclass-2/fen_1.png',
                    fon : '已有',
                    nub : '1000',
                    fos : '人评价',
                    reo : [{
                        img : '../../../static/images/comclass-2/fen_2.png',
                        ims : '../../../static/images/comclass-2/fen_2_1.png'
                    },{
                        img : '../../../static/images/comclass-2/fen_3.png',
                        ims : '../../../static/images/comclass-2/fen_3_1.png'
                    },{
                        img : '../../../static/images/comclass-2/fen_4.png',
                        ims : '../../../static/images/comclass-2/fen_4_1.png'
                    },{
                        img : '../../../static/images/comclass-2/fen_5.png',
                        ims : '../../../static/images/comclass-2/fen_5_1.png'
                    }]
                },{
                    img : '../../../static/images/comclass-2/T430.jpg',
                    num : '￥3.9/天',
                    ino : 'Thinkpad X240 12英寸商务超极本租赁（Core m4 处理器',
                    ims : '../../../static/images/comclass-2/fen_1.png',
                    fon : '已有',
                    nub : '1000',
                    fos : '人评价',
                    reo : [{
                        img : '../../../static/images/comclass-2/fen_2.png',
                        ims : '../../../static/images/comclass-2/fen_2_1.png'
                    },{
                        img : '../../../static/images/comclass-2/fen_3.png',
                        ims : '../../../static/images/comclass-2/fen_3_1.png'
                    },{
                        img : '../../../static/images/comclass-2/fen_4.png',
                        ims : '../../../static/images/comclass-2/fen_4_1.png'
                    },{
                        img : '../../../static/images/comclass-2/fen_5.png',
                        ims : '../../../static/images/comclass-2/fen_5_1.png'
                    }]
                },{
                    img : '../../../static/images/comclass-2/T430.jpg',
                    num : '￥3.9/天',
                    ino : 'Thinkpad X240 12英寸商务超极本租赁（Core m4 处理器',
                    ims : '../../../static/images/comclass-2/fen_1.png',
                    fon : '已有',
                    nub : '1000',
                    fos : '人评价',
                    reo : [{
                        img : '../../../static/images/comclass-2/fen_2.png',
                        ims : '../../../static/images/comclass-2/fen_2_1.png'
                    },{
                        img : '../../../static/images/comclass-2/fen_3.png',
                        ims : '../../../static/images/comclass-2/fen_3_1.png'
                    },{
                        img : '../../../static/images/comclass-2/fen_4.png',
                        ims : '../../../static/images/comclass-2/fen_4_1.png'
                    },{
                        img : '../../../static/images/comclass-2/fen_5.png',
                        ims : '../../../static/images/comclass-2/fen_5_1.png'
                    }]
                },{
                    img : '../../../static/images/comclass-2/T430.jpg',
                    num : '￥3.9/天',
                    ino : 'Thinkpad X240 12英寸商务超极本租赁（Core m4 处理器',
                    ims : '../../../static/images/comclass-2/fen_1.png',
                    fon : '已有',
                    nub : '1000',
                    fos : '人评价',
                    reo : [{
                        img : '../../../static/images/comclass-2/fen_2.png',
                        ims : '../../../static/images/comclass-2/fen_2_1.png'
                    },{
                        img : '../../../static/images/comclass-2/fen_3.png',
                        ims : '../../../static/images/comclass-2/fen_3_1.png'
                    },{
                        img : '../../../static/images/comclass-2/fen_4.png',
                        ims : '../../../static/images/comclass-2/fen_4_1.png'
                    },{
                        img : '../../../static/images/comclass-2/fen_5.png',
                        ims : '../../../static/images/comclass-2/fen_5_1.png'
                    }]
                }]

            }

        },

        computed : {

        },

        methods : {

        },

        created () {

        },

        mounted () {

        }

    }

</script>
