var mainInAni = "fadeInLeft";
var mainOutAni = "fadeOutLeft";
var itemInAni = "flipInY";
var itemOutAni = "flipOutY";

$(document).ready(function(){
		loadMenu();
		loadMenu1();
		$("#main_class").css({ 
		"-webkit-transform":"scale(0.4)",
		"-webkit-transition":"-webkit-transform 1s ease-out 0s",});
		$("#main_class1").css({ 
		"-webkit-transform":"scale(0.4)",
		"-webkit-transition":"-webkit-transform 1s ease-out 0s",});
  });
  
  $("#main_class img").click(function () {
		//remove animation, will not show next time when page load
		$("#video_img").removeClass("animated bounceIn");
			
			//clicked button jump
			var  _this = $(this);
            _this.addClass("animated bounceIn");
			
			//get page url
			var href = "index.html#"+this.alt;
			
			//nav button out after button jumped(200ms)
			setTimeout(function(){
				_this.removeClass("animated bounceIn");
			    $(".main_nav img").addClass("animated fadeOutDown");
			},200);
			//locate to new page after 1200ms then button in animation start
			setTimeout(function(){
			    $(".main_nav img").removeClass("animated fadeOutDown");
				location.href= href;
				$(".main_nav img").addClass("animated fadeInUp");
				teachermain_page_load();
			},1200);
        });
		
  function removeAnimaMenu(){
		$("#m-mark").removeClass("animated "+mainOutAni);
		removeAnimaItems($("#main_class"), itemInAni);
  }
  function loadMenu(){
		hideItems($("#main_class") , true);
		$("#m-mark").addClass("animated "+mainInAni);
		setTimeout(function(){
			animaItems($("#main_class"), itemInAni);
		},1000);

		
  }
  function unloadMenu(){
	animaItems($("#main_class"), itemOutAni);
	setTimeout(function(){
		$("#m-mark").addClass("animated "+mainOutAni);
	},500 * $("#main_class").children("div").size());
  }
  function hideItems(parent, hideOrNot){
	var h = hideOrNot ? "hidden": "visible";
	parent.children("div").each(function(i){
		$(this).css("visibility", h);
	});
  }
  function animaItems(parent, anima){
	parent.children(".ani").each(function(i){
		var child = $(this);
		setTimeout(function(){
			child.css("visibility", "visible");
			child.addClass("animated "+anima);
			setTimeout(function(){
				child.removeClass("animated "+anima);
			},300);
		},500 * i);
	});
	parent.children(".noani").each(function(i){
		var child = $(this);
		child.css("visibility", "visible");
	});
  }
  
  function removeAnimaItems(parent, anima){
	parent.children("div").each(function(i){
		$(this).removeClass("animated "+anima);
	});
  }
  