

<style scoped>

    .refund {
        width: 100%;
        overflow: hidden;
    }

</style>

<template>
    
    <!--refund 申请退款-->
    <div class="refund">

        <!--onlyRefunds 买家申请仅退款第一步-->
        <div class="onlyRefunds" v-if="one">
            <one></one>
        </div>

        <!--onlyRefunds 买家申请仅退款第二步-->
        <div class="onlyRefunds" v-if="two">
            <two></two>
        </div>

        <!--onlyRefunds 买家申请仅退款第二步-->
        <div class="onlyRefunds" v-if="four">
            <four></four>
        </div>
    </div>

</template>

<script>
    
    import one   from '@/components/refund/only-refunds/one.vue'
    import two   from '@/components/refund/only-refunds/two.vue'
    import four  from '@/components/refund/only-refunds/revocation-refunds.vue'
    import { mapState } from 'vuex'

    export default {

        components : {

            one,
            two,
            four

        },

        data () {

            return {

                one : true,

                two : false,

                four: false
                
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

                this.four = false
            },

            rch () {

                this.one = false

                this.two = false

                this.four = true
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
            
        },

        mounted () {

        }

    }

</script>
