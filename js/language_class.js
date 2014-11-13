var japanese_1_big = false;
var japanese_2_big = false;
var japanese_3_big = false;
var japanese_4_big = false;
var japanese_5_big = false;

var isTouch = ('ontouchstart' in window);


$(document).ready(function () {   
/*		$("#main_class").bind({
		    'touchstart mousedown': function(e) {
		        e.preventDefault();
		        this.pageX = (isTouch ? event.changedTouches[0].pageX : e.pageX);
		        this.pageY = (isTouch ? event.changedTouches[0].pageY : e.pageY);
		        this.left = parseInt($(this).css('left'));
		        this.top = parseInt($(this).css('top'));
		         
		        this.touched = true;
		    },
		    'touchmove mousemove': function(e) {
		        if (!this.touched) {
		            return;
		        }
		        e.preventDefault();
		        //alert($(this).css('left'));
		        this.left = this.left - (this.pageX - (isTouch ? event.changedTouches[0].pageX : e.pageX) );
		        this.top = this.top - (this.pageY - (isTouch ? event.changedTouches[0].pageY : e.pageY) );
		        $(this).css({'left':this.left, 'top':this.top});
		        this.pageX = (isTouch ? event.changedTouches[0].pageX : e.pageX);
		        this.pageY = (isTouch ? event.changedTouches[0].pageY : e.pageY);
		    },
		    'touchend mouseup': function(e) {
		        if (!this.touched) {
		            return;
		        }
		        this.touched = false;
		    }
		});*/
		
		$("#japanese_block_1").click(changeJapaneseSubBlock1);
		$("#japanese_sub_block_1").click(changeJapaneseSubBlock1);
		$("#japanese_sub_text_1").click(changeJapaneseSubBlock1);
		$("#japanese_block_2").click(changeJapaneseSubBlock2);
		$("#japanese_sub_block_2").click(changeJapaneseSubBlock2);
		$("#japanese_sub_text_2").click(changeJapaneseSubBlock2);
		$("#japanese_block_3").click(changeJapaneseSubBlock3);
		$("#japanese_sub_block_3").click(changeJapaneseSubBlock3);
		$("#japanese_sub_text_3").click(changeJapaneseSubBlock3);
		$("#japanese_block_4").click(changeJapaneseSubBlock4);
		$("#japanese_sub_block_4").click(changeJapaneseSubBlock4);
		$("#japanese_sub_text_4").click(changeJapaneseSubBlock4);
		$("#japanese_block_5").click(changeJapaneseSubBlock5);
		$("#japanese_sub_block_5").click(changeJapaneseSubBlock5);
		$("#japanese_sub_text_5").click(changeJapaneseSubBlock5);
});



function changeJapaneseSubBlock1()
{
	if (!japanese_1_big)
	{
		zoomJapaneseSubBlock1();
	}
	else
	{
		restoreJapaneseMenu();
	}
}

function changeJapaneseSubBlock2()
{
	if (!japanese_2_big)
	{
		zoomJapaneseSubBlock2();
	}
	else
	{
		restoreJapaneseMenu();
	}
}

function changeJapaneseSubBlock3()
{
	if (!japanese_3_big)
	{
		zoomJapaneseSubBlock3();
	}
	else
	{
		restoreJapaneseMenu();
	}
}

function changeJapaneseSubBlock4()
{
	if (!japanese_4_big)
	{
		zoomJapaneseSubBlock4();
	}
	else
	{
		restoreJapaneseMenu();
	}
}

function changeJapaneseSubBlock5()
{
	if (!japanese_5_big)
	{
		zoomJapaneseSubBlock5();
	}
	else
	{
		restoreJapaneseMenu();
	}
}

function zoomJapaneseSubBlock1()
{
	restoreJapaneseSubMenu();
/*	$("#main_class").css({ 
		"width":"240%",
		"top":"-28%",
		"left":"-113%",		
		"-webkit-transition":"width 1s linear 0s, top 1s linear 0s, left 1s linear 0s",});*/
	$("#main_class").css({ 
		"-webkit-transform":"scale(1) translate(-47%, -11%)",
		"-moz-transform":"scale(1) translate(-47%, -11%)",
		"-webkit-transition":"-webkit-transform 1s linear 0s",
		"-moz-transition":"-moz-transform 1s linear 0s",});
	$("#japanese_block_1").css({ 
    	"-webkit-opacity":"0",
    	"-moz-opacity":"0",
    	"-webkit-transition":"-webkit-opacity 1s linear 1s",
    	"-moz-transition":"-moz-opacity 1s linear 1s",});	     	
	$("#japanese_sub_block_1").css({ 
		"-webkit-opacity":"1",
    	"-moz-opacity":"1",    	
    	"-webkit-transition":"-webkit-opacity 0.5s linear 1.5s",
    	"-moz-transition":"-moz-opacity 0.5s linear 1.5s",});
	$("#japanese_sub_text_1").css({ 
		"-webkit-opacity":"1",
    	"-moz-opacity":"1",    	
    	"-webkit-transition":"-webkit-opacity 0.5s linear 1.5s",
    	"-moz-transition":"-moz-opacity 0.5s linear 1.5s",});
 	japanese_1_big = true;
	japanese_2_big = false;
	japanese_3_big = false;
	japanese_4_big = false;
	japanese_5_big = false;
}

function zoomJapaneseSubBlock2()
{
	restoreJapaneseSubMenu();
/*	$("#main_class").css({ 
		"width":"240%",
		"top":"-82%",
		"left":"-6%",		
		"-webkit-transition":"width 1s linear 0s, top 1s linear 0s, left 1s linear 0s",});*/
	$("#main_class").css({ 
		"-webkit-transform":"scale(1) translate(-5%, -24%)",
		"-moz-transform":"scale(1) translate(-5%, -24%)",
		"-webkit-transition":"-webkit-transform 1s linear 0s",
		"-moz-transition":"-moz-transform 1s linear 0s",});
	$("#japanese_block_2").css({ 
    	"-webkit-opacity":"0",
    	"-moz-opacity":"0",
    	"-webkit-transition":"-webkit-opacity 1s linear 1s",
    	"-moz-transition":"-moz-opacity 1s linear 1s",});	  	     	
	$("#japanese_sub_block_2").css({ 
		"-webkit-opacity":"1",
    	"-moz-opacity":"1",    	
    	"-webkit-transition":"-webkit-opacity 0.5s linear 1.5s",
    	"-moz-transition":"-moz-opacity 0.5s linear 1.5s",});	
	$("#japanese_sub_text_2").css({ 
		"-webkit-opacity":"1",
    	"-moz-opacity":"1",    	
    	"-webkit-transition":"-webkit-opacity 0.5s linear 1.5s",
    	"-moz-transition":"-moz-opacity 0.5s linear 1.5s",});
 	japanese_1_big = false;
	japanese_2_big = true;
	japanese_3_big = false;
	japanese_4_big = false;
	japanese_5_big = false;
}

function zoomJapaneseSubBlock3()
{
	restoreJapaneseSubMenu();
/*	$("#main_class").css({ 
		"width":"240%",
		"top":"-58%",
		"left":"-131%",		
		"-webkit-transition":"width 1s linear 0s, top 1s linear 0s, left 1s linear 0s",});*/
	$("#main_class").css({ 
		"-webkit-transform":"scale(1) translate(-55%, -22%)",
		"-moz-transform":"scale(1) translate(-55%, -22%)",
		"-webkit-transition":"-webkit-transform 1s linear 0s",
		"-moz-transition":"-moz-transform 1s linear 0s",});
	$("#japanese_block_3").css({ 
    	"-webkit-opacity":"0",
    	"-moz-opacity":"0",
    	"-webkit-transition":"-webkit-opacity 1s linear 1s",
    	"-moz-transition":"-moz-opacity 1s linear 1s",});	      	
	$("#japanese_sub_block_3").css({ 
		"-webkit-opacity":"1",
    	"-moz-opacity":"1",    	
    	"-webkit-transition":"-webkit-opacity 0.5s linear 1.5s",
    	"-moz-transition":"-moz-opacity 0.5s linear 1.5s",});
	$("#japanese_sub_text_3").css({ 
		"-webkit-opacity":"1",
    	"-moz-opacity":"1",    	
    	"-webkit-transition":"-webkit-opacity 0.5s linear 1.5s",
    	"-moz-transition":"-moz-opacity 0.5s linear 1.5s",});
 	japanese_1_big = false;
	japanese_2_big = false;
	japanese_3_big = true;
	japanese_4_big = false;
	japanese_5_big = false;
}

function zoomJapaneseSubBlock4()
{
	restoreJapaneseSubMenu();
/*	$("#main_class").css({ 
		"width":"240%",
		"top":"-135%",
		"left":"-20%",		
		"-webkit-transition":"width 1s linear 0s, top 1s linear 0s, left 1s linear 0s",});*/
	$("#main_class").css({ 
		"-webkit-transform":"scale(1) translate(-11%, -39%)",
		"-moz-transform":"scale(1) translate(-11%, -39%)",
		"-webkit-transition":"-webkit-transform 1s linear 0s",
		"-moz-transition":"-webkit-transform 1s linear 0s",});
	$("#japanese_block_4").css({ 
    	"-webkit-opacity":"0",
    	"-moz-opacity":"0",
    	"-webkit-transition":"-webkit-opacity 1s linear 1s",
    	"-moz-transition":"-moz-opacity 1s linear 1s",});	    
	$("#japanese_sub_block_4").css({ 
		"-webkit-opacity":"1",
    	"-moz-opacity":"1",    	
    	"-webkit-transition":"-webkit-opacity 0.5s linear 1.5s",
    	"-moz-transition":"-moz-opacity 0.5s linear 1.5s",});
	$("#japanese_sub_text_4").css({ 
		"-webkit-opacity":"1",
    	"-moz-opacity":"1",    	
    	"-webkit-transition":"-webkit-opacity 0.5s linear 1.5s",
    	"-moz-transition":"-moz-opacity 0.5s linear 1.5s",});
 	japanese_1_big = false;
	japanese_2_big = false;
	japanese_3_big = false;
	japanese_4_big = true;
	japanese_5_big = false;
}

function zoomJapaneseSubBlock5()
{
	restoreJapaneseSubMenu();
/*	$("#main_class").css({ 
		"width":"240%",
		"top":"-111%",
		"left":"-124%",		
		"-webkit-transition":"width 1s linear 0s, top 1s linear 0s, left 1s linear 0s",});*/
	$("#main_class").css({ 
		"-webkit-transform":"scale(1) translate(-52%, -38%)",
		"-moz-transform":"scale(1) translate(-52%, -38%)",
		"-webkit-transition":"-webkit-transform 1s linear 0s",
		"-moz-transition":"-moz-transform 1s linear 0s",});
	$("#japanese_block_5").css({ 
    	"-webkit-opacity":"0",
    	"-moz-opacity":"0",
    	"-webkit-transition":"-webkit-opacity 1s linear 1s",
    	"-moz-transition":"-moz-opacity 1s linear 1s",});	        	
	$("#japanese_sub_block_5").css({ 
		"-webkit-opacity":"1",
    	"-moz-opacity":"1",    	
    	"-webkit-transition":"-webkit-opacity 0.5s linear 1.5s",
    	"-moz-transition":"-moz-opacity 0.5s linear 1.5s",});
	$("#japanese_sub_text_5").css({ 
		"-webkit-opacity":"1",
    	"-moz-opacity":"1",    	
    	"-webkit-transition":"-webkit-opacity 0.5s linear 1.5s",
    	"-moz-transition":"-moz-opacity 0.5s linear 1.5s",});
 	japanese_1_big = false;
	japanese_2_big = false;
	japanese_3_big = false;
	japanese_4_big = false;
	japanese_5_big = true;
}
   
function restoreJapaneseMenu()
{
	/*$("#main_class").css({ 
		"width":"100%",
		"top":"-5%",
		"left":"0%",
		"-webkit-transition":"width 1s linear 0s, top 1s linear 0s, left 1s linear 0s",});*/
	$("#main_class").css({ 
		"-webkit-transform":"scale(0.4) translate(0%, 0%)",
		"-moz-transform":"scale(0.4) translate(0%, 0%)",
		"-webkit-transition":"-webkit-transform 1s linear 0s",
		"-moz-transition":"-moz-transform 1s linear 0s",});
	restoreJapaneseSubMenu();
}

function restoreJapaneseSubMenu()
{
	if (japanese_1_big)
    {
	    $("#japanese_block_1").css({ 
	    	"-webkit-opacity":"1",
	    	"-moz-opacity":"1",    	
	    	"-webkit-transition":"-webkit-opacity 0.5s linear 1.5s",
	    	"-moz-transition":"-moz-opacity 0.5s linear 1.5s",});
 		$("#japanese_sub_block_1").css({ 
 			"-webkit-opacity":"0",
	    	"-moz-opacity":"0",     		
    		"-webkit-transition":"-webkit-opacity 0.5s linear 1s",
    		"-moz-transition":"-moz-opacity 0.5s linear 1s",});
 		$("#japanese_sub_text_1").css({ 
 			"-webkit-opacity":"0",
	    	"-moz-opacity":"0",     		
    		"-webkit-transition":"-webkit-opacity 0.5s linear 1s",
    		"-moz-transition":"-moz-opacity 0.5s linear 1s",});
    }
    else if(japanese_2_big)
    {
    	$("#japanese_block_2").css({ 
	    	"-webkit-opacity":"1",
	    	"-moz-opacity":"1",    	
	    	"-webkit-transition":"-webkit-opacity 0.5s linear 1.5s",
	    	"-moz-transition":"-moz-opacity 0.5s linear 1.5s",});
 		$("#japanese_sub_block_2").css({ 
 			"-webkit-opacity":"0",
	    	"-moz-opacity":"0",     		
    		"-webkit-transition":"-webkit-opacity 0.5s linear 1s",
    		"-moz-transition":"-moz-opacity 0.5s linear 1s",});
 		$("#japanese_sub_text_2").css({ 
 			"-webkit-opacity":"0",
	    	"-moz-opacity":"0",     		
    		"-webkit-transition":"-webkit-opacity 0.5s linear 1s",
    		"-moz-transition":"-moz-opacity 0.5s linear 1s",});
    }
    else if(japanese_3_big)
    {
    	$("#japanese_block_3").css({ 
	    	"-webkit-opacity":"1",
	    	"-moz-opacity":"1",    	
	    	"-webkit-transition":"-webkit-opacity 0.5s linear 1.5s",
	    	"-moz-transition":"-moz-opacity 0.5s linear 1.5s",});
 		$("#japanese_sub_block_3").css({ 
 			"-webkit-opacity":"0",
	    	"-moz-opacity":"0",     		
    		"-webkit-transition":"-webkit-opacity 0.5s linear 1s",
    		"-moz-transition":"-moz-opacity 0.5s linear 1s",});
 		$("#japanese_sub_text_3").css({ 
 			"-webkit-opacity":"0",
	    	"-moz-opacity":"0",     		
    		"-webkit-transition":"-webkit-opacity 0.5s linear 1s",
    		"-moz-transition":"-moz-opacity 0.5s linear 1s",});
    }
    else if(japanese_4_big)
    {
    	$("#japanese_block_4").css({ 
	    	"-webkit-opacity":"1",
	    	"-moz-opacity":"1",    	
	    	"-webkit-transition":"-webkit-opacity 0.5s linear 1.5s",
	    	"-moz-transition":"-moz-opacity 0.5s linear 1.5s",});
 		$("#japanese_sub_block_4").css({ 
 			"-webkit-opacity":"0",
	    	"-moz-opacity":"0",     		
    		"-webkit-transition":"-webkit-opacity 0.5s linear 1s",
    		"-moz-transition":"-moz-opacity 0.5s linear 1s",});
 		$("#japanese_sub_text_4").css({ 
 			"-webkit-opacity":"0",
	    	"-moz-opacity":"0",     		
    		"-webkit-transition":"-webkit-opacity 0.5s linear 1s",
    		"-moz-transition":"-moz-opacity 0.5s linear 1s",});
    }
    else if(japanese_5_big)
    {
    	$("#japanese_block_5").css({ 
	    	"-webkit-opacity":"1",
	    	"-moz-opacity":"1",    	
	    	"-webkit-transition":"-webkit-opacity 0.5s linear 1.5s",
	    	"-moz-transition":"-moz-opacity 0.5s linear 1.5s",});
 		$("#japanese_sub_block_5").css({ 
 			"-webkit-opacity":"0",
	    	"-moz-opacity":"0",     		
    		"-webkit-transition":"-webkit-opacity 0.5s linear 1s",
    		"-moz-transition":"-moz-opacity 0.5s linear 1s",});
 		$("#japanese_sub_text_5").css({ 
 			"-webkit-opacity":"0",
	    	"-moz-opacity":"0",     		
    		"-webkit-transition":"-webkit-opacity 0.5s linear 1s",
    		"-moz-transition":"-moz-opacity 0.5s linear 1s",});
    }
 	japanese_1_big = false;
	japanese_2_big = false;
	japanese_3_big = false;
	japanese_4_big = false;
	japanese_5_big = false;
}
