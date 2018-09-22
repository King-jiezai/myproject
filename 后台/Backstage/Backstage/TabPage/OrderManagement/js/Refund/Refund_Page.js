var test
var url1
var productskuId
var orderNo

function parseURL(url) {

	url1 = url.split("=")[1];
	orderNo = url1.split('&')[0]
	productskuId = url.split("=")[2];
}
/* 初始执行 */
window.onload = function tetstt() {
	var test = location.href.split('?')[1]
	parseURL(test)
	testtt()
}

/* 数据渲染 */
function testtt() {
	$.ajax({
		//请求方式
		type: "GET",
		//文件位置
		url: "http://120.78.142.125:8080/dg/afterSaleManager/listAfterSale.do",//售后服务接口
		//返回数据格式为json,也可以是其他格式如
		dataType: 'json',
		data: {
			productskuId: productskuId,//商品配置id
			orderNo: orderNo//订单号
		},
		xhrFields: {
			withCredentials: true
		},
		crossDomain: true,
		//请求成功后要执行的函数，拼接html
		success: function(data) {
			console.log(data)
			
			$(".img").html("<img src='" + data.afterSaleManagerVo.productImage + "'>")//商品图片
			$(".shoppingName").html(data.afterSaleManagerVo.productName)//商品名称
			$(".oponTopRg").html("金额：￥" + data.afterSaleManagerVo.payment)//实际付款
			$(".span").html(data.afterSaleManagerVo.nickName)//买家昵称
			$(".reInLfBottom").html("申请时间：" + data.afterSaleManagerVo.createTime)//申请时间
			$(".reInCtTop").html("订单编号：" + data.afterSaleManagerVo.orderNo)//订单编号
			if(data.afterSaleManagerVo.goodsStatus == 1) {//判断货物状态，1-已收到货，0-未收到货

				$(".reInCtBottom").html("货物状态：已收到货")

			} else if(data.afterSaleManagerVo.goodsStatus == 0) {

				$(".reInCtBottom").html("货物状态：未收到货")

			}

			$(".reInRgTop").html("退款编号：" + data.afterSaleManagerVo.refundNumber)//退款编号
			$(".reInRgBottom").html("退款原因：" + data.afterSaleManagerVo.reason)//退款原因
			
			//协商历史
			for(var i = 0; i < data.negotiationHistoryList.length; i++) {

				$("#meBoContents").append("<div class='meBoContent'>" +
					"<div class='meBoCoCt'><span class='meBoimg'><img src='" + data.negotiationHistoryList[i].avatar + "'></span></div>" +
					"<div class='meBoCoLf'>" + data.negotiationHistoryList[i].createTime + "</div>" +
					"<div class='meBoName'>" + data.negotiationHistoryList[i].createBy + "</div>" +
					"<div class='meBoCoRg'><p class='meBop'>" + data.negotiationHistoryList[i].content + "</p></div>" +
					"</div>" +
					"</div>")

			}
		
		//买家上传的图片凭证
		if (data.afterSaleManagerVo.status == 2) {	
			$(".voucher").html("<img src='" + data.afterSaleManagerVo.afterSaleImage + "'>")
			
		}
		
		
		if (data.afterSaleManagerVo.status == 1 || data.afterSaleManagerVo.status == 0) {
			$(".closeTime").html(data.refundVo.time)//关闭时间
			$(".momey").html(data.refundVo.money)//退款金额
		}
			
			$(".orDeImg").html("<img src='" + data.afterSaleManagerVo.productImage + "'>")//商品图片
			$(".orDeTiTop").html(data.afterSaleManagerVo.productName)//商品名称
			$(".orDeTiBottom").html(data.afterSaleManagerVo.rentalCreateTime)//出租开始时间
			$(".orDeTiBottoms").html(data.afterSaleManagerVo.rentalEndTime)//出租结束时间
			$(".BuyerName").html(data.afterSaleManagerVo.nickName)//买家昵称
			$(".OrderNumbers").html(data.afterSaleManagerVo.orderNo)//订单号
			$(".deposits").html(data.afterSaleManagerVo.totalPrice)//押金
			$(".rents").html(data.afterSaleManagerVo.totalRent)//租金
			$(".Discounts").html(data.afterSaleManagerVo.offer)//优惠
			$(".Postages").html(data.afterSaleManagerVo.postage)//邮费
			$(".payments").html(data.afterSaleManagerVo.payment)//实付金额
			$(".RefundNumbers").html(data.afterSaleManagerVo.refundNumber)//退款编号
			$(".RefundAmounts").html(data.afterSaleManagerVo.refundMoney)//退款金额
			$(".Numbers").html(data.afterSaleManagerVo.quantity)//申请件数
			$(".Reasons").html(data.afterSaleManagerVo.reason)//退款原因

			if(data.afterSaleManagerVo.refund == 1) {//要求
				$(".Requirements").html("仅退款")
			} else if(data.afterSaleManagerVo.refund == 2) {
				$(".Requirements").html("退货退款")
			} else if(data.afterSaleManagerVo.refund == 3) {
				$(".Requirements").html("仅换货/维修")
			}

			$(".Explains").html(data.afterSaleManagerVo.remarks)//说明

		}
	})
}

/* 审核通过 */
function Review() {
	$.ajax({
		//请求方式
		type: "POST",
		//文件位置
		url: "http://120.78.142.125:8080/dg/afterSaleManager/reviewBy.do",
		//url: "http://192.168.1.172:8080/dg/afterSaleManager/reviewBy.do",
		//返回数据格式为json,也可以是其他格式如
		dataType: 'json',
		xhrFields: {
			withCredentials: true
		},
		data: {
			productskuId: productskuId,
			orderNo: orderNo
		},
		crossDomain: true,
		//请求成功后要执行的函数，拼接html
		success: function(data) {
			
			if(data.status == 1) {
				layer.msg('提交成功', {
					time: 2000, //20s后自动关闭
				});
				location.href = "../../../../index1.html"

			} else {
				layer.msg('提交失败', {
					time: 2000, //20s后自动关闭
				});
			}
		}
	})

}

/* 同意退款*/
function agree() {

	$.ajax({
		//请求方式
		type: "post",
		//文件位置
		url: "http://120.78.142.125:8080/dg/afterSaleManager/refund.do",
		//url: "http://192.168.1.172:8080/dg/afterSaleManager/refund.do",
		//返回数据格式为json,也可以是其他格式如
		dataType: 'json',
		xhrFields: {
			withCredentials: true
		},
		data: {
			productskuId: productskuId,
			orderNo: orderNo
		},
		crossDomain: true,
		//请求成功后要执行的函数，拼接html
		success: function(data) {
			console.log(data)
			if(data.status == 1) {
				layer.msg('提交成功', {
					time: 2000, //20s后自动关闭
				});
				location.href = "../../../../index1.html"
			} else {
				layer.msg('提交失败', {
					time: 2000, //20s后自动关闭
				});
			}
		}
	})

}

/* 拒绝退货申请 */
function submits() {

	var reason = $("#interest option:selected").text()

	var remarks = $("#textar").val()

	$.ajax({
		//请求方式
		type: "POST",
		//文件位置
		url: "http://120.78.142.125:8080/dg/afterSaleManager/reviewFail.do",
		//返回数据格式为json,也可以是其他格式如
		dataType: 'json',
		xhrFields: {
			withCredentials: true
		},
		data: {
			productskuId: productskuId,
			orderNo: orderNo,
			reason: reason,
			remarks: remarks
		},
		crossDomain: true,
		//请求成功后要执行的函数，拼接html
		success: function(data) {
			if(data.status == 1) {
				layer.msg('提交成功', {
					time: 2000, //20s后自动关闭
				});
				location.href = "../../../../index1.html"

			} else {
				layer.msg('提交失败', {
					time: 2000, //20s后自动关闭
				});
			}

		}
	})
}

/* 拒绝退货申请 */
function disagree() {
	var test = document.getElementById("diOp").style.display
	if(test === "none") {
		document.getElementById("diOp").style.display = "block"
		document.getElementById("prSe").style.display = "none"
		document.getElementById("handle").style.height = "470px"
		document.getElementById("handleLf").style.height = "450px"
	}
}

/* 取消拒绝退货申请 */
function cancel() {
	document.getElementById("diOp").style.display = "none"
	document.getElementById("prSe").style.display = "block"
	document.getElementById("handle").style.height = "470px"
	document.getElementById("handleLf").style.height = "450px"
}

/*修改地址*/
function modify() {

	/* 弹窗内容 */
	layer.open({
		type: 2,
		area: ['720px', '470px'],
		scrollbar: false,
		title: '修改收货地址',
		content: ['../DetailsModify/DetailsModify.html', 'no'],
		btn: '提交',
		btnAlign: 'c', //按钮居中
		shade: 0.3, //不显示遮罩
		shadeClose: true,
		success: function(layero, index) {

		},
		yes: function() {
			var body = layer.getChildFrame('body');
			/* 获取修改内容 */
			var receiverName = body.find('#moContacts').val()//联系人
			var receiverZip = body.find('#moPostalcode').val()//邮政编码
			var receiverMobile = body.find('#moPhone').val()//联系电话
			var tesa = body.find('.zcityItem:nth-child(1) input').val() //省
			var tesb = body.find('.zcityItem:nth-child(2) input').val() //市
			var tesc = body.find('.zcityItem:nth-child(3) input').val() //区
			var receiverAddress = body.find('.moDetailsAddress textarea').val() //详情地址
			var receiverArea = tesa + tesb + tesc

			/* 后台查询订单消息 */
			$.ajax({
				//请求方式
				type: "POST",
				//文件位置
				url: "http://120.78.142.125:8080/dg/afterSaleManager/updateAddress.do",//修改地址接口
				//传值给后台
				data: {
					receiverName: receiverName,//联系人
					receiverMobile: receiverMobile,//联系电话
					receiverArea: receiverArea,//省市区
					receiverAddress: receiverAddress,//详情地址
					receiverZip: receiverZip//邮政编码
				},
				xhrFields: {
					withCredentials: true
				},
				//返回数据格式为json,也可以是其他格式如
				dataType: 'json',
				//请求成功后要执行的函数，拼接html
				success: function(data) {
					
					window.location.reload();
				}
			})

			layer.closeAll();
		}
	});
}

/*添加地址*/
function addRess() {

	/* 弹窗内容 */
	layer.open({
		type: 2,
		area: ['720px', '470px'],
		scrollbar: false,
		title: '修改收货地址',
		content: ['../DetailsModify/DetailsModify.html', 'no'],
		btn: '提交',
		btnAlign: 'c', //按钮居中
		shade: 0.3, //不显示遮罩
		shadeClose: true,
		success: function(layero, index) {

		},
		yes: function() {
			var body = layer.getChildFrame('body');
			/* 获取修改内容 */
			var receiverName = body.find('#moContacts').val()//联系人
			var receiverZip = body.find('#moPostalcode').val()//邮政编码
			var receiverMobile = body.find('#moPhone').val()//联系电话
			var tesa = body.find('.zcityItem:nth-child(1) input').val() //省
			var tesb = body.find('.zcityItem:nth-child(2) input').val() //市
			var tesc = body.find('.zcityItem:nth-child(3) input').val() //区
			var receiverAddress = body.find('.moDetailsAddress textarea').val() //详情地址
			var receiverArea = tesa + tesb + tesc

			/* 后台查询订单消息 */
			$.ajax({
				//请求方式
				type: "POST",
				//文件位置
				url: "http://120.78.142.125:8080/dg/afterSaleManager/addAddress.do",//添加地址接口
				//传值给后台
				data: {
					receiverName: receiverName,//联系人
					receiverMobile: receiverMobile,//联系电话
					receiverArea: receiverArea,//省市区
					receiverAddress: receiverAddress,//详情地址
					receiverZip: receiverZip//邮政编码
				},
				xhrFields: {
					withCredentials: true
				},
				//返回数据格式为json,也可以是其他格式如
				dataType: 'json',
				//请求成功后要执行的函数，拼接html
				success: function(data) {
					
				}
			})

			layer.closeAll();
		}
	});
}