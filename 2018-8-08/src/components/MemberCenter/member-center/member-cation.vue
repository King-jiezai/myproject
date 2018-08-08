


<style scoped>

    .member-cation {
        width: 1200px;
        overflow: hidden;
        margin: 0 auto;
        margin-top: 30px;
        position: relative;
    }
    .cation-nav {
        width: 100%;
        height: 54px;
        border:1px solid #FBDDDD;
        border-left: 0px;
          position: absolute;
        z-index: 999;
    }
    .cationcalss {
        float: left;
        width: 448px;
        overflow: hidden;
        background-color: #fff;
        line-height: 52px;
        cursor: pointer;
        border: 1px solid  #FBDDDD;
        border-top:0px;
      
    }
    .cationcalss .ones {
        float: left;
        padding-left: 20px;   
    }
    .cationcalss-cont {
        float: left;
        width: 340px;
        overflow: hidden;
        background-color: #fff;
    }
    .cationcalss .cationcalss-cats {
        float: left;
        width: 70px;
        height: 30px;
        margin: 11px 5px;
        border: 1px solid #ccc;
        line-height: 30px;
        text-align: center;
    }
   .cals-cats {
        float: left;
        width: 70px;
        height: 30px;
   }
    .cationcalss .calstyle {
        background-color: #e60012;
        color: #fff;
        font-weight: bold;
    }
    .cationcalss .casstyle:nth-child(n+4) {
        display: none;
    }
    .cationcalss .more {
        float: right;
        margin-right: 10px;
    }
    .cationcalss .more p {
        float: left;
        color: #e60012;
    }
    .level {
        float: left;
        width: 388px;
        height: 52px;
        line-height: 52px;
        border-left: 0px;
        border-right: 1px solid #FBDDDD;
        cursor: pointer;
    }
    .level .ones {
        float: left;
        padding-left: 20px;
    }
    .level .level-cats {
        float: left;
        width: 60px;
        height: 30px;
        margin: 11px 5px;
        border: 1px solid #ccc;
        line-height: 30px;
        text-align: center;
    }
    .level .levtyle {
        background-color: #e60012;
        color: #fff;
        font-weight: bold;
    }
    .sales-volume {
        float: left;
        width: 358px;
        height: 52px;
        line-height: 52px;
        cursor: pointer;
    }
    .sales-volume .volume-cats {
        float: left;
        width: 60px;
        height: 30px;
        margin: 11px 5px;
        border: 1px solid #ccc;
        line-height: 30px;
        text-align: center;
    }
    .sales-volume .volume-cats:first-child {
        margin-left: 20px;
    }
    .sales-volume .voltyle {
        background-color: #e60012;
        color: #fff;
        font-weight: bold;
    }
    .cation-cent {
        width: 100%;
        margin-top: 85px;
        border-top:3px solid #e60012;
        overflow: hidden;
    }
    .center-cen {
        float: left;
        width: 300px;
        overflow: hidden;
        border:1px solid #FBDDDD;
        margin-top: 5px;
    }
    .center-cen .center-img {
        margin: 0 auto;
        width: 190px;
        height: 160px;
        margin-top: 30px;
        margin-bottom: 30px;
        overflow: hidden;
    }
    .center-img {
        width: 100%;
        height: 100%;
    }
    .center-cen .titles {
        padding: 0 20px;
        line-height: 20px;
    } 
    .mempice {
        width: 100%;
        height: 25px;
        line-height: 25px;
        padding: 0 20px;
    }
    .mempice span {
        color: #e60012;
        margin-left: 6px;
    }
    .original-price {
        width: 100%;
        height: 25px;
        line-height: 25px;
        padding: 0 20px;
    }
    .original-price p {
        letter-spacing: 6px;
    }
    .original-price span {
        letter-spacing: 0px;
        text-decoration: line-through;
    }
    .grades {
        width: 100%;
        height: 25px;
        line-height: 25px;
        padding: 0 20px;
        margin-top: 5px;
    }
    .grades p:first-child {
        float: left;
        width: 30px;
        height: 20px;
        background-color: red;
        color: #fff;
        line-height: 20px;
        text-align: center;
        border-radius: 5px;
        margin-right: 10px;
    }
    .shopping-cart {
        float: left;
        width: 100px;
        height: 25px;
        line-height: 25px;
        text-align: center;
        border:1px solid #FBDDDD;
        border-radius: 5px;
        margin:10px 20px 20px 20px;
        cursor: pointer;
    }
    .page {
        float: left;
        margin-left: 30px;
    }

</style>

<template>
    
    <!--member-welfare 商品列表-->
    <div class="member-cation">
        <div class="cation-nav">
            <!--cationcalss 商品分类-->
            <div class="cationcalss">
                <p class="ones">分类：</p>
                <div class="cationcalss-cont">
                    <div class="cationcalss-cats" v-for="(item,index) in cats" @click="clis(index)" :class="{'casstyle' : catcal}" >
                        <div class="cals-cats" :class="{' calstyle' : cals == index}">
                              {{ item.fon }} 
                        </div>                       
                    </div>
                </div>

                <!--more 显示更多的商品分类-->    
                <div class="more" @click="climo">
                    <p>{{ mores }}</p>
                    <Icon type="ios-arrow-down" />
                </div>
            </div>

            <!--level 会员等级-->
            <div class="level">
                <p class="ones">会员级别：</p>
                <div class="level-cats" v-for="(item,index) in lev" @click="clilev(index)" :class="{'levtyle' : levs == index}" >
                    <span> {{ item.fon }} </span>
                </div>
            </div>

            <!--sales-volume 商品销量-->
            <div class="sales-volume">
                <div class="volume-cats" v-for="(item,index) in vol" @click="clivol(index)" :class="{'voltyle' : vols == index}" >
                    <span> {{ item.fon }} </span>
                </div>

                <!-- page 分页--> 
                <div class="page">
                    <Page 
                            :total="round"
                            :current="nums"
                            size="small"
                            simple 
                            :page-size="num"
                            @on-change="changepage" 
                            @on-page-size-change="onch" >                   
                    </Page>
                </div>
            </div>
        </div>
        
        <!-- cation-cent 商品详情--> 
        <div class="cation-cent">
            <div class="center-cen" v-for="(item,index) in data1">
                <div class="center-img"><img :src="item.imgs"></div>
                <p class="titles">{{item.title}}</p>
                <div class="mempice">
                    <p>会员价：<span>￥{{item.price}}</span></p>
                </div>
                <div class="original-price">
                    <p>原价：<span>￥{{item.pricey}}</span></p>
                </div>
                <div class="grades">
                    <p>{{item.grade}}</p>
                    <p>{{item.member}}</p>
                </div>

                <div class="shopping-cart">
                    <p>加入租赁箱</p>
                </div>
               
            </div>
        </div>
    </div>

</template>

<script>

    import { Icon , Table , Page} from 'iview'  

    export default {

        components : {

           Icon,
           Table,
           Page,

        },

        data () {

            return {

                adata  : [], 

                num    : 8,

                page   : 1,

                nums   : 1,

                pages  : [5,10,15,20,100] ,

                cats : [{
                    fon : '全部',
                },{
                    fon : '笔记本',
                },{
                    fon : '打印机',
                },{
                    fon : '投影仪',
                },{
                    fon : '扫描仪',
                },{
                    fon : '一体机',
                },{
                    fon : '平板电脑',
                },{
                    fon : '条码打印机',
                },{
                    fon : '扫描枪',
                },{
                    fon : '液晶电视',
                },{
                    fon : '网络设备',
                },{
                    fon : 'DV摄影机',
                },{
                    fon : '台式机',
                },{
                    fon : '碎纸机',
                }],

                lev : [{
                    fon : '全部',
                },{
                    fon : '普通会员',
                },{
                    fon : '优享会员',
                },{
                    fon : '尊享会员',
                }],

                vol : [{
                    fon : '销量',
                },{
                    fon : '上线时间',
                }],

                data1: [{

                    imgs : '../../../../static/images/member/15.png',

                    title : '二手笔记本电脑联想ThinkpadX23i7轻薄便携本12寸ibm X230i手提',

                    price : 1300,

                    pricey: 1400,

                    grade : 'D1',

                    member: '普通会员专享价',
                },{

                    imgs : '../../../../static/images/member/15.png',

                    title : '二手笔记本电脑联想ThinkpadX23i7轻薄便携本12寸ibm X230i手提',

                    price : 1300,

                    pricey: 1400,

                    grade : 'D1',

                    member: '普通会员专享价',
                },{

                    imgs : '../../../../static/images/member/15.png',

                    title : '二手笔记本电脑联想ThinkpadX23i7轻薄便携本12寸ibm X230i手提',

                    price : 1300,

                    pricey: 1400,

                    grade : 'D1',

                    member: '普通会员专享价',
                },{

                    imgs : '../../../../static/images/member/15.png',

                    title : '二手笔记本电脑联想ThinkpadX23i7轻薄便携本12寸ibm X230i手提',

                    price : 1300,

                    pricey: 1400,

                    grade : 'D1',

                    member: '普通会员专享价',
                },{

                    imgs : '../../../../static/images/member/15.png',

                    title : '二手笔记本电脑联想ThinkpadX23i7轻薄便携本12寸ibm X230i手提',

                    price : 1300,

                    pricey: 1400,

                    grade : 'D1',

                    member: '普通会员专享价',
                },{

                    imgs : '../../../../static/images/member/15.png',

                    title : '二手笔记本电脑联想ThinkpadX23i7轻薄便携本12寸ibm X230i手提',

                    price : 1300,

                    pricey: 1400,

                    grade : 'D1',

                    member: '普通会员专享价',
                },{

                    imgs : '../../../../static/images/member/15.png',

                    title : '二手笔记本电脑联想ThinkpadX23i7轻薄便携本12寸ibm X230i手提',

                    price : 1300,

                    pricey: 1400,

                    grade : 'D1',

                    member: '普通会员专享价',
                },{

                    imgs : '../../../../static/images/member/15.png',

                    title : '二手笔记本电脑联想ThinkpadX23i7轻薄便携本12寸ibm X230i手提',

                    price : 1300,

                    pricey: 1400,

                    grade : 'D1',

                    member: '普通会员专享价',
                },{

                    imgs : '../../../../static/images/member/15.png',

                    title : '二手笔记本电脑联想ThinkpadX23i7轻薄便携本12寸ibm X230i手提',

                    price : 1300,

                    pricey: 1400,

                    grade : 'D1',

                    member: '普通会员专享价',
                },{

                    imgs : '../../../../static/images/member/15.png',

                    title : '二手笔记本电脑联想ThinkpadX23i7轻薄便携本12寸ibm X230i手提',

                    price : 1300,

                    pricey: 1400,

                    grade : 'D1',

                    member: '普通会员专享价',
                },{

                    imgs : '../../../../static/images/member/15.png',

                    title : '二手笔记本电脑联想ThinkpadX23i7轻薄便携本12寸ibm X230i手提',

                    price : 1300,

                    pricey: 1400,

                    grade : 'D1',

                    member: '普通会员专享价',
                },{

                    imgs : '../../../../static/images/member/15.png',

                    title : '二手笔记本电脑联想ThinkpadX23i7轻薄便携本12寸ibm X230i手提',

                    price : 1300,

                    pricey: 1400,

                    grade : 'D1',

                    member: '普通会员专享价',
                }],

                catcal : true,

                cals   : false,

                levs   : false,

                vols   : false,

                mores : '更多',

            }

        },

        computed : {

        },

        methods : {

            clis (index) {

                this.cals = index

            },

            clilev (index) {

                this.levs = index
            },

            clivol (index) {

                this.vols = index
            },

            climo () {

                if (this.mores == '更多') {

                    this.catcal = false

                    this.mores = '收起'
                }else {

                    this.catcal = true

                    this.mores = '更多'
                }
            },

            pop () {

                this.adata = this.data1

                this.round = this.data1.length

                if(this.data1.length < this.num){

                    this.data1 = this.adata

                }else{

                    this.data1 = this.adata.slice(0,this.num)

                }
               
            },       

            changepage (index) {

                this.page = index

                var start = (index - 1) * this.num

                var end = index * this.num

                this.data1 = this.adata.slice(start, end)
            },

            onch (kk) {

                this.num = kk

                this.changepage(this.page)

            }, 


        },

        created () {

            this.pop()
            
        },

        mounted () {}

    }

</script>
