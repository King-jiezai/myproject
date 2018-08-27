


<style scoped>

    .address {
        width: 100%;
    }
    .address-top {
        width: 100%;
        height: 40px;
        padding: 0 20px;
        line-height: 40px;
        background: #edf3fe;
    }
    .address-top span:last-child {
        float: right;
        color: #e60012;
        cursor: pointer;
    }
    .address-cont {
        width: 100%;
        margin-top: 20px;
        border:2px solid #ccc;
    }
    .cont-top {
        width: 100%;
        height: 30px;
        line-height: 30px;
        padding: 0 10px;
        font-size: 14px;
        font-weight: bold;
    }
    .cont-top span {
        margin-left: 10px;
    }
    .detailed-address {
        width: 100%;
        padding: 0 20px;
    }
    .detailed-address .addresss {
        width: 100%;
        height: 30px;
        line-height: 30px;
    }
    .addresss p {
        float: left;
        width: 90px;
        text-align: right;
        color: #999;
    }
    .detailed-address span {
        float: left;
    }
    .modify {
        width: 100%;
        height: 30px;
        line-height: 30px;
        margin-bottom: 20px;
    }
    .modify p {
        float: right;
        color: #0b62b3;
        cursor:pointer;
    }
    .news-oo {
        width: 100%;
        height: 100%;
        opacity: 0.5;
        background: #000;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 998;
    }
    .news {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 9999999;
    }

</style>

<template>

    <div class="address">
        <div class="address-top">
            <span>已保存现有的收货地址</span>
            <span @click="news">新增收货地址</span>
        </div>

        
        <div class="address-cont" v-for="(item,index) in address">
            <div class="cont-top">
                <p>{{item.name}}<span>{{item.prov}}</span></p>
            </div>
            <div class="detailed-address">
                <div class="addresss">
                    <p>收货人：</p>
                    <span>{{item.name}}</span>
                </div>
                <div class="addresss">
                    <p>所在地区：</p>
                    <span>{{item.adds}}</span>
                </div>
                <div class="addresss">
                    <p>详细地址：</p>
                    <span>{{item.deta}}</span>
                </div>
                <div class="addresss">
                    <p>邮政编码：</p>
                    <span>{{item.code}}</span>
                </div>
                <div class="addresss">
                    <p>手机/固定电话：</p>
                    <span>{{item.phone}}</span>
                </div> 
                <div class="modify">
                    <p @click="modify(index)">修改</p>
                </div>         
            </div>
        </div>
        <div class="news-oo" v-show='mod'></div>
        <news-model class="news" v-show='modo'></news-model>
        <modify-model class="news" v-show='modt'></modify-model>
    </div>

</template>

<script>
    
    import newsModel   from '@/components/mylease/accsetting/addressManagement/index/news-model.vue'
    import modifyModel from '@/components/mylease/accsetting/addressManagement/index/modify-model.vue'
    import { Icon } from 'iview'

    import { mapState } from 'vuex'

    export default {

        components : {

            Icon,
            newsModel,
            modifyModel
        },

        data () {

            return {

                address : [{
                    name: "大帅哥",
                    prov: '广东',
                    adds: '广东省广州市天河区',
                    deta: '广东省广州市天河区石牌西路KB展望数码广场',
                    code: '625000',
                    phone: '1305477896511'
                },{
                    name: "大美女",
                    prov: '深圳',
                    adds: '广东省深圳市天河区',
                    deta: '广东省广州市天河区石牌西路KB展望数码广场',
                    code: '625000',
                    phone: '1305477896511'
                }],

                mod  : false,

                modo : false,

                modt : false,               
            }

        },

        computed : {

           ...mapState([

                'bas'

            ])

        },

        watch : {

            bas () {

                this.mod = false

                this.modo = false

                this.modt = false

                this.mods = false
                
            },
        },

        methods : {

            modify (index) {

                this.mod = true

                this.modt = true

            },

            news () {

                this.mod = true

                this.modo = true

            },
        },

        created () {
            
        },

        mounted () {}

    }

</script>
