







<style scoped>

    .exhs {
        width: 1100px;
        margin: 0 auto;
    }
    .exhs .hean-top {
        color: #010101;
        text-align: center;
        font-size: 40px;
    }
    .hean-top span {
        color: #e60012;
    }
    .exhs .hean-cen {
        width: 100px;
        height: 2px;
        background: #ccc;
        margin: 10px auto 20px;
    }
    .hean-cen span {
        width: 50px;
        height: 3px;
        background: #e60012;
        margin: 0 auto;
        display: block;
    }
    .exhs .hean-bottom {
        font-size: 19px;
        color: #2f2f2f;
        text-align: center;
    }
    .exhs-bottom {
        width: 1100px;
        height: 513px;
        border-top: 2px solid #e60012;
        margin-top: 45px;
    }
    .menu-left {
        width: 240px;
        height: 511px;
        background: #b8d6ba;
        float: left;
    }
    .ex-top {
        width: 155px;
        overflow: hidden;
        margin: 70px auto 0;
    }
    .ex-oo {
        float: left;
        margin-right: 25px;
    }
    .ex-oo p {
        width: 65px;
        height: 65px;
        font-size: 18px;
        text-align: center;
        line-height: 65px;
        border-radius: 50%;
        background: #fff;
        margin-bottom: 10px;
    }
    .ex-os {
        float: left;
    }
    .ex-os p {
        width: 65px;
        height: 65px;
        font-size: 18px;
        text-align: center;
        line-height: 65px;
        border-radius: 50%;
        background: #fff;
        margin-bottom: 10px;
    }
    .ex-cen {
        width: 120px;
        height: 30px;
        color: #e60012;
        text-align: center;
        line-height: 30px;
        border-radius: 50px;
        background: #ffe60e;
        margin: 25px auto 0;
    }
    .ex-bottom {
        width: 220px;
        height: 175px;
        margin: 40px auto 0;
    }
    .menu-cen {
        width: 681px;
        height: 511px;
        float: left;
        position: relative;
    }
    .cen-one {
        width: 681px;
        height: 37px;
        background: #eee;
    }
    .menu-right {
        width: 179px;
        height: 511px;
        float: left;
    }
    .list-top {
        width: 179px;
        color: #fff;
        font-size: 16px;
        text-align: center;
        line-height: 37px;
        background: #e60012;
    }
    .list-bottom {
        width: 179px;
        height: 474px;
        position: relative;
    }
    .list-box {
        width: 179px;
        overflow: hidden;
        padding: 20px 0 6px 0;
        border-bottom: 1px solid #ccc;
    }
    .po-left {
        position: absolute;
    }
    .po-left span {
        color: #fff;
        font-size: 14px;
        position: absolute;
        top: -2px;
        left: 10px;
    }
    .po-cen {
        margin-top: 5px;
    }
    .po-io {
        width: 74px;
        height: 56px;
        float: left;
    }
    .po-oo {
        float: left;
        width: 105px;
        font-size: 12px;
        padding: 10px 0 0 10px;
    }
    .po-oo:hover {
        color: #e60012;
        cursor: pointer;
    }
    .fsl-pos p {
        color: #e60012;
        font-size: 16px;
        margin: 0 9px;
        float: left;
    }
    .fsl-pos div {
        line-height: 25px;
    }
    .fsl-poo {
        display: none;
    }
    .mos {
        display: none;
    }
    .obs {
        display: block;
    }

</style>

<template>

    <div class="exhs">
        <div class="exhs-top">
            <div class="hean-top">
                <p><span>租赁</span>设备展示</p>
            </div>

            <div class="hean-cen">
                <span></span>
            </div>

            <div class="hean-bottom">广租一站式服务，多样化产品，满足您一切需求！</div>
        </div>

        <div class="exhs-bottom">
            <div class="menu-left">
                <div class="ex-top">
                    <div class="ex-oo">
                        <p>品质</p>
                        <p>时尚</p>
                    </div>

                    <div class="ex-os">
                        <p>性能</p>
                        <p>高贵</p>
                    </div>
                </div>

                <div class="ex-cen">￥17.3/天</div>

                <div class="ex-bottom">
                    <img src="../../../../static/images/product/machine.png">
                </div>
            </div>

            <div class="menu-cen">
                <div class="cen-one">
                    <exhs-lis v-for='(item, key) in ooo' :key='key' :res='item.res' :ooo='item.nub'></exhs-lis>
                </div>
            </div>

            <div class="menu-right">
                <div class="list-top">热租排行榜</div>

                <div class="list-bottom">
                    <div class="list-box" v-for='item in oos' :title='item.mos'>
                        <div class="fsl-pos mos">
                            <p>{{item.num}}</p>
                            <div>{{item.mos}}</div>
                        </div>

                        <div class="fsl-poo obs">
                            <div class="po-left">
                                <img :src="item.ooo">
                                <span>{{item.fon}}</span>
                            </div>

                            <div class="po-cen">
                                <div class="po-io">
                                    <img :src="item.img">
                                </div>

                                <div class="po-oo">{{item.zen}}</div>
                            </div>
                        </div>
                    </div>

                    <exhs-right :res='red'></exhs-right>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

    import exhsLis   from './exhs-lis.vue'
    import exhsRight from './exhs-right.vue'

    export default {

        components : {

            exhsLis  ,
            exhsRight,

        },

        data () {

            return {
                
                ooo : [{
                    nub : '热门',
                    res : [{
                        img : '../../../../static/images/product/ThinkpadT420.jpg',
                        fon : 'Thinkpad T420商务本租赁i5/4G/320G/......',
                        mun : '￥2.8/天'
                    },{
                        img : '../../../../static/images/product/C4030.jpg',
                        fon : '联想C4030 21.5寸一体机租赁i5/4G/500G/......',
                        mun : '￥2.8/天'
                    },{
                        img : '../../../../static/images/product/machine.jpg',
                        fon : '联想 商务台式电脑租赁i5/4G/500G/......',
                        mun : '￥2.8/天'
                    },{
                        img : '../../../../static/images/product/CX405.jpg',
                        fon : '索尼HDR-CX405高清摄像机租赁',
                        mun : '￥65/天'
                    },{
                        img : '../../../../static/images/product/projector.jpg',
                        fon : 'EPSON商务摄影仪租赁',
                        mun : '￥2.8/天'
                    },{
                        img : '../../../../static/images/product/printer.jpg',
                        fon : '理光彩色数码复合一体机租赁',
                        mun : '￥2.8/天'
                    }]
                },{
                    nub : '电脑专区',
                    res : [{
                        img : '../../../../static/images/product/ThinkpadT420.jpg',
                        fon : 'Thinkpad T420商务本租赁i5/4G/320G/......',
                        mun : '￥2.8/天'
                    },{
                        img : '../../../../static/images/product/ThinkpadT420.jpg',
                        fon : 'Thinkpad T420商务本租赁i5/4G/320G/......',
                        mun : '￥2.8/天'
                    },{
                        img : '../../../../static/images/product/ThinkpadT420.jpg',
                        fon : 'Thinkpad T420商务本租赁i5/4G/320G/......',
                        mun : '￥2.8/天'
                    },{
                        img : '../../../../static/images/product/ThinkpadT420.jpg',
                        fon : 'Thinkpad T420商务本租赁i5/4G/320G/......',
                        mun : '￥2.8/天'
                    },{
                        img : '../../../../static/images/product/ThinkpadT420.jpg',
                        fon : 'Thinkpad T420商务本租赁i5/4G/320G/......',
                        mun : '￥2.8/天'
                    },{
                        img : '../../../../static/images/product/ThinkpadT420.jpg',
                        fon : 'Thinkpad T420商务本租赁i5/4G/320G/......',
                        mun : '￥2.8/天'
                    }]
                },{
                    nub : '办公设备',
                    res : [{
                        img : '../../../../static/images/product/C4030.jpg',
                        fon : '联想C4030 21.5寸一体机租赁i5/4G/500G/......',
                        mun : '￥2.8/天'
                    },{
                        img : '../../../../static/images/product/C4030.jpg',
                        fon : '联想C4030 21.5寸一体机租赁i5/4G/500G/......',
                        mun : '￥2.8/天'
                    },{
                        img : '../../../../static/images/product/C4030.jpg',
                        fon : '联想C4030 21.5寸一体机租赁i5/4G/500G/......',
                        mun : '￥2.8/天'
                    },{
                        img : '../../../../static/images/product/C4030.jpg',
                        fon : '联想C4030 21.5寸一体机租赁i5/4G/500G/......',
                        mun : '￥2.8/天'
                    },{
                        img : '../../../../static/images/product/C4030.jpg',
                        fon : '联想C4030 21.5寸一体机租赁i5/4G/500G/......',
                        mun : '￥2.8/天'
                    },{
                        img : '../../../../static/images/product/C4030.jpg',
                        fon : '联想C4030 21.5寸一体机租赁i5/4G/500G/......',
                        mun : '￥2.8/天'
                    }]
                },{
                    nub : '数码影音',
                    res : [{
                        img : '../../../../static/images/product/machine.jpg',
                        fon : '联想 商务台式电脑租赁i5/4G/500G/......',
                        mun : '￥2.8/天'
                    },{
                        img : '../../../../static/images/product/machine.jpg',
                        fon : '联想 商务台式电脑租赁i5/4G/500G/......',
                        mun : '￥2.8/天'
                    },{
                        img : '../../../../static/images/product/machine.jpg',
                        fon : '联想 商务台式电脑租赁i5/4G/500G/......',
                        mun : '￥2.8/天'
                    },{
                        img : '../../../../static/images/product/machine.jpg',
                        fon : '联想 商务台式电脑租赁i5/4G/500G/......',
                        mun : '￥2.8/天'
                    },{
                        img : '../../../../static/images/product/machine.jpg',
                        fon : '联想 商务台式电脑租赁i5/4G/500G/......',
                        mun : '￥2.8/天'
                    },{
                        img : '../../../../static/images/product/machine.jpg',
                        fon : '联想 商务台式电脑租赁i5/4G/500G/......',
                        mun : '￥2.8/天'
                    }]
                },{
                    nub : '网络设备',
                    res : [{
                        img : '../../../../static/images/product/printer.jpg',
                        fon : '理光彩色数码复合一体机租赁',
                        mun : '￥2.8/天'
                    },{
                        img : '../../../../static/images/product/printer.jpg',
                        fon : '理光彩色数码复合一体机租赁',
                        mun : '￥2.8/天'
                    },{
                        img : '../../../../static/images/product/printer.jpg',
                        fon : '理光彩色数码复合一体机租赁',
                        mun : '￥2.8/天'
                    },{
                        img : '../../../../static/images/product/printer.jpg',
                        fon : '理光彩色数码复合一体机租赁',
                        mun : '￥2.8/天'
                    },{
                        img : '../../../../static/images/product/printer.jpg',
                        fon : '理光彩色数码复合一体机租赁',
                        mun : '￥2.8/天'
                    },{
                        img : '../../../../static/images/product/printer.jpg',
                        fon : '理光彩色数码复合一体机租赁',
                        mun : '￥2.8/天'
                    }]
                }],

                red : [{
                    num : '3',
                    mos : 'EPSON商务摄影仪',
                    ooo : '../../../../static/images/tu23.png',
                    fon : '3',
                    img : '../../../../static/images/product/right/projector_2.jpg',
                    zen : 'EPSON商务摄影仪'
                },{
                    num : '4',
                    mos : '理光数码复合一体机出租',
                    ooo : '../../../../static/images/tu23.png',
                    fon : '4',
                    img : '../../../../static/images/product/right/projector_2.jpg',
                    zen : '理光数码复合一体机出租'
                },{
                    num : '5',
                    mos : 'Apple超薄一体机电脑出租',
                    ooo : '../../../../static/images/tu23.png',
                    fon : '5',
                    img : '../../../../static/images/product/right/projector_2.jpg',
                    zen : 'Apple超薄一体机电脑出租'
                },{
                    num : '6',
                    mos : '超清液晶电视机出租',
                    ooo : '../../../../static/images/tu23.png',
                    fon : '6',
                    img : '../../../../static/images/product/right/projector_2.jpg',
                    zen : '超清液晶电视机出租'
                },{
                    num : '7',
                    mos : '联想商务台式机出租',
                    ooo : '../../../../static/images/tu23.png',
                    fon : '7',
                    img : '../../../../static/images/product/right/projector_2.jpg',
                    zen : '联想商务台式机出租'
                }],

                oos : [{
                    num : '1',
                    mos : 'Thinkpad T420商务本',
                    ooo : '../../../../static/images/tu23.png',
                    fon : '1',
                    img : '../../../../static/images/product/right/ThinkpadT420_2.jpg',
                    zen : 'Thinkpad T420商务本'
                },{
                    num : '2',
                    mos : '索尼HDR-CX405高清摄像机',
                    ooo : '../../../../static/images/tu23.png',
                    fon : '2',
                    img : '../../../../static/images/product/right/CX405_2.jpg',
                    zen : '索尼HDR-CX405高清摄像机'
                }]

            }
            
        },

        computed : {

        },

        methods : {

        },

        created () {
            
        },

        mounted () {}

    }

</script>
