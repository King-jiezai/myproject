


<style scoped>

    .manage-cont {
        width: 1200px;
        overflow: hidden;
        margin: 0 auto;
        margin-top: 40px;
    }
    .integral-nav {
        width: 100%;
        height: 40px;
        line-height: 40px;
        background-color: #f1f1f1;
        border:1px solid #ccc;
        margin-top: 15px;
    }
    .integral-nav div:first-child {
        float: left;
        width: 400px;
        line-height: 40px;
        text-align: center;
    }
    .integral-nav div:nth-child(2) {
        float: left;
        width: 190px;
        text-align: center;
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;
    }
    .integral-nav div:nth-child(3){
        border-right: 1px solid #ccc;
    } 
    .integral-nav div {
        width: 300px;
        text-align: center;
        float: left;
    }
    .integral-cent {
        width: 100%;
        overflow: hidden;
        margin-top: 20px;
        border-top: 1px solid #ccc;
    }
    .integral-null {
        width: 100%;
        height: 113px;
        line-height: 113px;
        text-align: center;
        font-size: 30px;
        border-bottom: 1px solid #ccc;
    }
    .integral-tex {
        width: 100%;
        height: 113px;
        border-bottom: 1px solid #ccc;
    }
    .source {
        float: left;
        width: 400px;
        overflow: hidden;
    }
    .source-imgs {
        float: left;
        width: 60px;
        height: 60px;
        border:1px solid #ccc;
        margin: 26px 20px 26px 25px;
    }
    .source-imgs img {
        width: 45px;
        height: 36px;
        margin: 11px 7px;
    }
    .source p {
        width: 295px;
        float: left;
        line-height: 30px;
    }
    .source .computer {
        margin-top: 26px;
        line-height: 18px;
    }
    .change {
        float: left;
        width: 190px;
        text-align: center;
        line-height: 90px;
        font-size: 40px;
        color: #088B01;
    }
    .datas {
        width: 300px;
        line-height: 90px;
        float: left;
        text-align: center;
        font-size: 14px;
    }
    .remarks {
        width: 300px;
        line-height: 90px;
        float: left;
        text-align: center;
        font-size: 14px;
    }
    .page {
        margin: 30px 0;
        float: right;
  
    }

</style>

<template>
    
    <!--manage-cont 积分明细-->
    <div class="manage-cont">
        <div class="integral-nav">
            <div>
                <p>来源/用途</p>
            </div>
            <div>
                <p>积分变换</p>
            </div>
            <div>
                <p>日期</p>
            </div>
            <div>
                <p>备注</p>
            </div>
        </div>

        <div class="integral-cent">
            <div class="integral-tex" v-for="item in rel" v-show="ingral">
                <div class="source">
                    <div class="source-imgs">
                        <img :src="item.imgs">
                    </div>
                    <p class="computer">{{ item.fon }}</p>
                    <p>编号：{{ item.num }}</p>
                </div>
                <div class="change">
                    <p>{{ item.chans }}</p>
                </div>
                <div class="datas">
                    <p>{{ item.data }}</p>
                </div>
                <div class="remarks">
                    <p>{{ item.rema }}</p>
                </div>
            </div>
            <div class="integral-null" v-show="nulls">
                <p>暂时还没有数据！</p>
            </div>       
        </div>
        <div class="page">
            <Page 
                :total="round" 
                :page-size="num"
                :page-size-opts="pages"
                show-elevator
                @on-change="changepage" 
                @on-page-size-change="onch"
                :transfer=true>                   
            </Page>
        </div>
    </div>

</template>

<script>

    import {Page} from 'iview'

    export default {

        components : {

            Page,

        },

        data () {

            return {


                adata  : [], 

                num    : 3,

                ingral : false,

                nulls   : false,

                pages  : [5,10,15,20,100] ,

                rel : [{
                    imgs : '../../../static/images/member/jifen1.png',

                    fon  : '二手笔记本电脑 联想Thinkpad X220 X230 12寸ibm超薄手提上网本',

                    num  : '1234566588744',

                    chans: '-99',

                    data : '2018年7月23日 08：50：00',

                    rema : '积分清零'
                },{
                    imgs : '../../../static/images/member/jifen1.png',

                    fon  : '二手笔记本电脑 联想Thinkpad X220 X230 12寸ibm超薄手提上网本',

                    num  : '1234566588744',

                    chans: '-99',

                    data : '2018年7月23日 08：50：00',

                    rema : '兑换礼品'
                },{
                    imgs : '../../../static/images/member/jifen1.png',

                    fon  : '二手笔记本电脑 联想Thinkpad X220 X230 12寸ibm超薄手提上网本',

                    num  : '1234566588744',

                    chans: '-60',

                    data : '2018年7月23日 08：50：00',

                    rema : '退还交易获得的积分'
                },{
                    imgs : '../../../static/images/member/jifen1.png',

                    fon  : '二手笔记本电脑 联想Thinkpad X220 X230 12寸ibm超薄手提上网本',

                    num  : '1234566588744',

                    chans: '-99',

                    data : '2018年7月23日 08：50：00',

                    rema : '积分清零'
                }],

            }

        },

        computed : {

        },

        methods : {

            pop () {

                this.adata = this.rel

                this.round = this.rel.length

                if (this.rel.length < this.num) {

                    this.rel = this.adata

                } else {

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

            }

        },

        created () {

            this.pop()

            if (this.rel == 0) {

                this.nulls = true

                this.ingral = false
                
            } else {

                this.nulls = false

                this.ingral = true

            } 

        },

        mounted () {
            
        }

    }

</script>
