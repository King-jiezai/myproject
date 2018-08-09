<template>
	<div class="wrapper">
		<div class="title">
			<div class="title-lf">热租推荐</div>
			<div class="title-rg">MORE <span>+</span></div>
		</div>
		<div class="recommend">
			<div class="commodity" v-for="(list,index) of list" :key="index">
				<div class="commodity-img">
					<img :src="list.commodityImg"/>
				</div>
				<div class="commodity-details">
					<div class="commodity-tiyle">
					 	<div class="commodity-model">{{ list.commodityModel }}</div>
					 	<span>{{ list.commodityName }}</span>
					</div>
					<div class="commodity-footer">
					 	<span>成交<div>{{ list.dealSurplus }}</div></span>
					 	<span class="lfbr">评论<div>{{ list.reviewsSurplus }}</div></span>
					 	<span class="lfbr">库存<div>{{ list.stockSurplus }}</div></span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data () {
			return {
				list: [{
				commodityImg: '../../../../static/images/page/T440.png',
				commodityModel: 'Thinkad T440 14英寸',
				commodityName: '商务笔记本电脑',
				dealSurplus: '1',
				reviewsSurplus: '1',
				stockSurplus: '1'
			},{
				commodityImg: '../../../../static/images/page/T440.png',
				commodityModel: 'Thinkad T440 14英寸',
				commodityName: '商务笔记本电脑',
				dealSurplus: '1',
				reviewsSurplus: '13',
				stockSurplus: '134'
			},{
				commodityImg: '../../../../static/images/page/T440.png',
				commodityModel: 'Thinkad T440 14英寸',
				commodityName: '商务笔记本电脑',
				dealSurplus: '444',
				reviewsSurplus: '66',
				stockSurplus: '4444'
			},{
				commodityImg: '../../../../static/images/page/T440.png',
				commodityModel: 'Thinkad T440 14英寸',
				commodityName: '商务笔记本电脑',
				dealSurplus: '998',
				reviewsSurplus: '9999999999999999',
				stockSurplus: '555'
			},{
				commodityImg: '../../../../static/images/page/T440.png',
				commodityModel: 'Thinkad T440 14英寸',
				commodityName: '商务笔记本电脑',
				dealSurplus: '4343',
				reviewsSurplus: '1434',
				stockSurplus: '1434'
			}]
			}
		}
	}
</script>

<style scoped>
	.wrapper{
		margin-top: 130px;
		width: 1200px;
	}
	.title{
		width: 1200px;
		height: 30px;
		line-height: 30px;
	}
	.title-lf{
		float: left;
		font-size: 20px;
	}
	.title-rg{
		float: right;
		font-size: 17px;
	}
	.recommend{
		margin-top: 5px;
		width: 1200px;
	}
	.commodity{
		float: left;
		width: 220px;
		height: 317px;
		margin-left: 25px;
		border: #e7e7e7 solid 1px;
	}
	.commodity:hover{
		cursor: pointer;
		box-shadow: 5px 5px 2px #eeeeee;
	}
	.commodity:hover .commodity-details{
		color: #FFFFFF;
		background: #e60012;
	}
	.commodity:first-child{
		margin-left: 0px;
	}
	.commodity-img{
		width: 216px;
		height: 193px;
		text-align: center;
	}
	img{
		margin-top: 30px;
	}
	.commodity-details{
		width: 218px;
		height: 123px;
	}
	.commodity-tiyle{
		margin: 0 auto;
		width: 200px;
		height: 75px;
		text-align: center;
		border-bottom: #e4e4e4 dashed 1px;
		font-size: 12px;
	}
	.commodity-model{
		display: block;
		padding-top: 24px;
	}
	.commodity-footer{
		margin: 0 auto;
		padding: 2px 15px;
		width: 190px;
		height: 47px;
	}
	.commodity-footer span{
		display: block;
		float: left;
		width: 52px;
		height: 35px;
		padding: 0 5px;
		font-size: 12px;
		margin-top: 5px;
		text-align: center;
	}
	.commodity-footer span div{
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.lfbr{
		border-left: #e4e4e4 solid 1px;
	}
</style>