layui.use('element', function(){
	var $ = layui.jquery
	,element = layui.element; //Tab的切换功能，切换事件监听等，需要依赖element模块
  
	//触发事件
	var active = {
    		tabChange: function(){
			//切换到指定Tab项
			element.tabChange('demo', '22'); //切换到：用户管理
		}
	};
  
	$('.site-demo-active').on('click', function(){
		var othis = $(this), type = othis.data('type');
		active[type] ? active[type].call(this, othis) : '';
	});
});

layui.use('layedit', function(){
  var layedit = layui.layedit;
  layedit.build('coinInput' ,{
  	height: 141
  }); //建立编辑器
  
  layedit.build('dedeRichText' ,{
  	height: 380
  });
  
});

window.onload = function(){
	layui.use('form', function(){
		var form = layui.form;
		$(function(){
	        $.ajax({
			    url:'http://120.78.142.125/dg/manage/category/getBackCategoryList.do',
			    dataType:'json',
			    type:'post',
			    success:function(data){
					
		            for( i = 0; i < data.data.length; i++ ){
		            	
		            	$('#option').append(new Option(data.data[i].name,data.data[i].id));//往下拉菜单里添加元素
		            }
			
			        form.render();//菜单渲染 把内容加载进去
			    }
			})
		})
	})
};

/* 图片上传 */
layui.use('upload', function(){
	var $ = layui.jquery
	,upload = layui.upload;

	/* 多张图片上传 */
	//多图片上传
	upload.render({
		elem: '#img'
		,url: 'http://120.78.75.195:8080/dg/manage/product/upload.do'
		,multiple: true
		,before: function(obj){
			//预读本地文件示例，不支持ie8
			obj.preview(function(index, file, result){
				console.log(index)
				console.log(file)
				console.log(result)
 				$('#demo2').append('<img src="'+ result +'" alt="'+ file.name +'" class="layui-upload-img">')
			});
		}
	    ,done: function(res){
	      //上传完毕
	    }
	});
});

layui.use(['form', 'layedit', 'laydate', ], function(){
  var form = layui.form
  ,layer = layui.layer
  ,layedit = layui.layedit
  ,laydate = layui.laydate;
  
});

/* 配置添加输入框js */
var test = 2;
function addElementDiv() {
	if( test >= 10 ){
		return
	} else {
		var parent = document.getElementById("confBor");
		//添加 div
		var div = document.createElement("div");
		//设置 div 属性，如 id
		div.setAttribute("id", "confInput");
		parent.appendChild(div);
		test = test+ 1;
		div.innerHTML = "配置&nbsp;<input class='test"+test+"' type='text'>&nbsp;价格&nbsp;<input type='text'>&nbsp;&nbsp;元";
	}
}

/* 基本参数输入框js */
var test1 = 1;
function addElementTable() {
	if( test1 >= 7 ){
		return
	} else {
		var parent = document.getElementById("bapaTable");
		//添加 div
		var tr = document.createElement("tr");
		//设置 div 属性，如 id
		parent.appendChild(tr);
		test1 = test1+ 1;
		tr.innerHTML = "<tr><td><input type='text'/></td><td><input type='text'/></td></tr>";
	}
}