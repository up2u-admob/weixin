var sub_big = false;

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
		        if (deltaY != 0)
		        {
		        	delta = deltaY/Math.abs(deltaY)*(deltaX*deltaX + deltaY*deltaY) * 10;
			        console.log(deltaX + " " + deltaY);
			        //$(this).css({'left':this.left, 'top':this.top});
			        rotateMMark(delta + "deg");
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

	$("#sub1").click(changeSubBlock1); 
	$("#sub2").click(changeSubBlock2); 
	$("#sub3").click(changeSubBlock3); 
	$("#sub4").click(changeSubBlock4); 
});

function changeSubBlock1()
{
	if (!sub_big)
	{
		rotateMMark("-40deg");
		zoomMainClass("1", "-3%, -24%");
	 	sub_big = true;
	}
	else
	{
		restore();
	}
}

function changeSubBlock2()
{
	if (!sub_big)
	{
		rotateMMark("-130deg");
		zoomMainClass("1", "-3%, -24%");
	 	sub_big = true;
	}
	else
	{
		restore();
	}
}

function changeSubBlock3()
{
	if (!sub_big)
	{
		rotateMMark("-210deg");
		zoomMainClass("1", "-3%, -24%");
	 	sub_big = true;
	}
	else
	{
		restore();
	}
}

function changeSubBlock4()
{
	if (!sub_big)
	{
		rotateMMark("-300deg");
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
	rotateMMark("0deg");
	zoomMainClass("0.4", "0%, 0%");
	sub_big = false;
}

function rotateMMark(rotateParameter)
{
	$("#m-mark img").css({ 
		"-webkit-transform":"rotate("+rotateParameter+")",
		"-moz-transform":"rotate("+rotateParameter+"",
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