







<style scoped>

    .comclass-oop {
        width: 1200px;
        height: 150px;
        background: #eee;
        margin: 15px auto 0;
    }
    .comclass-oop .img {
        width: 58px;
        height: 150px;
        color: #fff;
        font-size: 16px;
        line-height: 18px;
        float: left;
        position: relative;
    }
    .img img {
        position: absolute;
        top: 0;
        left: 0;
    }
    .img span {
        letter-spacing:3px;
        padding: 2px 7px;
        position: absolute;
        top: 0;
        left: 0;
    }
    .fsl-oo {
        width: 257px;
        height: 110px;
        color: #2A2A2A;
        font-size: 12px;
        float: left;
        margin: 20px 25px 20px 0;
    }
    .fsl-oo:last-child {
        margin-right: 0;
    }
    .oo-left {
        width: 103px;
        height: 110px;
        border: 1px solid #ccc;
        background: #fff;
        padding: 22px 0;
        float: left;
    }
    .oo-right {
        width: 154px;
        height: 110px;
        padding-left: 16px;
        float: left;
    }
    .oo-right span {
        line-height: 20px;
        cursor: pointer;
    }
    .oo-right .p1 {
        color: #e60012;
        font-size: 16px;
        margin: 2px 0;
    }
    .oo-right .p2 {
        width: 70px;
        height: 22px;
        font-size: 13px;
        text-align: center;
        line-height: 22px;
        border: 1px solid #ccc;
        cursor: pointer;
    }
    .oo-right .p2:hover {
        color: #e60012;
        border: 1px solid #e60012;
    }

</style>

<template>

    <div class="comclass-oop">
        <div class="img">
            <img :src="fsl">
            <span>热租推荐</span>
        </div>

        <div class="fsl-oo" v-for='(item, index) in res'>
            <div class="oo-left" @click='details(index)'>
                <img :src="item.img">
            </div>

            <div class="oo-right">
                <span :title='item.spn'>{{item.spn}}</span>
                <p class="p1">{{item.pos}}</p>
                <p class="p2" @click='details'>{{item.poo}}</p>
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

                fsl : '../../../../static/images/comclass/hot.png'

            }
            
        },

        computed : {

        },

        methods : {

            details (index) {

                window.open('/pages?pid='+this.res[index].id)
                
            }

        },

        created () {
            
        },

        mounted () {

        },

        props : [
            'res'
        ]

    }

</script>
