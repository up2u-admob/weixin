var english_1_big = false;
var english_2_big = false;
var english_3_big = false;
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
		$("#english_text_1").click(changeEnglishSubBlock1); 
		$("#english_text_2").click(changeEnglishSubBlock2); 
		$("#english_text_3").click(changeEnglishSubBlock3); 
		
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

function changeEnglishSubBlock1()
{
	if (!english_1_big)
	{
		zoomEnglishSubBlock1();
	}
	else
	{
		restoreEnglishMenu();
	}
}

function changeEnglishSubBlock2()
{
	if (!english_2_big)
	{
		zoomEnglishSubBlock2();
	}
	else
	{
		restoreEnglishMenu();
	}
}

function changeEnglishSubBlock3()
{
	if (!english_3_big)
	{
		zoomEnglishSubBlock3();
	}
	else
	{
		restoreEnglishMenu();
	}
}

function zoomEnglishSubBlock1()
{
	$("#main_class1").css({ 
		"-webkit-transform":"scale(1) translate(-18%, 19%)",
		"-webkit-transition":"-webkit-transform 1s linear 0s",});
 	english_1_big = true;
	english_2_big = false;
	english_3_big = false;
}

function zoomEnglishSubBlock2()
{
	$("#main_class1").css({ 
		"-webkit-transform":"scale(1) translate(8%, 11%)",
		"-webkit-transition":"-webkit-transform 1s linear 0s",});
 	english_1_big = false;
	english_2_big = true;
	english_3_big = false;
}

function zoomEnglishSubBlock3()
{
	$("#main_class1").css({ 
		"-webkit-transform":"scale(1) translate(-17%, 3%)",
		"-webkit-transition":"-webkit-transform 1s linear 0s",});
 	english_1_big = false;
	english_2_big = false;
	english_3_big = true;
}

function restoreEnglishMenu()
{
	$("#main_class1").css({ 
		"-webkit-transform":"scale(0.4) translate(0%, 0%)",
		"-webkit-transition":"-webkit-transform 1s linear 0s",});
	english_1_big = false;
	english_2_big = false;
	english_3_big = false;
}


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
		"-webkit-transform":"scale(1) translate(-17%, 20%)",
		"-webkit-transition":"-webkit-transform 1s linear 0s",});
	$("#japanese_block_1").css({ 
    	"opacity":"0",
    	"-webkit-opacity":"0",    	
    	"-webkit-transition":"opacity 0.5s linear 1s, -webkit-opacity 1s linear 1s",});	     	
	$("#japanese_sub_block_1").css({ 
		"opacity":"1",
    	"-webkit-opacity":"1",    	
    	"-webkit-transition":"opacity 0.5s linear 1.5s, -webkit-opacity 0.5s linear 1.5s",});
	$("#japanese_sub_text_1").css({ 
		"opacity":"1",
    	"-webkit-opacity":"1",    	
    	"-webkit-transition":"opacity 0.5s linear 1.5s, -webkit-opacity 0.5s linear 1.5s",});
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
		"-webkit-transform":"scale(1) translate(28%, 11%)",
		"-webkit-transition":"-webkit-transform 1s linear 0s",});
	$("#japanese_block_2").css({ 
    	"opacity":"0",
    	"-webkit-opacity":"0",    	
    	"-webkit-transition":"opacity 0.5s linear 1s, -webkit-opacity 0.5s linear 1s",});		     	
	$("#japanese_sub_block_2").css({ 
		"opacity":"1",
    	"-webkit-opacity":"1",    	
    	"-webkit-transition":"opacity 0.5s linear 1.5s, -webkit-opacity 0.5s linear 1.5s",});	
	$("#japanese_sub_text_2").css({ 
		"opacity":"1",
    	"-webkit-opacity":"1",    	
    	"-webkit-transition":"opacity 0.5s linear 1.5s, -webkit-opacity 0.5s linear 1.5s",});	
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
		"-webkit-transform":"scale(1) translate(-30%, 13%)",
		"-webkit-transition":"-webkit-transform 1s linear 0s",});
	$("#japanese_block_3").css({ 
    	"opacity":"0",
    	"-webkit-opacity":"0",    	
    	"-webkit-transition":"opacity 0.5s linear 1s, -webkit-opacity 0.5s linear 1s",});	     	
	$("#japanese_sub_block_3").css({ 
		"opacity":"1",
    	"-webkit-opacity":"1",    	
    	"-webkit-transition":"opacity 0.5s linear 1.5s, -webkit-opacity 0.5s linear 1.5s",});	
	$("#japanese_sub_text_3").css({ 
		"opacity":"1",
    	"-webkit-opacity":"1",    	
    	"-webkit-transition":"opacity 0.5s linear 1.5s, -webkit-opacity 0.5s linear 1.5s",});	
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
		"-webkit-transform":"scale(1) translate(22%, -5%)",
		"-webkit-transition":"-webkit-transform 1s linear 0s",});
	$("#japanese_block_4").css({ 
    	"opacity":"0",
    	"-webkit-opacity":"0",    	
    	"-webkit-transition":"opacity 0.5s linear 1s, -webkit-opacity 0.5s linear 1s",});	 	
	$("#japanese_sub_block_4").css({ 
		"opacity":"1",
    	"-webkit-opacity":"1",    	
    	"-webkit-transition":"opacity 0.5s linear 1.5s, -webkit-opacity 0.5s linear 1.5s",});	
	$("#japanese_sub_text_4").css({ 
		"opacity":"1",
    	"-webkit-opacity":"1",    	
    	"-webkit-transition":"opacity 0.5s linear 1.5s, -webkit-opacity 0.5s linear 1.5s",});	
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
		"-webkit-transform":"scale(1) translate(-28%, -4%)",
		"-webkit-transition":"-webkit-transform 1s linear 0s",});
	$("#japanese_block_5").css({ 
    	"opacity":"0",
    	"-webkit-opacity":"0",    	
    	"-webkit-transition":"opacity 0.5s linear 1s, -webkit-opacity 0.5s linear 1s",});	     	
	$("#japanese_sub_block_5").css({ 
		"opacity":"1",
    	"-webkit-opacity":"1",    	
    	"-webkit-transition":"opacity 0.5s linear 1.5s, -webkit-opacity 0.5s linear 1.5s",});	
	$("#japanese_sub_text_5").css({ 
		"opacity":"1",
    	"-webkit-opacity":"1",    	
    	"-webkit-transition":"opacity 0.5s linear 1.5s, -webkit-opacity 0.5s linear 1.5s",});	
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
		"-webkit-transition":"-webkit-transform 1s linear 0s",});
	restoreJapaneseSubMenu();
}

function restoreJapaneseSubMenu()
{
	if (japanese_1_big)
    {
	    $("#japanese_block_1").css({ 
	    	"opacity":"1",
	    	"-webkit-opacity":"1",     		
    		"-webkit-transition":"opacity 0.5s linear 1.5s, -webkit-opacity 0.5s linear 1.5s",});	
 		$("#japanese_sub_block_1").css({ 
 			"opacity":"0",
	    	"-webkit-opacity":"0",     		
    		"-webkit-transition":"opacity 0.5s linear 1s, -webkit-opacity 0.5s linear 1s",});
 		$("#japanese_sub_text_1").css({ 
 			"opacity":"0",
	    	"-webkit-opacity":"0",     		
    		"-webkit-transition":"opacity 0.5s linear 1s, -webkit-opacity 0.5s linear 1s",});
    }
    else if(japanese_2_big)
    {
    	$("#japanese_block_2").css({ 
	    	"opacity":"1",
	    	"-webkit-opacity":"1",     		
    		"-webkit-transition":"opacity 0.5s linear 1.5s, -webkit-opacity 0.5s linear 1.5s",});
 		$("#japanese_sub_block_2").css({ 
 			"opacity":"0",
	    	"-webkit-opacity":"0",     		
    		"-webkit-transition":"opacity 0.5s linear 1s, -webkit-opacity 0.5s linear 1s",});
 		$("#japanese_sub_text_2").css({ 
 			"opacity":"0",
	    	"-webkit-opacity":"0",     		
    		"-webkit-transition":"opacity 0.5s linear 1s, -webkit-opacity 0.5s linear 1s",});
    }
    else if(japanese_3_big)
    {
    	$("#japanese_block_3").css({ 
	    	"opacity":"1",
	    	"-webkit-opacity":"1",     		
    		"-webkit-transition":"opacity 0.5s linear 1.5s, -webkit-opacity 0.5s linear 1.5s",});
 		$("#japanese_sub_block_3").css({ 
 			"opacity":"0",
	    	"-webkit-opacity":"0",     		
    		"-webkit-transition":"opacity 0.5s linear 1s, -webkit-opacity 0.5s linear 1s",});
 		$("#japanese_sub_text_3").css({ 
 			"opacity":"0",
	    	"-webkit-opacity":"0",     		
    		"-webkit-transition":"opacity 0.5s linear 1s, -webkit-opacity 0.5s linear 1s",});
    }
    else if(japanese_4_big)
    {
    	$("#japanese_block_4").css({ 
	    	"opacity":"1",
	    	"-webkit-opacity":"1",     		
    		"-webkit-transition":"opacity 0.5s linear 1.5s, -webkit-opacity 0.5s linear 1.5s",});
 		$("#japanese_sub_block_4").css({ 
 			"opacity":"0",
	    	"-webkit-opacity":"0",     		
    		"-webkit-transition":"opacity 0.5s linear 1s, -webkit-opacity 0.5s linear 1s",});
 		$("#japanese_sub_text_4").css({ 
 			"opacity":"0",
	    	"-webkit-opacity":"0",     		
    		"-webkit-transition":"opacity 0.5s linear 1s, -webkit-opacity 0.5s linear 1s",});
    }
    else if(japanese_5_big)
    {
    	$("#japanese_block_5").css({ 
	    	"opacity":"1",
	    	"-webkit-opacity":"1",     		
    		"-webkit-transition":"opacity 0.5s linear 1.5s, -webkit-opacity 0.5s linear 1.5s",});
 		$("#japanese_sub_block_5").css({ 
 			"opacity":"0",
	    	"-webkit-opacity":"0",     		
    		"-webkit-transition":"opacity 0.5s linear 1s, -webkit-opacity 0.5s linear 1s",});
 		$("#japanese_sub_text_5").css({ 
 			"opacity":"0",
	    	"-webkit-opacity":"0",     		
    		"-webkit-transition":"opacity 0.5s linear 1s, -webkit-opacity 0.5s linear 1s",});
    }
 	japanese_1_big = false;
	japanese_2_big = false;
	japanese_3_big = false;
	japanese_4_big = false;
	japanese_5_big = false;
}
