

<style scoped>

    .refund {
        width: 100%;
        overflow: hidden;
    }

</style>

<template>
    
    <!--refund 申请退款-->
    <div class="refund">

        <!--onlyRefunds 买家申请换货第一步-->
        <div class="exchange-barter" v-if="one">
            <one></one>
        </div>

        <!--onlyRefunds 买家申请换货第二步-->
        <div class="exchange-barter" v-if="two">
            <two></two>
        </div>

        <!--onlyRefunds 买家申请换货第三步-->
        <div class="exchange-barter" v-if="three">
            <three></three>
        </div>

        <!--onlyRefunds 买家撤销换货申请-->
        <div class="exchange-barter" v-if="four">
            <four></four>
        </div>
    </div>

</template>

<script>
    
    import one   from '@/components/refund/exchange-barter/one.vue'
    import two   from '@/components/refund/exchange-barter/two.vue'
    import three   from '@/components/refund/exchange-barter/three.vue'
    import four  from '@/components/refund/exchange-barter/revocation-barter.vue'
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

            cli () {

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

                'cli',

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
