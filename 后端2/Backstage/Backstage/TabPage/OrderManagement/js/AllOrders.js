
layui.use(['laypage', 'layer'], function(){
  var laypage = layui.laypage
  ,layer = layui.layer;

	var Count //数据总数
	var curr //当前页码
	var Limit //每页数量
	var dataList //全部数据

	/* 获取后端数据 */
  window.onload = function getListData(){
  	$.ajax({
    	//请求方式
    	type:"GET",
    	//文件位置
    	url:"http://120.78.142.125/dg/manage/order/list.do",
	    //返回数据格式为json,也可以是其他格式如
	    dataType:'json',
	    //请求成功后要执行的函数，拼接html
	    success: function(data){
	    	console.log(data)
	    	Count = data.data.total
	    	curr = data.data.pageNum
	    	Limit = data.data.pageSize
	    	console.log("总数="+Count+" 页数="+curr+" 条数="+Limit)
	    	PrintingData(data)
	    	table()
	    }
		})
	}
  
  /* 打印数据 */
	function PrintingData(data){
		console.log("数据打印:"+ data.data.pageSize )
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
		
		
		for (var i = 0; i < data.data.size; i++) {
		
			/* 操作功能 */
			var OrDe,LoNe,MaEv,AuEv
    	if( data.data.list[i].status == 10 ){
    		OrDeHa= "<div class='OrDeHa'><span class='curpoi'>订单关闭</span></div>"
    		BiEx = "<div class='BiEx'><span class='curpoi'>订单催付</span></div>"
    		OrderDetails = "<div class='OrDe'><span class='curpoi'>订单详情<span></div>"
    		OrDe = "<div>"+ OrderDetails + BiEx + OrDeHa +"</div>"
    	} else if( data.data.list[i].status == 20 ){
    		OrDeHa= "<div class='OrDeHa'><span class='curpoi'>订单关闭</span></div>"
    		DeGo = "<div class='deGo'><span class='curpoi' onclick='express("+ data.data.list[i].orderNo +")'>发货</span></div>"
    		OrderDetails = "<div class='OrDe'><span class='curpoi'>订单详情<span></div>"
    		OrDe = "<div style='margin-top: -10px'>"+ OrderDetails + DeGo + OrDeHa +"</div>"
    	} else if( data.data.list[i].status == 30 ){
    		LoNe = "<div class='LoNe'><span class='curpoi'>物流消息</span></div>"
    		PrEx = "<div class='PrEx'><span class='curpoi'>打印快递单</span></div>"
    		OrderDetails = "<div class='OrDe'><span class='curpoi'>订单详情<span></div>"
    		OrDe = "<div style='padding-top: 15px'>"+ OrderDetails + LoNe + PrEx +"</div>"
    	} else if( data.data.list[i].status == 3 ){
    		LoNe = "<div class='LoNe'><span class='curpoi'>物流消息</span></div>"
    		OrderDetails = "<div class='OrDe'><span class='curpoi'>订单详情<span></div>"
    		OrDe = "<div style='padding-top: 15px'>"+ OrderDetails + LoNe +"</div>"
    	} else if( data.data.list[i].status == 0 || data.data.list[i].status == 60 ){
    		OrderDetails = "<div class='OrDe'><span class='curpoi'>订单详情<span></div>"
    		OrDe = "<div style='margin-top: -15px'>"+ OrderDetails +"</div>"
    	}
    	OrOp = "<div class='orOp'>"+ OrDe +"</div>"
			
			/* 总价-邮费-优惠 数据 */
			/* 分期 */
			StagingState = ''
			if( data.data.list[i].orderItemVoList.length == 1 ){
				if( data.data.list[i].orderItemVoList[0].staging != 1 ){
					StagingState = "<div class='StagingState'>租金：￥"+ data.data.list[i].orderItemVoList[0].paidMoney +" / "+ data.data.list[i].orderItemVoList[0].totalMoney +"</div>"
				}
			} else {
				StagingState = ''
			}
			/* 优惠 */
			Discount = "<div class='Discount'>优惠数据：XXXXXXX</div>"
			/* 运费 */
			Expresscost = "<div class='Expresscost'>(含快递费："+ data.data.list[i].postage +")</div>"
			/* 改价按钮 */
			if( data.data.list[i].status == 10 ){
    		rePr = "<div class='rePr'><span onclick='PriceChange("+ data.data.list[i].orderNo +")'>改价</span></div>"
    	} else {
    		rePr = ""
    	}
			/* 判断付款方式  1-支付宝 2-微信 3-银联 */
    	if( data.data.list[i].paymentType == 1 ){
    		iconfont = "<i class='iconfont icon-zhifubao'></i>"
    	} else if( data.data.list[i].paymentType == 2 ){
    		iconfont = "<i class='iconfont icon-wechat'></i>"
    	} else if( data.data.list[i].paymentType == 3 ){
    		iconfont = "<i class='iconfont icon-buoumaotubiao26'></i>"
    	}
			money = "<div class='money'>"+ iconfont + data.data.list[i].payment +"</div>"
			NotrMo = "<div class='No_trMo'>"+ money + rePr + Expresscost + Discount + StagingState +"</div>"
			
			/* 订单内容 */
			coInNumber = ''
			for( var a = 0; a < data.data.list[i].orderItemVoList.length; a++  ){
				/* 单价 * 数量 */
				sePr = "<div class='sePr'>3333.49*1</div>"
				
				/* 租期时间 */
				StartTime = "<div class='StartTime'>起租：( 无数据  )</div>"
				EndTime = "<div class='EndTime'>截止：( 无数据  )</div>"
				StartEnd = "<div class='StartEnd'>"+ StartTime + EndTime +"</div>"
				
				coFu = "<div class='coFu'>"+
							 	"<span>押金（单件）：XXXXXX</span>"+
								"<span>租金（单件）：XXXXXXX</span>"+
								"<span>租期天数：XXXXXX</span>"+
							 "</div>"
				coMo = "<div class='coMo'>电脑配置："+ data.data.list[i].orderItemVoList[a].productSubtitle +"</div>" //电脑配置
				shNa = "<div class='shNa'>"+ data.data.list[i].orderItemVoList[a].productName +"</div>"  //商品名称
				coInlf = "<div class='coInlf'>"+ shNa + coMo + coFu +"</div>"
				shImg = "<div class='shImg'><img src='"+ data.data.list[i].orderItemVoList[a].productImage +"'/></div>"  //商品图片
				coIn = "<div class='coIn'>"+ shImg + coInlf + StartEnd + sePr +"</div>"
				coInNumber = coInNumber + coIn
			}
			commodityNumber ="<div class='commodity_Number'>"+ coInNumber +"</div>"
			ordeBottom = "<div class='ordeBottom'>"+ commodityNumber + NotrMo + OrOp +"</div>"
			
			/* 订单详情 */
			SeSNo = "<div class='SeSNo'>卖家备注：<span></span>"+
								"<i class='layui-icon curpoi' onclick='moSellerMessage("+ data.data.list[i].orderNo +")'>&#xe642;</i></span></div>"
			        +"</div>"
			buSNo = "<div class='buSNo'>买家备注：<span>"+ data.data.list[i].message +"</span></div>"
			reIn = "<div class='reIn'> 收货信息：<span id='reIn"+ data.data.list[i].orderNo +"'>"+ data.data.list[i].shippingVo.receiverName+ " " +  //收件人姓名
						 	data.data.list[i].shippingVo.receiverMobile + " " + data.data.list[i].shippingVo.receiverPhone + " " +  //收件人固定电话  移动电话
						 	data.data.list[i].shippingVo.receiverRegion + " " + data.data.list[i].shippingVo.receiverArea + " " +  //地区  省份-市-区
						 	data.data.list[i].shippingVo.receiverAddress + " " + data.data.list[i].shippingVo.receiverZip  //详细地址  邮政编码
						 +"</span>"+
						 	"<textarea id='input'></textarea>"+
						 	"<span class='reInOp curpoi' onclick='copy("+ data.data.list[i].orderNo +")'>复制</span>|<span class='reInOp curpoi'>修改</span>"
						 +"</div>"
			middle = "<div class='middle'>"+ reIn + buSNo + SeSNo +"</div>"
			
			/* 顶部内容 */
			ShopName = "<div class='ShopName'><i class='layui-icon'>&#xe68e;</i>&nbsp;&nbsp;广州大广信息技术有限公司</div>"
    	TrTi = "<div class='trTi'>交易时间："+ data.data.list[i].createTime +"</div>"
    	OrNumber = "<div class='orNumber'>订单号："+ data.data.list[i].orderNo +"</div>"
			if( data.data.list[i].status == 10 ){
    		State =	"<div class='WFPstate'>待付款</div>"
    	} else if( data.data.list[i].status == 20 ){
    		State =	"<div class='WFstate'>待发货</div>"
    	} else if( data.data.list[i].status == 30 ){
    		State =	"<div class='Alstate'>已发货</div>"
    	} else if( data.data.list[i].status == 50 ){
    		State =	"<div class='TrCostate'>交易完成</div>"
    	} else if( data.data.list[i].status == 0 || data.data.list[i].status == 60 ){
    		State =	"<div class='TrClstate'>已关闭</div>"
    	}
			Checkbox = "<div class='checkbox'><input type='checkbox'/></div>"
			ordeTop = "<div class='ordeTop'>"+ Checkbox + State + OrNumber + TrTi + ShopName +"</div>"
			
			/* 外层包裹器 */
    	Content = "<div class='orDe'>"+ ordeTop + middle + ordeBottom +"</div>"
    	
    	rendering	+= Content
    	
		}
		$("#ContentOne").html(rendering);
	}
  
  /* 数据返回后端 */
  function NewgetListData(curr,limit){
  	$.ajax({
    	//请求方式
    	type:"POST",
    	//文件位置
    	url:"http://120.78.142.125/dg/manage/order/list.do",
    	data: {
	    	pageNum: curr, //页数
	    	PageSize: limit //每页条数
			},
	    //返回数据格式为json,也可以是其他格式如
	    dataType:'json',
	    //请求成功后要执行的函数，拼接html
	    success: function(data){
	    	PrintingData(data)
	    }
		})
	}
  
  
  /* 分页 */
  function table(){
  	//完整功能
	  laypage.render({
	    elem: 'PageNumberOne'
	    ,count: Count //---数据总数
	    ,limit: Limit //---每页条数
	    ,layout: ['count', 'prev', 'page', 'next', 'skip']
	    ,jump: function(obj, first){
		    //obj包含了当前分页的所有参数，比如：
		    console.log("获取当前的页:"+obj.curr); //得到当前页，以便向服务端请求对应页的数据。
		    console.log("获取每页显示显示条数:"+obj.limit); //得到每页显示的条数
		    
		    //首次不执行
		    if(!first){
		      NewgetListData(obj.curr,obj.limit)
		    }
		    
		  }
	  });
  }
  
})

/* 订单号查询 */
function OrderQuery(){
	var inOrderNo = $("#inOrderNo").val()
	$("#ContentOne").empty()
	$("#PageNumberOne").empty()
	$.ajax({
		//请求方式
		type:"POST",
		//文件位置
		url:"http://120.78.142.125/dg/manage/order/search.do",
		data:{
			orderNo: inOrderNo
		},
		//url:"http://192.168.1.172:8080/dg/manage/order/list.do",
    //返回数据格式为json,也可以是其他格式如
    dataType:'json',
    //请求成功后要执行的函数，拼接html
    success: function(data){
    	
    	console.log(data)
    	
    	/* 操作功能 */
			var OrDe,LoNe,MaEv,AuEv
    	if( data.data.status == 10 ){
    		OrDeHa= "<div class='OrDeHa'><span class='curpoi'>订单关闭</span></div>"
    		BiEx = "<div class='BiEx'><span class='curpoi'>订单催付</span></div>"
    		OrderDetails = "<div class='OrDe'><span class='curpoi'>订单详情<span></div>"
    		OrDe = "<div>"+ OrderDetails + BiEx + OrDeHa +"</div>"
    	} else if( data.data.status == 20 ){
    		OrDeHa= "<div class='OrDeHa'><span class='curpoi'>订单关闭</span></div>"
    		DeGo = "<div class='deGo'><span class='curpoi' onclick='express("+ data.data.orderNo +")'>发货</span></div>"
    		OrderDetails = "<div class='OrDe'><span class='curpoi'>订单详情<span></div>"
    		OrDe = "<div style='margin-top: -10px'>"+ OrderDetails + DeGo + OrDeHa +"</div>"
    	} else if( data.data.status == 30 ){
    		LoNe = "<div class='LoNe'><span class='curpoi'>物流消息</span></div>"
    		PrEx = "<div class='PrEx'><span class='curpoi'>打印快递单</span></div>"
    		OrderDetails = "<div class='OrDe'><span class='curpoi'>订单详情<span></div>"
    		OrDe = "<div style='padding-top: 15px'>"+ OrderDetails + LoNe + PrEx +"</div>"
    	} else if( data.data.status == 3 ){
    		LoNe = "<div class='LoNe'><span class='curpoi'>物流消息</span></div>"
    		OrderDetails = "<div class='OrDe'><span class='curpoi'>订单详情<span></div>"
    		OrDe = "<div style='padding-top: 15px'>"+ OrderDetails + LoNe +"</div>"
    	} else if( data.data.status == 50 ){
    		AuEv = "<div class='AuEv'><span class='curpoi'>自动评价</span></div>"
    		MaEv = "<div class='MaEv'><span class='curpoi'>手动评价</span></div>"
    		OrderDetails = "<div class='OrDe'><span class='curpoi'>订单详情<span></div>"
    		OrDe = "<div style='margin-top: -15px'>"+ OrderDetails  + MaEv + AuEv +"</div>"
    	} else if( data.data.status == 0 || data.data.status == 60 ){
    		OrderDetails = "<div class='OrDe'><span class='curpoi'>订单详情<span></div>"
    		OrDe = "<div style='margin-top: -15px'>"+ OrderDetails +"</div>"
    	}
    	OrOp = "<div class='orOp'>"+ OrDe +"</div>"
    	
    	/* 判断是否分期 */
    	if( data.data.orderItemVoList[0].staging == 1 ){
    		StagingState = ''
    	} else {
    		StagingState = "<div class='StagingState'>租金： ￥ "+ data.data.orderItemVoList[0].paidMoney +" / "+ data.data.orderItemVoList[0].totalMoney +"</div>"
    	}
    	Discount = "<div class='Discount'>优惠：(数据不存在)</div>" /* "+ lists[i].Discount +" */
    	Expresscost = "<div class='Expresscost'>（含快递费："+ data.data.postage +"）</div>"
    	/* 判断付款方式  1-支付宝 2-微信 3-银联 */
    	if( data.data.paymentType == 1 ){
    		iconfont = "<i class='iconfont icon-zhifubao'></i>"
    	} else if( data.data.paymentType == 2 ){
    		iconfont = "<i class='iconfont icon-wechat'></i>"
    	} else if( data.data.paymentType == 3 ){
    		iconfont = "<i class='iconfont icon-buoumaotubiao26'></i>"
    	}
    	moneyTips = ''
    	if( data.data.orderItemVoList[0].staging != 1 ){
    		moneyTips = "<i class='DownPayments'>首付</i>"
    	}
    	Money = "<div class='money'>"+ iconfont + data.data.payment + moneyTips +"</div>"
    	if( data.data.status == 10 ){
    		rePr = "<div class='rePr' onclick='PriceChange("+ data.data.orderNo +")'>改价</div>"
    	} else {
    		rePr = ""
    	}
    	TrMo = "<div class='trMo'>"+ Money + rePr + Expresscost + Discount + StagingState +"</div>"
    	
    	SePr = "<div class='sePr'>"+ parseFloat( (data.data.orderItemVoList[0].totalRent / data.data.orderItemVoList[0].quantity) + (data.data.orderItemVoList[0].totalPrice / data.data.orderItemVoList[0].quantity) ) + "*" + data.data.orderItemVoList[0].quantity +"</div>"
    	////////////////////////////////////////////////////////////
    	EndTime = "<div class='EndTime'>截止：( 无数据  )</div>"
    	StartTime = "<div class='StartTime'>起租：( 无数据  )</div>"
    	StartEnd = "<div class='StartEnd'>"+ StartTime + EndTime +"</div>"
    	///////////////////////////////////////////////////////////
    	Realpayment = "<span>租期天数："+ data.data.orderItemVoList[0].number +"</span>"
//  	Adjustment = "<span>日租金："+ orderItemVoLists[i].rent +"</span>"
    	Rent = "<span>租金（单件）："+ data.data.orderItemVoList[0].totalRent / data.data.orderItemVoList[0].quantity +"</span>"
    	Deposit = "<span>押金（单件）："+ data.data.orderItemVoList[0].totalPrice / data.data.orderItemVoList[0].quantity +"</span>"
    	CoFu = "<div class='coFu'>"+ Deposit + Rent + Realpayment +"</div>"  // Adjustment +
    	///////////////////////////////////////////////////////////
    	CoMo = "<div class='coMo'>电脑配置："+ data.data.orderItemVoList[0].productSubtitle +"</div>"  //电脑配置
    	ShNa = "<div class='shNa'>"+ data.data.orderItemVoList[0].productName +"</div>"  //商品名称
    	CoInlf = "<div class='coInlf'>"+ ShNa + CoMo + CoFu +"</div>"
    	ShImg = "<div class='shImg'><img src='"+ data.data.orderItemVoList[0].productImage +"'></div>"
    	///////////////////////////////////////////////////////////
    	CoIn = "<div class='coIn'>"+ ShImg + CoInlf + StartEnd + SePr +"</div>"
    	
    	SeSNo = "<div class='SeSNo'>卖家备注：<span>"+ data.data.message +"</span><span class='reInOp curpoi'>"+
				      "<i class='layui-icon' onclick='moSellerMessage("+ data.data.orderNo +")'>&#xe642;</i></span></div>"
    	BuSNo = "<div class='buSNo'>买家备注：<span>"+ data.data.message +"</span></div>"
    	ReIn = "<div class='reIn'>收货信息：<span>"+ data.data.shippingVo.receiverName + "&nbsp;" + data.data.shippingVo.receiverMobile + "&nbsp;" + data.data.shippingVo.receiverPhone + "&nbsp;" + data.data.shippingVo.receiverRegion + "&nbsp;" + data.data.shippingVo.receiverArea + "&nbsp;" + data.data.shippingVo.receiverAddress+ "&nbsp;" + data.data.shippingVo.receiverZip +"</span>"+
	    		   "<textarea id='input'></textarea>"+
	    		   "<span class='reInOp curpoi' onclick='copy("+ data.data.orderNo +")'>复制</span>"+
	    		   "|<span onclick='DetailsModify("+ data.data.orderNo +")' class='reInOp curpoi'>修改</span></div>"
    	Middle = "<div class='middle'>"+ ReIn + BuSNo + SeSNo +"</div>"
    	
    	ShopName = "<div class='ShopName'><i class='layui-icon'>&#xe68e;</i>&nbsp;&nbsp;广州大广信息技术有限公司</div>"
    	TrTi = "<div class='trTi'>交易时间："+ data.data.createTime +"</div>"
    	OrNumber = "<div class='orNumber'>订单号："+ data.data.orderNo +"</div>"
    	if( data.data.status == 10 ){
    		State =	"<div class='WFPstate'>待付款</div>"
    	} else if( data.data.status == 20 ){
    		State =	"<div class='WFstate'>待发货</div>"
    	} else if( data.data.status == 30 ){
    		State =	"<div class='Alstate'>已发货</div>"
    	} else if( data.data.status == 50 ){
    		State =	"<div class='TrCostate'>交易完成</div>"
    	} else if( data.data.status == 0 || data.data.status == 60 ){
    		State =	"<div class='TrClstate'>已关闭</div>"
    	}
    	Checkbox = "5455465"
    	OrdeTop = "<div class='ordeTop'>"+ Checkbox + State + OrNumber + TrTi + ShopName +"</div>"
    	
    	Content = "<div class='orDe'>"+ OrdeTop + Middle + CoIn + TrMo + OrOp + Return +"</div>"
    	
    	
			$("#ContentOne").html(Content);
	  }
	})
}

/* 复制代码 */
function copy(id) {
	var text = document.getElementById("reIn"+id).innerText;
	var input = document.getElementById("input");
	input.value = text; // 修改文本框的内容
	input.select(); // 选中文本
	document.execCommand("copy"); // 执行浏览器复制命令
	alert("复制成功");
}

/* 修改收货信息 */
function DetailsModify(orderNo){
	
	/* 查询得来的数据 */
	var obtain = ''
	
	/* 后台查询订单消息 */
	$.ajax({
		//请求方式
		type:"POST",
		//文件位置
		url:"http://120.78.142.125/dg/manage/order/search.do",
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
		    area: ['720px','470px'],
		    scrollbar: false,
		    title: '修改收货地址',
		    content: ['popup/DetailsModify.html', 'no'],
		    btn: '提交',
		    btnAlign: 'c', //按钮居中
		    shade: 0.3, //不显示遮罩
		    shadeClose: true,
		    success: function(layero, index){
		    	console.log(obtain)
				  var body = layer.getChildFrame('body', index);
				  body.find('#moContacts').val(obtain.data.shippingVo.receiverName)
				  body.find('#moPostalcode').val(obtain.data.shippingVo.receiverZip)
				  body.find('#moPhone').val(obtain.data.shippingVo.receiverPhone)
				  body.find('#moTelephone').val(obtain.data.shippingVo.receiverMobile)
				  console.log(obtain.data.shippingVo.receiverArea)
				  
				  NotIntercepted = obtain.data.shippingVo.receiverArea  //截取
					Intercepted = NotIntercepted.split("-")  //截取存到数组
					console.log( Intercepted )
				  
				 	body.find('.zcityItem:nth-child(1) input').val( Intercepted[0] )  //省
				  body.find('.zcityItem:nth-child(2) input').val( Intercepted[1] )  //市
				  body.find('.zcityItem:nth-child(3) input').val( Intercepted[2] )  //区
				  body.find('.moDetailsAddress textarea').val( obtain.data.shippingVo.receiverAddress )  //详情地址
				  
				},
		    yes: function(){
		      layer.closeAll();
		    }
		  });
    }
	})
}

/* 修改卖家留言 */
function moSellerMessage(orderNo){
	/* 查询得来的数据 */
	var obtain = ''
	
	/* 后台查询订单消息 */
	$.ajax({
		//请求方式
		type:"POST",
		//文件位置
		url:"http://120.78.142.125/dg/manage/order/search.do",
		data: {
			orderNo: orderNo //订单号
		},
    //返回数据格式为json,也可以是其他格式如
    dataType:'json',
    //请求成功后要执行的函数，拼接html
    success: function(data){
    	obtain = data
    	console.log( obtain )
			layer.open({
		    type: 2,
		    area: ['570px','310px'],
		    scrollbar: false,
		    title: '卖家备注',
		    content: ['popup/moSellerMessage.html', 'no'],
		    btn: '提交',
		    btnAlign: 'c', //按钮居中
		    shade: 0.3, //不显示遮罩
		    shadeClose: true,
		    success: function(layero, index){
		    	console.log(obtain)
				  var body = layer.getChildFrame('body', index);
				  body.find('.textarea textarea').val( 1231564 )
				},
		    yes: function(){
		      layer.closeAll();
		    }
		  });
		}
  })
}

/* 商品发货 */
function express(orderNo){
	/* 查询得来的数据 */
	var obtain = ''
	
	/* 后台查询订单消息 */
	$.ajax({
		//请求方式
		type:"POST",
		//文件位置
		url:"http://120.78.142.125/dg/manage/order/search.do",
		data: {
			orderNo: orderNo //订单号
		},
    //返回数据格式为json,也可以是其他格式如
    dataType:'json',
    //请求成功后要执行的函数，拼接html
    success: function(data){
    	obtain = data
			layer.open({
				type: 2,
		    area: ['920px','340px'],
		    scrollbar: false,
		    title: '发货',
		     content: ['popup/Express.html', 'no'],
		    btn: '提交',
		    btnAlign: 'c', //按钮居中
		    shade: 0.3, //不显示遮罩
		    shadeClose: true,
		    success: function(layero, index){
		    	console.log(obtain)
				  var body = layer.getChildFrame('body', index);
				  body.find('.OrderNumber input').val( obtain.data.orderNo )
				  var addressData = obtain.data.shippingVo.receiverName + " " +
				                    obtain.data.shippingVo.receiverPhone + " " +
				                    obtain.data.shippingVo.receiverMobile + " " +
				                    obtain.data.shippingVo.receiverArea + " " +
				                    obtain.data.shippingVo.receiverAddress + " " +
				                    obtain.data.shippingVo.receiverZip
				  body.find('.ReceivingAddress input').val(addressData)
				  body.find('.buSNo input').val(obtain.data.message)
				  body.find('.commodityLf img').attr("src",obtain.data.orderItemVoList[0].productImage)
				  body.find('.commodityTitle input').val(obtain.data.orderItemVoList[0].productName)
				  body.find('.mode input').val(obtain.data.orderItemVoList[0].productSubtitle)
				  
				},
		    yes: function(){
		    	layer.closeAll();
		      var body = layer.getChildFrame('body');
		      var expressSelect = body.find('#expressSelect option:selected').val()  //选择的快递
		      var expressNumber = body.find('.expressNumber input').val()  //输入的快递编号
		      /* 发货执行函数 */
					$.ajax({
						//请求方式
						type:"POST",
						//文件位置
						url:"http://120.78.142.125/dg/manage/order/sendGoods.do",
						data: {
							orderNo: orderNo, //订单号
							shippingName: expressSelect,  //快递公司名称
							shippingCode: expressNumber  //运单号
						},
				    //返回数据格式为json,也可以是其他格式如
				    dataType:'json',
				    //请求成功后要执行的函数，拼接html
				    success:function(data){
				    	console.log(1)
				    }
					})
		      console.log(expressSelect)
		      console.log(expressNumber)
		    }
		  });
		}
  });
}

/* 商品修改价格 */
function PriceChange(orderNo){
	layer.open({
    type: 2,
    area: ['500px','340px'],
    scrollbar: false,
    title: '卖家备注',
     content: ['popup/PriceChange.html', 'no'],
    btn: '提交',
    btnAlign: 'c', //按钮居中
    shade: 0.3, //不显示遮罩
    shadeClose: true,
//  success: function(layero, index){
//  	console.log(obtain)
//		  var body = layer.getChildFrame('body', index);
//		  body.find('#moContacts').val(obtain.data.shippingVo.receiverName)
//		  body.find('#moPostalcode').val(obtain.data.shippingVo.receiverZip)
//		  body.find('#moPhone').val(obtain.data.shippingVo.receiverPhone)
//		  body.find('#moTelephone').val(obtain.data.shippingVo.receiverMobile)
//		},
    yes: function(){
    	console.log(orderNo)
      layer.closeAll();
    }
  });
}