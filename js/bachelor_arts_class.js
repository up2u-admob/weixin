var sub_big = false;
var delta = 0;

var isTouch = ('ontouchstart' in window);

mainInAni = "rollIn";
mainOutAni = "rollOut";
itemInAni = "zoomInLeft";
itemOutAni = "flipOutX";

$(document).ready(function () {   
	$("#m-mark img").bind({
	    'touchstart mousedown': function(e) {
	        e.preventDefault();
	        this.pageX = (isTouch ? event.changedTouches[0].pageX : e.pageX);
	        this.pageY = (isTouch ? event.changedTouches[0].pageY : e.pageY);
	        this.left = parseInt($(this).css('left'));
	        this.top = parseInt($(this).css('top'));
	         
	        this.touched = true;
	        zoomMainClass("1", "-3%, -24%");
	        showSubBlock(delta);
	        sub_big = true;
	    },
	    'touchmove mousemove': function(e) {
	        if (!this.touched) {
	            return;
	        }
	        e.preventDefault();
	        //alert($(this).css('left'));
	        this.left = this.left - (this.pageX - (isTouch ? event.changedTouches[0].pageX : e.pageX) );
	        this.top = this.top - (this.pageY - (isTouch ? event.changedTouches[0].pageY : e.pageY) );
	        deltaX = this.pageX - (isTouch ? event.changedTouches[0].pageX : e.pageX);
	        deltaY = this.pageY - (isTouch ? event.changedTouches[0].pageY : e.pageY);
	        if (Math.abs(deltaY) > 1)
	        {
	        	//console.log(deltaY);
	        	delta = delta + deltaY / Math.abs(deltaY);
		        rotateMMark(delta);
		        showSubBlock(delta);
		    }
	        this.pageX = (isTouch ? event.changedTouches[0].pageX : e.pageX);
	        this.pageY = (isTouch ? event.changedTouches[0].pageY : e.pageY);
	    },
	    'touchend mouseup': function(e) {
	        if (!this.touched) {
	            return;
	        }
	        this.touched = false;
	    }
	});

	$("#title1").click(function(){changeSubBlock(320);}); 
	$("#text1").click(function(){changeSubBlock(320);}); 
	$("#title2").click(function(){changeSubBlock(230);}); 
	$("#text2").click(function(){changeSubBlock(230);}); 
	$("#title3").click(function(){changeSubBlock(140);}); 
	$("#text3").click(function(){changeSubBlock(140);}); 
	$("#title4").click(function(){changeSubBlock(50);}); 
	$("#text4").click(function(){changeSubBlock(50);}); 
});

function changeSubBlock(degree)
{
	if (!sub_big)
	{
		delta = degree;
		rotateMMark(delta);
		zoomMainClass("1", "-3%, -24%");
	 	sub_big = true;
	}
	else
	{
		restore();
	}
}

function showSubBlock(degree)
{
	while (degree<5)
	{
		degree = degree + 360;
	}
	if (((degree-5) % 360 > 270) && ((degree-5) % 360 <= 360))//1
	{
		setSubBlockVisibility(1, "visible");
		moveSubBlock(1, 1, "0%, 196%", "0%, 176%", "28%, 392%");
		setSubBlockVisibility(2, "hidden");
		setSubBlockVisibility(3, "hidden");
		setSubBlockVisibility(4, "hidden");
	}
	if (((degree-5) % 360 > 180) && ((degree-5) % 360 <= 270))//1
	{
		setSubBlockVisibility(1, "visible");
		moveSubBlock(1, 1, "0%, 196%", "0%, 176%", "28%, 392%");
		setSubBlockVisibility(2, "hidden");
		setSubBlockVisibility(3, "hidden");
		setSubBlockVisibility(4, "hidden");
	}
}

function moveSubBlock(subNumber, zoomParameter, titlePositionParameter, textPositionParameter, dotPositionParameter)
{
	subNumber = arguments[0] ? arguments[0] : 1;
	zoomParameter = arguments[1] ? arguments[1] : 1;
	titlePositionParameter = arguments[2] ? arguments[2] : "0%, 0%";
	textPositionParameter = arguments[3] ? arguments[3] : "0%, 0%";
	dotPositionParameter = arguments[4] ? arguments[4] : "0%, 0%";
	$("#title" + subNumber +" img").css({ 
		"-webkit-transform":"scale("+ zoomParameter +") translate(" + titlePositionParameter + ")",
		"-moz-transform":"scale("+ zoomParameter +") translate(" + titlePositionParameter + ")",
		"-webkit-transition":"-webkit-transform 1s linear 0s",
		"-moz-transition":"-moz-transform 1s linear 0s",});
	$("#text" + subNumber +" img").css({ 
		"-webkit-transform":"scale("+ zoomParameter +") translate(" + textPositionParameter + ")",
		"-moz-transform":"scale("+ zoomParameter +") translate(" + textPositionParameter + ")",
		"-webkit-transition":"-webkit-transform 1s linear 0s",
		"-moz-transition":"-moz-transform 1s linear 0s",});
	$("#dot" + subNumber +" img").css({ 
		"-webkit-transform":"scale("+ zoomParameter +") translate(" + dotPositionParameter + ")",
		"-moz-transform":"scale("+ zoomParameter +") translate(" + dotPositionParameter + ")",
		"-webkit-transition":"-webkit-transform 1s linear 0s",
		"-moz-transition":"-moz-transform 1s linear 0s",});
}

function setSubBlockVisibility(subNumber, visibility)
{
	subNumber = arguments[0] ? arguments[0] : 1;
	visibility = arguments[1] ? arguments[1] : "visible";
	$("#title"+subNumber).css("visibility", visibility);
	$("#text"+subNumber).css("visibility", visibility);
	$("#dot"+subNumber).css("visibility", visibility);
}

function restore()
{
	rotateMMark();
	zoomMainClass("0.4", "0%, 0%");
	setSubBlockVisibility(1, "visible");
	setSubBlockVisibility(2, "visible");
	setSubBlockVisibility(3, "visible");
	setSubBlockVisibility(4, "visible");
	sub_big = false;
}

function rotateMMark(rotateParameter)
{
	rotateParameter = arguments[0] ? arguments[0] : 0;
	$("#m-mark img").css({ 
		"-webkit-transform":"rotate("+rotateParameter+"deg)",
		"-moz-transform":"rotate("+rotateParameter+"deg)",
    	"-webkit-transform-origin": "center center", 
		"-moz-transform-origin": "center center",  
		"-webkit-transition":"-webkit-transform 1s linear 0s",
		"-moz-transition":"-moz-transform 1s linear 0s",});
}

function zoomMainClass(zoomParameter, positionParameter)
{
	zoomParameter = arguments[0] ? arguments[0] : 1;
	positionParameter = arguments[1] ? arguments[1] : "0%, 0%";
	$("#main_class").css({ 
		"-webkit-transform":"scale("+ zoomParameter +") translate(" + positionParameter + ")",
		"-moz-transform":"scale("+ zoomParameter +") translate(" + positionParameter + ")",
		"-webkit-transition":"-webkit-transform 1s linear 0s",
		"-moz-transition":"-moz-transform 1s linear 0s",});
}