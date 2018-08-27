<template>
	<div class="wrapper">
	<!-- 成功提示 Successful hints -->
		<div class="suHi">
			<div class="Tick">√</div>
			<div class="tickContent">商品成功加入租赁箱</div>
			<div class="clear"></div>
		</div>
		<!-- 商品内容 Commodity content -->
		<div class="coCo">
			<div class="cocoLf" v-for="(item,index) of Shopping" :key="index">
				<div class="lfImg curpoi">
					<img :src="item.sImg" />
				</div>
				<div class="lfTitle">{{item.sTitle}}</div>
				<div class="lfNumber">数量：{{item.sNumber}}</div> 
			</div>
			<div class="cocoRg">
				<!-- 商品详情 Commodity details -->
				<div class="coDe curpoi">查看商品详情</div>
				<!-- 购物车 ShoppingCart -->
				<div class="shCa curpoi">去购物车结算&nbsp;﹥</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'AddSuccess',
		data () {
			return {
				/* 商品 */
				Shopping: [{
					sImg: '../../../static/images/230.png',
					sTitle: '二手笔记本电脑联想ThinkpadX230i7轻薄便携本12寸ibm X230i手提',
					sNumber: 1
				}]
			}
		}
	}
</script>

<style scoped>
.wrapper{
	padding-top: 20px;
	width: 1200px;
	height: 100%;
}
.suHi{
	width: 100%;
	height: 30px;
	line-height: 30px;
	color: #019a24;
	font-size: 16px;
}
.Tick{
	float: left;
	width: 30px;
	height: 30px;
	line-height: 23px;
	font-size: 20px;
	text-align: center;
	border: #019a24 solid 2px;
	border-radius: 50%;
}
.tickContent{
	float: left;
	margin-left: 5px;
}
.cocoLf{
	float: left;
	padding-top: 25px;
	width: 670px;
	height: 126px;
}
.lfImg{
	float: left;
	padding: 5px 5px;
	width: 80px;
	height: 80px;
	border: #dddddd solid 1px;
}
.lfImg img{
	width: 100%;
	height: 100%;
}
.lfTitle{
	padding-top: 15px;
	text-indent: 10px;
	color: #333333;
	font-size: 14px;
}
.lfNumber{
	padding-top: 10px;
	text-indent: 10px;
	font-size: 14px;
	color: #888888;
}
.cocoRg{
	float: right;
	width: 330px;
	height: 126px;
}
.coDe{
	float: left;
	margin-top: 75px;
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
	margin-top: 75px;
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