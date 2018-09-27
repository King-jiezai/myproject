var lists = []
var shippingVos = []

layui.use(['laypage', 'layer'], function() {
	var laypage = layui.laypage,
		layer = layui.layer;

	var Count //数据总数
	var curr //当前页码
	var Limit //每页数量
	var dataList //全部数据

	/* 获取后端数据 */
	window.WFPgetListData = function() {
		$.ajax({
			//请求方式
			type: "GET",
			//文件位置
			url: "http://120.78.142.125:8080/dg/manage/order/list.do",
			//返回数据格式为json,也可以是其他格式如
			dataType: 'json',
			//请求成功后要执行的函数，拼接html
			success: function(data) {
				console.log(data)
				Count = data.data.total
				curr = data.data.pageNum
				Limit = data.data.pageSize
				console.log("总数=" + Count + " 页数=" + curr + " 条数=" + Limit)
				PrintingData(data)
				table()
			}
		})
	}

	window.RendererGetListData = function() {
		$.ajax({
			//请求方式
			type: "GET",
			//文件位置
			url: "http://120.78.142.125:8080/dg/manage/order/list.do",
			//返回数据格式为json,也可以是其他格式如
			dataType: 'json',
			//请求成功后要执行的函数，拼接html
			success: function(data) {
				console.log(data)
				Count = data.data.total
				curr = data.data.pageNum
				Limit = data.data.pageSize
				console.log("1总数=" + Count + " 1页数=" + curr + " 1条数=" + Limit)
				PrintingData(data)
				table()
			}
		})
	}

	/* 打印数据 */
	function PrintingData(data) {
		console.log("数据打印:" + data.data.pageSize)
		//数据渲染变量
		var rendering = ""

		var lists = []

		var shippingVos = []

		var orderItemVoLists = []

		/* 订单详情 */
		/*for( var z = 0; z < data.data.list.length; z++ ){
			var list = {}
			list["orderNo"] = data.data.list[z].orderNo  //订单编号
			list["payment"] = data.data.list[z].payment  //总价格
			list["message"] = data.data.list[z].message  //
			list["paymentType"] = data.data.list[z].paymentType  //付款方式 1-支付宝 2-微信 3-银联
			list["status"] = data.data.list[z].status  //交易状态
			list["createTime"] = data.data.list[z].createTime  //订单创建时间
			list["totalRent"] = data.data.list[z].totalRent  //单件租金
			list["postage"] = data.data.list[z].postage  //运费
			list["totalPrice"] = data.data.list[z].totalPrice  //单件押金
			lists.push( list )
		}
		console.log(lists)*/

		/* 收货人信息 */
		/*for( var i = 0; i < data.data.list.length; i++ ){
			var shippingVo = {}
			shippingVo["receiverName"] = data.data.list[i].shippingVo.receiverName  //收货人姓名
			shippingVo["receiverPhone"] = data.data.list[i].shippingVo.receiverPhone  //收货人固定电话
			shippingVo["receiverMobile"] = data.data.list[i].shippingVo.receiverMobile  //收货人移动手机
			shippingVo["receiverRegion"] = data.data.list[i].shippingVo.receiverRegion  //收货人区域
			shippingVo["receiverArea"] = data.data.list[i].shippingVo.receiverArea  //收货人省-市-区
			shippingVo["receiverAddress"] = data.data.list[i].shippingVo.receiverAddress  //收货人详情地址
			shippingVo["receiverZip"] = data.data.list[i].shippingVo.receiverZip  //收过人邮政编号
			shippingVos.push( shippingVo )
		}*/

		/* 订单标题等信息 */
		/*for( var a = 0; a < data.data.list.length; a++ ){
			var orderItemVoList = {}
			orderItemVoList["productName"] = data.data.list[a].orderItemVoList[0].productName //商品名字
			orderItemVoList["productSubtitle"] = data.data.list[a].orderItemVoList[0].productSubtitle  //商品配置
			orderItemVoList["staging"] = data.data.list[a].orderItemVoList[0].staging  //是否分期 1-不分期 2-分期
			orderItemVoList["paidMoney"] = data.data.list[a].orderItemVoList[0].paidMoney  //分期已付金额
			orderItemVoList["totalMoney"] = data.data.list[a].orderItemVoList[0].totalMoney  //总金额
			orderItemVoList["productImage"] = data.data.list[a].orderItemVoList[0].productImage  //商品图片
			orderItemVoList["rent"] = data.data.list[a].orderItemVoList[0].rent  //日租金
			orderItemVoList["number"] = data.data.list[a].orderItemVoList[0].number //租期天数
			orderItemVoList["quantity"] = data.data.list[a].orderItemVoList[0].quantity  //数量
			orderItemVoList["rentDeposit"] = parseFloat(data.data.list[a].orderItemVoList[0].totalRent / data.data.list[a].orderItemVoList[0].quantity ) + parseFloat( data.data.list[a].orderItemVoList[0].totalPrice / data.data.list[a].orderItemVoList[0].quantity )  //单件价格
			orderItemVoList["singletonTotalPrice"] = parseFloat( data.data.list[a].orderItemVoList[0].totalPrice / data.data.list[a].orderItemVoList[0].quantity )  //单件押金
			orderItemVoList["singletonTotalRent"] = parseFloat( data.data.list[a].orderItemVoList[0].totalRent / data.data.list[a].orderItemVoList[0].quantity )  //单件租金
			orderItemVoLists.push( orderItemVoList )
		}
		console.log( orderItemVoLists )*/

		for(var i = 0; i < data.data.size; i++) {

			if( data.data.list[i].status == 10 ) {
				/* 操作功能 */
				OrDeHa = "<div class='OrDeHa'><span class='curpoi'>订单关闭</span></div>"
				BiEx = "<div class='BiEx'><span class='curpoi' onclick='expediting("+ data.data.list[i].orderNo +")'>订单催付</span></div>"
				OrderDetails = "<div class='OrDe'><span class='curpoi'>订单详情<span></div>"
				OrDe = "<div>" + OrderDetails + BiEx + OrDeHa + "</div>"
				
				OrOp = "<div class='orOp'>" + OrDe + "</div>"

				/* 总价-邮费-优惠 数据 */
				/* 分期 */
				var StagingState
				if(data.data.list[i].orderItemVoList[0].staging != 1) {
					StagingState = "<div class='StagingState'>已付/总额：￥" + data.data.list[i].orderItemVoList[0].paidMoney + " / " + data.data.list[i].orderItemVoList[0].totalMoney + "</div>"
				} else {
					StagingState = ""
				}
				/* 优惠 */
				Discount = "<div class='Discount'>优惠数据：XXXXXXX</div>"
				/* 运费 */
				Expresscost = "<div class='Expresscost'>(含快递费：" + data.data.list[i].postage + ")</div>"
				/* 改价按钮 */
				if(data.data.list[i].status == 10) {
					rePr = "<div class='rePr'><span onclick='PriceChange(" + data.data.list[i].orderNo + ")'>改价</span></div>"
				} else {
					rePr = ""
				}
				/* 判断付款方式  1-支付宝 2-微信 3-银联 */
				if(data.data.list[i].paymentType == 1) {
					iconfont = "<i class='iconfont icon-zhifubao'></i>"
				} else if(data.data.list[i].paymentType == 2) {
					iconfont = "<i class='iconfont icon-wechat'></i>"
				} else if(data.data.list[i].paymentType == 3) {
					iconfont = "<i class='iconfont icon-buoumaotubiao26'></i>"
				}
				money = "<div class='money'>" + iconfont + data.data.list[i].payment + "</div>"
				NotrMo = "<div class='No_trMo'>" + money + rePr + Expresscost + Discount + StagingState + "</div>"

				/* 订单内容 */
				coInNumber = ''
				for(var a = 0; a < data.data.list[i].orderItemVoList.length; a++) {
					/* 单价 * 数量 */
					sePr = "<div class='sePr'>3333.49*1(死数据)</div>"

					/* 租期时间 */
					StartTime = "<div class='StartTime'>起租：( 无数据  )</div>"
					EndTime = "<div class='EndTime'>截止：( 无数据  )</div>"
					StartEnd = "<div class='StartEnd'>" + StartTime + EndTime + "</div>"

					coFu = "<div class='coFu'>" +
						"<span>押金（单件）：XXXXXX</span>" +
						"<span>租金（单件）：XXXXXXX</span>" +
						"<span>租期天数：" + data.data.list[i].orderItemVoList[a].number + "</span>" +
						"</div>"
					coMo = "<div class='coMo'>电脑配置：" + data.data.list[i].orderItemVoList[a].productSubtitle + "</div>" //电脑配置
					shNa = "<div class='shNa'>" + data.data.list[i].orderItemVoList[a].productName + "</div>" //商品名称
					coInlf = "<div class='coInlf'>" + shNa + coMo + coFu + "</div>"
					shImg = "<div class='shImg'><img src='" + data.data.list[i].orderItemVoList[a].productImage + "'/></div>" //商品图片
					coIn = "<div class='coIn'>" + shImg + coInlf + StartEnd + sePr + "</div>"
					coInNumber = coInNumber + coIn
				}
				commodityNumber = "<div class='commodity_Number'>" + coInNumber + "</div>"
				ordeBottom = "<div class='ordeBottom'>" + commodityNumber + NotrMo + OrOp + "</div>"

				/* 订单详情 */
				SeSNo = "<div class='SeSNo'>卖家备注：<span></span>" +
					"<i class='layui-icon curpoi' onclick='moSellerMessage(" + data.data.list[i].orderNo + ")'>&#xe642;</i></span></div>" +
					"</div>"
				buSNo = "<div class='buSNo'>买家备注：<span>" + data.data.list[i].message + "</span></div>"
				reIn = "<div class='reIn'> 收货信息：<span id='reIn" + data.data.list[i].orderNo + "'>" + data.data.list[i].shippingVo.receiverName + " " + //收件人姓名
					data.data.list[i].shippingVo.receiverMobile + " " + data.data.list[i].shippingVo.receiverPhone + " " + //收件人固定电话  移动电话
					data.data.list[i].shippingVo.receiverRegion + " " + data.data.list[i].shippingVo.receiverArea + " " + //地区  省份-市-区
					data.data.list[i].shippingVo.receiverAddress + " " + data.data.list[i].shippingVo.receiverZip //详细地址  邮政编码
					+
					"</span>" +
					"<textarea id='input'></textarea>" +
					"<span class='reInOp curpoi' onclick='copy(" + data.data.list[i].orderNo + ")'>复制</span>|<span class='reInOp curpoi' onclick='DetailsModify(" + data.data.list[i].orderNo + ")'>修改</span>" +
					"</div>"
				middle = "<div class='middle'>" + reIn + buSNo + SeSNo + "</div>"

				/* 顶部内容 */
				ShopName = "<div class='ShopName'><i class='layui-icon'>&#xe68e;</i>&nbsp;&nbsp;广州大广信息技术有限公司</div>"
				TrTi = "<div class='trTi'>交易时间：" + data.data.list[i].createTime + "</div>"
				OrNumber = "<div class='orNumber'>订单号：" + data.data.list[i].orderNo + "</div>"
				State = "<div class='WFPstate'>待付款</div>"
				Checkbox = "<div class='checkbox'><input type='checkbox'/></div>"
				ordeTop = "<div class='ordeTop'>" + Checkbox + State + OrNumber + TrTi + ShopName + "</div>"

				/* 外层包裹器 */
				Content = "<div class='orDe'>" + ordeTop + middle + ordeBottom + "</div>"

				rendering += Content
			}

		}
		$("#ContentTwo").html(rendering);
	}

	/* 数据返回后端 */
	function NewgetListData(curr, limit) {
		$.ajax({
			//请求方式
			type: "POST",
			//文件位置
			url: "http://120.78.142.125:8080/dg/manage/order/list.do",
			data: {
				pageNum: curr, //页数
				PageSize: limit //每页条数
			},
			//返回数据格式为json,也可以是其他格式如
			dataType: 'json',
			//请求成功后要执行的函数，拼接html
			success: function(data) {
				PrintingData(data)
			}
		})
	}

	/* 分页 */
	function table() {
		//完整功能
		laypage.render({
			elem: 'PageNumberTwo',
			count: Count //---数据总数
				,
			limit: Limit //---每页条数
				,
			layout: ['count', 'prev', 'page', 'next', 'skip'],
			jump: function(obj, first) {
				//obj包含了当前分页的所有参数，比如：
				console.log("获取当前的页:" + obj.curr); //得到当前页，以便向服务端请求对应页的数据。
				console.log("获取每页显示显示条数:" + obj.limit); //得到每页显示的条数

				//首次不执行
				if(!first) {
					NewgetListData(obj.curr, obj.limit)
					scrollTo(0,0)
				}

			}
		});
	}

})

/* 复制代码 */
function copy(id) {
	var text = document.getElementById("reIn" + id).innerText;
	var input = document.getElementById("input");
	input.value = text; // 修改文本框的内容
	input.select(); // 选中文本
	document.execCommand("copy"); // 执行浏览器复制命令
	alert("复制成功");
}

function expediting(orderNo){
	/* 查询得来的数据 */
	var obtain = ''
	
	/* 后台查询订单消息 */
	$.ajax({
		//请求方式
		type:"POST",
		//文件位置
		url:"http://120.78.142.125:8080/dg/manage/order/search.do",
		data: {
			orderNo: orderNo //订单号
		},
    //返回数据格式为json,也可以是其他格式如
    dataType:'json',
    //请求成功后要执行的函数，拼接html
    success: function(data){
    	obtain = data
    	/* 弹窗内容 */
			layer.open({
		    type: 2,
		    area: ['750px','380px'],
		    scrollbar: false,
		    title: '订单催付',
		    content: ['popup/OrderDetailsWindow.html', 'no'],
		    btn: '提交',
		    btnAlign: 'c', //按钮居中
		    shade: 0.3, //不显示遮罩
		    shadeClose: true,
		    success: function(layero, index){
		    	
				  var body = layer.getChildFrame('body', index);
				  body.find('.Name span').text(obtain.data.shippingVo.receiverName)  //姓名
				  body.find('.Phone span').text(obtain.data.shippingVo.receiverPhone)  //电话
				  
				},
		    yes: function(){
		      layer.closeAll();
				  var body = layer.getChildFrame('body');
					var phone = body.find('.Phone span').text()  //手机号码
				  var textmessagecontent = body.find('textarea').val()  //短信内容
			  	console.log(phone,textmessagecontent)
		    }
		  });
    }
	})
}