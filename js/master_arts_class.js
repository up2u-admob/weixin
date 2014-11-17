var sub_1_big = false;
var sub_2_big = false;
var sub_3_big = false;
var sub_4_big = false;

mainInAni = "fadeInLeft";
mainOutAni = "fadeOutLeft";
itemInAni = "rotateIn";
itemOutAni = "rotateOut";

$(document).ready(function() {   
	$("#sub1").click(function() {zoomSubBlock1();});
	$("#sub2").click(function() {zoomSubBlock2();});
	$("#sub3").click(function() {zoomSubBlock3();});
	$("#sub4").click(function() {zoomSubBlock4();});
	$("#m-mark").click(function() {restore();});
	$("#sub_content1").click(function() {restore();});
	$("#sub_content2").click(function() {restore();});
	$("#sub_content3").click(function() {restore();});
	$("#sub_content4").click(function() {restore();});
});

function restore()
{
	if ((sub_1_big) || (sub_2_big) || (sub_3_big) || (sub_4_big))
	{
		$("#main_class").css({ 
			"-webkit-transform":"scale(0.4) translate(0%, 0%)",
			"-moz-transform":"scale(0.4) translate(0%, 0%)",
			"-webkit-transition":"-webkit-transform 0.5s linear 0s",
			"-moz-transition":"-moz-transform 0.5s linear 0s",});
		$("#sub_content1").css({ 
	    	"-webkit-opacity":"0",
	    	"-moz-opacity":"0",
	    	"-webkit-transition":"-webkit-opacity 0.5s linear 0s",
	    	"-moz-transition":"-moz-opacity 0.5s linear 0s",});
	    $("#sub_content2").css({ 
	    	"-webkit-opacity":"0",
	    	"-moz-opacity":"0",
	    	"-webkit-transition":"-webkit-opacity 0.5s linear 0s",
	    	"-moz-transition":"-moz-opacity 0.5s linear 0s",});     	
	    $("#sub_content3").css({ 
	    	"-webkit-opacity":"0",
	    	"-moz-opacity":"0",
	    	"-webkit-transition":"-webkit-opacity 0.5s linear 0s",
	    	"-moz-transition":"-moz-opacity 0.5s linear 0s",});   
	    $("#sub_content4").css({ 
	    	"-webkit-opacity":"0",
	    	"-moz-opacity":"0",
	    	"-webkit-transition":"-webkit-opacity 0.5s linear 0s",
	    	"-moz-transition":"-moz-opacity 0.5s linear 0s",});       	
	    $("#sub1").css({ 
	    	"-webkit-opacity":"1",
	    	"-moz-opacity":"1",
	    	"-webkit-transition":"-webkit-opacity 0.5s linear 0.5s",
	    	"-moz-transition":"-moz-opacity 0.5s linear 0.5s",});
	    $("#sub2").css({ 
	    	"-webkit-opacity":"1",
	    	"-moz-opacity":"1",
	    	"-webkit-transition":"-webkit-opacity 0.5s linear 0.5s",
	    	"-moz-transition":"-moz-opacity 0.5s linear 0.5s",});
	    $("#sub3").css({ 
	    	"-webkit-opacity":"1",
	    	"-moz-opacity":"1",
	    	"-webkit-transition":"-webkit-opacity 0.5s linear 0.5s",
	    	"-moz-transition":"-moz-opacity 0.5s linear 0.5s",});
	    $("#sub4").css({ 
	    	"-webkit-opacity":"1",
	    	"-moz-opacity":"1",
	    	"-webkit-transition":"-webkit-opacity 0.5s linear 0.5s",
	    	"-moz-transition":"-moz-opacity 0.5s linear 0.5s",});	
	 	sub_1_big = false;
	 	sub_2_big = false;
	 	sub_3_big = false;
	 	sub_4_big = false;
 	}
}

function zoomSubBlock1()
{
	if ((!sub_2_big) && (!sub_3_big) && (!sub_4_big))
	{
		$("#main_class").css({ 
			"-webkit-transform":"scale(0.4) translate(-32%, 7%)",
			"-moz-transform":"scale(0.4) translate(-32%, 7%)",
			"-webkit-transition":"-webkit-transform 0.5s linear 0s",
			"-moz-transition":"-moz-transform 0.5s linear 0s",});
		$("#sub1").css({ 
	    	"-webkit-opacity":"0",
	    	"-moz-opacity":"0",
	    	"-webkit-transition":"-webkit-opacity 0.5s linear 0s",
	    	"-moz-transition":"-moz-opacity 0.5s linear 0s",});
	    $("#sub2").css({ 
	    	"-webkit-opacity":"0",
	    	"-moz-opacity":"0",
	    	"-webkit-transition":"-webkit-opacity 0.5s linear 0s",
	    	"-moz-transition":"-moz-opacity 0.5s linear 0s",});
	    $("#sub3").css({ 
	    	"-webkit-opacity":"0",
	    	"-moz-opacity":"0",
	    	"-webkit-transition":"-webkit-opacity 0.5s linear 0s",
	    	"-moz-transition":"-moz-opacity 0.5s linear 0s",});
	    $("#sub4").css({ 
	    	"-webkit-opacity":"0",
	    	"-moz-opacity":"0",
	    	"-webkit-transition":"-webkit-opacity 0.5s linear 0s",
	    	"-moz-transition":"-moz-opacity 0.5s linear 0s",});
		$("#sub_content1").css({ 
	    	"-webkit-opacity":"1",
	    	"-moz-opacity":"1",
	    	"-webkit-transition":"-webkit-opacity 0.5s linear 0.5s",
	    	"-moz-transition":"-moz-opacity 0.5s linear 0.5s",});	     	
	 	sub_1_big = true;
 	}
}

function zoomSubBlock2()
{
	if ((!sub_1_big) && (!sub_3_big) && (!sub_4_big))
	{
		$("#main_class").css({ 
			"-webkit-transform":"scale(0.4) translate(-32%, -3%)",
			"-moz-transform":"scale(0.4) translate(-32%, -3%)",
			"-webkit-transition":"-webkit-transform 0.5s linear 0s",
			"-moz-transition":"-moz-transform 0.5s linear 0s",});
		$("#sub1").css({ 
	    	"-webkit-opacity":"0",
	    	"-moz-opacity":"0",
	    	"-webkit-transition":"-webkit-opacity 0.5s linear 0s",
	    	"-moz-transition":"-moz-opacity 0.5s linear 0s",});
	    $("#sub2").css({ 
	    	"-webkit-opacity":"0",
	    	"-moz-opacity":"0",
	    	"-webkit-transition":"-webkit-opacity 0.5s linear 0s",
	    	"-moz-transition":"-moz-opacity 0.5s linear 0s",});
	    $("#sub3").css({ 
	    	"-webkit-opacity":"0",
	    	"-moz-opacity":"0",
	    	"-webkit-transition":"-webkit-opacity 0.5s linear 0s",
	    	"-moz-transition":"-moz-opacity 0.5s linear 0s",});
	    $("#sub4").css({ 
	    	"-webkit-opacity":"0",
	    	"-moz-opacity":"0",
	    	"-webkit-transition":"-webkit-opacity 0.5s linear 0s",
	    	"-moz-transition":"-moz-opacity 0.5s linear 0s",});
		$("#sub_content2").css({ 
	    	"-webkit-opacity":"1",
	    	"-moz-opacity":"1",
	    	"-webkit-transform":"translate(0%, 34%)",
			"-moz-transform":"translate(0%, 34%)",
	    	"-webkit-transition":"-webkit-opacity 0.5s linear 0.5s -webkit-transform 0.5s linear 0.5s",
	    	"-moz-transition":"-moz-opacity 0.5s linear 0.5s -moz-transform 0.5s linear 0.5s",});	      	
	 	sub_2_big = true;
 	}
}

function zoomSubBlock3()
{
	if ((!sub_1_big) && (!sub_2_big) && (!sub_4_big))
	{
		$("#main_class").css({ 
			"-webkit-transform":"scale(0.4) translate(-32%, -7%)",
			"-moz-transform":"scale(0.4) translate(-32%, -7%)",
			"-webkit-transition":"-webkit-transform 0.5s linear 0s",
			"-moz-transition":"-moz-transform 0.5s linear 0s",});
		$("#sub1").css({ 
	    	"-webkit-opacity":"0",
	    	"-moz-opacity":"0",
	    	"-webkit-transition":"-webkit-opacity 0.5s linear 0s",
	    	"-moz-transition":"-moz-opacity 0.5s linear 0s",});
	    $("#sub2").css({ 
	    	"-webkit-opacity":"0",
	    	"-moz-opacity":"0",
	    	"-webkit-transition":"-webkit-opacity 0.5s linear 0s",
	    	"-moz-transition":"-moz-opacity 0.5s linear 0s",});
	    $("#sub3").css({ 
	    	"-webkit-opacity":"0",
	    	"-moz-opacity":"0",
	    	"-webkit-transition":"-webkit-opacity 0.5s linear 0s",
	    	"-moz-transition":"-moz-opacity 0.5s linear 0s",});
	    $("#sub4").css({ 
	    	"-webkit-opacity":"0",
	    	"-moz-opacity":"0",
	    	"-webkit-transition":"-webkit-opacity 0.5s linear 0s",
	    	"-moz-transition":"-moz-opacity 0.5s linear 0s",});
		$("#sub_content3").css({ 
	    	"-webkit-opacity":"1",
	    	"-moz-opacity":"1",
	    	"-webkit-transform":"translate(0%, 54%)",
			"-moz-transform":"translate(0%, 54%)",
	    	"-webkit-transition":"-webkit-opacity 0.5s linear 0.5s -webkit-transform 0.5s linear 0.5s",
	    	"-moz-transition":"-moz-opacity 0.5s linear 0.5s -moz-transform 0.5s linear 0.5s",});	     	
	 	sub_3_big = true;
 	}
}

function zoomSubBlock4()
{
	if ((!sub_1_big) && (!sub_2_big) && (!sub_3_big))
	{
		$("#main_class").css({ 
			"-webkit-transform":"scale(0.4) translate(-32%, -11%)",
			"-moz-transform":"scale(0.4) translate(-32%, -11%)",
			"-webkit-transition":"-webkit-transform 0.5s linear 0s",
			"-moz-transition":"-moz-transform 0.5s linear 0s",});
		$("#sub1").css({ 
	    	"-webkit-opacity":"0",
	    	"-moz-opacity":"0",
	    	"-webkit-transition":"-webkit-opacity 0.5s linear 0s",
	    	"-moz-transition":"-moz-opacity 0.5s linear 0s",});
	    $("#sub2").css({ 
	    	"-webkit-opacity":"0",
	    	"-moz-opacity":"0",
	    	"-webkit-transition":"-webkit-opacity 0.5s linear 0s",
	    	"-moz-transition":"-moz-opacity 0.5s linear 0s",});
	    $("#sub3").css({ 
	    	"-webkit-opacity":"0",
	    	"-moz-opacity":"0",
	    	"-webkit-transition":"-webkit-opacity 0.5s linear 0s",
	    	"-moz-transition":"-moz-opacity 0.5s linear 0s",});
	    $("#sub4").css({ 
	    	"-webkit-opacity":"0",
	    	"-moz-opacity":"0",
	    	"-webkit-transition":"-webkit-opacity 0.5s linear 0s",
	    	"-moz-transition":"-moz-opacity 0.5s linear 0s",});
		$("#sub_content4").css({ 
	    	"-webkit-opacity":"1",
	    	"-moz-opacity":"1",
	    	"-webkit-transform":"translate(0%, 86%)",
			"-moz-transform":"translate(0%, 86%)",
	    	"-webkit-transition":"-webkit-opacity 0.5s linear 0.5s -webkit-transform 0.5s linear 0.5s",
	    	"-moz-transition":"-moz-opacity 0.5s linear 0.5s -moz-transform 0.5s linear 0.5s",});	     	
	 	sub_4_big = true;
 	}
}