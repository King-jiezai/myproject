







<style scoped>

    .sett {
        width: 100%;
        height: 100%;
        position: relative;
    }
    .sett-bottom {
        width: 100%;
        height: 100%;
        border-top: 2px solid #000;
    }
    .fsl {
        width: 1200px;
        margin: 0 auto;
        padding: 59px 0 0 0px;
        background: #fff;
    }
    .qb {
        width: 100%;
    }
    .qb .oo {
        font-size: 18px;
        color: #e60012;
        padding: 0 30px 10px;
    }
    .infor {
        overflow: hidden;
        background: #f1f1f1;
    }
    .infor-top {
        height: 48px;
        font-size: 16px;
        line-height: 48px;
        background: #f2f9fe;
        padding: 0 15px;
    }
    .infor-top p {
        width: 190px;
        text-align: center;
        float: left;
    }
    .infor-top p:nth-child(3) {
        width: 120px;
        text-align: center;
        float: left;
    }
    .infor-top p:nth-child(4) {
        width: 80px;
        text-align: center;
        float: left;
    }
    .infor-top p:first-child {
        width: 344px;
        text-align: left;
        padding-left: 80px;
    }
    .infor-top .op {
        float: left;
    }
    .allshopping {
        width: 100%;
        border:1px solid #ccc;
        margin-top: 20px;
        position: relative;
    }
    .poo {
        overflow: hidden;
        margin-top: 17px;
    }
    .poo:hover {
        background: #fff4f7;
    }
    .poo-oo {
        width: 190px;
        overflow: hidden;
        padding-top: 10px;
        float: left;
    }
    .poo-oo:nth-child(3) {
        width: 120px;
        overflow: hidden;
        padding-top: 10px;
        float: left;
    }
    .poo-oo:nth-child(4) {
        width: 80px;
        overflow: hidden;
        padding-top: 10px;
        float: left;
    }
    .poo-oo:first-child {
        width: 409px;
        padding: 10px 0 19px 47px;
    }
    .poo-oo img {
        width: 90px;
        height: 70px;
        float: left;
    }
    .poo-oo .ps {
        width: 230px;
        float: left;
        margin-left: 10px;
    }
    .poo-oo span {
        cursor: pointer;
    }
    .oos {
        width: 190px;
        text-align: center;
    }
    .loss {
        float: left;
        margin-left: 25px;
    }
    .loss div {
        width: 15px;
        height: 25px;
        text-align: center;
        line-height: 25px;
        border: 1px solid #ccc;
        background: #fff;
        float: left;
        cursor: pointer;
        margin-top: 2px;
    }
    .loss input {
        width: 50px;
        height: 25px;
        text-align: center;
        border: 0;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        outline: medium;
        padding: 0 5px;
        float: left;
        margin-top: 2px;
    }
    .oo-one {
        text-align: center;
    }
    .mos {
        overflow: hidden;
        padding: 0 47px 20px 47px;
        margin-top: 15px;
    }
    .qso {
        float: left;
        margin-left: 37px;
    }
    .qso span {
        float: left;
        line-height: 30px;
    }
    .qso .og {
        padding: 5px 10px;
        border: 1px solid #000;
        float: left;
    }
    .qsos {
        float: left;
        margin-left: 37px;
        line-height: 30px;
    }
    .tips {
        height: 58px;
        line-height: 50px;
        font-size: 16px;
        color: #e60012;
        padding-left: 20px;
    }
    .settlement {
        height: 52px;
        box-shadow: 0px 1px 15px #ccc;
    }
    .settlement .select {
        display: inline-block;
        height: 52px;
        float: left;
        margin-left: 15px;
        line-height: 52px;
    }
    .settlement .delete {
        float: left;
        margin: 0 20px;
        color: #999;
        cursor: pointer;
    }
    .settlement .clears {
        float: left;
        cursor: pointer;
    }
    .price {
        float: right;
    }
    .price .price-top {
        height: 26px;
        line-height: 26px;
    }
    .price .price-top p {
        color: #999;
        float: right;
    }
    .price .price-top span {
        color: #e60012;
        font-size: 14px;
        margin-right: 10px;
    }
    .price .price-bott {
        height: 26px;
        line-height: 26px;
    }
    .price .price-bott p {
        float: left;
        text-align: right;
        color: #999;
        margin: 0 10px;
    }
    .settlpay {
        width: 100px;
        height: 52px;
        line-height: 52px;
        text-align: center;
        color: #fff;
        background:#00A1E9;
        float: right;
        font-size: 16px;
        cursor: pointer;
    }
    .wrapper {
        margin: 0 auto;
        margin-top:30px ;
    }
    .center-foor {
        padding-bottom: 50px;
        background: #fafafa;
    }
    .center-foor .heas {
        margin-top: 100px;
        border-bottom: 1px solid #666;
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
        z-index: 999;
    }
    .checkbox {
        width: 16px;
        height: 18px;
        overflow: hidden;
        position: absolute;
        top: 30px;
        left: 15px;
    }
    .select_box {
        float: left;
    }

</style>

<template>

    <div class="sett">
        <div class="sett-top">
            <order-navsf></order-navsf>
        </div>

        <div class="sett-bottom">
            <div class="fsl">
                <div class="qb">
                    <div class="oo">全部商品（{{this.number}}）</div>

                    <div class="infor">
                        <div class="infor-top">
                            <div class="op">
                                <Checkbox
                                    :indeterminate="indeterminate"
                                    :value="checkAll"
                                    @click.prevent.native="handleCheckAll"
                                    size='large'
                                >全选</Checkbox>
                            </div>

                            <div>
                                <p v-for='item in spn'>{{item.fon}}</p>
                            </div>
                        </div>
                    </div>

                    <div class="allshopping" v-for='(item, index) in cartlist'>
                        <CheckboxGroup v-model="checkAllGroup" @on-change="checkAllGroupChange" size='large'>
                            <p class="checkbox" @click='onch(index)'>
                                <Checkbox :label='index' size='large'></Checkbox>
                            </p>

                            <div class="poo">
                                <div class="poo-oo">
                                    <img :src="item.mainImage">
                                    <p class="ps">{{item.name}}{{item.subtitle}}</p>
                                </div>

                                <div class="poo-oo">
                                    <div class="oos">
                                        <p>日租金：￥{{item.rent}}</p>
                                    </div>

                                    <div class="oos">
                                        <p>押金：￥{{item.price}}</p>
                                    </div>
                                </div>

                                <div class="poo-oo">
                                    <div class="loss">
                                        <div @click='redu(index)'>-</div>
                                        <input type="text" v-model='item.quantity' @blur='quantitys(index)' @input='monitor(index)'>
                                        <div @click='add(index)'>+</div>
                                    </div>
                                </div>

                                <div class="poo-oo">
                                    <p class="oo-one">1期</p>
                                </div>

                                <div class="poo-oo">
                                    <p class="oo-one">租金小计：￥{{item.totalRent}}</p>
                                    <p class="oo-one">总押金：￥{{item.totalPrice}}</p>
                                </div>

                                <div class="poo-oo">
                                    <p class="oo-one"><span @click='del(index)'>删除</span></p>
                                    <p class="oo-one">移到我的关注</p>
                                </div>
                            </div>

                            <div class="mos">
                                <div class="qso">
                                    <span>租赁方式：</span>
                                    <div class="og">日租金：￥{{item.rent}}，租期{{item.number}}天</div>
                                </div>

                                <div class="qso">
                                    <span>起租日期：</span>
                                    <DatePicker
                                        :clearable="false"
                                        type="date"
                                        v-model="dated"
                                        size='large'
                                        :transfer=true
                                    ></DatePicker>
                                </div>

                                <div class="qsos">租赁方案：全额押金+月付</div>
                            </div>
                        </CheckboxGroup>
                    </div>

                    <div class="tips">
                        <p>温馨提示：您还未申请免押金额度，建议您先申请免押金额度，这样您在支付时可以减免较大额度的押金！</p>
                    </div>

                    <div class="settlement">
                        <div class="select">
                            <div class='select_box'>
                                <Checkbox
                                    :indeterminate="indeterminate"
                                    :value="checkAll"
                                    @click.prevent.native="handleCheckAll"
                                    size='large'
                                >全选</Checkbox>
                            </div>

                            <p class="delete" @click='dels'>删除选中的商品</p>
                            <p class="clears" @click='alldel'>清理租赁箱</p>
                        </div>
                        <div class="settlpay" @click='Settlement'>
                            <p>去结算</p>
                        </div>
                        <div class="price">
                            <div class="price-top">
                                <p>已选择 {{piece}} 件商品总价：<span> ￥{{allprice}} </span></p>
                            </div>
                            <div class="price-bott">
                                <p>减免押金：-￥{{ reduce }}</p>
                                <p>应付押金：￥{{ cope }}</p>
                                <p>应付租金：￥{{ pay }}</p>
                                <p>增值服务：￥{{ incr }}</p>
                                <p>优惠金额：￥{{ disc }}</p>
                                <p>运费：￥{{ frei }}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="wrapper">
                <Recommend></Recommend>
            </div>

            <div class="center-foor">
                <div class="heas">
                    <tail-hear></tail-hear>
                </div>

                <tail-foor></tail-foor>
            </div>
        </div>
    </div>

</template>

<script>

    import orderNavsf   from '@/components/public/order-navsf.vue'
    import tailHear    from '@/components/public/tail-hear.vue'
    import tailFoor    from '@/components/public/tail-foor.vue'
    import Recommend from '@/components/ShoppingCart/components/Recommend.vue'
   
    import { DatePicker, Checkbox, CheckboxGroup } from 'iview'

    export default {

        components : {

            orderNavsf,
            Checkbox,
            CheckboxGroup,
            tailHear ,
            tailFoor ,
            DatePicker,
            Recommend

        },

        data () {

            return {

                indeterminate: false,

                checkAll: false,

                checkAllGroup: [],

                spn : [{
                    fon : '商品信息'
                },{
                    fon : '单价（元/台/月）'
                },{
                    fon : '数量'
                },{
                    fon : '首付期数'
                },{
                    fon : '小计'
                },{
                    fon : '操作'
                }],

                piece : 1,

                allprice : 189,

                reduce : 0,

                cope   :1000,

                pay    : 990,

                incr   :0,

                disc   :0,

                frei   :0,

                dated: new Date().toLocaleDateString(),

                number : 0,

                cartlist : [],

                falt : 0

            }
            
        },

        methods : {

            Settlement () {

                this.$router.push('/settlement?cart=' + 1)

            },

            async monitor (index) {

                let patrn = /^[0-9]*$/

                if (!patrn.test(this.cartlist[index].quantity)) {

                    this.cartlist[index].quantity = ''

                }

                if (this.cartlist[index].quantity > this.cartlist[index].stock) {

                    this.cartlist[index].quantity = this.cartlist[index].stock

                }

                for (let i = 1; i <= this.cartlist[index].stock; i++) {

                    if (this.cartlist[index].quantity == i) {

                        let res = await this.$api.cartAdd({
                            productId : this.cartlist[index].productId,
                            quantity : this.cartlist[index].quantity,
                            number : this.cartlist[index].number
                        })

                        let reo = await this.$api.cartList()

                        this.cartlist = reo.data.data.cartProductVoList

                        this.allprice = reo.data.data.cartTotalPrice.toFixed(1)

                        this.cope = reo.data.data.cartTotalDeposit

                        this.pay = reo.data.data.cartTotalRent


                    }

                }

            },

            async quantitys (index) {

                if (this.cartlist[index].quantity == '' || this.cartlist[index].quantity == 0) {

                    this.cartlist[index].quantity = 1

                }

                let reo = await this.$api.cartList()

                this.cartlist = reo.data.data.cartProductVoList

                this.allprice = reo.data.data.cartTotalPrice.toFixed(1)

                this.cope = reo.data.data.cartTotalDeposit

                this.pay = reo.data.data.cartTotalRent

            },

            async handleCheckAll () {

                if (this.indeterminate) {
                    this.checkAll = false
                } else {
                    this.checkAll = !this.checkAll
                }
                this.indeterminate = false

                let arr = []

                for (let i in this.cartlist) {
                    arr.push(parseInt(i))
                }

                if (this.checkAll) {
                    this.checkAllGroup = arr
                } else {
                    this.checkAllGroup = []
                }

                if (this.checkAll == true) {

                    let res = await this.$api.selectAll()

                    this.piece = this.cartlist.length

                    this.allprice = res.data.data.cartTotalPrice.toFixed(1)

                    this.cope = res.data.data.cartTotalDeposit

                    this.pay = res.data.data.cartTotalRent

                }

                if (this.checkAll == false) {

                    let res = await this.$api.unSelectAll()

                    this.piece = 0

                    this.allprice = 0

                    this.cope = 0

                    this.pay = 0

                }

            },

            async checkAllGroupChange (index) {

                if (index.length === this.cartlist.length) {
                    this.indeterminate = false
                    this.checkAll = true
                } else if (index.length > 0) {
                    this.indeterminate = false
                    this.checkAll = false
                } else {
                    this.indeterminate = false
                    this.checkAll = false
                }
                if (index.includes(this.falt)) {

                    let res = await this.$api.select({
                        productId : this.cartlist[this.falt].productId
                    })

                    this.allprice = res.data.data.cartTotalPrice.toFixed(1)

                    this.cope = res.data.data.cartTotalDeposit

                    this.pay = res.data.data.cartTotalRent

                } else {

                    let res = await this.$api.unSelect({
                        productId : this.cartlist[this.falt].productId
                    })

                    this.allprice = res.data.data.cartTotalPrice.toFixed(1)

                    this.cope = res.data.data.cartTotalDeposit

                    this.pay = res.data.data.cartTotalRent

                }

                let arrs = []

                let reo = await this.$api.cartList()

                for (let i in reo.data.data.cartProductVoList) {

                    if (reo.data.data.cartProductVoList[i].productChecked == 1) {

                        arrs.push(parseInt(i))
                    }

                }

                this.piece = arrs.length

            },

            onch (index) {

                this.falt = index

            },

            async redu (index) {

                if (this.cartlist[index].quantity > 1) {

                    this.cartlist[index].quantity--

                    let res = await this.$api.cartAdd({
                        productId : this.cartlist[index].productId,
                        quantity : this.cartlist[index].quantity,
                        number : this.cartlist[index].number
                    })

                    let reo = await this.$api.cartList()

                    this.cartlist = reo.data.data.cartProductVoList

                    this.allprice = reo.data.data.cartTotalPrice.toFixed(1)

                    this.cope = reo.data.data.cartTotalDeposit

                    this.pay = reo.data.data.cartTotalRent

                }

            },

            async add (index) {

                if (this.cartlist[index].quantity < this.cartlist[index].stock) {

                    this.cartlist[index].quantity++

                    let res = await this.$api.cartAdd({
                        productId : this.cartlist[index].productId,
                        quantity : this.cartlist[index].quantity,
                        number : this.cartlist[index].number
                    })

                    let reo = await this.$api.cartList()

                    this.cartlist = reo.data.data.cartProductVoList

                    this.allprice = reo.data.data.cartTotalPrice.toFixed(1)

                    this.cope = reo.data.data.cartTotalDeposit

                    this.pay = reo.data.data.cartTotalRent

                }

            },

            async del (index) {

                let res = await this.$api.delete_product({
                    productIds : this.cartlist[index].productId
                })

                let obs = await this.$api.cartList()

                this.cartlist = obs.data.data.cartProductVoList

                this.number = obs.data.data.cartProductVoList.length

                this.allprice = obs.data.data.cartTotalPrice.toFixed(1)

                this.cope = obs.data.data.cartTotalDeposit

                this.pay = obs.data.data.cartTotalRent

                this.call()

                if (this.cartlist.length == 0) {

                    this.checkAll = false

                }

            },

            async dels () {

                let res = await this.$api.cartList()

                let arr = []

                for (let i in res.data.data.cartProductVoList) {

                    if (res.data.data.cartProductVoList[i].checked == 1) {

                        arr.push(res.data.data.cartProductVoList[i].productId)

                    }

                }

                let reo = await this.$api.delete_product({
                    productIds : arr.join(',')
                })

                let obs = await this.$api.cartList()

                this.number = obs.data.data.cartProductVoList.length

                this.cartlist = obs.data.data.cartProductVoList

                this.allprice = obs.data.data.cartTotalPrice.toFixed(1)

                this.cope = obs.data.data.cartTotalDeposit

                this.pay = obs.data.data.cartTotalRent

                this.call()

                if (this.cartlist.length == 0) {

                    this.checkAll = false

                }

            },

            async alldel () {

                let arr = []

                for (let i in this.cartlist) {

                    arr.push(this.cartlist[i].productId)

                }

                let reo = await this.$api.delete_product({
                    productIds : arr.join(',')
                })

                let obs = await this.$api.cartList()

                this.number = obs.data.data.cartProductVoList.length

                this.cartlist = obs.data.data.cartProductVoList

                this.checkAll = false

                this.piece = 0

                this.allprice = 0

                this.cope = 0

                this.pay = 0

            },

            call () {

                let arrs = []

                for (let i in this.cartlist) {

                    if (this.cartlist[i].checked == 1) {

                        arrs.push(parseInt(i))

                        if (arrs.length == this.cartlist.length) {

                            this.checkAll = true

                        }

                    } else {

                        this.checkAll = false

                    }

                }

                this.checkAllGroup = arrs

                this.piece = arrs.length

            },

            async seeshopp () {

                let res = await this.$api.cartList()

                this.number = res.data.data.cartProductVoList.length

                this.cartlist = res.data.data.cartProductVoList

                this.allprice = res.data.data.cartTotalPrice.toFixed(1)

                this.cope = res.data.data.cartTotalDeposit

                this.pay = res.data.data.cartTotalRent

                this.call()

            }

        },

        async created () {

            this.seeshopp()

        },

        mounted () {

        }

    }

</script>
