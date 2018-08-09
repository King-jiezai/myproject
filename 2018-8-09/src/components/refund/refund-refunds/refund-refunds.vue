

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

        <!--refund-refunds 买家撤销申请退货退款-->
        <div class="refund-refunds" v-if="fire">
            <revocation></revocation>
        </div>

    </div>

</template>

<script>
    
    import one   from '@/components/refund/refund-refunds/refund-one.vue'
    import two   from '@/components/refund/refund-refunds/refund-two.vue'
    // import three   from '@/components/refund/only-refunds/three.vue'
    import revocation  from '@/components/refund/refund-refunds/revocation-refunds.vue'
    import { mapState } from 'vuex'

    export default {

        components : {

            one,
            two,
            revocation
        
        },

        data () {

            return {

                one : true,

                two : false,

                fire : false,
            }
            
        },

        watch : {

            res () {

                this.one = false

                this.two = true

                this.$store.commit('len', this.curdate)
            },

            obos () {

                this.one = true

                this.two = false
            },

            rch () {

                this.fire = true

                this.two = false
            }
            
        },

        computed : {

            ...mapState([

                'res',

                'obos',

                'rch'

            ])
            
        },

        methods : {

            
        },

        created () {
            
            let date = new Date();
            let seperator1 = "-";
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let strDate = date.getDate();
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            let currentdate = year + seperator1 + month + seperator1 + strDate;

            this.curdate = currentdate

        },

        mounted () {

        }

    }

</script>
