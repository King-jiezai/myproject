<template>
	<div class="grflWrapper">
		<div class="grflNav">
			<div class="grflTitle">1F 电脑设备</div>
			<ul>
				<li>笔记本</li>
				<li>一体机</li>
				<li>台式电脑</li>
				<li>游戏电脑</li>
				<li>平板电脑</li>
				<li>服务器</li>
			</ul>
			<div class="clear"></div>
		</div>
		<!-- Broadcast content 轮播内容 -->
		<div class="brCo">
			<div class="brCoLf"></div>
			<div class="brCoRg">
				<div class="brCoRgTitle">人气浏览</div>
				<ul>
					<li class="curpoi" v-for="(item,index) in testList" :key="index">
						<div class="Rgimg"><img :src="item.Rgimg"/></div>
						<div class="RgName">{{ item.RgName }}</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="grflList">
			<ul>
				<li class="curpoi" v-for="(item,index) in test1List" :key="index">
					<div class="img"><img :src="item.img"/></div>
					<div class="listName">{{ item.listName }}</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'GroundFloor',
		data () {
			return{
				testList:[{
					Rgimg: "../../../../../static/images/page/hot/680KII.jpg",
					RgName: "Epson 针式打印机"
				},{
					Rgimg: "../../../../../static/images/page/hot/C765XN.jpg",
					RgName: "Epson 5000流明投影仪"
				},{
					Rgimg: "../../../../../static/images/page/hot/R330.jpg",
					RgName: "Epson 照片打印机"
				}],
				test1List:[{
					img: "../../../../../static/images/page/Thinkpad-X240.jpg",
					listName: "Thinkpad X240 12寸便携笔记本电脑"
				},{
					img: "../../../../../static/images/page/Thinkpad-X240.jpg",
					listName: "Thinkpad X240 12寸便携笔记本电脑"
				},{
					img: "../../../../../static/images/page/Thinkpad-X240.jpg",
					listName: "Thinkpad X240 12寸便携笔记本电脑"
				},{
					img: "../../../../../static/images/page/Thinkpad-X240.jpg",
					listName: "Thinkpad X240 12寸便携笔记本电脑"
				},{
					img: "../../../../../static/images/page/Thinkpad-X240.jpg",
					listName: "Thinkpad X240 12寸便携笔记本电脑"
				},{
					img: "../../../../../static/images/page/Thinkpad-X240.jpg",
					listName: "Thinkpad X240 12寸便携笔记本电脑"
				},{
					img: "../../../../../static/images/page/Thinkpad-X240.jpg",
					listName: "Thinkpad X240 12寸便携笔记本电脑"
				},{
					img: "../../../../../static/images/page/Thinkpad-X240.jpg",
					listName: "Thinkpad X240 12寸便携笔记本电脑"
				},{
					img: "../../../../../static/images/page/Thinkpad-X240.jpg",
					listName: "Thinkpad X240 12寸便携笔记本电脑"
				},{
					img: "../../../../../static/images/page/Thinkpad-X240.jpg",
					listName: "Thinkpad X240 12寸便携笔记本电脑"
				}]
			}
		}
	}
</script>

<style scoped>

.grflWrapper{
	width: 1200px;
	padding-top: 40px;
	padding-bottom: 5px;
}
.grflNav{
	padding-bottom: 5px;
	width: 100%;
	height: 30px;
}
.grflTitle{
	float: left;
	line-height: 30px;
	font-size: 24px;
	color: #32abf8;
}
.grflNav ul{
	float: left;
	margin-left: 100px;
	line-height: 30px;
	list-style: none;
}
.grflNav ul li{
	float: left;
	margin-left: 20px;
	color: #333333;
	font-size: 14px;
}
.grflNav ul li:hover{
	cursor: pointer;
	color: #e60012;
}
/* 轮播内容 */
.brCo{
	widows: 1198px;
	height: 398px;
	border: #e6e6e6 solid 1px;
	
}
.brCoLf{
	float: left;
	width: 985px;
	height: 398px;
	background: #dff2f4;
}
.brCoRg{
	float: right;
	width: 213px;
	height: 398px;
}
.brCoRgTitle{
	width: 213px;
	height: 35px;
	line-height: 35px;
	text-align: center;
	background: #fef0e4;
	color: #0a0a0a;
}
.brCoRg ul{
	list-style: none;
	background: #FFFFFF;
}
.brCoRg ul li{
	padding: 20px 10px;
	width: 213px;
	height: 121px;
	font-size: 12px;
}
.brCoRg ul li:hover{
	background: rgba(222,222,222,.3);
	color: #e60012;
}
.Rgimg{
	float: left;
	width: 78px;
	height: 78px;
	border: #f3f3f3 solid 1px;
}
.Rgimg img{
	width: 100%;
	height: 100%;
}
.RgName{
	float: right;
	padding-top: 25px;
	width: 105px;
	height: 56px;
}

/* 展示列表 */
.grflList{
	widows: 1200px;
	height: 536px;
}
.grflList ul{
	list-style: none;
}
.grflList ul li{
	float: left;
	margin-top: 8px;
	margin-left: 15px;
	width: 228px;
	height: 260px;
	background: #FFFFFF;
}
.grflList ul li:first-child{
	margin-left: 0px;
}
.grflList ul li:nth-child(6){
	margin-left: 0px;
}
.grflList ul li .img{
	padding: 10px 10px;
	width: 228px;
	height: 180px;
}
.grflList ul li .img img{
	width: 100%;
	height: 100%;
}
.grflList ul li .listName{
	padding: 20px 25px;
	width: 228px;
	height: 80px;
	text-align: center;
	color: #333333;
	font-size: 14px;
}
.grflList ul li:hover{
	box-shadow: 5px 5px 10px #dedede;
	transition: all 0.6s;
}
.grflList ul li:hover .listName{
	color: #e60012;
}
</style>