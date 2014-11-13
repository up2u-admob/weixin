mainInAni = "zoomIn";
mainOutAni = "zoomOut";
itemInAni = "zoomIn";
itemOutAni = "zoomOut";

$(document).ready(function () {   		
	$("#m-mark").click(function(){
		$.mobile.changePage("#subpage1", {transition:"flip"});
	}); 
	$("#text1").click(function(){
		$.mobile.changePage("#subpage1", {transition:"flip"});
	}); 
	$("#text2").click(function(){
		$.mobile.changePage("#subpage1", {transition:"flip"});
	}); 
	$("#text3").click(function(){
		$.mobile.changePage("#subpage1", {transition:"flip"});
	}); 
	$("#text4").click(function(){
		$.mobile.changePage("#subpage1", {transition:"flip"});
	}); 
	$("#text5").click(function(){
		$.mobile.changePage("#subpage1", {transition:"flip"});
	}); 
	$("#smalldot").click(function(){
		$.mobile.changePage("#subpage1", {transition:"flip"});
	}); 
});