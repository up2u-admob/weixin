var text_1_big = false;
var text_2_big = false;
var text_3_big = false;

mainInAni = "flipIn";
mainOutAni = "flipOut";
itemInAni = "fadeIn";
itemOutAni = "fadeOut";
		
function removeAnimaMenu1(){
	$("#m-mark1").removeClass("animated "+mainOutAni);
	removeAnimaItems($("#main_class1"), itemInAni);
}
function loadMenu1(){
	hideItems($("#main_class1") , true);
	$("#m-mark1").addClass("animated "+mainInAni);
	setTimeout(function(){
		animaItems($("#main_class1"), itemInAni);
		},1000);
}
function unloadMenu1(){
	animaItems($("#main_class1"), itemOutAni);
	setTimeout(function(){
		$("#m-mark1").addClass("animated "+mainOutAni);
	},500 * $("#main_class1").children("div").size());
}

$(function () {    
    $("#english_text_1").click(function () {
    	if (!text_1_big)
    	{
	    	$("#main_class1").animate({width:'170%', top: '-10%', left: '-68%'}, "slow");
	     	text_1_big = true;
			text_2_big = false;
			text_3_big = false;
	     }
	     else
	     {
	     	$("#main_class1").animate({width:'100%', top: '-5%', left: '0%'}, "slow");
	     	text_1_big = false;
			text_2_big = false;
			text_3_big = false;
	     }
	})
	
	$("#english_text_2").click(function () {
    	if (!text_2_big)
    	{
	    	$("#main_class1").animate({width:'170%', top: '-25%', left: '-7%'}, "slow");
	     	text_1_big = false;
			text_2_big = true;
			text_3_big = false;
	     }
	     else
	     {
	     	$("#main_class1").animate({width:'100%', top: '-5%', left: '0%'}, "slow");
	     	text_1_big = false;
			text_2_big = false;
			text_3_big = false;
	     }
	})
	
		$("#english_text_3").click(function () {
    	if (!text_3_big)
    	{
	    	$("#main_class1").animate({width:'170%', top: '-35%', left: '-60%'}, "slow");
	     	text_1_big = false;
			text_2_big = false;
			text_3_big = true;
	     }
	     else
	     {
	     	$("#main_class1").animate({width:'100%', top: '-5%', left: '0%'}, "slow");
	     	text_1_big = false;
			text_2_big = false;
			text_3_big = false;
	     }
	})
});

var isdrag = false;   
var tx, x, ty, y;

var supportTouch = 'ontouchend' in document;
var EVENTNAME_TOUCHSTART = supportTouch ? 'touchstart' : 'mousedown';
var EVENTNAME_TOUCHMOVE = supportTouch ? 'touchmove' : 'mousemove';
var EVENTNAME_TOUCHEND = supportTouch ? 'touchend' : 'mouseup';

document.addEventListener(EVENTNAME_TOUCHSTART, startHandler);  
document.addEventListener(EVENTNAME_TOUCHMOVE, moveHandler);  
document.addEventListener(EVENTNAME_TOUCHEND, stopHandler);  

function moveHandler(e){   
  if (isdrag)
  { 
	  if (supportTouch)
	  {
		  $("#main_class1").css("left", tx + e.touches[0].pageX - x);
		  $("#main_class1").css("top", ty + e.touches[0].pageY - y);
	  }
	  else
	  {
		  $("#main_class1").css("left", tx + e.pageX - x);
		  $("#main_class1").css("top", ty + e.pageY - y);
	  }
   }   
   return false;   
}   
  
function startHandler(e){       
   tx = parseInt(document.getElementById("main_class1").style.left + 0);  
   ty = parseInt(document.getElementById("main_class1").style.top + 0);  
   if (supportTouch)
   { 
   		x = e.touches[0].pageX;
   		y = e.touches[0].pageY; 
   }
   else
   {
   		x = e.pageX;
   		y = e.pageY;
   }
   isdrag = true; 
   return false;   
} 

function stopHandler(e){   
  isdrag = false;    
}   
   