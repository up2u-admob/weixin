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
	
	$("#japanese_block_1").click(function () {
    	if (!japanese_1_big)
    	{
    		restoreJapaneseSubMenu();
	    	$("#main_class").animate({width:'240%', top: '-28%', left: '-113%'}, "slow");
	    	$("#japanese_block_1 img").animate({opacity: 'toggle'}, "slow");
	    	$("#japanese_sub_block_1").animate({opacity: 'toggle'}, "slow");
	    	$("#japanese_sub_text_1").animate({opacity: 'toggle'}, "slow");
	     	japanese_1_big = true;
			japanese_2_big = false;
			japanese_3_big = false;
			japanese_4_big = false;
			japanese_5_big = false;
	     }
	})
	$("#japanese_sub_block_1").click(restoreJapaneseMenu);
	$("#japanese_sub_text_1").click(restoreJapaneseMenu);
	$("#japanese_block_2").click(function () {
    	if (!japanese_2_big)
    	{
    		restoreJapaneseSubMenu();
	    	$("#main_class").animate({width:'240%', top: '-62%', left: '-6%'}, "slow");
	    	$("#japanese_block_2 img").animate({opacity: 'toggle'}, "slow");
	    	$("#japanese_sub_block_2").animate({opacity: 'toggle'}, "slow");
	    	$("#japanese_sub_text_2").animate({opacity: 'toggle'}, "slow");
	     	japanese_1_big = false;
			japanese_2_big = true;
			japanese_3_big = false;
			japanese_4_big = false;
			japanese_5_big = false;
	     }
	})
	$("#japanese_sub_block_2").click(restoreJapaneseMenu);
	$("#japanese_sub_text_2").click(restoreJapaneseMenu);
	$("#japanese_block_3").click(function () {
    	if (!japanese_3_big)
    	{
    		restoreJapaneseSubMenu();
	    	$("#main_class").animate({width:'240%', top: '-58%', left: '-131%'}, "slow");
	    	$("#japanese_block_3 img").animate({opacity: 'toggle'}, "slow");
	    	$("#japanese_sub_block_3").animate({opacity: 'toggle'}, "slow");
	    	$("#japanese_sub_text_3").animate({opacity: 'toggle'}, "slow");
	     	japanese_1_big = false;
			japanese_2_big = false;
			japanese_3_big = true;
			japanese_4_big = false;
			japanese_5_big = false;
	     }
	})
	$("#japanese_sub_block_3").click(restoreJapaneseMenu);
	$("#japanese_sub_text_3").click(restoreJapaneseMenu);
	$("#japanese_block_4").click(function () {
		if (!japanese_4_big)
    	{
    		restoreJapaneseSubMenu();
	    	$("#main_class").animate({width:'240%', top: '-125%', left: '-20%'}, "slow");
	    	$("#japanese_block_4 img").animate({opacity: 'toggle'}, "slow");
	    	$("#japanese_sub_block_4").animate({opacity: 'toggle'}, "slow");
	    	$("#japanese_sub_text_4").animate({opacity: 'toggle'}, "slow");
	     	japanese_1_big = false;
			japanese_2_big = false;
			japanese_3_big = false;
			japanese_4_big = true;
			japanese_5_big = false;
	     }
	})
	$("#japanese_sub_block_4").click(restoreJapaneseMenu);
	$("#japanese_sub_text_4").click(restoreJapaneseMenu);
	$("#japanese_block_5").click(function () {
		if (!japanese_5_big)
    	{
    		restoreJapaneseSubMenu();
	    	$("#main_class").animate({width:'240%', top: '-111%', left: '-124%'}, "slow");
	    	$("#japanese_block_5 img").animate({opacity: 'toggle'}, "slow");
	    	$("#japanese_sub_block_5").animate({opacity: 'toggle'}, "slow");
	    	$("#japanese_sub_text_5").animate({opacity: 'toggle'}, "slow");
	     	japanese_1_big = false;
			japanese_2_big = false;
			japanese_3_big = false;
			japanese_4_big = false;
			japanese_5_big = true;
	     }
	})
	$("#japanese_sub_block_5").click(restoreJapaneseMenu);
	$("#japanese_sub_text_5").click(restoreJapaneseMenu);
});

function restoreJapaneseMenu()
{
 	$("#main_class").animate({width:'95%', top: '-5%', left: '8%'}, "slow");
	restoreJapaneseSubMenu();
}

function restoreJapaneseSubMenu()
{
	if (japanese_1_big)
    {
     	$("#japanese_block_1 img").animate({opacity: 'toggle'}, "slow");
     	$("#japanese_sub_block_1").animate({opacity: 'toggle'}, "slow");
     	$("#japanese_sub_text_1").animate({opacity: 'toggle'}, "slow");
    }
    else if(japanese_2_big)
    {
    	$("#japanese_block_2 img").animate({opacity: 'toggle'}, "slow");
	 	$("#japanese_sub_block_2").animate({opacity: 'toggle'}, "slow");
     	$("#japanese_sub_text_2").animate({opacity: 'toggle'}, "slow");
    }
    else if(japanese_3_big)
    {
    	$("#japanese_block_3 img").animate({opacity: 'toggle'}, "slow");
	 	$("#japanese_sub_block_3").animate({opacity: 'toggle'}, "slow");
     	$("#japanese_sub_text_3").animate({opacity: 'toggle'}, "slow");
    }
    else if(japanese_4_big)
    {
    	$("#japanese_block_4 img").animate({opacity: 'toggle'}, "slow");
	 	$("#japanese_sub_block_4").animate({opacity: 'toggle'}, "slow");
     	$("#japanese_sub_text_4").animate({opacity: 'toggle'}, "slow");
    }
    else if(japanese_5_big)
    {
    	$("#japanese_block_5 img").animate({opacity: 'toggle'}, "slow");
	 	$("#japanese_sub_block_5").animate({opacity: 'toggle'}, "slow");
     	$("#japanese_sub_text_5").animate({opacity: 'toggle'}, "slow");
    }
 	japanese_1_big = false;
	japanese_2_big = false;
	japanese_3_big = false;
	japanese_4_big = false;
	japanese_5_big = false;
}

   