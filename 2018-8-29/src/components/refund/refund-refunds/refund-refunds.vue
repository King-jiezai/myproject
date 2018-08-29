

<style scoped>

    .refund {
        width: 100%;
        overflow: hidden;
    }

</style>

<template>
    
    <!--refund 申请退款-->
    <div class="refund">

        <!--refund-refunds 买家申请退货退款第一步-->
        <div class="refund-refunds" v-if="one">
            <one></one>
        </div>

        <!--refund-refunds 买家申请退货退款第二步-->
        <div class="refund-refunds" v-if="two">
            <two></two>
        </div>
        
        <!--refund-refunds 买家申请退货退款第三步-->
        <div class="refund-refunds" v-if="three">
            <three></three>
        </div>

        <!--refund-refunds 买家申请退货退款第三步-->
        <div class="refund-refunds" v-if="four">
            <four></four>
        </div>

        <!--refund-refunds 买家撤销申请退货退款-->
        <div class="refund-refunds" v-if="fire">
            <revocation></revocation>
        </div>

    </div>

</template>

<script>
    
    import one   from '@/components/refund/refund-refunds/refund-one.vue'
    import two   from '@/components/refund/refund-refunds/refund-two.vue'
    import three from '@/components/refund/refund-refunds/refund-three.vue'
    import four from '@/components/refund/refund-refunds/refund-four.vue'
    import revocation  from '@/components/refund/refund-refunds/revocation-refunds.vue'
    import { mapState } from 'vuex'

    export default {

        components : {

            one,
            two,
            three,
            four,
            revocation
        
        },

        data () {

            return {

                one : true,

                two : false,

                three : false,

                fire : false,

                four : false
            }
            
        },

        watch : {

            res () {

                this.one = false

                this.two = true
            },

            obos () {

                this.one = true

                this.two = false
            },

            rch () {

                this.fire = true

                this.two = false

                this.three = false
            },

            next () {

                this.two = false

                this.three = true
            },

            checres() {

                this.three = false

                this.four = true

                this.two = false
            }
            
        },

        computed : {

            ...mapState([

                'res',

                'obos',

                'rch',

                'next',

                'checres',

            ])
            
        },

        methods : {

            
        },

        created () {
            
            

        },

        mounted () {

        }

    }

</script>
