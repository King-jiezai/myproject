







<style scoped>

    .bjb-week {
        width: 198px;
        color: #0a0a0a;
        font-size: 15px;
        border: 1px solid #eee;
        border-top: 2px solid #999;
        background: #fff;
        position: relative;
    }
    .week-top {
        width: 198px;
        height: 34px;
        text-align: center;
        line-height: 34px;
    }
    .list-box {
        width: 179px;
        overflow: hidden;
        padding-top: 8px;
        border-bottom: 1px solid #eee;
        margin: 0 auto;
        position: relative;
    }
    .list-box:last-child {
        border-bottom: 0;
    }
    .po-left {
        position: absolute;
        top: 12px;
        left: 3px;
    }
    .po-left p {
        width: 15px;
        text-align: center;
        color: #fff;
        font-size: 12px;
        position: absolute;
        top: 0px;
        left: 0px;
    }
    .po-cen {
        margin-top: 5px;
    }
    .po-io {
        width: 80px;
        height: 80px;
        float: left;
    }
    .po-io img {
        width: 80px;
        height: 80px;
        cursor: pointer;
    }
    .po-oo {
        float: left;
        width: 99px;
        height: 36px;
        overflow: hidden;
        font-size: 12px;
        padding-left: 6px;
    }
    .po-oo:hover {
        color: #e60012;
        cursor: pointer;
    }
    .po-cen p {
        width: 99px;
        color: #e60012;
        padding-left: 6px;
        float: left;
    }

</style>

<template>

    <div class="bjb-week">
        <div class="week-top">一周租赁排行榜</div>

        <div class="list-box" v-for='(item, index) in oob' :title='item.name'>
            <div class="po-left">
                <img :src="oos" v-show='index < 3'>
                <img :src="ooo" v-show='index >= 3'>
                <p>{{index+1}}</p>
            </div>

            <div class="po-cen">
                <div class="po-io" @click='week(index)'>
                    <img :src="item.mainImage">
                </div>
                
                <div class="po-oo" @click='week(index)'>{{item.name}}</div>
                <p>￥{{item.rent}}/天</p>
            </div>
        </div>
    </div>

</template>

<script>


    export default {

        components : {

        },

        data () {

            return {

                ooo : '../../../static/images/comclass-2/fen_6.png',
                oos : '../../../static/images/comclass-2/fen_7.png',

            }
            
        },

        computed : {

        },

        methods : {

            week (index) {

                window.open('/pages?pid=' + this.oob[index].id)

            }

        },

        created () {
            
        },

        mounted () {

        },

        props : [
            'oob'
        ]

    }

</script>
