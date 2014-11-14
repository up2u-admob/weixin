var sub_big = false;
var delta = 0;

var isTouch = ('ontouchstart' in window);

mainInAni = "rollIn";
mainOutAni = "rollOut";
itemInAni = "flipInX";
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
	        	delta = delta + deltaY/Math.abs(deltaY)*(deltaX*deltaX + deltaY*deltaY) / 5;
		        rotateMMark(delta);
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

	$("#sub1").click(function(){changeSubBlock(-40);}); 
	$("#sub2").click(function(){changeSubBlock(-130);}); 
	$("#sub3").click(function(){changeSubBlock(-220);}); 
	$("#sub4").click(function(){changeSubBlock(-310);}); 
});

function changeSubBlock(degree)
{
	if (!sub_big)
	{
		delta = degree;
		rotateMMark(delta+"deg");
		zoomMainClass("1", "-3%, -24%");
	 	sub_big = true;
	}
	else
	{
		restore();
	}
}

function restore()
{
	rotateMMark(0);
	zoomMainClass("0.4", "0%, 0%");
	sub_big = false;
}

function rotateMMark(rotateParameter)
{
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
	$("#main_class").css({ 
		"-webkit-transform":"scale("+ zoomParameter +") translate(" + positionParameter + ")",
		"-moz-transform":"scale("+ zoomParameter +") translate(" + positionParameter + ")",
		"-webkit-transition":"-webkit-transform 1s linear 0s",
		"-moz-transition":"-moz-transform 1s linear 0s",});
}