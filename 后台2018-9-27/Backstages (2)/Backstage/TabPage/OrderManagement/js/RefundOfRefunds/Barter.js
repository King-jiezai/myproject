
var test

function parseURL(url){
	
    var url = url.split("=");
    console.log(url[1])
}

window.onload = function tetstt(){
	var test = location.href.split('?')[1]
	parseURL(test)
}
