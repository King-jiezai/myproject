<template>
	<div class="wrapperRise">
		<div class="incoMode">
			<div class="modeTitle">开票方式</div>
			<div class="curpoi modeChoice">
				订单完成后开单
				<div class="modeHook">
					<span class="hookText">✓</span>
				</div>
			</div>
		</div>
		<div class="invoContent" v-show="iconShow">
			<div class="contentTitle">发票内容</div>
			<div class="curpoi conDetailed">
				商品明细
				<div class="conHook">
					<span class="hookText">✓</span>
				</div>
			</div>
		</div>
		<div ref="procedure" class="procedure">
			<div class="proLf">
				选择开票方式
			</div>
			<span ref="proOne" class="proOne">></span>
			<div ref="proCt" class="proCt">
				填写或核对公司信息
			</div>
			<span ref="proTwo" class="proTwo">></span>
			<div ref="proRg" class="proRg">
				填写收票人信息
			</div>
		</div>
		<div class="riseIns" v-show="iconShow">发票将在订单完成之后3-5个工作日寄出</div>
		<div class="contact" v-show="contactShow">
			<div class="company">
				<div class="panyName"><span class="asterisk">*</span>单位名称</div>
				<div class="panyInput">
					<input type="text" id="panyInput"
						v-model="panyValue"
						@blur="panyBlur"
						@input="panyInput"/>
				</div>
				<div class="warning" v-show="panyShow">
					<div class="symbol">-</div><span class="symbolCon">单位名称不能为空</span>
				</div>
			</div>
			<!--Identification code-->
			<div class="idCode">
				<div class="codeName"><span class="asterisk">*</span>纳税人识别码</div>
				<div class="codeInput">
					<input type="text" id="codeInput"
						v-model="codeValue"
						@blur="codeBlur"
						@input="codeInput"/>
				</div>
				<div class="warning" v-show="codeShow">
					<div class="symbol">-</div><span class="symbolCon">识别码不能为空</span>
				</div>
			</div>
			<!--Registered address-->
			<div class="reAdd">
				<div class="addName"><span class="asterisk">*</span>注册地址</div>
				<div class="addInput">
					<input type="text" id="addInput"
						v-model="addValue"
						@blur="addBlur"
						@input="addInput"/>
				</div>
				<div class="warning" v-show="addShow">
					<div class="symbol">-</div><span class="symbolCon">注册地址不能为空</span>
				</div>
			</div>
			<div class="reIphone">
				<div class="iphoneName"><span class="asterisk">*</span>注册电话</div>
				<div class="iphoneInput">
					<input type="text" id="iphoneInput"
						v-model="iphoneValue"
						@blur="iphoneBlur"
						@input="iphoneInput"/>
				</div>
				<div class="warning" v-show="iphoneShow">
					<div class="symbol">-</div><span class="symbolCon">注册电话不能为空</span>
				</div>
			</div>
			<div class="openBank">
				<div class="oBankName"><span class="asterisk">*</span>开户银行</div>
				<div class="oBankInput">
					<input type="text" id="oBankInput"
						v-model="oBankValue"
						@blur="oBankBlur"
						@input="oBankInput"/>
				</div>
				<div class="warning" v-show="oBankShow">
					<div class="symbol">-</div><span class="symbolCon">开户银行不能为空</span>
				</div>
			</div>
			<!-- account bank -->
			<div class="accBank">
				<div class="aBankName"><span class="asterisk">*</span>账户银行</div>
				<div class="aBankInput">
					<input type="text" id="aBankInput"
						v-model="aBankValue"
						@blur="aBankBlur"
						@input="aBankInput"/>
				</div>
				<div class="warning" v-show="aBankShow">
					<div class="symbol">-</div><span class="symbolCon">账户银行不能为空</span>
				</div>
			</div>
		</div>
		<div class="receiveMode" v-show="receiveShow">
			<!-- N => Name -->
			<div class="recPeopleN">
				<div class="peoName"><span class="asterisk">*</span>收票人姓名</div>
				<div class="peoInput">
					<input type="text" id="peoInput"
						v-model="peoValue"
						@blur="peoBlur"
						@input="peoInput"/>
				</div>
				<div class="warning" v-show="peoShow">
					<div class="symbol">-</div><span class="symbolCon">姓名不能为空</span>
				</div>
			</div>
			<!-- I => Iphone -->
			<div class="recPeopleI">
				<div class="peoIphone"><span class="asterisk">*</span>收票人手机</div>
				<div class="peoIInput">
					<input type="text" id="peoIInput"
						v-model="peoIValue"
						@blur="peoIBlur"
						@input="peoIInput"/>
				</div>
				<div class="warning" v-show="peoIShow">
					<div class="symbol">-</div><span class="symbolCon">手机号不能为空</span>
				</div>
			</div>
			<!-- P => Province -->
			<div class="recPeopleP">
				<div class="peoProv"><span class="asterisk">*</span>收票人省份</div>
				<div class="province">
					<div class="curpoi Sheng">请选择▼</div>
					<div class="curpoi Shi">请选择▼</div>
					<div class="curpoi Qu">请选择▼</div>
				</div>
				<div class="warning" v-show="provinceShow">
					<div class="symbol">-</div><span class="symbolCon">请选择省份</span>
				</div>
			</div>
			<!-- A => Address -->
			<div class="recA">
				<div class="peoAddress"><span class="asterisk">*</span>详细地址</div>
				<div class="peoAInput">
					<input type="text" id="peoAInput"
						v-model="peoAValue"
						@blur="peoABlur"
						@input="peoAInput"/>
				</div>
				<div class="warning" v-show="peoAShow">
					<div class="symbol">-</div><span class="symbolCon">地址不能为空</span>
				</div>
			</div>
		</div>
		<div ref="riseOperation" class="riseOperation">
			<div class="curpoi riseSubmit" @click="riseSubmit">
				下一步
			</div>
			<div class="curpoi riseCancel">
				取消
			</div>
		</div>
	</div>
</template>

<script>

	export default{

		data () {

			return {
				/* 计算显示组件 */
				conIndex: 0,
				/* 商品明细 */
				iconShow: true,
				/* 联系详情 */
				contactShow: false,
				/* 收票人信息 */
				receiveShow: false,
				/* 单位名称储存 */
				panyValue: '',
				panyShow: false,
				/* 纳税人识别码 */
				codeValue: '',
				codeShow: false,
				/* 注册地址 */
				addValue: '',
				addShow: false,
				/* 注册电话 */
				iphoneValue: '',
				iphoneShow: false,
				/* 开户银行 */
				oBankValue: '',
				oBankShow: false,
				/* 账户银行 */
				aBankValue: '',
				aBankShow: false,
				/* 收票人姓名 */
				peoValue: '',
				peoShow: false,
				/* 收票人手机 */
				peoIValue: '',
				peoIShow: false,
				/* 省份 */
				provinceShow: false,
				/* 详细地址 */
				peoAValue: '',
				peoAShow: false
			}

		},

		methods: {

			riseSubmit () {

				switch ( this.conIndex ){
					case 0:
						this.iconShow = false
						this.contactShow = true
						this.$refs.procedure.style.marginTop = 20 + 'px'
						this.$refs.riseOperation.style.marginTop = 20 + 'px'
						this.$refs.proOne.style.color = '#020202'
						this.$refs.proCt.style.color = '#111111'
						this.conIndex++
						this.wrapperH = 647
						this.$emit('wrapperH', this.wrapperH)
						break;
					case 1:
						this.conShow = false
						this.contactShow = false
						this.receiveShow = true
						this.$refs.procedure.style.marginTop = 20 + 'px'
						this.$refs.proTwo.style.color = '#020202'
						this.$refs.proRg.style.color = '#111111'
						this.conIndex++
						this.wrapperH = 627
						this.$emit('wrapperH', this.wrapperH)
						break;
				}

			},

			/* 判断单位名称是否为空 */
			panyBlur () {

				if( this.panyValue.length == '' ){
					this.panyShow = true
				} else {
					this.panyShow = false
				}

			},

			panyInput () {

				if( this.panyValue.length != '' ){
					this.panyShow = false
				}

			},

			/* 判断识别码是否为空 */
			codeBlur () {

				if( this.codeValue.length == '' ){
					this.codeShow = true
				} else {
					this.codeShow = false
				}

			},

			codeInput () {

				if( this.codeValue.length != '' ){
					this.codeShow = false
				}

			},

			/* 判断注册地址是否为空 */
			addBlur () {

				if( this.addValue.length == '' ){
					this.addShow = true
				} else {
					this.addShow = false
				}

			},

			addInput () {

				if( this.addValue.length != '' ){
					this.addShow = false
				}

			},

			/* 判断电话是否为空 */
			iphoneBlur () {

				if( this.iphoneValue.length == '' ){
					this.iphoneShow = true
				} else {
					this.codeShow = false
				}

			},

			iphoneInput () {

				if( this.iphoneValue.length != '' ){
					this.iphoneShow = false
				}

			},

			/* 判断开户银行是否为空 */
			oBankBlur () {

				if( this.oBankValue.length == '' ){
					this.oBankShow = true
				} else {
					this.oBankShow = false
				}

			},

			oBankInput () {

				if( this.oBankValue.length != '' ){
					this.oBankShow = false
				}

			},

			/* 判断账户银行是否为空 */
			aBankBlur () {

				if( this.aBankValue.length == '' ){
					this.aBankShow = true
				} else {
					this.aBankShow = false
				}

			},

			aBankInput () {

				if( this.aBankValue.length != '' ){
					this.aBankShow = false
				}

			},

			/* 判断收票人姓名是否为空 */
			peoBlur () {

				if( this.peoValue.length == '' ){
					this.peoShow = true
				} else {
					this.peoShow = false
				}

			},

			peoInput () {

				if( this.peoValue.length != '' ){
					this.peoShow = false
				}

			},

			/* 判断收票人电话是否为空 */
			peoIBlur () {

				if( this.peoIValue.length == '' ){
					this.peoIShow = true
				} else {
					this.peoIShow = false
				}

			},
			peoIInput () {
				if( this.peoIValue.length != '' ){
					this.peoIShow = false
				}
			},

			/* 判断收票人省份是否为空 */
			peoABlur () {

				if( this.peoAValue.length == '' ){
					this.peoAShow = true
				} else {
					this.peoAShow = false
				}

			},

			peoAInput () {

				if( this.peoAValue.length != '' ){
					this.peoAShow = false
				}

			},

			/* 判断收票人电话是否为空 */
			peoABlur () {

				if( this.peoAValue.length == '' ){
					this.peoAShow = true
				} else {
					this.peoAShow = false
				}

			},

			peoAInput () {

				if( this.peoAValue.length != '' ){
					this.peoAShow = false
				}

			}
		}
	}

</script>

<style scoped>

	.incoMode{
		margin-top: 18px;
		margin-left: 72px;
		width: 210px;
		height: 34px;
		line-height: 34px;
		font-size: 13px;
		color: #434444;
	}
	.modeTitle{
		float: left;
		width: 67px;
		height: 34px;
		text-align: right;
	}
	.modeChoice{
		position: relative;
		float: right;
		width: 122px;
		height: 30px;
		text-align: center;
		border: #FF0000 solid 2px;
	}
	.modeHook{
		position: absolute;
		left: 103px;
		top: 11px;
		border-bottom: 20px solid #ff0000;
	    border-left: 20px solid transparent;
	}
	.invoContent{
		margin-top: 17px;
		margin-left: 72px;
		width: 170px;
		height: 33px;
		line-height: 33px;
		font-size: 13px;
		color: #434444;
	}
	.contentTitle{
		float: left;
		width: 67px;
		text-align: right;
	}
	.conDetailed{
		position: relative;
		float: right;
		width: 82px;
		height: 29px;
		text-align: center;
		border: #FF0000 solid 2px;
	}
	.conHook{
		position: absolute;
		left: 62px;
		top: 9px;
		border-bottom: 20px solid #ff0000;
	    border-left: 20px solid transparent;
	}
	.procedure{
		margin-top: 35px;
		margin-left: 73px;
		width: 423px;
		height: 40px;
		line-height: 40px;
		font-size: 12.5px;
		color: #434444;
		text-align: center;
	}
	.proLf{
		float: left;
		width: 102px;
		height: 38px;
		border: #b0b0b0 dashed 1px;
		border-radius: 5px;
	}
	.proOne{
		float: left;
		margin-left: 10px;
		margin-right: 10px;
		font-size: 25px;
		color: #989898;
	}
	.proCt{
		float: left;
		width: 130px;
		height: 38px;
		border: #b0b0b0 dashed 1px;
		border-radius: 5px;
		color: #989898;
	}
	.proTwo{
		float: left;
		margin-left: 10px;
		margin-right: 10px;
		font-size: 25px;
		color: #989898;
	}
	.proRg{
		float: right;
		width: 110px;
		height: 38px;
		border: #b0b0b0 dashed 1px;
		border-radius: 5px;
		color: #989898;
	}
	.riseIns{
		margin-top: 20px;
		margin-left: 160px;
		width: 225px;
		height: 17px;
		font-size: 12.5px;
		color: #989898;
	}
	.contact{
		margin-top: 20px;
		margin-left: 49px;
		width: 480px;
		height: 245px;
		color: #666666;
		font-size: 12.5px;
	}
	/* 单位名称 */
	.company{
		width: 480px;
		height: 28px;
		line-height: 28px;
	}
	.panyName{
		float: left;
		width: 92px;
		height: 28px;
		text-align: right;
	}
	.panyInput{
		float: left;
		margin-left: 20px;
		width: 238px;
		height: 28px;
	}
	#panyInput{
		outline: none;
		border: #babec1 solid 1px;
		width: 236px;
		height: 26px;
		text-indent: 10px;
	}
	/* 警告 */
	.warning{
		float: right;
		width: 120px;
		height: 28px;
	}
	.symbol{
		float: left;
		margin-top: 4px;
		width: 18px;
		height: 18px;
		line-height: 15px;
		text-align: center;
		font-size: 25px;
		color: #FFFFFF;
		background: #FF0000;
		border-radius: 50%;
	}
	.symbolCon{
		float: right;
		width: 100px;
		text-align: left;
	}
	/* 纳税人识别码 */
	.idCode{
		margin-top: 15px;
		width: 480px;
		height: 28px;
		line-height: 28px;
	}
	.codeName{
		float: left;
		width: 92px;
		height: 28px;
		text-align: right;
	}
	.codeInput{
		float: left;
		margin-left: 20px;
		width: 238px;
		height: 28px;
	}
	#codeInput{
		outline: none;
		border: #babec1 solid 1px;
		width: 236px;
		height: 26px;
		text-indent: 10px;
	}
	/* 注册地址 */
	.reAdd{
		margin-top: 15px;
		width: 480px;
		height: 28px;
		line-height: 28px;
	}
	.addName{
		float: left;
		width: 92px;
		height: 28px;
		text-align: right;
	}
	.addInput{
		float: left;
		margin-left: 20px;
		width: 238px;
		height: 28px;
	}
	#addInput{
		outline: none;
		border: #babec1 solid 1px;
		width: 236px;
		height: 26px;
		text-indent: 10px;
	}
	/* 注册电话 */
	.reIphone{
		margin-top: 15px;
		width: 480px;
		height: 28px;
		line-height: 28px;
	}
	.iphoneName{
		float: left;
		width: 92px;
		height: 28px;
		text-align: right;
	}
	.iphoneInput{
		float: left;
		margin-left: 20px;
		width: 238px;
		height: 28px;
	}
	#iphoneInput{
		outline: none;
		border: #babec1 solid 1px;
		width: 236px;
		height: 26px;
		text-indent: 10px;
	}
	/* 开户银行 */
	.openBank{
		margin-top: 15px;
		width: 480px;
		height: 28px;
		line-height: 28px;
	}
	.oBankName{
		float: left;
		width: 92px;
		height: 28px;
		text-align: right;
	}
	.oBankInput{
		float: left;
		margin-left: 20px;
		width: 238px;
		height: 28px;
	}
	#oBankInput{
		outline: none;
		border: #babec1 solid 1px;
		width: 236px;
		height: 26px;
		text-indent: 10px;
	}
	/* 账号银行 */
	.accBank{
		margin-top: 15px;
		width: 480px;
		height: 28px;
		line-height: 28px;
	}
	.aBankName{
		float: left;
		width: 92px;
		height: 28px;
		text-align: right;
	}
	.aBankInput{
		float: left;
		margin-left: 20px;
		width: 238px;
		height: 28px;
	}
	#aBankInput{
		outline: none;
		border: #babec1 solid 1px;
		width: 236px;
		height: 26px;
		text-indent: 10px;
	}
	/* 填写收票人信息 */
	.receiveMode{
		margin-top: 20px;
		margin-left: 64px;
		width: 465px;
		height: 230px;
		color: #666666;
		font-size: 12.5px;
	}
	/* 收票人姓名 */
	.recPeopleN{
		width: 465px;
		height: 26px;
		line-height: 26px;
	}
	.peoName{
		float: left;
		width: 76px;
		height: 26px;
		text-align: right;
	}
	.peoInput{
		float: left;
		margin-left: 20px;
		width: 238px;
		height: 26px;
	}
	#peoInput{
		outline: none;
		border: #babec1 solid 1px;
		width: 236px;
		height: 24px;
		text-indent: 10px;
	}
	/* 收票人手机 */
	.recPeopleI{
		margin-top: 30px;
		width: 465px;
		height: 26px;
		line-height: 26px;
	}
	.peoIphone{
		float: left;
		width: 76px;
		height: 26px;
		text-align: right;
	}
	.peoIInput{
		float: left;
		margin-left: 20px;
		width: 238px;
		height: 26px;
	}
	#peoIInput{
		outline: none;
		border: #babec1 solid 1px;
		width: 236px;
		height: 24px;
		text-indent: 10px;
	}
	/* 收票人省份 */
	.recPeopleP{
		margin-top: 30px;
		width: 465px;
		height: 26px;
		line-height: 26px;
	}
	.peoProv{
		float: left;
		width: 76px;
		height: 26px;
		text-align: right;
	}
	.province{
		float: left;
		margin-left: 20px;
		width: 238px;
		height: 26px;
		text-align: center;
	}
	.Sheng{
		float: left;
		width: 70px;
		height: 24px;
		border: #c2c2c2 solid 1px;
	}
	.Shi{
		margin-left: 10px;
		float: left;
		width: 70px;
		height: 24px;
		border: #c2c2c2 solid 1px;
	}
	.Qu{
		margin-left: 10px;
		float: left;
		width: 70px;
		height: 24px;
		border: #c2c2c2 solid 1px;
	}
	/* 详细地址 */
	.recA{
		margin-top: 30px;
		width: 465px;
		height: 26px;
		line-height: 26px;
	}
	.peoAddress{
		float: left;
		width: 76px;
		height: 26px;
		text-align: right;
	}
	.peoAInput{
		float: left;
		margin-left: 20px;
		width: 238px;
		height: 26px;
	}
	#peoAInput{
		outline: none;
		border: #babec1 solid 1px;
		width: 236px;
		height: 24px;
		text-indent: 10px;
	}
	/* 执行按钮 */
	.riseOperation{
		margin-top: 37px;
		margin-left: 160px;
		width: 198px;
		height: 35px;
	}
	.riseSubmit{
		float: left;
		width: 90px;
		height: 33px;
		border: #cfcfcf solid 1px;
		border-radius: 5px;
		background: #e8e8e8;
		text-align: center;
		line-height: 33px;
	}
	.riseCancel{
		float: right;
		margin-left: 14px;
		width: 90px;
		height: 33px;
		border: #cfcfcf solid 1px;
		border-radius: 5px;
		background: #e8e8e8;
		text-align: center;
		line-height: 33px;
	}
	
</style>