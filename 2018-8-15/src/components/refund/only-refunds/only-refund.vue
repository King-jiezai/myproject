

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

        <!--onlyRefunds 买家申请仅退款第三步-->
        <div class="onlyRefunds" v-if="three">
            <three></three>
        </div>

        <!--onlyRefunds 买家撤销退款申请-->
        <div class="onlyRefunds" v-if="four">
            <four></four>
        </div>
    </div>

</template>

<script>
    
    import one   from '@/components/refund/only-refunds/one.vue'
    import two   from '@/components/refund/only-refunds/two.vue'
    import three   from '@/components/refund/only-refunds/three.vue'
    import four  from '@/components/refund/only-refunds/revocation-refunds.vue'
    import { mapState } from 'vuex'

    export default {

        components : {

            one,
            two,
            three,
            four

        },

        data () {

            return {

                one : true,

                two : false,

                three:false,

                four: false
                
            }
            
        },

        watch : {

            poo () {

                this.one = false

                this.two = true

            },

            obos () {

                this.one = true

                this.two = false

            },

            next () {

                this.one = false

                this.two = false

                this.three = true

                this.four = false
            },

            rch () {

                this.one = false

                this.two = false

                this.three = false

                this.four = true
            },
            
        },

        computed : {

            ...mapState([

                'poo',

                'obos',

                'rch',

                'next'

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
