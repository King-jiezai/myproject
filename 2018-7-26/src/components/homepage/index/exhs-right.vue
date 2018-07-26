







<style scoped>

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

    <div class="exhs-lis">
        <div class="list-box" v-for='(item, index) in res' @mouseenter='pos(index)' :title='item.mos'>
            <div class="fsl-pos" :class='{mos: cus == index}'>
                <p>{{item.num}}</p>
                <div>{{item.mos}}</div>
            </div>

            <div class="fsl-poo" :class='{obs: cur == index}'>
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
    </div>

</template>

<script>


    export default {

        components : {

        },

        data () {

            return {

                cus : false,

                cur : false

            }
            
        },

        computed : {

        },

        methods : {

            pos (index) {

                this.cus = index

                this.cur = index
                
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
