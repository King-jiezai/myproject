

<style scoped>

    .top {
      	width: 100%;
      	overflow: hidden;
      	background-color: #fff;
    }
    .box-txt {
      	width:902px;
        height: 46px;
      	float: left;
      	font-size: 12px;
      	color: #333;
      	margin: 0 49px;
        margin-top: 39px;
        margin-bottom: 51px;
        background: #fffdf0;
        border: 1px solid #ffdfbe;
        line-height: 46px;
    }
    .box-txt p:first-child {
        float: left;
        width: 20px;
        height: 20px;
        background: #F8AD36;
        line-height: 20px;
        border-radius: 50%;
        text-align: center;
        color: #fff;
        font-size: 12px;
        margin: 13px;
    }
    .box-left {
      	width: 1000px;
        margin: 0 auto;
    }
    .box-perinfo {
      	width: 1000px;
      	margin: 0 auto;
      	overflow: hidden;
      	font-size: 14px;	
    }
    .box-perinfo_top:first-child {
    	  margin-top: 0px;
    }
    .box-perinfo_top {
      	width: 90%;
      	height: 32px;
      	margin: 0 auto;
      	margin-top: 15px;
    }
    .box-ps {
        float: left;
        line-height: 32px;
        width: 105px;
        text-align: right;
        font-size: 14px;
        color: #333;
        position: relative;
    }
    .box-perinfo .sp1{
      	color: #e60012;
        position: absolute;
        top: 3px;
        left: 40PX;
    }
    .box-perinfo .sp2{
        color: #e60012;
        position: absolute;
        top: 3px;
        left: 25px;
    }
    .box-perinfo .sp3{
        color: #e60012;
        position: absolute;
        top: 3px;
        left: 12px;
    }
    .box-bos {
        float: left;
        width: 109px;
        height: 32px;
        color: #333;
        border: 1px solid #d5d5d5;
        border-radius: 5px;
        padding-left: 10px;
        margin-left: 10px;
        outline:none;
      }
    .box-pross{
        float: left;
        width: 320px;
        height: 32px;
        color: #333;
        border: 1px solid #d5d5d5;
        border-radius: 5px;
        margin-left: 10px;
        outline:none;
    }
    .box-icon {
        float: left;
        width: 320px;
        height: 32px;
        text-align: left;
        padding-left: 10px;
        color: #000;
        line-height: 32px;
    }
    .box-pross p {
        float: left;
    }
    .box-sel {
        float: left;
        width: 320px;
        height: 100px;
        border:1px solid #ccc;
        background: #fff;
        overflow-y: auto;
        cursor: pointer;
    }
    .box-pross .aa {
        padding-left: 10px;
        font-size: 12px;
        line-height: 25px;
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
         padding-right: 10px;
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
    .box-bs p {
        float: left;
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
	      height: 32px;
	      margin-left: 10px;
	      border: 1px solid #d5d5d5;
	      border-radius: 5px;
	      outline:none;
	      position: relative;
          font-size: 12px;
          color: #555;
    }
    .pro-icon {
        float: left;
        width: 100px;
        height: 32px;
        line-height: 32px;
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
    .box-pros p {
	      width: 168px;
	      line-height: 29px;
	      text-align: center;
	      font-weight: bold;
    }
    .box-ss {
	      width: 100px;
	      height:100px;
	      border:1px solid #ccc;
	      background: #fff;
	      overflow-y: auto;
          left: -1px;
	      cursor: pointer;	
    }
    .box-pro .aa {
        line-height: 25px;
	    text-align: center;
    }
    .aa:hover {
	      background: #e60012;
	      color: #fff;
    }
    .box-btn {
	    width: 175px;
        height: 38px;
        margin-top:60px;
        margin-bottom: 10px;
    }
    .box-btn p {
          background: #e60012;
          width: 175px;
          height: 38px;
          font-size: 14px;
          text-align: center;
          line-height: 38px;
          border-radius: 5px;
          color: #fff;
        margin-left: 167px;
    }
    .box-peo {
        line-height: 32px;
        float: left;
        margin-left: 10px;
    }
    .box-pross .sps {
        float: right;
        margin: 10px 10px 0 0;
    }
    .box-pross .spps {
        float: right;
        margin: 10px 10px 0 0;
    }

</style>

<template>

	  <div class="top" @click='bos'>            
        <div class="box-left">
        	  <div class="box-txt">
                <p>!</p>
      				  <p>为了进一步更全面的了解到您到企业，提升企业竞争力，实现轻资产运营，请完善如下企业资料：</p>
    			  </div>
    			
            <div class="box-perinfo">
			    <div class="box-perinfo_top">
		            <div>
                        <p class="box-ps"><span class="sp1">*</span>企业规模</p>
                    </div>

        			<input type="text" v-model='val' @focus="oas" @blur="oass" class="box-bos">
                    <p class="box-peo">人</p>
        			<div v-show="one">
                        <p class="box-os">企业规模能体现贵公司的实力，轻如实填写。</p>
        		    </div>

    				<img src="../../../../static/images/reg/sj2.png" v-show="ooo">

                    <div v-show='ooo' class="box-bs">
                        <p>x</p>请输入企业规模人数
                    </div>
        		</div>

                <div class="box-perinfo_top">
                    <div>
                        <p class="box-ps"><span class="sp2">*</span>企业所在地</p>
                    </div> 

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

                    <div class="box-pro">
                        <div class="pro-icon" @click.stop="btnc">
                            <p>{{city}}</p>
                            <Icon type="arrow-up-b" class="spps" v-show="oo"></Icon>
                            <Icon type="arrow-down-b" class="sps" v-show="os"></Icon>                    
                        </div>
                        <div class="box-ss" v-show="bsc">
                            <div v-for="(item,index) in citys" @click="clcs(index)" class="aa">
                                {{item.lis}}
                            </div>
                        </div>
                    </div>
                    
                    <div class="box-pro" >
                        <div class="pro-icon" @click.stop="btns">
                            <p>{{area}}</p>
                            <Icon type="arrow-up-b" class="spps" v-show="ss"></Icon>
                            <Icon type="arrow-down-b" class="sps" v-show="so"></Icon>                    
                        </div>
                        <div class="box-ss" v-show="bss">
                            <div v-for="(item,index) in areas" @click="clss(index)" class="aa">
                                {{item.reg}}
                            </div>
                        </div>                        
                    </div>                    

                    <div v-show='four' class="box-os">
                          <p class="box-os">请如实填写区域，平台将就近安排为您服务的人员</p>
                    </div>

                    <img src="../../../../static/images/reg/sj2.png" v-show="odo" class="imgs">

                    <div v-show='odo' class="box-bs">
                        <p>x</p>请选择您的企业所在地
                    </div>
                </div>

			    <div class="box-perinfo_top">
    		        <div>
                        <p class="box-ps"><span class="sp3">*</span>企业所属行业</p>
                    </div>
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
    		            <p class="box-os">企业规模能体现贵公司的实力，轻如实填写。</p>
    		        </div>

			        <img src="../../../../static/images/reg/sj2.png" v-show="oco">

            	    <div v-show='oco' class="box-bs">
                        <p>x</p>请填写企业所属行业
                    </div>
				</div>
       				<div class="box-btn" @click="fin">
    				    <p>完成</p>
    				</div>           				             			
          	</div>
        </div>		
    </div>

</template>

<script>


    import { mapState } from 'vuex'

    import { Icon } from 'iview'

	  export default {
        
        components : {  
            Icon
        },

        data () {

            return {
       
                pro :[{             
         				    pros : "广东省" ,
                    city : [{
                        lis : '广州市',
                        region : [{
                            reg : '天河区'
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

                city  : '市',

                area  : '区县', 

                citys : '',

                areas : '',					
                   
                one   : true  ,

                three : true  ,

                four  : true  ,

                ooo   : false ,

                oco   : false ,

                odo   : false ,

                val   : ""    ,

                vcl   : ""    ,

                vdl   : "省"  ,

                bs    : false ,

                bss   : false ,

                bsc   : false ,

                ses   : false ,

                aa    : true,

                bb    : false,

                pp    : false ,

                ps    : true ,

                oo    : true ,

                os    : false ,

                ss    : true ,

                so    : false ,

                sel   : '请选择您的从事行业'    

            } 

        },               

        computed : {

             ...mapState([

                'hid'

            ])

        },

        watch : {

            hid () {

                this.bs = false

                this.bsc = false

                this.bss = false

                this.ses =false  
                
            }

        },

        methods : {

            fin () {

                this.btnc()

                this.oass()

                this.ocs() 

            },

          	bos () {

      			this.bs = false

      			this.bss = false

                this.bsc = false
         			
          	},

          	btn () {

      		    this.bs = !this.bs

      			this.odo = false

      			this.four = true

                this.ps = !this.ps

                this.pp = !this.pp

          	},

          	cls (index) {

                this.citys = this.pro[index].city

          		this.vdl = this.pro[index].pros

                this.city = this.citys[0] ? this.citys[0].lis : ''

                this.area = this.citys[0].region[0] ? this.citys[0].region[0].reg : ''

                this.areas = this.citys[0].region
      			
      			this.bs = false

      			this.odo = false

      			this.four = true

                this.ps = !this.ps

                this.pp = !this.pp
        			
          	},

            btnc () {

                this.bsc = !this.bsc

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

            clcs (index) {

                this.areas = this.citys[index].region

                this.city = this.citys[index].lis

                this.area = this.areas[0] ? this.areas[0].reg : ''

                this.bsc = false

                this.oo = !this.oo

                this.os = !this.os

            },

          	btns () {

      			this.bss = !this.bss

                this.ss = !this.ss

                this.so = !this.so

      			if (this.vdl == '省' || this.city == '市') {

    				this.four = false

    				this.odo = true

      			} else {

    				this.odo = false

    				this.four = true

      			}

          	},

          	clss (index) {

                this.area = this.areas[index].reg

      			this.bss = false

                this.ss = !this.ss

                this.so = !this.so

          	},

          	oas () {

      			this.one = true

      			this.ooo = false      

          	},

          	oass () {

      			if (this.val == '') {

    				this.one = false

    				this.ooo = true

	      		}     		     
          	},          	

          	 ocs () {  

                this.ses = !this.ses 

                this.aa = !this.aa

                this.bb = !this.bb

                if (this.sel == '请选择您的从事行业') {
                
                    this.three = false

                    this.oco = true 
                }    

            },

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