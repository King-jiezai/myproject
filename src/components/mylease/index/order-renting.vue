







<style scoped>

    .renting {
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
        border-top: 1px solid #e60012;
        background: #f1f1f1;
    }
    .renting .sp {
        color: #e60012;
    }

</style>

<template>

    <div class="renting">
        <div class="change-top">
            <div
                 class="fsl"
                :class="{'cor': cos == index}"
                 v-for='(item, index) in res'
                @click='lis(index)'
            >
                <span>{{item.fon}}</span>
                <span class="sp">（{{item.num}}）</span>
            </div>
        </div>

        <div class="box">
            <renting-one v-if='one'></renting-one>
            <renting-two v-if='two'></renting-two>
            <renting-see v-if='see'></renting-see>
        </div>

    </div>

</template>

<script>

    import rentingOne from './renting-one.vue'
    import rentingTwo from './renting-two.vue'
    import rentingSee from './renting-see.vue'

    export default {

        components : {

            rentingOne,
            rentingTwo,
            rentingSee,

        },

        data () {

            return {

                res : [{
                    fon : '在租设备',
                    num : '1'
                },{
                    fon : '退租设备',
                    num : '1'
                },{
                    fon : '租完即送到期设备',
                    num : '1'
                }],

                cos : false,

                one : true,

                two : false,

                see : false

            }

        },

        methods : {

            lis (index) {

                this.cos = index

                this.one = this.res[index].fon == '在租设备' ? true : false

                this.two = this.res[index].fon == '退租设备' ? true : false

                this.see = this.res[index].fon == '租完即送到期设备' ? true : false

            }

        },

        created () {
            
        },

        mounted () {

        }

    }

</script>
