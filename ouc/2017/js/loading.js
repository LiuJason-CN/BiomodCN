/*******************************************  
 *   
 * 创建人：  
 * 创建时间：
 * 创建说明：
 * 修改人：  
 * 修改时间：  
 * 修改说明：  
 *   
*********************************************/  
  
//获取浏览器页面可见高度和宽度  
var _PageHeight = document.documentElement.clientHeight,  
    _PageWidth = document.documentElement.clientWidth;  
//计算loading框距离顶部和左部的距离（loading框的宽度为215px，高度为61px）  
var _LoadingTop = _PageHeight > 61 ? (_PageHeight - 61) / 2 : 0,  
    _LoadingLeft = _PageWidth > 215 ? (_PageWidth - 215) / 2 : 0;  
// 在页面未加载完毕之前显示的loading Html自定义内容  

var _innerHtml = '<div class="l-wrapper">'+
				   '<svg viewBox="0 0 120 120" version="1.1">'+
				   '<g id="circle" class="g-circles g-circles--v2">'+
				   '<circle id="12" transform="translate(35, 16.698730) rotate(-30) translate(-35, -16.698730) " cx="35" cy="16.6987298" r="10"></circle>'+
				   '<circle id="11" transform="translate(16.698730, 35) rotate(-60) translate(-16.698730, -35) " cx="16.6987298" cy="35" r="10"></circle>'+
		           '<circle id="10" transform="translate(10, 60) rotate(-90) translate(-10, -60) " cx="10" cy="60" r="10"></circle>'+
		           '<circle id="9" transform="translate(16.698730, 85) rotate(-120) translate(-16.698730, -85) " cx="16.6987298" cy="85" r="10"></circle>'+
		           '<circle id="8" transform="translate(35, 103.301270) rotate(-150) translate(-35, -103.301270) " cx="35" cy="103.30127" r="10"></circle>'+
		           '<circle id="7" cx="60" cy="110" r="10"></circle>'+
		           '<circle id="6" transform="translate(85, 103.301270) rotate(-30) translate(-85, -103.301270) " cx="85" cy="103.30127" r="10"></circle>'+
		           '<circle id="5" transform="translate(103.301270, 85) rotate(-60) translate(-103.301270, -85) " cx="103.30127" cy="85" r="10"></circle>'+
		           '<circle id="4" transform="translate(110, 60) rotate(-90) translate(-110, -60) " cx="110" cy="60" r="10"></circle>'+
		           '<circle id="3" transform="translate(103.301270, 35) rotate(-120) translate(-103.301270, -35) " cx="103.30127" cy="35" r="10"></circle>'+
		           '<circle id="2" transform="translate(85, 16.698730) rotate(-150) translate(-85, -16.698730) " cx="85" cy="16.6987298" r="10"></circle>'+
		           '<circle id="1" cx="60" cy="10" r="10"></circle>'+
				   '</g></svg></div>';
var _LoadingHtml = '<div id="loadingDiv" style="position:fixed;left:0;right:0;top:0px;bottom:0;background:#000;opacity:1;filter:alpha(opacity=80);z-index:10000;">'+
					_innerHtml+
					'</div>';  
//呈现loading效果  
document.write(_LoadingHtml);   
  
//window.onload = function () {  
//    var loadingMask = document.getElementById('loadingDiv');  
//    loadingMask.parentNode.removeChild(loadingMask);  
//};  
  
//监听加载状态改变  
document.onreadystatechange = completeLoading;  
  
//加载状态为complete时移除loading效果  
function completeLoading() {  
    if (document.readyState == "complete") {  
        var loadingMask = document.getElementById('loadingDiv');  
        loadingMask.parentNode.removeChild(loadingMask); 
       	// document.documentElement.style.overflow = 'scroll';
    } else{
    	// document.documentElement.style.overflow = 'hidden'; 
    }
}  