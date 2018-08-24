<template>
	<div class="thflWrapper">
		<div class="grflNav">
			<div class="grflTitle">3F 影音数码</div>
			<ul>
				<li>相机</li>
				<li>DV/摄像机</li>
				<li>显示器</li>
				<li>液晶电视</li>
				<li>幕布/支架</li>
				<li>音响/功放</li>
			</ul>
			<div class="clear"></div>
		</div>
		<!-- Content display 内容展示 -->
		<div class="coDi">
			<div class="coDiLf"></div>
			<div class="coDiCt">
				<div class="coDiCtTop">
					<div class="topLf">
						<img src="../../../../../static/images/page/TV.jpg"/>
					</div>
					<div class="topRg">
						<span>赏心悦目 一眼之缘</span><br />超大高清液晶显示器
					</div>
				</div>
				<div class="coDiCtBottom">
					<div class="bottomLf">
						<span>高清摄录一体机</span><br />为您塑造专业形象
					</div>
					<div class="bottomRg">
						<img src="../../../../../static/images/page/mc2500.jpg"/>
					</div>
				</div>
			</div>
			<div class="coDiRg">
				<div class="brCoRgTitle">人气浏览</div>
				<ul>
					<li class="curpoi" v-for="(item,index) of testList" :key="index">
						<div class="Rgimg"><img :src="item.Rgimg"/></div>
						<div class="RgName">{{ item.RgName }}</div>
					</li>
				</ul>
			</div>
		</div>
		<!-- List display 列表展示 -->
		<div class="liDi">
			<div class="di">
				<div class="img"><img src="../../../../../static/images/page/650D.jpg"/></div>
				<div class="name">Canon 单反相机</div>
			</div>
			<div class="di">
				<div class="img"><img src="../../../../../static/images/page/pj675.jpg"/></div>
				<div class="name">Sony 高清Dv摄像机</div>
			</div>
			<div class="di">
				<div class="img"><img src="../../../../../static/images/page/LED.jpg"/></div>
				<div class="name">LED 液晶拼接屛</div>
			</div>
			<div class="di">
				<div class="img"><img src="../../../../../static/images/page/mu.jpg"/></div>
				<div class="name">高清投影幕“未来电视”</div>
			</div>
			<div class="di">
				<div class="img"><img src="../../../../../static/images/page/yin.jpg"/></div>
				<div class="name">天籁之音  体验非凡</div>
			</div>
			<div class="clear"></div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'ThreeFloor',
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
				}]
			}
		}
	}
</script>

<style scoped>

.thflWrapper{
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
	color: #7cc921;
}
.grflNav ul{
	float: left;
	margin-left: 120px;
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
/* 内容展示 */
.coDi{
	width: 1199px;
	height: 390px;
	border: #e6e6e6 solid 1px;
}
/* 左边 */
.coDiLf{
	float: left;
	width: 470px;
	height: 390px;
	background: #dff2f4;
}
/* 中间 */
.coDiCt{
	float: left;
	width: 516px;
	height: 390px;
	background: #FFFFFF;
}
.coDiCtTop{
	width: 518px;
	height: 194.5px;
	border-bottom: #e6e6e6 solid 1px;
}
.topLf{
	float: left;
	padding: 35px 17.25px;
	width: 230px;
	height: 194.5px;
}
.topLf img{
	width: 100%;
	height: 100%;
}
.topRg{
	float: right;
	padding: 70px 0;
	width: 288px;
	height: 194.5px;
	line-height: 30px;
	text-align: center;
	color: #5c5b5b;
}
.topRg span{
	font-size: 22px;
}
.coDiCtBottom{
	width: 518px;
	height: 194.5px;
}
.bottomLf{
	float: left;
	padding: 70px 0;
	width: 288px;
	height: 194.5px;
	line-height: 30px;
	text-align: center;
	color: #5c5b5b;
}
.bottomLf span{
	font-size: 22px;
}
.bottomRg{
	float: right;
	padding: 35px 17.25px;
	width: 230px;
	height: 194.5px;
}
.bottomRg img{
	width: 100%;
	height: 100%;
}
/* 右边 */
.coDiRg{
	float: right;
	width: 211px;
	height: 390px;
}
.brCoRgTitle{
	width: 211px;
	height: 35px;
	line-height: 35px;
	text-align: center;
	background: #fef0e4;
	color: #0a0a0a;
}
.coDiRg ul{
	list-style: none;
	background: #FFFFFF;
}
.coDiRg ul li{
	padding: 20px 10px;
	width: 211px;
	height: 118.3px;
	font-size: 12px;
}
.coDiRg ul li:hover{
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
/* 列表展示 */
.liDi{
	margin-top: 10px;
	width: 1200px;
	height: 255px;
}
.di{
	float: left;
	margin-left: 10px;
	width: 232px;
	height: 255px;
	background: #FFFFFF;
}
.di:first-child{
	margin-left: 0;
}
.img{
	padding: 20px 15px;
	width: 232px;
	height: 185px;
}
.img img{
	width: 100%;
	height: 100%;
}
.name{
	margin-top: 10px;
	text-align: center;
}
.di:hover{
	cursor: pointer;
	box-shadow: 5px 5px 10px #dedede;
	transition: all 0.6s;
	color: #e60012;
}
</style>