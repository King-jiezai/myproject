







<style scoped>

    .change {
        width: 856px;
        margin: 0 auto;
    }
    .change-top {
        width: 856px;
        overflow: hidden;
        border-bottom: 1px solid #f1f1f1;
    }
    .fsl {
        float: left;
        font-size: 14px;
        border: 1px solid #f1f1f1;
        padding: 5px 15px;
        margin: 0 -1px -1px 0;
        cursor: pointer;
    }
    .cor {
        background: #f1f1f1;
    }
    .change-cen {
        overflow: hidden;
        margin: 21px 0;
    }
    .change-cen p {
        float: left;
        border-right: 2px solid #f1f1f1;
        padding-right: 10px;
        margin-right: 10px;
        cursor: pointer;
    }
    .change-cen p:last-child {
        border-right: 0;
        margin-right: 0;
    }
    .red {
        color: #e60012;
    }
    .change-bottom {
        overflow: hidden;
    }

</style>

<template>

    <div class="change">

        <div class="change-top">
            <div
                 class="fsl"
                :class="{cor: cos == index}"
                 v-for='(item, index) in res'
                @click='lis(index)'
            >{{item.fon}}</div>
        </div>

        <div class="change-cen">
            <p :class="{red: coo == index}" v-for='(item, index) in ooo' @click='lio(index)'>{{item.fon}}</p>
        </div>

        <div class="change-bottom">
            <change-one v-if='one'></change-one>
            <change-two v-if='two'></change-two>
        </div>
        
    </div>

</template>

<script>

    import changeOne from './change-one.vue'
    import changeTwo from './change-two.vue'

    export default {

        components : {

            changeOne,
            changeTwo,

        },

        data () {

            return {

                res : [{
                    fon : '设备变更记录'
                },{
                    fon : '退租记录'
                },{
                    fon : '续租记录'
                },{
                    fon : '维修记录'
                }],

                cos : false,

                ooo : [{
                    fon : '换设备完成记录'
                },{
                    fon : '换设备发货记录'
                }],

                coo : false,

                one : true,

                two : false

            }

        },

        methods : {

            lis (index) {

                this.cos = index

            },

            lio (index) {

                this.coo = index

                this.one = index == 0 ? true : false

                this.two = index == 1 ? true : false

            }

        },

        created () {
            
        },

        mounted () {

        }

    }

</script>
