<template>
	<div class="inWrapper">
		<!-- Index Recommend 首页推荐 -->
		<div class="wrapperInre">
			<div class="inreTitle">
				<div class="inreTitleLf">热租推荐</div>
				<div class="inreTitleRg curpoi">MORE  +</div>
			</div>
			<div class="productList">
				<div class="product curpoi" v-for="(list,index) of testList " :key="index">
					<div class="img">
						<img :src="list.img"/>
					</div>
					<div class="bottom">
						<!-- Commodity Name 商品名称 -->
						<div class="coNa">{{ list.coNa }}</div>
						<!-- Stock details 库存详情-->
						<div class="stDe">
							<div class="deal">
								<div class="Title">成交</div>
								<div class="Number">{{ list.deal }}</div>
							</div>
							<div class="evaluate">
								<div class="Title">评论</div>
								<div class="Number">{{ list.evaluate }}</div>
							</div>
							<div class="stock">
								<div class="Title">库存</div>
								<div class="Number">{{ list.stock }}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'IndexRecommend',
		data () {
			 return{
			 	testList:[{
			 		img: "../../../../../static/images/page/commodity.png",
			 		coNa: "Thinkpad T440 14英寸商务笔记本电脑",
			 		deal: 9952,
			 		evaluate: 9925,
			 		stock: 9922
			 	},{
			 		img: "../../../../../static/images/page/commodity.png",
			 		coNa: "Thinkpad T440 14英寸商务笔记本电脑",
			 		deal: 9952,
			 		evaluate: 9925,
			 		stock: 9922
			 	},{
			 		img: "../../../../../static/images/page/commodity.png",
			 		coNa: "Thinkpad T440 14英寸商务笔记本电脑",
			 		deal: 9952,
			 		evaluate: 99234535,
			 		stock: 99234532
			 	},{
			 		img: "../../../../../static/images/page/commodity.png",
			 		coNa: "Thinkpad T440 14英寸商务笔记本电脑",
			 		deal: 9952,
			 		evaluate: 9925,
			 		stock: 9922
			 	},{
			 		img: "../../../../../static/images/page/commodity.png",
			 		coNa: "Thinkpad T440 14英寸商务笔记本电脑",
			 		deal: 9952,
			 		evaluate: 9925,
			 		stock: 9922
			 	},]
			 }
		}
	}
</script>

<style scoped>

.inWrapper{
	padding-bottom: 50px;
	width: 100%;
	background: #FFFFFF;
}
.wrapperInre{
	margin: 0 auto;
	padding-top: 10px;
	width: 1200px;
}
/* 热租推荐   */
.inreTitle{
	width: 1200px;
	height: 25px;
	line-height: 25px;
}
.inreTitleLf{
	float: left;
	font-size: 20px;
}
.inreTitleRg{
	float: right;
	font-size: 17px;
}
/* 产品列表 */
.productList{
	margin-top: 5px;
	width: 100%;
	height: 340px;
}
.product{
	float: left;
	margin-left: 25px;
	width: 218px;
	height: 339px;
	border: #e9e9e9 solid 1px;
}
.product:first-child{
	margin-left: 0px;
}
.product:last-child{
	float: right;
}
.img{
	padding: 30px 10px;
	text-align: center;
	width: 216px;
	height: 218px;
}
.img img{
	width: 100%;
	height: 100%;
}
.bottom{
	width: 216px;
	height: 119px;
}
.coNa{
	padding: 10px 25px;
	widows: 158px;
	height: 60px;
	line-height: 25px;
	text-align: center;
	color: #333333;
	font-size: 14px;
}
/* 存储详情 */
.stDe{
	margin: 5px auto;
	padding: 5px 5px;
	border-top: #e9e9e9 dashed 1px;
	width: 186px;
	height: 43px;
}
.Title{
	height: 21.5px;
	line-height: 21.5px;
	color: #5a5a5a;
	font-size: 14px;
}
.Number{
	margin: 0 auto;
	width: 40px;
	height: 21.5px;
	line-height: 21.5px;
	color: #5a5a5a;
	font-size: 14px;
	overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
}
.deal{
	float: left;
	width: 60px;
	height: 43px;
	text-align: center;
}
.evaluate{
	float: left;
	margin: 0 2px;
	width: 60px;
	height: 43px;
	border-left: #e9e9e9 solid 1px;
	border-right: #e9e9e9 solid 1px;
	text-align: center;
}
.stock{
	float: right;
	padding: 0 5px;
	width: 50px;
	height: 43px;
	text-align: center;
}
.product:hover .bottom{
	background: #e60012;
	color: #FFFFFF;
}
.product:hover .bottom .stDe{
	color: #FFFFFF;
}
.product:hover .bottom .coNa{
	color: #FFFFFF;
}
.product:hover .Title{
	color: #FFFFFF;
}
.product:hover .Number{
	color: #FFFFFF;
}
</style>