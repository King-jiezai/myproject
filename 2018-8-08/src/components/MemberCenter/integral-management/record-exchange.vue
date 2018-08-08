


<style scoped>
    
    .exchanges {
        width: 1200px;
        margin: 0 auto;
        margin-top: 40px;
    }
    .exchange-cont {
        width: 100%;
        border:1px solid #ccc;
    }
    .exchange-nav {
        width: 1160;
        height: 52px;
        line-height: 52px;
        margin: 0 20px;
    }
    .exchange-nav div:first-child {
        width: 200px;
        text-align: left;
        padding-left: 20px;
    }
    .exchange-nav div:nth-child(2) {
        width: 200px;
    }
    .exchange-nav div:last-child {
        width: 200px;
    } 
    .exchange-nav div {
        width: 139px;
        text-align: center;
        float: left;
    }
    .exchange-cent {
        width: 1160;
        overflow: hidden;
        margin: 0 20px;
    }
    .exchange-null {
        width: 100%;
        height: 113px;
        line-height: 113px;
        text-align: center;
        font-size: 30px;
        border-top: 1px solid #ccc;
    }
    .exchange-tex {
        width: 100%;
        height: 50px;
        line-height: 50px;
        border-top: 1px solid #ccc;
    }
    .exchange-tex p {
        float: left;
        width: 139px;
        text-align: center;
    }
    .exchange-tex p:nth-child(1) {
        width: 200px;
    }
    .exchange-tex p:nth-child(2) {
        width: 200px;
    }
    .exchange-tex p:last-child {
        width: 200px;
    }
    .exchange-tex .cons {
        color: #339328;
    }
    .exchange-tex .surs {
        color: #e60012;
    }   
    .page {
        margin: 30px 0;
        float: right;  
    }

</style>

<template>
    
        <!--exchange-cont 积分明细-->
        <div class="exchanges">
            <div class="exchange-cont">
                <div class="exchange-nav">
                    <div>
                        <p>订单号</p>
                    </div>
                    <div>
                        <p>礼品名称</p>
                    </div>
                    <div>
                        <p>兑换数量</p>
                    </div>
                    <div>
                        <p>可用积分</p>
                    </div>
                    <div>
                        <p>消费积分</p>
                    </div>
                    <div>
                        <p>剩余积分</p>
                    </div>
                    <div>
                        <p>兑换时间</p>
                    </div>
                </div>

                <div class="exchange-cent">
                    <div class="exchange-tex" v-for="item in rel" v-show="ingral">
                        <p>{{ item.number }}</p>
                        <p>{{ item.giftName }}</p>
                        <p>{{ item.num }}</p>
                        <p>{{ item.mems }}</p>
                        <p><span class="cons">-{{ item.cons }}</span></p>
                        <p><span class="surs">{{ item.sur }}</span></p>
                        <p>{{ item.data }}</p>
                    </div>
                    <div class="exchange-null" v-show="nulls">
                        <p>暂时还没有数据！</p>
                    </div>       
                </div>
            </div>
            <div class="page">
                <Page 
                    :total="round" 
                    :page-size="num"
                    :page-size-opts="pages"
                    show-elevator
                    @on-change="changepage" 
                    @on-page-size-change="onch" >                   
                </Page>
            </div>
        </div>


</template>

<script>

    import {Icon , Page} from 'iview'

    export default {

        components : {

            Page,
            Icon,

        },

        data () {

            return {


                adata  : [], 

                num    : 10,

                ingral : false,

                nulls   : false,

                pages  : [5,10,15,20,100] ,

                rel : [
                {

                    number : '123456789123',

                    giftName : '金士顿16Gu盘',

                    num     : 1 ,

                    mems    : 2596,

                    cons    : 1564,

                    sur     : 1500,

                    data    : '2018-7-25'
                },{

                    number : '123456789123',

                    giftName : '金士顿16Gu盘',

                    num     : 1 ,

                    mems    : 2596,

                    cons    : 1564,

                    sur     : 1500,

                    data    : '2018-7-25'
                },{

                    number : '123456789123',

                    giftName : '金士顿16Gu盘',

                    num     : 1 ,

                    mems    : 2596,

                    cons    : 1564,

                    sur     : 1500,

                    data    : '2018-7-25'
                },{

                    number : '123456789123',

                    giftName : '金士顿16Gu盘',

                    num     : 1 ,

                    mems    : 2596,

                    cons    : 1564,

                    sur     : 1500,

                    data    : '2018-7-25'
                },{

                    number : '123456789123',

                    giftName : '金士顿16Gu盘',

                    num     : 1 ,

                    mems    : 2596,

                    cons    : 1564,

                    sur     : 1500,

                    data    : '2018-7-25'
                }
                ],

            }

        },

        computed : {

        },

        methods : {

            pop () {

                this.adata = this.rel

                this.round = this.rel.length

                if(this.rel.length < this.num){

                    this.rel = this.adata

                }else{

                    this.rel = this.adata.slice(0,this.num)

                }
               
            },       

            changepage (index) {

                this.page = index

                var start = (index - 1) * this.num

                var end = index * this.num

                this.rel = this.adata.slice(start, end)
            },

            onch (kk) {

                this.num = kk

                this.changepage(this.page)

            }, 

        },

        created () {

            this.pop()

            if (this.rel == 0) {

                this.nulls = true

                this.ingral = false
            }else {

                this.nulls = false

                this.ingral = true
            } 
        },

        mounted () {}

    }

</script>
