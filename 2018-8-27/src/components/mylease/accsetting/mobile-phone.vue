


<style scoped>

    .order_account {
        width: 910px;
        overflow: hidden;
    }
    .account_top {
        height: 40px;
        line-height: 40px;
        background: #F1F1F1;
    }
    .account_top p {
        margin-left: 20px;
    }
        
</style>

<template>

    <div class="order_account">
        <div class="account_top">
            <p>手机修改</p>         
        </div>

        <div v-if="one">
            <mobileOne></mobileOne>
        </div>

        <div v-if="two">
            <mobileTwo></mobileTwo>
        </div>

        <div v-if="three">
            <mobileThree></mobileThree>
        </div>
   
    </div>

</template>

<script>

    import mobileOne   from './mobilphone/mobile-one.vue'
    import mobileTwo   from './mobilphone/mobile-two.vue'
    import mobileThree from './mobilphone/mobile-three.vue'


    import {Icon} from 'iview'
    import { mapState } from 'vuex'

    export default {

        components : {

            Icon,
            mobileOne,
            mobileTwo,
            mobileThree,
    

        },

        data () {

            return {

                one : true,

                two : false,

                three : false

            }

            
        },

        watch : {

            nexts () {

                this.one = false

                this.two = true

            },

            nextss () {

                this.three = true

                this.one = false

                this.two = false 
            },

            agins () {

                this.one = true

                this.two = false

                this.three = false
            }
        },

        computed : {

             ...mapState([

                'nexts',

                'nextss',

                'agins'  

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
