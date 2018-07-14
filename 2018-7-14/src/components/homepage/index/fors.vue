







<style scoped>

    .fors {
        width: 1200px;
        overflow: hidden;
        margin: 0 auto;
        padding-bottom: 80px;
    }
    .fors-tp {
        width: 100%;
        overflow: hidden;
        margin-bottom: 80px;
    }
    .fors .hean-top {
        font-size: 35px;
        text-align: center;
        margin-top: 30px;
    }
    .fors .hean-cen {
        color: #010101;
        text-align: center;
        font-size: 40px;
    }
    .hean-cen span {
        color: #e60012;
    }
    .fors-bottom {
        width: 1200px;
        overflow: hidden;
    }
    .fors-new {
        width: 333px;
        float: left;
        margin-right: 100px;
    }
    .fors-new:last-child {
        margin-right: 0;
    }
    .fors-oo {
        height: 40px;
        line-height: 40px;
        margin-bottom: 40px;
    }
    .fors-oo span {
        padding: 11px 1px;
        background: #e60012;
        margin: 9px 10px 0 0;
        float: left;
    }
    .fors-oo div {
        font-size: 24px;
    }
    .fs-left {
        float: left;
    }
    .fs-right {
        float: right;
        font-size: 16px!important;
        color: #e60012;
    }

</style>

<template>

    <div class="fors">
        <div class="fors-tp">
            <div class="hean-top">Renting Encyclopedia</div>

            <div class="hean-cen">
                <p><span>租赁</span>大全</p>
            </div>
        </div>

        <div class="fors-bottom">
            <div class="fors-new" v-for='item in ooo'>
                <div class="fors-oo">
                    <span></span>
                    <div class="fs-left">{{item.fon}}</div>
                    <div class="fs-right">{{item.mor}}</div>
                </div>

                <fors-ins :res='item.res'></fors-ins>
            </div>
        </div>
        
    </div>

</template>

<script>

    import forsIns from './fors-ins.vue'

    export default {

        components : {
            
            forsIns,

        },

        data () {

            return {

                ooo : [{
                    fon : '租赁新闻',
                    mor : '更多>>',
                    res : [{
                        img : '../../../../static/images/journalism.jpg',
                        fon : '绿色办公，远离污染',
                        zin : '近年来近年来近年来近年来近年来近年来近年来近年来近年来近年来近年来近年来'
                    },{
                        img : '../../../../static/images/journalism.jpg',
                        fon : '绿色办公，远离污染',
                        zin : '近年来近年来近年来近年来近年来近年来近年来近年来近年来近年来近年来近年来'
                    },{
                        img : '../../../../static/images/journalism.jpg',
                        fon : '绿色办公，远离污染',
                        zin : '近年来近年来近年来近年来近年来近年来近年来近年来近年来近年来近年来近年来'
                    },{
                        img : '../../../../static/images/journalism.jpg',
                        fon : '绿色办公，远离污染',
                        zin : '近年来近年来近年来近年来近年来近年来近年来近年来近年来近年来近年来近年来'
                    }] 
                },{
                    fon : '租赁资讯',
                    mor : '更多>>',
                    res : [{
                        img : '../../../../static/images/journalism2.jpg',
                        fon : '绿色办公，远离污染',
                        zin : '近年来近年来近年来近年来近年来近年来近年来近年来近年来近年来近年来近年来'
                    },{
                        img : '../../../../static/images/journalism2.jpg',
                        fon : '绿色办公，远离污染',
                        zin : '近年来近年来近年来近年来近年来近年来近年来近年来近年来近年来近年来近年来'
                    },{
                        img : '../../../../static/images/journalism2.jpg',
                        fon : '绿色办公，远离污染',
                        zin : '近年来近年来近年来近年来近年来近年来近年来近年来近年来近年来近年来近年来'
                    },{
                        img : '../../../../static/images/journalism2.jpg',
                        fon : '绿色办公，远离污染',
                        zin : '近年来近年来近年来近年来近年来近年来近年来近年来近年来近年来近年来近年来'
                    }]
                },{
                    fon : '技巧知识',
                    mor : '更多>>',
                    res : [{
                        img : '../../../../static/images/journalism.jpg',
                        fon : '绿色办公，远离污染',
                        zin : '近年来近年来近年来近年来近年来近年来近年来近年来近年来近年来近年来近年来'
                    },{
                        img : '../../../../static/images/journalism.jpg',
                        fon : '绿色办公，远离污染',
                        zin : '近年来近年来近年来近年来近年来近年来近年来近年来近年来近年来近年来近年来'
                    },{
                        img : '../../../../static/images/journalism.jpg',
                        fon : '绿色办公，远离污染',
                        zin : '近年来近年来近年来近年来近年来近年来近年来近年来近年来近年来近年来近年来'
                    },{
                        img : '../../../../static/images/journalism.jpg',
                        fon : '绿色办公，远离污染',
                        zin : '近年来近年来近年来近年来近年来近年来近年来近年来近年来近年来近年来近年来'
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

        mounted () {}

    }

</script>
