<template>
	<div class="invoiceNotice">
		<div  v-show="invoTypes">
			为响应环保，广租自营全面启用电子普通发票，电子普通发票是税务机关认可的有效收付款凭证，
			<br />
			与纸质普通发票具有同等法律效力，可用于报销入账、售后维权等。<span class="noticeA">普通发票相关信息>></span>
			<br />
			如商品由第三方卖家销售，发票类型及内容将由该卖家决定。<span class="noticeA">发票信息相关问题>></span>
		</div>
		<div v-show="!invoTypes">
			我公司依法开具发票，请您按照税法规定使用发票。
			<br />
			<span class="noticeA">发票制度说明>>首次开具增值税专用发票>></span>
			<br />
			如果商品由第三方卖家销售，发票类型和内容将由该卖家决定，发票由卖家开具并提供。<span class="noticeA">发票信息相关问题>></span>
		</div>
	</div>
</template>

<script>

	export default{

		props: {

			invoTypes: Boolean
			
		}

	}

</script>

<style scoped>

	.invoiceNotice{
		margin-top: 12px;
		margin-left: 10px;
		padding-top: 15px;
		padding-left: 15px;
		width: 585px;
		height: 77px;
		background: #fffaea;
		font-size: 11.5px;
		color: #666666;
		line-height: 20px;
	}
	.noticeA{
		color: #1296db;
	}
	.noticeA:hover{
		cursor: pointer;
	}

</style>