<template>
	<div class="wrapper">
	<!-- 成功提示 Successful hints -->
		<div class="suHi">
			<div class="box">
				<div class="Tick">
					<img src="../../../../static/images/shopping/11.png">
				</div>
				<div class="tickContent">商品成功加入租赁箱</div>
				<div class="clear"></div>
			</div>
		</div>
		<!-- 商品内容 Commodity content -->
		<div class="coCo">
			<div class="cocoRg">
				<!-- 商品详情 Commodity details -->
				<div class="coDe curpoi" @click='details'>返回</div>
				<!-- 购物车 ShoppingCart -->
				<div class="shCa curpoi" @click='seeshopp'>去购物车查看&nbsp;﹥</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data () {
			return {

			}
		},

		methods : {

			details () {

				this.$router.back(-1)

			},

			seeshopp () {

				this.$router.push('/myRentalbox')
				
			}

		}

	}
</script>

<style scoped>
.wrapper{
	padding-top: 20px;
	width: 1200px;
	overflow: hidden;
	background: #f5f5f5;
}
.suHi{
	width: 100%;
	height: 30px;
	line-height: 30px;
	color: #019a24;
	font-size: 16px;
	text-align: center;
}
.box {
	display: inline-block;
	height: 30px;
}
.Tick{
	float: left;
	position: relative;
	top: 2px;
}
.tickContent{
	float: left;
	margin-left: 5px;
}
.cocoRg{
	width: 330px;
	height: 126px;
	margin: 0 auto;
	padding-top: 60px;
}
.coDe{
	float: left;
	margin-left: 5px;
	width: 158px;
	height: 36px;
	text-align: center;
	line-height: 36px;
	color: #e60012;
	font-size: 16px;
	background: #FFFFFF;
}
.shCa{
	float: right;
	margin-right: 5px;
	width: 158px;
	height: 36px;
	text-align: center;
	line-height: 36px;
	color: #FFFFFF;
	font-size: 16px;
	background: #e60012;
}
</style>