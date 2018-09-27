
var id
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
    	url:"http://120.78.142.125:8080/dg/manage/morgage/list.do",
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
	
window.RendererGetListdata = function(){
  	$.ajax({
    	//请求方式
    	type:"GET",
    	//文件位置
    	url:"http://120.78.142.125:8080/dg/manage/morgage/list.do",
	    //返回数据格式为json,也可以是其他格式如
	    dataType:'json',
	    //请求成功后要执行的函数，拼接html
	    success: function(data){
	    	console.log(data)
	    	Count = data.data.total
	    	curr = data.data.pageNum
	    	Limit = data.data.pageSize
	    	console.log("1总数="+Count+" 1页数="+curr+" 1条数="+Limit)
	    	PrintingData(data)
	    	table()
	    }
		})
	}
  
 /* 打印数据 */
function PrintingData(data){
		
		console.log(data)
		
		console.log("数据打印:"+ data.data.pageSize )
		//数据渲染变量
		var rendering = ""
		
		for (var i = 0; i < data.data.size; i++) {
			var Stauts,Operation
			
			ApplyTime = "<div class='LfBoBor applyTime updateTime'>"+ data.data.list[i].createTime +"</div>"
			
			if (data.data.list[i].deposit == "审核中") {
				Stauts = "<div class='LfBoBor stauts deposit' style='color:#1FE49D'>"+ data.data.list[i].deposit +"</div>"
				id = data.data.list[i].id
				Operation = "<div class='LfBoBor operation'>"+"<span onclick='Submission(" + id +")'>详情</span>"+"<span>删除</span>"+"</div>"
			}
			
			if (data.data.list[i].deposit == "押金全免") {
				id = data.data.list[i].id
				Operation = "<div class='LfBoBor operation'>"+"<span onclick='Submission(" + id +")'>详情</span>"+"<span>删除</span>"+"</div>"
				Stauts = "<div class='LfBoBor stauts deposit' style='color:#319990'>"+ data.data.list[i].deposit +"</div>"
			}
			
			if (data.data.list[i].deposit == "审核不通过") {
				id = data.data.list[i].id
				Operation = "<div class='LfBoBor operation'>"+"<span onclick='Submission(" + id +")'>详情</span>"+"<span>删除</span>"+"</div>"
				Stauts = "<div class='LfBoBor stauts deposit' style='color:#e60012'>"+ data.data.list[i].deposit +"</div>"
			}
			
			if (data.data.list[i].deposit == "押金免一半") {
				id = data.data.list[i].id
				Operation = "<div class='LfBoBor operation'>"+"<span onclick='Submission(" + id +")'>详情</span>"+"<span>删除</span>"+"</div>"
				Stauts = "<div class='LfBoBor stauts deposit' style='color:#FBB843'>"+ data.data.list[i].deposit +"</div>"
			}
			
			if (data.data.list[i].oneself == 1) {
				
				LfName ="<div class='LfBoBor LfName' style='color:#e60012'>法人申请</div>"
				
			}else if(data.data.list[i].oneself == 2) {
				LfName ="<div class='LfBoBor LfName ' style='color:#FBB843'>经办人申请</div>"
			}
			EnterpriseName = "<div class='LfBoBor enterpriseName companyName'>"+ data.data.list[i].companyName +"</div>"
			Phone = "<div class='LfBoBor phone phones'>"+ data.data.list[i].phone +"</div>"
			Name = "<div class='LfBoBor name username'>"+ data.data.list[i].username +"</div>"
			Id = "<div class='LfBoBor Id id'>"+ data.data.list[i].id +"</div>"
			Checkbox = "<div class='checkbox'><input type='checkbox'/></div>"
			Line ="<div class='line'>"+ Checkbox + Id + Name + Phone + EnterpriseName + LfName + Stauts + ApplyTime + Operation +"</div>"
			/* 外层包裹器 */
	    	
	    	rendering	+= Line
    	
		}
		$("#ContentOne").html(rendering);
	}
	

	
/* 数据返回后端 */
function NewgetListData(curr, limit) {
		$.ajax({
			//请求方式
			type: "POST",
			//文件位置
			url: "http://120.78.142.125:8080/dg/manage/morgage/list.do",
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
		      scrollTo(0,0)
		    }
		    
		  }
	  });
  }
  
})

/* 显示所有订单 */
function Renderer(){
	RendererGetListdata()
}

function Submission(id) {
	$.ajax({
		//请求方式
		type: "GET",
		//文件位置
		url: "http://120.78.142.125:8080/dg/manage/morgage/detail.do",
		//返回数据格式为json,也可以是其他格式如
		dataType: 'json',
		data: {
			mortgageId: id
		},
		xhrFields: {
			withCredentials: true
		},
		crossDomain: true,
		//请求成功后要执行的函数，拼接html
		success: function(data) {
			console.log(data)
			
			if(data.data.oneself == 1){
				
				window.open("../../TabPage/Deposit/pages/DepositTwo.html?mortgageId=" + id )
				
					if(data.data.deposit == 1) {
							
							window.open("../../TabPage/Deposit/pages/AuditFailed.html?mortgageId=" + id )
							
					} else if(data.data.deposit == 2) {
							
						window.open("../../TabPage/Deposit/pages/FreePart.html?mortgageId=" + id )
							
					}	else if(data.data.deposit == 3) {
							
						window.open("../../TabPage/Deposit/pages/ReviewThrough.html?mortgageId=" + id )
							
					}
				
			} else if(data.data.oneself == 2){
				
				window.open("../../TabPage/Deposit/pages/DepositOne.html?mortgageId=" + id )
			}
//			
	
		}
	})
}




