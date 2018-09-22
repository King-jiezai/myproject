var lists = []
var shippingVos = []

layui.use(['laypage', 'layer'], function(){
  	var laypage = layui.laypage
  	,layer = layui.layer;
	
	var test = []
	
	$(function(){
        $.ajax({
            //请求方式
            type:"GET",
            //文件位置
            url:"http://120.78.142.125:8080/dg/manage/order/list.do",
            //返回数据格式为json,也可以是其他格式如
            dataType: "json",
            //请求成功后要执行的函数，拼接html
            success: function(data){
            	
            	for( var z = 0; z < data.data.list.length; z++ ){
            		if( data.data.list[z].status == 10 || data.data.list[z].status == 40 ){
            			/* 订单详情 */
            			var list = {}
            			list["id"] = z
	            		list["orderNo"] = data.data.list[z].orderNo
	            		list["payment"] = data.data.list[z].payment
	            		list["message"] = data.data.list[z].message
	            		list["paymentType"] = data.data.list[z].paymentType
	            		list["status"] = data.data.list[z].status
	            		list["createTime"] = data.data.list[z].createTime
	            		list["totalRent"] = data.data.list[z].totalRent
	            		list["postage"] = data.data.list[z].postage
	            		list["totalPrice"] = data.data.list[z].totalPrice
	            		lists.push( list )
	            		/* 收货人信息 */
	            		var shippingVo = {}
	            		shippingVo["receiverName"] = data.data.list[z].shippingVo.receiverName
	            		shippingVo["receiverPhone"] = data.data.list[z].shippingVo.receiverPhone
	            		shippingVo["receiverMobile"] = data.data.list[z].shippingVo.receiverMobile
	            		shippingVo["receiverRegion"] = data.data.list[z].shippingVo.receiverRegion
	            		shippingVo["receiverArea"] = data.data.list[z].shippingVo.receiverArea
	            		shippingVo["receiverAddress"] = data.data.list[z].shippingVo.receiverAddress
	            		shippingVo["receiverZip"] = data.data.list[z].shippingVo.receiverZip
	            		shippingVos.push( shippingVo )
            		}
            		
            	}
            	//调用分页
				laypage.render({
				    elem: 'PageNumberTwo',
				    count: lists.length,
				    jump: function(obj){
				    	//模拟渲染
				     	document.getElementById('ContentTwo').innerHTML = function(){
					        var arr = [],
					        thisData = lists.concat().splice(obj.curr*obj.limit - obj.limit, obj.limit);
					        layui.each(thisData, function(index, item){
					        		OrDeHa= "<div class='OrDeHa'><span class='curpoi'>订单关闭</span></div>"
					        		BiEx = "<div class='BiEx'><span class='curpoi'>订单催付</span></div>"
					        		OrderDetails = "<div class='OrDe'><span class='curpoi'>订单详情<span></div>"
					        		OrDe = "<div>"+ OrderDetails + BiEx + OrDeHa +"</div>"
					        	
						        	OrOp = "<div class='orOp'>"+ OrDe +"</div>"
						        	
						        	/* 判断是否分期 */
						        	StagingState1 = 2
						        	if( StagingState1 == 2 ){
						        		StagingState = "<div class='StagingState'>租金： ￥ 0 / 10000</div>"
						        	} else {
						        		StagingState = ''
						        	}
						        	Discount = "<div class='Discount'>优惠：(数据不存在)</div>" /* "+ lists[index].Discount +" */
						        	Expresscost = "<div class='Expresscost'>（含快递费："+ lists[index].postage +"）</div>"
						        	/* 判断付款方式  1-支付宝 2-微信 3-银联 */
						        	test123 = 3
						        	if( test123 == 1 ){
						        		iconfont = "<i class='iconfont icon-zhifubao'></i>"
						        	} else if( test123 == 2 ){
						        		iconfont = "<i class='iconfont icon-wechat'></i>"
						        	} else if( test123 == 3 ){
						        		iconfont = "<i class='iconfont icon-buoumaotubiao26'></i>"
						        	}
						        	Money = "<div class='money'>"+ iconfont + lists[index].payment +"</div>"
						        	rePr = "<div class='rePr'>改价</div>"
						        	TrMo = "<div class='trMo'>"+ Money + rePr + Expresscost + Discount + StagingState +"</div>"
						        	
						        	SePr = "<div class='sePr'>"+ lists[index].payment +"</div>"
						        	////////////////////////////////////////////////////////////
						        	EndTime = "<div class='EndTime'>截止：2018-09-24</div>"
						        	StartTime = "<div class='StartTime'>起租：2018-08-24</div>"
						        	StartEnd = "<div class='StartEnd'>"+ StartTime + EndTime +"</div>"
						        	///////////////////////////////////////////////////////////
						        	Realpayment = "<span>实付：(数据不存在)</span>"/* "+ lists[index].totalPrice +" */
						        	Adjustment = "<span>调整：(数据不存在)</span>"/* "+ lists[index].adjustment +" */
						        	Rent = "<span>租金："+ lists[index].totalRent +"</span>"
						        	Deposit = "<span>押金："+ lists[index].totalPrice +"</span>"
						        	CoFu = "<div class='coFu'>"+ Deposit + Rent + Adjustment + Realpayment +"</div>"
						        	///////////////////////////////////////////////////////////
						        	CoMo = "<div class='coMo'>(数据不存在)</div>" /* "+ lists[index].coMo +" */
						        	ShNa = "<div class='shNa'>(数据不存在)</div>"/* "+ lists[index].shNa +" */
						        	CoInlf = "<div class='coInlf'>"+ ShNa + CoMo + CoFu +"</div>"
						        	ShImg = "<div class='shImg'>(数据不存在)</div>"/* <img src='"+ lists[index].shImg +"'> */
						        	///////////////////////////////////////////////////////////
						        	CoIn = "<div class='coIn'>"+ ShImg + CoInlf + StartEnd + SePr +"</div>"
						        	
						        	SeSNo = "<div class='SeSNo'>卖家备注：<span>"+ lists[index].message +"</span><span class='reInOp curpoi'>"+
						        			"<i id='SeSNo"+ index +"' class='layui-icon' onclick='SesNo("+ index +")'>&#xe642;</i></span>&nbsp;&nbsp;(请点击两次)</div>"
						        	BuSNo = "<div class='buSNo'>买家备注：<span>"+ lists[index].message +"</span></div>"
						        	ReIn = "<div class='reIn'>收货信息：<span id='reIn"+lists[index].orderNo +"'>"+ shippingVos[index].receiverName + "&nbsp;" + shippingVos[index].receiverPhone + "&nbsp;" + shippingVos[index].receiverMobile + "&nbsp;" + shippingVos[index].receiverRegion + "&nbsp;" + shippingVos[index].receiverArea + "&nbsp;" + shippingVos[index].receiverAddress+ "&nbsp;" + shippingVos[index].receiverZip +"</span>"+
						        		   "<textarea id='input'></textarea>"+
						        		   "<span class='reInOp curpoi' onclick='copy("+ lists[index].orderNo +")'>复制</span>"+
						        		   "|<span id='reInOp"+ index +"' onclick='' class='reInOp curpoi'>修改</span>&nbsp;&nbsp;(请点击两次)</div>"
						        	Middle = "<div class='middle'>"+ ReIn + BuSNo + SeSNo +"</div>"
						        	
						        	ShopName = "<div class='ShopName'><i class='layui-icon'>&#xe68e;</i>&nbsp;&nbsp;广州大广信息技术有限公司</div>"
						        	TrTi = "<div class='trTi'>交易时间："+ lists[index].createTime +"</div>"
						        	OrNumber = "<div class='orNumber'>订单号："+ lists[index].orderNo +"</div>"
						        	if( lists[index].status == 10 || lists[index].status == 40 ){
						        		State =	"<div class='WFPstate'>待付款</div>"
						        	} else if( lists[index].status == 70 ){
						        		State =	"<div class='WFstate'>待发货</div>"
						        	} else if( lists[index].status == 30 ){
						        		State =	"<div class='Alstate'>已发货</div>"
						        	} else if( lists[index].status == 20 || lists[index].status == 50 ){
						        		State =	"<div class='TrCostate'>交易完成</div>"
						        	}/* else if( item.status == 4 ){
						        		State =	"<div class='WaEvstate'>待评价</div>"
						        	} else if( item.status == 5 ){
						        		State =	"<div class='AFRstate'>申请退款</div>"
						        	} */else if( lists.status == 60 ){
						        		State =	"<div class='TrClstate'>已关闭</div>"
						        	}
						        	Checkbox = "<input type='checkbox'/>"
						        	OrdeTop = "<div class='ordeTop'>"+ Checkbox + State + OrNumber + TrTi + ShopName +"</div>"
						        	
						        	Content = "<div class='orDe'>"+ OrdeTop + Middle + CoIn + TrMo + OrOp +"</div>"
						        	
						        	arr.push(Content);
					        });
					    	return arr.join('');
				    	}();
				    }
				});
            }
        })
  	});
});

/* 复制代码 */
function copy(id) {
  	var text = document.getElementById("reIn"+id).innerText;
   	var input = document.getElementById("input");
   	input.value = text; // 修改文本框的内容
   	input.select(); // 选中文本
   	document.execCommand("copy"); // 执行浏览器复制命令
	alert("复制成功");
}