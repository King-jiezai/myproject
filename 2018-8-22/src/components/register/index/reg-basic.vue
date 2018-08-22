

<style scoped>

    .box-top {
	      text-align: center;
	      height: 35px;
	      float: left;
	      margin-left: 49px;
	      line-height: 30px;
    }
    .box-txt {
      	width:100%;
      	float: left;
      	font-size: 16px;
      	color: #666;
      	margin: 35px 0 60px 0;
    }
    .box-txts {
      	width: 100%;
      	float: left;
      	font-size: 17px;
      	color: #000;
      	margin: 0 0 32px 0;
    }
    .box-txts span {
      	padding: 11px 2px;
      	background: #e60012;
      	float: left;
      	margin-right: 10px;
    }
    .box-left {
      	width: 100%;
      	padding: 0 0 0 49px;
      	float: left;
    }
    .box-perinfo {
      	width: 1000px;
      	margin: 0 auto;
      	height: 318px;
      	overflow: hidden;
      	font-size: 14px;	
    }
    .box-perinfo_top:first-child {
    	  margin-top: 0px;
    }
    .box-perinfo_top {
      	width: 95%;
      	height: 32px;
      	margin: 0 auto;
      	margin-top: 15px;
    }
    .box-perinfo p {
      	float: left;
      	line-height: 32px;
      	width: 110px;
      	text-align: right;
    }
    .box-perinfo input {
      	float: left;
      	width: 294px;
      	height: 32px;
      	color: #333;
      	border: 1px solid #d5d5d5;
      	border-radius: 5px;
      	padding-left: 10px;
      	margin-left: 10px;
      	outline:none;
    }
    .box-pross {
        float: left;
        width: 294px;
        height: 32px;
        color: #333;
        border: 1px solid #d5d5d5;
        border-radius: 5px;
        margin-left: 10px;
        position: relative;
        
    }
    .box-icon {
        float: left;
        width: 294px;
        height: 32px;
        text-align: left;
        color: #000;
        line-height: 32px;
    }
    .box-pross .sps {
        float: right;
        margin: -22px 10px 0 0;
    }
    .box-pross .spps {
        float: right;
        margin: -22px 10px 0 0;
    }
    .box-pross p {
        float: left;
        width: 294px;
        height: 32px;
        text-align: left;
        padding-left: 10px;
        color: #000;
    }
    .box-sel {
        float: left;
        width: 294px;
        height: 100px;
        border:1px solid #ccc;
        background: #fff;
        overflow-y: auto;
        top: 29px;
        position: absolute;
        cursor: pointer;
    }
    .box-perinfo span{
      	color: #e60012;
        margin: 0 5px 0 10px;
        position: relative;
        top: 3px;
    }
    .box-os {
      	float: left;
      	line-height: 32px;
      	font-size: 12px;
      	color: #999;
      	margin-left: 10px;
    }
    .box-bs {
      	float: left;
      	height: 32px;
      	width: 160px;
      	border: 1px solid #F9C3C3;
      	line-height: 30px;
      	color: #e60012;
      	background: #ffE6D9;
      	position: relative;
      	z-index: 0;
      	border-radius: 5px;
    }
    .box-perinfo_top img {
      	float: left;
      	margin: 10px 0 10px 10px;
      	position: relative;
      	left: 1px;
      	z-index: 1;
    }
    .box-perinfo_top span {
        color: #e60012!important;
    }
    .box-bs p {
      	width: 15px;
      	height: 15px;
        font-size: 12px;
      	border-radius: 50%;
      	background: #e60012;
      	color: #fff;
      	line-height: 15px;
      	text-align: center;
      	margin: 7px;
    }
    .box-pro {
      	float: left;
      	width: 100px;
      	height: 29px;
      	margin-left: 10px;
      	border: 1px solid #d5d5d5;
      	border-radius: 5px;
      	outline:none;
    }
    .pro-icon {
        float: left;
        width: 100px;
        height: 29px;
        line-height: 29px;
        text-align: center;
        font-weight: bold;
        cursor: pointer;
    }
     .pro-icons {
        float: left;
        width: 184px;
        height: 29px;
        line-height: 29px;
        text-align: center;
        font-weight: bold;
        cursor: pointer;
    }
    .box-pro .spps {
        float: right;
        margin: -20px 10px 0 0 ;
    }
    .box-pro .sps {
        float: right;
        margin: -20px 10px 0 0 ;
    }
    .box-pros .spps {
        float: right;
        margin: -20px 10px 0 0 ;
    }
    .box-pros .sps {
        float: right;
        margin: -20px 10px 0 0 ;
    }
    .box-pros {
      	float: left;
      	width: 184px;
      	height: 29px;
      	margin-left: 10px;
      	border: 1px solid #d5d5d5;
      	border-radius: 5px;
      	outline:none;
    }
    .box-pro p {
      	width: 100px;
      	line-height: 29px;
      	text-align: center;
      	font-weight: bold;
    }
    .box-pros p {
      	width: 168px;
      	line-height: 29px;
      	text-align: center;
      	font-weight: bold;
    }
    .box-ss {
      	float: left;
      	width: 100px;
      	height:100px;
      	border:1px solid #ccc;
      	background: #fff;
      	overflow-y: auto;
      	position: relative;
      	cursor: pointer;	
    }
    .box-sss {
      	float: left;
      	width: 184px;
      	height:100px;
      	border:1px solid #ccc;
      	background: #fff;
      	overflow-y: auto;
      	text-align: center;
      	position: relative;
      	cursor: pointer;
    }
    .box-pross .aa {
        padding-left: 10px;
    }
    .box-pro .aa {
      	text-align: left;
      	padding:0 17px;
    }
    .box-pros .aa {
      	text-align: left;
      	padding:0 60px;
    }
    .aa:hover {
      	background: #e60012;
      	color: #fff;
    }
    .box-btn {
    	  width: 330px;
        margin-bottom: 20px;
        cursor: pointer;
    }
    .box-btn p{
      	background: #e60012;
      	width: 75px;
      	height: 30px;
      	font-size: 14px;
      	text-align: center;
      	line-height: 30px;
      	border-radius: 5px;
      	margin: 40px 0 0 146px;
      	color: #fff;
    }
    .male {
        padding-left: 122px;
    }

</style>

<template>

    <div class="box-left">
  		  <div class="box-txt">
			      <p>完善您的信息，平台会根据您的基本信息，为您推荐、匹配最适合您的机型。</p>
  			</div>

      	<div class="box-txts">
      			<span></span>
      			<p>请填写您的基本信息</p>
      	</div>

      	<div class="box-perinfo">
      			<div class="box-perinfo_top">
      					<div><p><span>*</span>姓名</p></div>
      					<input type="text" v-model='val' @focus="oas" @blur="oass">          					
      					<div v-show="one" class="box-os">为了在租赁设备时方便，请填写真实姓名。请放心，该信息仅后台可见。</div>
					      <img src="../../../../static/images/reg/sj2.png" v-show="ooo">
              	<div v-show='ooo' class="box-bs"><p>x</p>请输入您的真实姓名</div>
      			</div>

            <div class="box-perinfo_top male">
                <RadioGroup v-model="sex" @on-change='chon' size='large'>
                    <Radio label="male" size='large'>
                        男
                    </Radio>
                    <Radio label="female" size='large'>
                        女
                    </Radio>
                </RadioGroup>
            </div>

      			<div class="box-perinfo_top">
      					<div><p><span>*</span>昵称</p></div>
      					<input type="text" v-model='vbl' @focus="obs" @blur="obss">
                <div v-show='obo'>
          					<img src="../../../../static/images/reg/sj2.png">
                  	<div class="box-bs"><p>x</p>请输入您的昵称</div>
                </div>

                <div v-show='obn'>
                    <img src="../../../../static/images/reg/sj2.png">
                    <div class="box-bs"><p>x</p>该昵称已存在</div>
                </div>
      			</div>

      			<div class="box-perinfo_top">
      					<div><p><span>*</span>所从事行业</p></div>
                <div class="box-pross">
                   <div class="box-icon" @click.stop="ocs">
                        <p>{{sel}}</p>
                        <Icon type="arrow-up-b" class="spps" v-show="aa"></Icon>
                        <Icon type="arrow-down-b" class="sps" v-show="bb"></Icon>                    
                    </div>
                    <div class="box-sel" v-show="ses">
                        <div v-for="(item,index) in arr" @click="ocss(index)" class="aa">
                            {{item.ins}}
                        </div>
                    </div>
                </div>    
      					<div v-show='three' class="box-os">
      						  请填写所从事行业，为你推荐、匹配最适合您的设备机型。
      					</div>
					      <img src="../../../../static/images/reg/sj2.png" v-show="oco">
              	<div v-show='oco' class="box-bs"><p>x</p>请选择您的从事行业</div>
      			</div>

      			<div class="box-perinfo_top">
      					<div><p><span>*</span>设备使用地址</p></div> 
      					<div class="box-pro">
      						 <div class="pro-icon" @click.stop="btn">
                        <p>{{vdl}}</p>
                        <Icon type="arrow-up-b" class="spps" v-show="ps"></Icon>
                        <Icon type="arrow-down-b" class="sps" v-show="pp"></Icon>                    
                    </div>
      						  <div class="box-ss" v-show="bs">
    								    <div v-for="(item,index) in pro" @click="cls(index)" class="aa">
    									      {{item.pros}}
    								    </div>
    						    </div>
      			    </div>
      					
      			<div class="box-pros" >
      				  <div class="pro-icons" @click.stop="btns">
                    <p>{{city}}</p>
                    <Icon type="arrow-up-b" class="spps" v-show="oo"></Icon>
                    <Icon type="arrow-down-b" class="sps" v-show="os"></Icon>                    
                </div>
      					<div class="box-sss" v-show="bss">
    								<div v-for="(item,index) in citys" @click="clss(index)" class="aa">
    									  {{item.lis}}
    								</div>
    						</div>
      			</div>

      			<div v-show='four' class="box-os box-oss">
      					平台会根据您的使用域为您推荐更合适的地区，在遇到需要现场沟通的需求时，更加方便。
      			</div>

					  <img src="../../../../static/images/reg/sj2.png" v-show="odo" class="imgs">
              	<div v-show='odo' class="box-bs"><p>x</p>请选择您的使用地址</div>
      			</div>
      				
      			<div class="box-btn" @click="bts">
      					<p>完成</p>
      			</div>    			
        </div>
    </div>

</template>

<script>

    import { mapState } from 'vuex'

    import { Icon, RadioGroup, Radio } from 'iview'

	  export default {
        
        components : {  

          Icon,
          RadioGroup,
          Radio,

        },

        data () {

            return {

                sex : 'male',
       
                pro :[{             
                    pros : "广东省" ,
                    city : [{
                        lis : '广州市',                      
                    },{
                        lis : '深圳市',                      
                    }]
                },{             
                    pros : "黑龙江省" ,
                    city : [{
                        lis : '大庆市',
                    },{
                        lis : '伊春市',
                       
                    }]
                }],

                arr :[{
                  ins : '保险'
                },{
                  ins : '证券'
                },{
                  ins : '电信'
                },{
                  ins : '电力'
                },{
                  ins : '石油石化'
                },{
                  ins : '医疗'
                },{
                  ins : '教育'
                },{
                  ins : '互联网'
                },{
                  ins : '金融'
                },{
                  ins : '房地产业'
                }],
                   
                one   : true ,

                three : true ,

                four  : true ,

                ooo   : false,

              	obo   : false,

                obn   : false,

                oco   : false,

                odo   : false,

              	val   : ""   ,

              	vbl   : ""   ,

              	vcl   : ""   ,

              	vdl   : "省" ,

              	bs    : false,

              	bss   : false,

                ses   : false,

              	citys : '' ,

                city  : '市' ,

                aa    : true ,

                bb    : false,

                ps    : true ,

                pp    : false,

                oo    : true ,

                os    : false,

                sel   : '请选择您的从事行业'

           	
            } 

        },               

        computed : {

             ...mapState([

                'bas'

            ])

        },

        watch : {

            bas () {

                this.bs = false

                this.bss = false

                this.ses =false  
            }

        },

        methods : {

            //选择性别
            chon (index) {

                this.sex = index

            },

            //个人注册
            async bts () {

                let arr = this.$store.state.info

                let ooo = []

                ooo.push(this.vdl, this.city)

                this.oass()

                this.obss()

                this.ocs()

                this.btns()

                this.obss()

                if (this.ooo == false && this.obo == false && this.obn == false && this.oco == false && this.odo == false) {

                    let sexs = ''

                    if (this.sex == 'male') {
                        sexs = 1
                    }
                    if (this.sex == 'female') {
                        sexs = 0
                    }

                    let reo = {
                        type:this.$store.state.info.type,
                        sex:sexs,
                        source:this.$store.state.info.source,
                        phone:this.$store.state.info.phone,
                        phoneCode:this.$store.state.info.phoneCode,
                        password:this.$store.state.info.password,
                        fullName:this.val,
                        username:this.vbl,
                        industry:this.sel,
                        address:ooo.join('-')
                    }
                  
                    let res = await this.$api.register(reo)

                    if (res.data.status == 1) {

                        this.$router.push('/login')

                    }

                }

            },

            //选择设备使用地址
        		btn () {

        			  this.bs = !this.bs

        			  this.odo = false

        			  this.four = true

                this.ps = !this.ps

                this.pp = !this.pp
        		},

            //选择设备使用地址
        		cls (index) {

        			  this.citys = this.pro[index].city

                this.vdl = this.pro[index].pros

                this.city = this.citys[0] ? this.citys[0].lis : ''
        			
        			  this.bs = false

        			  this.odo = false

        			  this.four = true

                this.ps = !this.ps

                this.pp = !this.pp
      			
        		},

            //选择设备使用地址
        		btns () {

        			  this.bss = !this.bss

                this.oo = !this.oo

                this.os = !this.os

        			  if (this.vdl == '省') {

            				this.four = false

            				this.odo = true

            		} else {

            				this.odo = false

            				this.four = true

            		}

        		},

            //选择设备使用地址
        		clss (index) {

        			  this.city = this.citys[index].lis

        			  this.bss = false

                this.oo = !this.oo

                this.os = !this.os

        		},

            //姓名输入框获取焦点
        		oas () {

        			  this.one = true

        			  this.ooo = false     

        		},

            //姓名输入框失去焦点
        		oass () {

        			  if (this.val == '') {

        				    this.one = false

        				    this.ooo = true
 	      			  }     		      

        		},   

            //昵称输入框获取焦点
        		obs () {
  		
        			  this.obo = false    

        		},

            //昵称输入框失去焦点
        		async obss () {

                let reo = await this.$api.checkUsername({
                    username:this.vbl
                })

        			  if (this.vbl == '') {

        				    this.obo = true

                    this.obn = false

        			  }

                if (this.vbl != '' && reo.data.status == 1) {

                    this.obo = false

                    this.obn = false

                }

                if (reo.data.status == 0 && this.vbl != '') {

                    this.obn = true

                    this.obo = false

                }

        		},

            //选择所从事行业
        		ocs () {  

                this.ses = !this.ses 

                this.aa = !this.aa

                this.bb = !this.bb

                if (this.sel == '请选择您的从事行业') {
                
                  this.three = false

                  this.oco = true

                  
                }    

        		},

            //选择所从事行业
        		ocss (index) {

             			this.sel = this.arr[index].ins

                  this.ses = false

                  this.three = true

                  this.oco = false

                  this.aa = !this.aa

                  this.bb = !this.bb 
        			
        		}  

        },

        created () {
            
        },

        mounted () {

        }

    }

</script>