







<style scoped>

    .max-box {
        position: relative;
    }
    .menus {
        position: relative;
        margin-top: -80px;
        z-index: 1;
    }
    .exhs {
        margin-top: 80px;
    }
    .todays {
        margin-top: 80px;
    }
    .hel {
        margin-top: 60px;
    }
    .fors {
        margin-top: 80px;
    }
    .arrow {
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 22px;
        color: #fff;
        font-size: 16px;
        border-radius: 50%;
        background: #e60012;
        padding: 8px;
        position: fixed;
        bottom: 50px;
        right: 20px;
        z-index: 1;
        cursor: pointer;
    }

</style>

<template>

    <div class="max-box" @click='boxs'>

        <div class="navs">
            <navs></navs>
        </div>

        <div class="carousel">
            <carousel></carousel>
        </div>

        <div class="menus">
            <menus></menus>
        </div>

        <div class="exhs">
            <exhs></exhs>
        </div>

        <div class="todays">
            <todays></todays>
        </div>

        <div class="hel">
            <hel></hel>
        </div>

        <div class="choice">
            <choice></choice>
        </div>

        <div class="cases">
            <cases></cases>
        </div>

        <div class="fors">
            <fors></fors>
        </div>

        <div class="contacts">
            <contacts></contacts>
        </div>

        <div class="tail">
            <tail></tail>
        </div>

        <div class="arrow" @click='arrow' v-if='oop'>
            <span>回到顶部</span>
        </div>
        
    </div>

</template>

<script>

    import navs     from '@/components/public/navs.vue'
    import carousel from './index/carousel.vue'
    import menus    from './index/menus.vue'
    import exhs     from './index/exhs.vue'
    import todays   from './index/todays.vue'
    import hel      from './index/hel.vue'
    import choice   from './index/choice.vue'
    import cases    from './index/cases.vue'
    import fors     from './index/fors.vue'
    import contacts from './index/contacts.vue'
    import tail     from './index/tail.vue'

    import { mapState } from 'vuex'

    export default {
        
        metaInfo : {

            title: '广租_电脑租赁_广州电脑租赁【价格优惠】',
            meta: [{
                name: 'keywords',
                content: '电脑租赁,电脑出租,租电脑,广州电脑租赁'
            },{
                name: 'description',
                content: '广州电脑租赁是国内较大的办公设备租赁平台-复印机租赁、打印机租赁、电脑出租、投影仪租赁、一体机租赁等办公设备，现在下单，可以领取免费安装大礼包。电脑租赁，请认准官方网址。'
            }]

        },

        components : {
            
            navs    ,
            carousel,
            menus   ,
            exhs    ,
            todays  ,
            hel     ,
            choice  ,
            cases   ,
            fors    ,
            contacts,
            tail    ,

        },

        data () {

            return {

                oop : false

            }

        },

        computed : {

             ...mapState([

            ])

        },

        watch : {

        },

        methods : {

            arrow () {

                let scrollToTop = window.setInterval(function () {

                    let pos = window.pageYOffset

                    if (pos > 0) {
                        window.scrollTo(0, pos - 100) // 滚动每一步有多远
                    } else {
                        window.clearInterval(scrollToTop)
                    }

                }, 1)

            },

            boxs () {

                this.$store.commit('poo', false)

                setTimeout(() => {
                    this.$store.commit('poo', true)
                }, 10)
                        
            }

        },

        created () {
            
        },

        mounted () {

            let that = this

            window.addEventListener('scroll', function () {

                let scrollTop = document.documentElement.scrollTop || document.body.scrollTop

                //判断当滚到高度大于xxx时候
                that.oop = scrollTop > 1200 ? true : false

            }, true)

        }

    }

</script>
