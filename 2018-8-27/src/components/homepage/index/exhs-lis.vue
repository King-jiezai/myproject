







<style scoped>

    .exhs-lis {
        height: 37px;
        font-size: 20px;
        list-style: none;
        padding: 0 20px;
        margin-left: 20px;
        float: left;
    }
    .exhs-lis .sp {
        line-height: 37px;
    }
    .exhs-lis:first-child {
        color: #fff;
        background: #e60012;
    }
    .exhs-lis:first-child .cen-two {
        display: block;
    }
    .exhs-lis:hover {
        color: #fff;
        background: #e60012;
        cursor: pointer;
    }
    .exhs-lis:hover .cen-two {
        display: block;
    }
    .cen-two {
        width: 681px;
        height: 474px;
        color: #000;
        background: #fff;
        position: absolute;
        left: 0;
        top: 37px;
        display: none;
    }
    .cen-fsl {
        width: 227px;
        height: 238px;
        padding-top: 35px;
        float: left;
    }
    .fsl-min {
        width: 164px;
        height: 157px;
        font-size: 14px;
        color: #0a0a0a;
        margin: 0 auto;
    }
    .fsl-min p {
        width: 172px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .fsl-fon {
        color: #e60012;
        font-size: 16px;
        text-align: center;
        margin-top: 10px;
    }

</style>

<template>

    <div class="exhs-lis">
        <span class="sp">{{ooo}}</span>

        <div class="cen-two">
            <div class="cen-fsl" v-for='item in res' :title='item.fon'>
                <div class="fsl-min">
                    <img :src="item.img">
                    <p>{{item.fon}}</p>
                </div>

                <div class="fsl-fon">{{item.mun}}</div>
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
            'res',
            'ooo'
        ]

    }

</script>
