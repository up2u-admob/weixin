var text_1_big = false;
var text_2_big = false;
var text_3_big = false;

$(function () {
    $("#english_text_1").click(function () {
    	if (!text_1_big)
    	{
	    	$("#main_class img").animate({width:'140%', margin: '42% 0% 0% -55%'}, "slow");
	    	//$("#main_class img").width("140%");
	     	//$("#main_class img").css("margin-left", "-55%");
	     	//$("#main_class img").css("margin-top", "32%");
	     	$("#english_text_1 img").animate({width:'51%', margin: '67% 0% 0% 22%'}, "slow");
	     	//$("#english_text_1 img").width("51%");
	     	//$("#english_text_1 img").css("margin-left", "22%");
	     	//$("#english_text_1 img").css("margin-top", "56%");
			$("#english_text_2 img").animate({width:'51%', margin: '98% 0% 0% -42%'}, "slow");
	     	//$("#english_text_2 img").width("28%");
	     	//$("#english_text_2 img").css("margin-left", "21%");
	     	//$("#english_text_2 img").css("margin-top", "52%");
	     	$("#english_text_3 img").animate({width:'51%', margin: '131% 0% 0% 22%'}, "slow");
	     	//$("#english_text_3 img").width("28%");
	     	//$("#english_text_3 img").css("margin-left", "57%");
	     	//$("#english_text_3 img").css("margin-top", "71%");
	     	text_1_big = true;
			text_2_big = false;
			text_3_big = false;
	     }
	     else
	     {
	     	$("#main_class img").animate({width:'77%', margin: '22% 0% 0% 15%'}, "slow");
	     	$("#english_text_1 img").animate({width:'28%', margin: '36% 0% 0% 57%'}, "slow");
	     	$("#english_text_2 img").animate({width:'28%', margin: '52% 0% 0% 21%'}, "slow");
	     	$("#english_text_3 img").animate({width:'28%', margin: '71% 0% 0% 57%'}, "slow");
	     	text_1_big = false;
			text_2_big = false;
			text_3_big = false;
	     }
	})
	
	$("#english_text_2").click(function () {
    	if (!text_2_big)
    	{
	    	$("#main_class img").animate({width:'140%', margin: '18% 0% 0% 22%'}, "slow");
	     	$("#english_text_1 img").animate({width:'51%', margin: '45% 0% 0% 98%'}, "slow");
			$("#english_text_2 img").animate({width:'51%', margin: '72% 0% 0% 34%'}, "slow");
	     	$("#english_text_3 img").animate({width:'51%', margin: '101% 0% 0% 98%'}, "slow");
	     	text_1_big = false;
			text_2_big = true;
			text_3_big = false;
	     }
	     else
	     {
	     	$("#main_class img").animate({width:'77%', margin: '22% 0% 0% 15%'}, "slow");
	     	$("#english_text_1 img").animate({width:'28%', margin: '36% 0% 0% 57%'}, "slow");
	     	$("#english_text_2 img").animate({width:'28%', margin: '52% 0% 0% 21%'}, "slow");
	     	$("#english_text_3 img").animate({width:'28%', margin: '71% 0% 0% 57%'}, "slow");
	     	text_1_big = false;
			text_2_big = false;
			text_3_big = false;
	     }
	})
	
		$("#english_text_3").click(function () {
    	if (!text_3_big)
    	{
	    	$("#main_class img").animate({width:'140%', margin: '-20% 0% 0% -55%'}, "slow");
	     	$("#english_text_1 img").animate({width:'51%', margin: '6% 0% 0% 22%'}, "slow");
			$("#english_text_2 img").animate({width:'51%', margin: '35% 0% 0% -41%'}, "slow");
	     	$("#english_text_3 img").animate({width:'51%', margin: '69% 0% 0% 22%'}, "slow");
	     	text_1_big = false;
			text_2_big = false;
			text_3_big = true;
	     }
	     else
	     {
	     	$("#main_class img").animate({width:'77%', margin: '22% 0% 0% 15%'}, "slow");
	     	$("#english_text_1 img").animate({width:'28%', margin: '36% 0% 0% 57%'}, "slow");
	     	$("#english_text_2 img").animate({width:'28%', margin: '52% 0% 0% 21%'}, "slow");
	     	$("#english_text_3 img").animate({width:'28%', margin: '71% 0% 0% 57%'}, "slow");
	     	text_1_big = false;
			text_2_big = false;
			text_3_big = false;
	     }
	})
});