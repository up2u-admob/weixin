var text_1_big = false;
var text_2_big = false;
var text_3_big = false;
var japanese_1_big = false;
var japanese_2_big = false;
var japanese_3_big = false;
var japanese_4_big = false;
var japanese_5_big = false;

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

$(document).ready(function () {    
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
		
		$("#japanese_block_1").click(changeSubBlock1);
		$("#japanese_sub_block_1").click(changeSubBlock1);
		$("#japanese_sub_text_1").click(changeSubBlock1);
		$("#japanese_block_2").click(changeSubBlock2);
		$("#japanese_sub_block_2").click(changeSubBlock2);
		$("#japanese_sub_text_2").click(changeSubBlock2);
		$("#japanese_block_3").click(changeSubBlock3);
		$("#japanese_sub_block_3").click(changeSubBlock3);
		$("#japanese_sub_text_3").click(changeSubBlock3);
		$("#japanese_block_4").click(changeSubBlock4);
		$("#japanese_sub_block_4").click(changeSubBlock4);
		$("#japanese_sub_text_4").click(changeSubBlock4);
		$("#japanese_block_5").click(changeSubBlock5);
		$("#japanese_sub_block_5").click(changeSubBlock5);
		$("#japanese_sub_text_5").click(changeSubBlock5);
});

function changeSubBlock1()
{
	if (!japanese_1_big)
	{
		zoomSubBlock1();
     }
     else
     {
     restoreJapaneseMenu();
     }
}

function changeSubBlock2()
{
	if (!japanese_2_big)
	{
		zoomSubBlock2();
     }
     else
     {
     restoreJapaneseMenu();
     }
}

function changeSubBlock3()
{
	if (!japanese_3_big)
	{
		zoomSubBlock3();
     }
     else
     {
     restoreJapaneseMenu();
     }
}

function changeSubBlock4()
{
	if (!japanese_4_big)
	{
		zoomSubBlock4();
     }
     else
     {
     restoreJapaneseMenu();
     }
}

function changeSubBlock5()
{
	if (!japanese_5_big)
	{
		zoomSubBlock5();
     }
     else
     {
     restoreJapaneseMenu();
     }
}

function zoomSubBlock1()
{
	restoreJapaneseSubMenu();
	$("#main_class").css({ 
		"width":"240%",
		"top":"-28%",
		"left":"-113%",
		"-webkit-transform":"translateZ(0)",
		"-webkit-transition":"width 2s ease-out 0s, top 2s ease-out 0s, left 2s ease-out 0s",});
	$("#japanese_block_1").css({ 
    	"opacity":"0",
    	"-webkit-opacity":"0",
    	"-webkit-transition":"opacity 2s ease-out 0s",
 		"-webkit-transition":"-webkit-opacity 2s ease-out 0s",});	     	
	$("#japanese_sub_block_1").css({ 
		"opacity":"1",
    	"-webkit-opacity":"1",
    	"-webkit-transition":"opacity 2s ease-out 0s",
 		"-webkit-transition":"-webkit-opacity 2s ease-out 0s",});
	$("#japanese_sub_text_1").css({ 
		"opacity":"1",
    	"-webkit-opacity":"1",
    	"-webkit-transition":"opacity 2s ease-out 0s",
 		"-webkit-transition":"-webkit-opacity 2s ease-out 0s",});
 	japanese_1_big = true;
	japanese_2_big = false;
	japanese_3_big = false;
	japanese_4_big = false;
	japanese_5_big = false;
}

function zoomSubBlock2()
{
	restoreJapaneseSubMenu();
	$("#main_class").css({ 
		"width":"240%",
		"top":"-82%",
		"left":"-6%",
		"-webkit-transition":"width 2s ease-out 0s, top 2s ease-out 0s, left 2s ease-out 0s",});
	$("#japanese_block_2").css({ 
    	"opacity":"0",
    	"-webkit-opacity":"0",
    	"-webkit-transition":"opacity 2s ease-out 0s",
 		"-webkit-transition":"-webkit-opacity 2s ease-out 0s",});	     	
	$("#japanese_sub_block_2").css({ 
		"opacity":"1",
    	"-webkit-opacity":"1",
    	"-webkit-transition":"opacity 2s ease-out 0s",
 		"-webkit-transition":"-webkit-opacity 2s ease-out 0s",});
	$("#japanese_sub_text_2").css({ 
		"opacity":"1",
    	"-webkit-opacity":"1",
    	"-webkit-transition":"opacity 2s ease-out 0s",
 		"-webkit-transition":"-webkit-opacity 2s ease-out 0s",});
 	japanese_1_big = false;
	japanese_2_big = true;
	japanese_3_big = false;
	japanese_4_big = false;
	japanese_5_big = false;
}

function zoomSubBlock3()
{
	restoreJapaneseSubMenu();
	$("#main_class").css({ 
		"width":"240%",
		"top":"-58%",
		"left":"-131%",
		"-webkit-transition":"width 2s ease-out 0s, top 2s ease-out 0s, left 2s ease-out 0s",});
	$("#japanese_block_3").css({ 
    	"opacity":"0",
    	"-webkit-opacity":"0",
    	"-webkit-transition":"opacity 2s ease-out 0s",
 		"-webkit-transition":"-webkit-opacity 2s ease-out 0s",});	     	
	$("#japanese_sub_block_3").css({ 
		"opacity":"1",
    	"-webkit-opacity":"1",
    	"-webkit-transition":"opacity 2s ease-out 0s",
 		"-webkit-transition":"-webkit-opacity 2s ease-out 0s",});
	$("#japanese_sub_text_3").css({ 
		"opacity":"1",
    	"-webkit-opacity":"1",
    	"-webkit-transition":"opacity 2s ease-out 0s",
 		"-webkit-transition":"-webkit-opacity 2s ease-out 0s",});
 	japanese_1_big = false;
	japanese_2_big = false;
	japanese_3_big = true;
	japanese_4_big = false;
	japanese_5_big = false;
}

function zoomSubBlock4()
{
	restoreJapaneseSubMenu();
	$("#main_class").css({ 
		"width":"240%",
		"top":"-135%",
		"left":"-20%",
		"-webkit-transition":"width 2s ease-out 0s, top 2s ease-out 0s, left 2s ease-out 0s",});
	$("#japanese_block_4").css({ 
    	"opacity":"0",
    	"-webkit-opacity":"0",
    	"-webkit-transition":"opacity 2s ease-out 0s",
 		"-webkit-transition":"-webkit-opacity 2s ease-out 0s",});	     	
	$("#japanese_sub_block_4").css({ 
		"opacity":"1",
    	"-webkit-opacity":"1",
    	"-webkit-transition":"opacity 2s ease-out 0s",
 		"-webkit-transition":"-webkit-opacity 2s ease-out 0s",});
	$("#japanese_sub_text_4").css({ 
		"opacity":"1",
    	"-webkit-opacity":"1",
    	"-webkit-transition":"opacity 2s ease-out 0s",
 		"-webkit-transition":"-webkit-opacity 2s ease-out 0s",});
 	japanese_1_big = false;
	japanese_2_big = false;
	japanese_3_big = false;
	japanese_4_big = true;
	japanese_5_big = false;
}

function zoomSubBlock5()
{
	restoreJapaneseSubMenu();
	$("#main_class").css({ 
		"width":"240%",
		"top":"-111%",
		"left":"-124%",
		"-webkit-transition":"width 2s ease-out 0s, top 2s ease-out 0s, left 2s ease-out 0s",});
	$("#japanese_block_5").css({ 
    	"opacity":"0",
    	"-webkit-opacity":"0",
    	"-webkit-transition":"opacity 2s ease-out 0s",
 		"-webkit-transition":"-webkit-opacity 2s ease-out 0s",});	     	
	$("#japanese_sub_block_5").css({ 
		"opacity":"1",
    	"-webkit-opacity":"1",
    	"-webkit-transition":"opacity 2s ease-out 0s",
 		"-webkit-transition":"-webkit-opacity 2s ease-out 0s",});
	$("#japanese_sub_text_5").css({ 
		"opacity":"1",
    	"-webkit-opacity":"1",
    	"-webkit-transition":"opacity 2s ease-out 0s",
 		"-webkit-transition":"-webkit-opacity 2s ease-out 0s",});
 	japanese_1_big = false;
	japanese_2_big = false;
	japanese_3_big = false;
	japanese_4_big = false;
	japanese_5_big = true;
}
   
function restoreJapaneseMenu()
{
	$("#main_class").css({ 
		"width":"100%",
		"top":"-5%",
		"left":"0%",
		"-webkit-transition":"width 2s ease-out 0s, top 2s ease-out 0s, left 2s ease-out 0s",});
	restoreJapaneseSubMenu();
}

function restoreJapaneseSubMenu()
{
	if (japanese_1_big)
    {
	    $("#japanese_block_1").css({ 
	    	"opacity":"1",
	    	"-webkit-opacity":"1",
     		"-webkit-transition":"-webkit-opacity 2s ease-out 0s",});
 		$("#japanese_sub_block_1").css({ 
 			"opacity":"0",
	    	"-webkit-opacity":"0",
     		"-webkit-transition":"-webkit-opacity 2s ease-out 0s",});
 		$("#japanese_sub_text_1").css({ 
 			"opacity":"0",
	    	"-webkit-opacity":"0",
     		"-webkit-transition":"-webkit-opacity 2s ease-out 0s",});
    }
    else if(japanese_2_big)
    {
    	$("#japanese_block_2").css({ 
	    	"opacity":"1",
	    	"-webkit-opacity":"1",
     		"-webkit-transition":"-webkit-opacity 2s ease-out 0s",});
 		$("#japanese_sub_block_2").css({ 
 			"opacity":"0",
	    	"-webkit-opacity":"0",
     		"-webkit-transition":"-webkit-opacity 2s ease-out 0s",});
 		$("#japanese_sub_text_2").css({ 
 			"opacity":"0",
	    	"-webkit-opacity":"0",
     		"-webkit-transition":"-webkit-opacity 2s ease-out 0s",});
    }
    else if(japanese_3_big)
    {
    	$("#japanese_block_3").css({ 
	    	"opacity":"1",
	    	"-webkit-opacity":"1",
     		"-webkit-transition":"-webkit-opacity 2s ease-out 0s",});
 		$("#japanese_sub_block_3").css({ 
 			"opacity":"0",
	    	"-webkit-opacity":"0",
     		"-webkit-transition":"-webkit-opacity 2s ease-out 0s",});
 		$("#japanese_sub_text_3").css({ 
 			"opacity":"0",
	    	"-webkit-opacity":"0",
     		"-webkit-transition":"-webkit-opacity 2s ease-out 0s",});
    }
    else if(japanese_4_big)
    {
    	$("#japanese_block_4").css({ 
	    	"opacity":"1",
	    	"-webkit-opacity":"1",
     		"-webkit-transition":"-webkit-opacity 2s ease-out 0s",});
 		$("#japanese_sub_block_4").css({ 
 			"opacity":"0",
	    	"-webkit-opacity":"0",
     		"-webkit-transition":"-webkit-opacity 2s ease-out 0s",});
 		$("#japanese_sub_text_4").css({ 
 			"opacity":"0",
	    	"-webkit-opacity":"0",
     		"-webkit-transition":"-webkit-opacity 2s ease-out 0s",});
    }
    else if(japanese_5_big)
    {
    	$("#japanese_block_5").css({ 
	    	"opacity":"1",
	    	"-webkit-opacity":"1",
     		"-webkit-transition":"-webkit-opacity 2s ease-out 0s",});
 		$("#japanese_sub_block_5").css({ 
 			"opacity":"0",
	    	"-webkit-opacity":"0",
     		"-webkit-transition":"-webkit-opacity 2s ease-out 0s",});
 		$("#japanese_sub_text_5").css({ 
 			"opacity":"0",
	    	"-webkit-opacity":"0",
     		"-webkit-transition":"-webkit-opacity 2s ease-out 0s",});
    }
 	japanese_1_big = false;
	japanese_2_big = false;
	japanese_3_big = false;
	japanese_4_big = false;
	japanese_5_big = false;
}
