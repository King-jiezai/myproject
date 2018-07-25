<template>
	<div class="wrapper">
		<div class="time" v-for="(item,index) of list" :key="index">
			<div class="imgs">
				<img :src="item.imgs">
			</div>
			<div>
				<span class="title">{{ item.title }}</span>
				<div class="introduce">{{ item.introduce }}</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data () {
			return {
				list: [{
					imgs: '../../../../static/images/page/yi.png',
					title: '一天起租',
					introduce: '随租随退，方便快捷'
				},{
					imgs: '../../../../static/images/page/mian.png',
					title: '免押金',
					introduce: '提交资料申请免押金'
				},{
					imgs: '../../../../static/images/page/ji.png',
					title: '支付便捷',
					introduce: '租金可月付或按季度付'
				},{
					imgs: '../../../../static/images/page/fu.png',
					title: '全程服务',
					introduce: '租凭期间全程跟进服务'
				}]
			}
		}
	}
</script>

<style scoped>
	.wrapper{
		margin-top: 67px;
		padding: 0 0 0 20px;
		width: 1200px;
		height: 45px;
	}
	.time{
		float: left;
		margin-left: 25px;
		width: 260px;
	}
	.imgs{
		float: left;
		width: 45px;
		padding: 2.5px 2.5px;
	}
	.imgs img{
		width: 40px;
		height: 40px;
	}
	.title{
		font-size: 18px;
		color: #333333;
	}
	.introduce{
		font-size: 12px;
		color: #666666;
		margin-top: 3px;
	}
</style>