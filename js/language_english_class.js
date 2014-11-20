var english_1_big = false;
var english_2_big = false;
var english_3_big = false;

var isTouch = ('ontouchstart' in window);

mainInAni = "zoomIn";
mainOutAni = "flipOut";
itemInAni = "flipInX";
itemOutAni = "flipOutX";
		
$(document).ready(function () {  
	setTimeout(function(){  
		$("#english_text_1 img").addClass("unlimitedBlinking");
		$("#english_text_2 img").addClass("unlimitedBlinking");
		$("#english_text_3 img").addClass("unlimitedBlinking");
	},2000); 
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

		$("#english_text_1").click(function(){changeEnglishSubBlock1();}); 
		$("#english_text_2").click(function(){changeEnglishSubBlock2();}); 
		$("#english_text_3").click(function(){changeEnglishSubBlock3();}); 
		$("#m-mark").click(function(){changeBnd();}); 
});

function changeEnglishSubBlock1()
{
	if (!english_1_big)
	{
		zoomEnglishSubBlock1();
		$("#english_text_1 img").removeClass("unlimitedBlinking");
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
		$("#english_text_2 img").removeClass("unlimitedBlinking");
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
		$("#english_text_3 img").removeClass("unlimitedBlinking");
	}
	else
	{
		restoreEnglishMenu();
	}
}

function changeBnd()
{
	if ((!english_1_big) && (!english_2_big) && (!english_3_big))
	{
		;
	}
	else
	{
		restoreEnglishMenu();
	}
}

function zoomEnglishSubBlock1()
{
	$("#main_class").css({ 
		"-webkit-transform":"scale(1) translate(-47%, -12%)",
		"-moz-transform":"scale(1) translate(-47%, -12%)",
		"-webkit-transition":"-webkit-transform 1s linear 0s",
		"-moz-transition":"-moz-transform 1s linear 0s",});
 	english_1_big = true;
	english_2_big = false;
	english_3_big = false;
}

function zoomEnglishSubBlock2()
{
	$("#main_class").css({ 
		"-webkit-transform":"scale(1) translate(-20%, -17%)",
		"-moz-transform":"scale(1) translate(-20%, -17%)",
		"-webkit-transition":"-webkit-transform 1s linear 0s",
		"-moz-transition":"-moz-transform 1s linear 0s",});
 	english_1_big = false;
	english_2_big = true;
	english_3_big = false;
}

function zoomEnglishSubBlock3()
{
	$("#main_class").css({ 
		"-webkit-transform":"scale(1) translate(-47%, -27%)",
		"-moz-transform":"scale(1) translate(-47%, -27%)",
		"-webkit-transition":"-webkit-transform 1s linear 0s",
		"-moz-transition":"-moz-transform 1s linear 0s",});
 	english_1_big = false;
	english_2_big = false;
	english_3_big = true;
}

function restoreEnglishMenu()
{
	$("#main_class").css({ 
		"-webkit-transform":"scale(0.4) translate(0%, 0%)",
		"-moz-transform":"scale(0.4) translate(0%, 0%)",
		"-webkit-transition":"-webkit-transform 1s linear 0s",
		"-moz-transition":"-moz-transform 1s linear 0s",});
	english_1_big = false;
	english_2_big = false;
	english_3_big = false;
	$("#english_text_1 img").addClass("unlimitedBlinking");
	$("#english_text_2 img").addClass("unlimitedBlinking");
	$("#english_text_3 img").addClass("unlimitedBlinking");
}