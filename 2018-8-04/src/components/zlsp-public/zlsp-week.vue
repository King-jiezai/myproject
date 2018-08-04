







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
    .po-left span {
        color: #fff;
        font-size: 14px;
        text-align: center;
        position: absolute;
        top: -2px;
        left: 4px;
    }
    .po-cen {
        margin-top: 5px;
    }
    .po-io {
        width: 80px;
        height: 80px;
        float: left;
    }
    .po-oo {
        float: left;
        width: 99px;
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

        <div class="list-box" v-for='item in oob' :title='item.mos'>
            <div class="po-left">
                <img :src="item.ooo">
                <span>{{item.fon}}</span>
            </div>

            <div class="po-cen">
                <div class="po-io">
                    <img :src="item.img">
                </div>
                
                <div class="po-oo">{{item.zen}}</div>
                <p>{{item.num}}</p>
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

            }
            
        },

        computed : {

        },

        methods : {

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
