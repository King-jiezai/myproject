


<template>
	<div class="wrapper">
		<!-- 帮你选 Recommend -->
		<div class="reTitle">
			<span>﹣</span>
			<img src="../../../../static/images/shopping/2.png">&nbsp;租赁箱帮你选
			<span>﹣</span>
			<div>购买了该商品的用户还购买了</div>
		</div>
		<div class="NavTitle">
		    <div class="rg">
		    		<div class="curpoi navOne" ref="navOne" @click="navOne"></div>
		    		<div class="curpoi navTwo" ref="navTwo" @click="navtwo"></div>
		    		<div class="curpoi navThree" ref="navThree" @click="navthree"></div>
		    </div>
		</div>
		<div class="NavContent">
			<div class="NavOne"  v-for="(item, index) in NavOne" :key="index" v-show="NavShowO">
				<div class="NavImg">
					<img :src="item.NavImg"/>
				</div>
				<div class="NavRg">
					<div class="ShoppingTitle">{{ item.NavTitle }}</div>
					<div class="price">¥&nbsp;{{ item.NavPrice }}</div>
					<!-- 加入租赁箱 Add Shopping Cart -->
					<div class="AddShCa curpoi">
						<img src="../../../../static/images/shopping/2.png">&nbsp;加入租赁箱
					</div>
				</div>
			</div>
			<!-- <div class="NavTwo"  v-for="(itemT, index) in NavTwo" :key="index" v-show="NavShowT">
				<div class="NavImg">
					<img :src="itemT.NavImg"/>
				</div>
				<div class="NavRg">
					<div class="ShoppingTitle">{{ itemT.NavTitle }}</div>
					<div class="price">¥&nbsp;{{ itemT.NavPrice }}</div>
					加入租赁箱 Add Shopping Cart
					<div class="AddShCa curpoi">
						<img src="../../../../static/images/shopping/2.png">&nbsp;加入租赁箱
					</div>
				</div>
			</div>
			<div class="NavThree"  v-for="(itemTh, index) in NavThree" :key="index" v-show="NavShowTh">
				<div class="NavImg">
					<img :src="itemTh.NavImg"/>
				</div>
				<div class="NavRg">
					<div class="ShoppingTitle">{{ itemTh.NavTitle }}</div>
					<div class="price">¥&nbsp;{{ itemTh.NavPrice }}</div>
					加入租赁箱 Add Shopping Cart
					<div class="AddShCa curpoi">
						<img src="../../../../static/images/shopping/2.png">&nbsp;加入租赁箱
					</div>
				</div>
			</div> -->
		</div>
	</div>
</template>

<script>
	export default{

		data () {
			return {
				/* 推荐导航条 */
				NavNumber: 1,
				/* 显示控制 */
				NavShowO: true,
				NavShowT: false,
				NavShowTh: false,
				
				/* 模拟数据数组 */
				NavOne: [{
					NavImg: '../../../../static/images/shopping/230.png',
					NavTitle: '二手笔记本电脑联想ThinkpadX230i7轻薄便携本12寸ibm X230i手提',
					NavPrice: '1234'
				},{
					NavImg: '../../../../static/images/shopping/230.png',
					NavTitle: '二手笔记本电脑联想ThinkpadX230i7轻薄便携本12寸ibm X230i手提',
					NavPrice: '1234'
				},{
					NavImg: '../../../../static/images/shopping/230.png',
					NavTitle: '二手笔记本电脑联想ThinkpadX230i7轻薄便携本12寸ibm X230i手提',
					NavPrice: '1234'
				},{
					NavImg: '../../../../static/images/shopping/230.png',
					NavTitle: '二手笔记本电脑联想ThinkpadX230i7轻薄便携本12寸ibm X230i手提',
					NavPrice: '1234'
				},{
					NavImg: '../../../../static/images/shopping/230.png',
					NavTitle: '二手笔记本电脑联想ThinkpadX230i7轻薄便携本12寸ibm X230i手提',
					NavPrice: '1234'
				},{
					NavImg: '../../../../static/images/shopping/230.png',
					NavTitle: '二手笔记本电脑联想ThinkpadX230i7轻薄便携本12寸ibm X230i手提',
					NavPrice: '1234'
				},{
					NavImg: '../../../../static/images/shopping/230.png',
					NavTitle: '二手笔记本电脑联想ThinkpadX230i7轻薄便携本12寸ibm X230i手提',
					NavPrice: '1234'
				},{
					NavImg: '../../../../static/images/shopping/230.png',
					NavTitle: '二手笔记本电脑联想ThinkpadX230i7轻薄便携本12寸ibm X230i手提',
					NavPrice: '1234'
				}]
			}
		},
		mounted () {
			if( this.NavNumber == 1 ){
				this.$refs.navOne.style.background = 'red';
			}
		},
		methods: {
			navOne () {
				this.NavShowO = true
				this.NavShowT = false
				this.NavShowTh = false
				this.$refs.navOne.style.background = 'red';
				this.$refs.navTwo.style.background = '#dddddd';
				this.$refs.navThree.style.background = '#dddddd';
			},
			navtwo () {
				this.NavShowO = false
				this.NavShowT = true
				this.NavShowTh = false
				this.$refs.navOne.style.background = '#dddddd';
				this.$refs.navTwo.style.background = 'red';
				this.$refs.navThree.style.background = '#dddddd';
			},
			navthree () {
				this.NavShowO = false
				this.NavShowT = false
				this.NavShowTh = true
				this.$refs.navOne.style.background = '#dddddd';
				this.$refs.navTwo.style.background = '#dddddd';
				this.$refs.navThree.style.background = 'red';
			}
		}
	}
</script>

<style scoped>
	.wrapper{
		width: 1200px;
		height: 425px;
	}
	.reTitle{
		padding-top: 30px;
		width: 100%;
		height: 100px;
		text-align: center;
		border-bottom: #30a8fe solid 3px;
	}
	.reTitle span{
		color: #888888;
	}
	.reTitle img{
		vertical-align:middle
	}
	.reTitle div{
		padding-top: 10px;
		color: #888888;
	}
	.NavTitle{
		width: 100%;
		height: 40px;
		background: #f2f9fe;
		border-left: #c1e5ff solid 1px;
		border-right: #c1e5ff solid 1px;
	}
	.NavTitle .rg{
		float: right;
		width: 160px;
		height: 40px;
	}
	.rg div{
		float: left;
		margin-top: 15px;
		margin-left: 10px;
		width: 40px;
		height: 10px;
		background: #dddddd;
	}
	.NavContent{
		width: 100%;
		height: 285px;
		border-left: #c1e5ff solid 1px;
		border-right: #c1e5ff solid 1px;
		border-bottom: #c1e5ff solid 1px;
	}
	.NavOne{
		float: left;
		padding: 25px 10px;
		width: 25%;
		height: 141px;
	}
	.NavTwo{
		float: left;
		padding: 25px 10px;
		width: 25%;
		height: 141px;
	}
	.NavThree{
		float: left;
		padding: 25px 10px;
		width: 25%;
		height: 141px;
	}
	.NavImg{
		float: left;
		padding: 15px 5px;
		width: 98px;
		height: 98px;
		border: #dddddd solid 1px;
	}
	.NavImg img{
		width: 100%;
		height: 100%;
	}
	.NavRg{
		float: right;
		width: 170px;
		height: 98px;
	}
	.ShoppingTitle{
		width: 100%;
		height: 40px;
		word-break:break-all;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.price{
		width: 100%;
		height: 25px;
		line-height: 25px;
		color: #e4393c;
	}
	.AddShCa{
		width: 60%;
		height: 33px;
		border: #dddddd solid 1px;
		border-radius: 5px;
		text-align: center;
		line-height: 30px;
	}
	.AddShCa img{
		vertical-align:middle
	}
</style>