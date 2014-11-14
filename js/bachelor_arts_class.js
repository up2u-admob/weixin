var sub_big = false;
var delta = 320;
var cur_sub = 0;
var count = 0;

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
	        if (!sub_big)
	        {
	        	changeSubBlock(delta);
	        }
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
	        if (Math.abs(deltaY) > 15)
	        {
		        count++;
		        if(count == 5)
		        {
		        	console.log(deltaY);
		        	delta = delta + deltaY / Math.abs(deltaY) * 20;
			        rotateMMark(delta);
			        showSubBlock(delta);
			        count = 0;
		        }
		    }
/*			if (deltaY > 30)
			{
				sub_big = false;
				switch (cur_sub)
				{
					case 1:
						changeSubBlock(230);
						break;
					case 2:
						changeSubBlock(140);
						break;
					case 3:
						changeSubBlock(50);
						break;
					case 4:
						changeSubBlock(320);
						break;
					default:
						break;
				}
			}
			else if (deltaY < -30)
			{
				sub_big = false;
				switch (cur_sub)
				{
					case 1:
						changeSubBlock(50);
						break;
					case 2:
						changeSubBlock(320);
						break;
					case 3:
						changeSubBlock(230);
						break;
					case 4:
						changeSubBlock(140);
						break;
					default:
						break;
				}
			}*/
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
		zoomMainClass("1", "-3%, -24%");
		moveSubBlock(1, 1, "0%, 196%", "0%, 176%");
		moveSubBlock(2, 1, "-375%, 340%", "-318%, 229%");
		moveSubBlock(3, 1, "-407%, -459%", "-355%, -197%");
		moveSubBlock(4, 1, "-67%, -538%", "-61%, -253%");
		setDotVisibility(1, "0", 0);
		setDotVisibility(1, "1", 1);
		setDotVisibility(2, "0", 1);
		setDotVisibility(3, "0", 1);
		setDotVisibility(4, "0", 1);
		rotateMMark(degree);
		showSubBlock(degree);	 	
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
		if (cur_sub != 1)
		{
			setDotVisiility1to0to1(1);
			cur_sub = 1;
			setSubBlockVisibility(1, "1", 1, 1);
			setSubBlockVisibility(2, "0", 1);
			setSubBlockVisibility(3, "0", 1);
			setSubBlockVisibility(4, "0", 1);
		}
	}
	else if (((degree-5) % 360 > 180) && ((degree-5) % 360 <= 270))//2
	{
		if (cur_sub != 2)
		{
			setDotVisiility1to0to1(1);
			cur_sub = 2;
			setSubBlockVisibility(1, "0", 1);
			setSubBlockVisibility(2, "1", 1, 1);
			setSubBlockVisibility(3, "0", 1);
			setSubBlockVisibility(4, "0", 1);
		}
	}
	else if (((degree-5) % 360 > 90) && ((degree-5) % 360 <= 180))//3
	{
		if (cur_sub != 3)
		{
			setDotVisiility1to0to1(1);
			cur_sub = 3;
			setSubBlockVisibility(1, "0", 1);
			setSubBlockVisibility(2, "0", 1);
			setSubBlockVisibility(3, "1", 1, 1);
			setSubBlockVisibility(4, "0", 1);
		}
	}
	else if (((degree-5) % 360 > 00) && ((degree-5) % 360 <= 90))//4
	{
		if (cur_sub != 4)
		{
			setDotVisiility1to0to1(1);
			cur_sub = 4;
			setSubBlockVisibility(1, "0", 1);
			setSubBlockVisibility(2, "0", 1);
			setSubBlockVisibility(3, "0", 1);
			setSubBlockVisibility(4, "1", 1, 1);
		}
	}
	sub_big = true;
}

function moveSubBlock(subNumber, zoomParameter, titlePositionParameter, textPositionParameter, dotPositionParameter)
{
	subNumber = arguments[0] ? arguments[0] : 1;
	zoomParameter = arguments[1] ? arguments[1] : 1;
	titlePositionParameter = arguments[2] ? arguments[2] : "0%, 0%";
	textPositionParameter = arguments[3] ? arguments[3] : "0%, 0%";
	dotPositionParameter = arguments[4] ? arguments[4] : "28%, 392%";
	$("#title" + subNumber +" img").css({ 
		"-webkit-transform":"scale("+ zoomParameter +") translate(" + titlePositionParameter + ")",
		"-moz-transform":"scale("+ zoomParameter +") translate(" + titlePositionParameter + ")",
		"-webkit-transition":"-webkit-transform 0s linear 0s",
		"-moz-transition":"-moz-transform 0s linear 0s",});
	$("#text" + subNumber +" img").css({ 
		"-webkit-transform":"scale("+ zoomParameter +") translate(" + textPositionParameter + ")",
		"-moz-transform":"scale("+ zoomParameter +") translate(" + textPositionParameter + ")",
		"-webkit-transition":"-webkit-transform 0s linear 0s",
		"-moz-transition":"-moz-transform 0s linear 0s",});
	$("#dot" + subNumber +" img").css({ 
		"-webkit-transform":"translate(" + dotPositionParameter + ")",
		"-moz-transform":"translate(" + dotPositionParameter + ")",
		"-webkit-transition":"-webkit-transform 0s linear 0s",
		"-moz-transition":"-moz-transform 0s linear 0s",});
}

function setSubBlockVisibility(subNumber, opa, aniTime, startTime)
{
	subNumber = arguments[0] ? arguments[0] : 1;
	opa = arguments[1] ? arguments[1] : "1";
	aniTime = arguments[2] ? arguments[2] : 0;
	startTime = arguments[3] ? arguments[3] : 0;
	$("#title"+subNumber).css({ 
		"-webkit-opacity": opa,
		"-moz-opacity": opa,
		"-webkit-transition":"-webkit-opacity "+ aniTime +"s linear " + startTime + "s",
		"-moz-transition":"-moz-opacity "+ aniTime +"s linear " + startTime + "s",});
	$("#text"+subNumber).css({ 
		"-webkit-opacity": opa,
		"-moz-opacity": opa,
		"-webkit-transition":"-webkit-opacity " + aniTime + "s linear " + startTime + "s",
		"-moz-transition":"-moz-opacity "+ aniTime +"s linear " + startTime + "s",});	
}

function setDotVisiility1to0to1(subNumber)
{
//console.log(document.getElementById(dotVisiility1to0to1).animation-duration);
	subNumber = arguments[0] ? arguments[0] : 1;
	$("#dot"+subNumber).addClass("dotVisiility1to0to1");
	setTimeout(function(){
		$("#dot"+subNumber).removeClass("dotVisiility1to0to1");
	},2000);
}

function setDotVisibility(subNumber, opa, aniTime, startTime)
{
	subNumber = arguments[0] ? arguments[0] : 1;
	opa = arguments[1] ? arguments[1] : "1";
	aniTime = arguments[2] ? arguments[2] : 0;
	startTime = arguments[3] ? arguments[3] : 0;
	$("#dot"+subNumber).css({ 
		"-webkit-opacity": opa,
		"-moz-opacity": opa,
		"-webkit-transition":"-webkit-opacity "+ aniTime +"s linear " + startTime + "s",
		"-moz-transition":"-moz-opacity "+ aniTime +"s linear " + startTime + "s",});	
}

function restore()
{
	moveSubBlock(1, 1, "0%, 0%", "0%, 0%", "0%, 0%");
	moveSubBlock(2, 1, "0%, 0%", "0%, 0%", "0%, 0%");
	moveSubBlock(3, 1, "0%, 0%", "0%, 0%", "0%, 0%");
	moveSubBlock(4, 1, "0%, 0%", "0%, 0%", "0%, 0%");
	rotateMMark();
	zoomMainClass("0.4", "0%, 0%");
	setSubBlockVisibility(1, "1", 1);
	setSubBlockVisibility(2, "1", 1);
	setSubBlockVisibility(3, "1", 1);
	setSubBlockVisibility(4, "1", 1);
	setDotVisibility(1, "1");
	setDotVisibility(2, "1");
	setDotVisibility(3, "1");
	setDotVisibility(4, "1");
	sub_big = false;
	cur_sub = 0;
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