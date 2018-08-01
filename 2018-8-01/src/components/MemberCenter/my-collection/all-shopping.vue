

<style scoped>

    .all-shopping {
        width: 910px;
        overflow: hidden;
    }
    .all-select {
        width: 870px;
        margin: 0 20px;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #ccc;
    }
    .all-select div {
        float: left;
    }
    .all-select span {
        margin-left: 10px;
    }
    .all-select p{
        float: left;
        margin-left: 30px;
    }
    .shopping-cent {
        width: 870px;
        margin:20px;
    }
    .shopp-details {
        width: 100%;
        height: 180px;
        margin: 20px 0;
        border-bottom: 1px solid #ccc;
    }
    .left-details {
        float: left;
        width: 570px;
        height: 160px;
    }
    .details-img {
        float: left;
        width: 160px;
        height: 160px;
        border:1px solid #ccc;
    }
    .details-img img {
        margin: 20px 8px;
    }
    .details-right {
        float: left;
        width: 250px;
        height: 160px;
        margin-left: 10px;
        line-height: 20px;
        cursor: pointer;
    }
    .prics {
        margin-top: 5px;
        color: #e60012;
        font-size: 14px;
    }
    .times {
        margin: 30px 0 10px 0;
    }
    .addcart {
        float: left;
        width: 75px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        border-radius: 5px;
        background: #f5f5f5;
        border: 1px solid #ddd;
        font-size: 12px;
    }
    .contrast {
        float: left;
        width: 75px;
        height: 20px;
        line-height: 20px;
        border-radius: 5px;
        background: #f5f5f5;
        border: 1px solid #ddd;
        font-size: 12px;
        margin: 0 10px;
    }
    .contrast p {
        float: left;
        margin-left: 5px;
    }
    .cancel-coll {
        float: left;
        width: 75px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        border-radius: 5px;
        background: #f5f5f5;
        border: 1px solid #ddd;
        font-size: 12px;
    }
    .in-goods {
        line-height: 160px;
        text-align: center;
    }
    .right-details {
        float: left;
        width:300px;
        height: 180px;
    }
    .right-nav {
        height: 20px;
        line-height: 20px;
    }
    .right-nav div {
        float: left;
        width: 50px;
        border-bottom: 1px solid #ccc;
        text-align: center;
        cursor: pointer;
    }
    .another-batch {
        float: right;
        color: #419EFD;
    }
    .batch {
        color: #e60012;
        border-bottom: 1px solid #e60012!important;
    }
    .right-cent {
        width: 100%;
        height: 150px;
        margin-top: 10px;
    }
    .right-img {
        float: left;
        width: 93px;
        height: 70px;
        border: 1px solid #ccc;
    }
    .right-img img {
        margin: 9px 15px;
    }
    .right-img:nth-child(2) {
        margin: 0 10px;
    }
    .right-img p {
        text-align: center;
    }
    .addcarts {
        float: left;
        width: 75px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        border-radius: 5px;
        background: #f5f5f5;
        border: 1px solid #ddd;
        font-size: 12px;
        margin:0 9px 5px 9px;
    }
    .contrasts {
        float: left;
        width: 55px;
        height: 20px;
        line-height: 20px;
        border-radius: 5px;
        background: #f5f5f5;
        border: 1px solid #ddd;
        font-size: 12px;
        margin: 0 19px;
    }
    .contrasts p {
        float: left;
    }
    .cance-order {
        width: 396px;
        height: 161px;
        background-color: #fff;
        box-shadow: 0px 0px 7px #666; 
        position: fixed;
        top: 50%;
        left: 40%;
        z-index: 999;
        cursor: pointer;
    }
    .cance-top {
        width: 100%;
        height: 30px;
        line-height: 30px;
    }
    .cance-top p {
        float: right;
        margin-right: 10px;
        font-size: 20px;
        color: #ccc;
    }
    .cance-cont {
        width: 306px;
        margin:0 45px;
        overflow: hidden;
        font-size: 14px;
        line-height: 30px;
    }
    .confirm {
        float: left;
        width: 62px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border:1px solid #ccc;
        border-radius: 5px;
        margin-top: 20px;
        background-color: #F1F1F1;
    }
    .cancel {
        float: left;
        width: 62px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border:1px solid #ccc;
        border-radius: 5px;
        margin: 20px 0 0 20px;
        background-color: #F1F1F1;
    }
    .hids {
        width: 992px;
        height: 142px;
        border: 1px solid #ccc;
        border-bottom: 0;
        box-shadow: 0px 0px 3px 0px #666;
        background: #fff;
        position: fixed;
        bottom: 0;
        z-index: 999;
    }
    .hids-top {
        height: 33px;
    }
    .fsl-left {
        width: 141px;
        height: 33px;
        text-align: center;
        line-height: 33px;
        font-size: 14px;
        font-weight: bold;
        color: #e60012;
        background: #fff;
        float: left;
    }
    .fsl-right {
        width: 849px;
        height: 33px;
        text-align: right;
        line-height: 33px;
        border-bottom: 1px solid #ccc;
        border-left: 1px solid #ccc;
        padding-right: 10px;
        background: #eee;
        float: left;
    }
    .fsl-right span {
        cursor: pointer;
    }
    .hids-bottom {
        padding-top: 30px;
        position: relative;
    }
    .list-box {
        width: 215px;
        height: 78px;
        background: #fff;
        border-bottom: 5px solid #e60012;
        padding: 0 25px;
        margin-right: 3px;
        float: left;
        position: relative;
        top: -70px;
        z-index: 1;
    }
    .po-io {
        width: 50px;
        height: 50px;
        margin-right: 14px;
        float: left;
    }
    .po-io img {
        width: 50px;
        height: 50px;
    }
    .po-oo {
        float: left;
        width: 100px;
        height: 35px;
        overflow: hidden;
        font-size: 12px;
    }
    .po-oo:hover {
        color: #e60012;
        cursor: pointer;
    }
    .list-box p {
        float: left;
        width: 60px;
        height: 15px;
        color: #e60012;
    }
    .list-box span {
        color: #e60012;
        display: none;
        cursor: pointer;
        float: right;
    }
    .list-box:hover span {
        display: block;
    }
    .hided {
        width: 215px;
        height: 70px;
        padding: 0 10px 0 25px;
        float: left;
    }
    .sf {
        text-align: center;
        line-height: 50px;
        font-size: 50px;
        color: #ccc;
        border: 1px solid #ccc;
    }
    .sfl {
        color: #ccc;
    }
    .fso {
        float: right;
        position: absolute;
        top: 30px;
        right: 25px;
    }
    .fso-top {
        width: 68px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        border: 1px solid #ccc;
        background: #eee;
        margin-bottom: 5px;
        cursor:not-allowed;
    }
    .cos {
        color: #fff;
        border: 1px solid #e60012;
        background: #e60012;
        cursor: pointer;
    }
    .fso p {
        width: 68px;
        text-align: center;
        cursor: pointer;
    }

</style>

<template>
    
    <!--all-shopping 全部收藏商品-->
    <div class="all-shopping">
        <div class="all-select">
            <div>
                <Checkbox
                :indeterminate="indeterminate"
                :value="checkAll"
                @click.prevent.native="handleCheckAll"><span>全选</span></Checkbox>
            </div>
            <p>取消关注</p>
        </div>

        <div class="shopping-cent">
            <div class="shopp-details" v-for="(item,index) in allList">
                <div class="left-details">
                    <CheckboxGroup v-model="checkAllGroup"  @on-change="checkAllGroupChange">
                    <Checkbox label="index"></Checkbox>
                    </CheckboxGroup>
                    <div class="details-img">
                        <img :src="item.imgs">
                    </div>
                    <div class="details-right">
                        <p>{{ item.fon }}</p>
                        <p class="prics">￥{{ item.price }}</p>
                        <p class="times">收藏时间：{{ item.time }}</p>
                        <div class="addcart">
                            <p>加入租赁箱</p>
                        </div>
                        <div class="contrast"  @click='contrast(index)'>
                            <Checkbox><p>对比</p></Checkbox>                         
                        </div>
                        <div class="cancel-coll" @click="cancll(index)">
                            <p>取消收藏</p>
                        </div>
                    </div>
                    <p class="in-goods"> {{ goods }}</p>
                </div>
                <div class="right-details">
                    <div class="right-nav">
                        <div v-for="(item,index) in res" :class="{'batch': bach == index}" @click="clibach(index)">
                            <p>{{ item.fon }}</p>
                        </div>
                        <p class="another-batch">换一批</p>
                    </div>
                    <div class="right-cent" v-show="one">
                        <div class="right-img" v-for="item in item.list">
                            <img :src="item.img">
                            <p>￥{{ item.mon }}</p>
                            <div class="addcarts">
                                <p>加入租赁箱</p>
                            </div>
                            <div class="contrasts">
                                <Checkbox></Checkbox>
                                <p>对比</p>
                            </div>
                        </div>
                    </div>
                    <div class="right-cent" v-show="two">
                        <div class="right-img" v-for="item in item.lists">
                            <img :src="item.img">
                            <p>￥{{ item.mon }}</p>
                            <div class="addcarts">
                                <p>加入租赁箱</p>
                            </div>
                            <div class="contrasts">
                                <Checkbox></Checkbox>
                                <p>对比</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cance-order" v-show="cance">
                    <div class="cance-top">
                        <p @click="close">X</p>
                    </div>
                    <div class="cance-cont">
                        <h2>您确定要取消此订单吗</h2>
                        <p>您已成功收藏{{ length }}个商品</p>
                        <div class="confirm" @click="succ(index)">
                            <p>确定</p>
                        </div>
                        <div class="cancel" @click="close">
                            <p>取消</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="hids" v-if='ooc'>
            <div class="hids-top">
                <div class="fsl-left">对比栏</div>

                <div class="fsl-right">
                    <span @click='hid'>隐藏</span>
                </div>
            </div>

            <div class="hids-bottom">
                <div class="hided" v-for='item in reo'>
                    <div class="po-io sf">{{item.num}}</div>
                    <div class="sfl">{{item.zin}}</div>
                </div>

                <div class="list-box" v-for='(item, index) in pos'>
                    <div class="po-io">
                        <img :src="item.imgs">
                    </div>

                    <div class="po-oo">{{item.fon}}</div>
                    <p>{{item.price}}</p>
                    <span @click='del(index)'>删除</span>
                </div>

                <div class="fso">
                    <div class="fso-top" :class="{cos: cos}" >
                        <span>对比</span>
                    </div>

                    <p @click='dels'>清空对比栏</p>
                </div>
            </div>
        </div>
    </div>


</template>

<script>

    import { Checkbox , CheckboxGroup}  from 'iview'

    export default {

        components : {

            Checkbox,
            CheckboxGroup

   
        },

        data () {

            return {

                indeterminate: false,

                checkAll: false,

                checkAllGroup: [],

                goods   : '有货',

                bach    : false,

                one  : true,

                two  : false,

                length : 0,

                cance  : false,

                pos : [],

                ooc : false,

                cos : false,

                com : null,

                fll : false,

                fsl : null,

                reo : [{
                    num : '1',
                    zin : '您还可以继续添加'
                },{
                    num : '2',
                    zin : '您还可以继续添加'
                },{
                    num : '3',
                    zin : '您还可以继续添加'
                },{
                    num : '4',
                    zin : '您还可以继续添加'
                }],

                pos : [],

                res : [{
                    fon : '相似的'
                },{
                    fon : '搭配的'
                }],

                allList : [{

                    imgs : '../../../../static/images/member/my1.png',

                    fon  : '二手笔记本电脑联想ThinkpadX23i7轻薄便携本12寸ibm X230i手提',

                    price: 3000,

                    time : '2018-7-30',

                    list : [{

                        img : '../../../../static/images/member/my2.png',

                        mon : 1300,

                    },{

                        img : '../../../../static/images/member/my2.png',

                        mon : 1300,
                    },{

                        img : '../../../../static/images/member/my2.png',

                        mon : 1300,
                    }],

                    lists : [{

                        img : '../../../../static/images/member/my2.png',

                        mon : 1000,

                    },{

                        img : '../../../../static/images/member/my2.png',

                        mon : 1000,
                    },{

                        img : '../../../../static/images/member/my2.png',

                        mon : 1000,
                    }]
                   
                },{

                    imgs : '../../../../static/images/member/my1.png',

                    fon  : '二手笔记本电脑联想ThinkpadX23i7轻薄便携本12寸ibm X230i手提',

                    price: 3000,

                    time : '2018-7-30',

                    list : [{

                        img : '../../../../static/images/member/my2.png',

                        mon : 1300,

                    },{

                        img : '../../../../static/images/member/my2.png',

                        mon : 1300,
                    },{

                        img : '../../../../static/images/member/my2.png',

                        mon : 1300,
                    }],

                    lists : [{

                        img : '../../../../static/images/member/my2.png',

                        mon : 1000,

                    },{

                        img : '../../../../static/images/member/my2.png',

                        mon : 1000,
                    },{

                        img : '../../../../static/images/member/my2.png',

                        mon : 1000,
                    }]
                   
                }]

            }

        },

        computed : {

        },

        methods : {

             contrast (index) {

                clearTimeout(this.com)

                //点击当前对比图标显示对比栏
                if (this.allList[index] == this.allList[index]) {
                    this.ooc = true
                }

                //对比栏如果存在当前数据，显示提示
                if (this.allList[index] == this.allList[index] && this.pos.includes(this.allList[index])) {

                    this.fll = true

                    this.fsl = '该商品已存在！'

                    this.com = setTimeout( () => {
                        this.fll = false
                    }, 2000)

                } else {

                    this.fll = false

                }

                //
                if (this.allList[index] == this.allList[index] && this.pos.length < 4) {

                    //
                    if (this.pos.indexOf(this.allList[index]) < 0) {
                        this.pos.push(this.allList[index])
                    }

                }

                if (this.allList[index] == this.allList[index] && this.pos.indexOf(this.allList[index]) < 0) {

                    this.fll = true

                    this.fsl = '对比栏已满,您可以删除不需要的栏内商品再继续添加哦！'

                    this.com = setTimeout( () => {
                        this.fll = false
                    }, 2000)

                }

                if (this.pos.length > 1) {
                    this.cos = true
                }

            },

            clibach (index) {

                this.bach = index

                if (this.res[index].fon == '相似的') {

                    this.one = true

                    this.two = false
                }else {
                    this.one = false

                    this.two = true
                }

            },

            close () {

                this.cance = false
            },

            succ (index) {

                this.cance = false
            },

            cancll (index) {

                this.cance = true
            },

            handleCheckAll () {
                if (this.indeterminate) {
                    this.checkAll = false;
                } else {
                    this.checkAll = !this.checkAll;
                }
                this.indeterminate = false;

                if (this.checkAll) {
                    this.checkAllGroup = ['index'];
                } else {
                    this.checkAllGroup = [];
                }
            },
            checkAllGroupChange (data) {
                if (data.length === 1) {
                    this.indeterminate = false;
                    this.checkAll = true;
                } else if (data.length > 0) {
                    this.indeterminate = false;
                    this.checkAll = false;
                } else {
                    this.indeterminate = false;
                    this.checkAll = false;
                }
            },

            hid () {

                this.ooc = false

            },

            del (index) {

                this.pos.splice(index, 1)

                if (this.pos.length < 2) {
                    this.cos = false
                }

            },

            dels () {

                this.pos = []

                this.cos = false

            }

        },

        created () {

              
            this.length = this.allList.length
            
        },

        mounted () {}

    }

</script>
