


<style scoped>

    .news {
        width: 700px;
        overflow: hidden;
        background: #EFEDEE;
        padding-bottom: 5px;
    }
    .news .p1 {
        line-height: 35px;
        color: #034C7F;
        font-size: 15px;
        padding-left: 25px;
        float: left;
    }
    .news .p2 {
        float: right;
        font-size: 26px;
        line-height: 35px;
        margin-right: 15px;
        cursor: pointer;
    }
    .news-bottom {
        width: 690px;
        overflow: hidden;
        font-size: 15px;
        background: #fff;
        margin: 0 auto;
        padding: 15px 45px;
        position: relative;
    }
    .fsl-bos {
        margin-bottom: 15px;
        overflow: hidden;
    }
    .left-o {
        float: left;
        width: 100px;
        text-align: right;
        margin-right: 15px;
    }
    .nns {
        color: #e60012;
    }
    .left-left {
        float: left;
        width: 100px;
        text-align: right;
        line-height: 30px;
        margin-right: 15px;
    }
    .o-red {
        color: #e60012;
        position: relative;
        top: 2px;
        margin: 0 5px;
    }
    .reg-lu {
        position: relative;
    }
    .reg-lu .sp1 {
        width: 96px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        float: left;
        border: 1px solid #ccc;
        cursor: pointer;
    }
    .reg-lu .sp2 {
        margin-right: 5px;
    }
    .reg-lus {
        float: left;
        position: relative;
    }
    .reg-san {
        float: left;
        width: 274px;
        height: 30px;
        line-height: 30px;
        border-top : 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        border-left : 1px solid #ccc;
        margin-left: 10px;
        padding: 0 10px;
        cursor: pointer;
        position: relative;   
    }
    .reg-ban {   
        width: 100px;
        height: 80px;
        border: 1px solid #ccc;
        left: 266px;
        position: absolute;
        top: 82px;
        background: #fff;
        z-index: 999;
        overflow-y: auto;
    }
    .reg-bans {    
        width: 100px;
        height: 80px;
        border: 1px solid #ccc;
        position: absolute;
        top: 82px;
        background: #fff;
        z-index: 999;
        left: 363px;
        overflow-y: auto;
    }
    .reg-banss {    
        width: 100px;
        height: 80px;
        border: 1px solid #ccc;
        position: absolute;
        top: 82px;
        background: #fff;
        z-index: 999;
        left: 460px;
        overflow-y: auto;
    }
    .reg-san p {
        float: left;
    }
    .reg-ban div {
        text-align: center;
        line-height: 25px;
        font-size: 13px;
        cursor: pointer;
    }
    .reg-bans div {
        text-align: center;
        line-height: 25px;
        font-size: 13px;
        cursor: pointer;
    }
    .reg-banss div {
        text-align: center;
        line-height: 25px;
        font-size: 13px;
        cursor: pointer;
    }
    .reg-ban div:hover {
        color: #fff;
        background: #e60012;
    }
    .reg-bans div:hover {
        color: #fff;
        background: #e60012;
    }
    .reg-banss div:hover {
        color: #fff;
        background: #e60012;
    }
    .circ {
        width: 20px;
        height: 30px;
        float: left;
        border-top : 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        border-right : 1px solid #ccc;
    }
    .circ .sps {       
        margin: 5px;
    }
    .circ .circs {    
        margin: 5px;
        color: #e60012;
    }
    .oox {
        float: right;
        font-size: 12px;
        margin-right: 10px;
        margin-top: 7px;
        color: #ccc;
    }
    .fog {
        width: 98px;
        border: 1px solid #ccc;
        background: #fff;
        position: absolute;
        top: 85px;
        left: 160px;
        z-index: 999;
    }
    .fog p {
        text-align: center;
        line-height: 35px;
        cursor: pointer;
    }
    .fog p:hover {
        color: #fff;
        background: #e60012;
    }
    .trea {
        width: 400px;
        height: 70px;
        font-size: 12px;
        background: #f5f5f5;
        border: 1px solid #ccc;
        padding: 5px 7px;
        resize: none;
        outline: medium;
    }
    .ins {
        width: 220px;
        height: 30px;
        font-size: 12px;
        padding: 0 10px;
        border: 1px solid #ccc;
        outline: medium;
    }
    .ina {
        width: 180px;
        height: 30px;
        font-size: 12px;
        padding: 0 10px;
        border: 1px solid #ccc;
        outline: medium;
        float: left;
    }
    .phones {
        float: left;
    }
    .inb {
        width: 50px;
        height: 30px;
        font-size: 12px;
        padding: 0 10px;
        border: 1px solid #ccc;
        outline: medium;
    }
    .inc {
        width: 100px;
        height: 30px;
        font-size: 12px;
        padding: 0 10px;
        border: 1px solid #ccc;
        outline: medium;
    }
    .pps {
        margin: 0 10px;
    }
    .mor {
        font-size: 13px;
        margin-left: 115px;
        position: relative;
        top: 1px;
    }
    .pre {
        width: 80px;
        height: 35px;
        color: #fff;
        text-align: center;
        line-height: 35px;
        border-radius: 5px;
        background: #e60012;
        margin: 15px 0 0 115px;
        cursor: pointer;
    }
    

</style>

<template>

    <div class="news" @click="close">
        <div>
            <p class="p1">创建地址</p>
            <p class="p2" @click='errs'>×</p>
        </div>

        <div class="news-bottom" >
            <div class="fsl-bos">
                <p class="left-o nns">新增收货地址</p>
                <span>电话号码和手机号选填一项，其余为必填项</span>
            </div>

            <div class="fsl-bos" >
                <p class="left-left"><span class="o-red">*</span>所在地区</p>
                <div class="reg-lu">
                    <p class="sp1" @click='fogs'><span class="sp2">{{guo}}</span><Icon type="arrow-down-b"></Icon></p>
                </div>
                <div class="reg-lus" @mouseenter="mou" @mouseleave="les">
                    <div class="reg-san" @click.stop="regs" >
                        <p>{{pos}}<span v-show="oo">-</span></p>
                        <p>{{city}}<span v-show="oos">-</span></p>
                        <p>{{area}}</p>              
                    </div>
                    <div class="circ" @click="clk">
                        <Icon type="arrow-up-b" class="sps" v-show="aa"></Icon>
                        <Icon type="arrow-down-b" class="sps" v-show="bb"></Icon>
                        <Icon type="close-circled" class="circs"  v-show="cc" ></Icon>     
                    </div>    
                </div>
            </div>

            <!-- <div class="fog" v-show='fog'>
                <p v-for='(item, index) in res' @click='pso(index)'>{{item.fon}}</p>
            </div> -->
           
            <div class="reg-ban" v-show="ban" >
                <div v-for="(item,index) in pro" @click.stop="cls(index)" >
                      {{item.pros}} 
                      <Icon type="chevron-right" class="oox"></Icon>                                      
                </div>                   
            </div>

            <div class="reg-bans" v-show="bana" >
                <div v-for="(item,index) in citys" @click.stop="scls(index)">
                      {{item.lis}} 
                      <Icon type="chevron-right" class="oox"></Icon>                                         
                </div>               
            </div>

            <div class="reg-banss" v-show="banb" >
                <div v-for="(item,index) in region" @click.stop="clss(index)">
                      {{item.reg}}                                      
                </div>                  
            </div>
            
            <div class="fsl-bos">
                <p class="left-left"><span class="o-red">*</span>详细地址</p>
                <textarea v-model='tea' class="trea" placeholder="建议您如实填写详细地址。例如街道名称，门牌号码，楼层和房间号等信息"></textarea>
            </div>

            <div class="fsl-bos">
                <p class="left-left">邮政编码</p>
                <input v-model='office' type="text" class="ins" placeholder="如您不清楚邮政区号，可不填">
            </div>

            <div class="fsl-bos">
                <p class="left-left"><span class="o-red">*</span>收货人姓名</p>
                <input v-model='name' type="text" class="ins" placeholder="长度不超过25个字符">
            </div>

            <div class="fsl-bos">
                <p class="left-left"><span class="o-red">*</span>手机号码</p>
                <input v-model='phone' type="text" class="ina" placeholder="电话号码手机号必须填一项">

                <div class="phones">
                    <span class="pps">或固定电话</span>
                    <input type="text" v-model='qu' class="inb" placeholder="区号">
                    <span>-</span>
                    <input type="text" v-model='dian' class="inc" placeholder="电话号码">
                </div>
            </div>

            <div class="fsl-bos">
                <input type="checkbox" class="mor">
                <span>设为默认收货地址</span>
                <div class="pre" @click="pre">保存</div>
            </div>
        </div>
    </div>

</template>

<script>

    import { Icon } from 'iview'

    export default {

        components : {

            Icon,

        },

        data () {

            return {

                qu : '',

                dian : '',

                tea   : '',

                name  : '',

                phone : '',

                office: '',
                
                bans  : false,
                
                banas : false,
                
                banbs : false,

                ban   : false,

                bana  : false,

                banb  : false,

                aa    : false,

                bb    : true ,

                cc    : false,

                oos   : false,
                              
                fog   : false,

                oo    : false,

                area  : '',

                citys : '',

                city  : '',

                region: '',

                ber  : 2,               

                guo  : '中国大陆',  

                pos  : '请选择省市区',        

                res  : [{
                    fon : '中国大陆'
                },{
                    fon : '香港'
                },{
                    fon : '澳门'
                }],

                pro :[{             
                    pros : "广东省" ,
                    city : [{
                        lis : '广州市',
                        region : [{
                            reg : '天河区'
                        },{
                            reg : '番禺区'
                        },{
                            reg : '番禺区'
                        },{
                            reg : '番禺区'
                        },{
                            reg : '番禺区'
                        },{
                            reg : '番禺区'
                        },{
                            reg : '番禺区'
                        }]
                    },{
                        lis : '深圳市',
                        region : [{
                            reg : '宝安区'
                        },{
                            reg : '南山区'
                        }]
                    },{
                        lis : '深圳市',
                        region : [{
                            reg : '宝安区'
                        },{
                            reg : '南山区'
                        }]
                    },{
                        lis : '深圳市',
                        region : [{
                            reg : '宝安区'
                        },{
                            reg : '南山区'
                        }]
                    }]
                },{             
                    pros : "黑龙江省" ,
                    city : [{
                        lis : '大庆市',
                        region : [{
                            reg : '龙凤区'
                        },{
                            reg : '大同区'
                        }]
                    },{
                        lis : '伊春市',
                        region : [{
                            reg : '带岭区'
                        },{
                            reg : '西林区'
                        }]
                    }]
                },{             
                    pros : "黑龙江省" ,
                    city : [{
                        lis : '大庆市',
                        region : [{
                            reg : '龙凤区'
                        },{
                            reg : '大同区'
                        }]
                    },{
                        lis : '伊春市',
                        region : [{
                            reg : '带岭区'
                        },{
                            reg : '西林区'
                        }]
                    }]
                }],
                
            }
            
        },

        computed : {

        },

        methods : {

            close () {

                this.ban = false

                this.bana = false

                this.banb = false
            },

            //关闭弹窗按钮
            errs () {

                this.pos = '请选择省市区'
                this.city = ''
                this.area = ''
                this.tea = ''
                this.office = ''
                this.name = ''
                this.phone = ''
                this.qu = ''
                this.dian = ''
                this.oo = false
                this.oos = false

                this.ban = false

                this.bana = false

                this.banb = false
                
                this.$store.commit('bas', false)

                setTimeout(() => {
                    this.$store.commit('bas', true)
                }, 10)

            },

            //保存信息
            async pre () {

                let blur = /^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/

                if (this.pos != '' && this.city != '' && this.area != '' && 
                    this.tea != '' && this.name != '' && 
                    (this.phone != '' || (this.qu != '' && this.dian != ''))) {

                    if (this.phone != '' && !blur.test(this.phone)) {

                        alert('手机号格式不正确！')

                    } else {

                        this.ber++

                        let obs = []

                        let obo = []

                        obs.push(this.pos, this.city, this.area)

                        obo.push(this.qu, this.dian)

                        let pos = await this.$api.addShipping({
                            receiverRegion : this.guo,
                            receiverArea : obs.join('-'),
                            receiverAddress : this.tea,
                            receiverZip : this.office,
                            receiverName : this.name,
                            receiverPhone : this.phone,
                            receiverMobile : obo.join('-'),
                            num : this.ber
                        })

                        let poso = await this.$api.listShipping()

                        this.$store.commit('list', poso)

                        this.$store.commit('bas', false)

                        setTimeout(() => {
                            this.$store.commit('bas', true)
                        }, 10)

                        this.pos = '请选择省市区'
                        this.city = ''
                        this.area = ''
                        this.tea = ''
                        this.office = ''
                        this.name = ''
                        this.phone = ''
                        this.qu = ''
                        this.dian = ''
                        this.oo = false
                        this.oos = false

                        this.ban = false

                        this.bana = false

                        this.banb = false

                        if (this.qu != '' && this.dian != '') {

                            this.$store.commit('cor', false)

                            setTimeout(() => {
                                this.$store.commit('cor', true)
                            }, 10)
                    }

                    }

                } else {

                    alert('添加失败！')

                }

            },

            fogs () {

                this.fog = !this.fog

            },

            pso (index) {

                this.guo = this.res[index].fon

                this.fog = false

            },

            regs () {

                if (this.pos == '请选择省市区' || this.pos !='') {

                    this.ban = !this.ban

                    this.bana = false

                    this.banb = false

                    this.aa = !this.aa

                    this.bb = !this.bb

                    this.cc = false
                }
                else if ( this.area != null) {

                    this.ban = true

                    this.bana = false

                    this.banb = false
                }

            },

            cls (index) {

                this.pos = this.pro[index].pros

                this.citys = this.pro[index].city

                this.city = null

                this.area = null

                this.bana = true

                this.oos = false
               
                this.banb = false              

            },

            scls (index) {

                this.city = this.citys[index].lis

                this.area= this.citys[index].reg

                this.region = this.citys[index].region

                this.banb = true

                this.oo = true

            },

            clss (index) {

                this.area = this.region[index].reg

                this.banb = false

                this.ban = false

                this.bana = false

                this.oos = true

                this.aa = false

                this.bb = true

            },

            clk () {

                this.city = null

                this.pos = null

                this. area = null

                this.ban = false

                this.bana = false

                this.banb = false

                this.cc = false

                this.oo = false

                this.oos = false

                this.pos= "请选择省市区"

                this.bb = true

                this.banas = false

                this.bans = false

                this.banbs = false

            },

            mou () {
                
                if (this.pos != "请选择省市区" && this.city != null && this.area != null) {

                    this.cc = true

                    this.bb = false             
                }    

            },

            les () {

                this.cc = false

                this.bb = true

            }
        },

        created () {
            
        },

        mounted () {

        }

    }

</script>
