mainInAni = "zoomIn";
mainOutAni = "zoomOut";
itemInAni = "zoomIn";
itemOutAni = "zoomOut";

$(document).ready(function () {   		
	$("#m-mark").click(function(){
		$.mobile.changePage("#subpage1", {transition:"flip"});
	}); 
	$("#text1").click(function(){
		$.mobile.changePage("#subpage1", {transition:"flip"});
	}); 
	$("#text2").click(function(){
		$.mobile.changePage("#subpage1", {transition:"flip"});
	}); 
	$("#text3").click(function(){
		$.mobile.changePage("#subpage1", {transition:"flip"});
	}); 
	$("#text4").click(function(){
		$.mobile.changePage("#subpage1", {transition:"flip"});
	}); 
	$("#text5").click(function(){
		$.mobile.changePage("#subpage1", {transition:"flip"});
	}); 
	$("#smalldot").click(function(){
		$.mobile.changePage("#subpage1", {transition:"flip"});
	}); 
	
	$("#art_page").bind({
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
		});
});