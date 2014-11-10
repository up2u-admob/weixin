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