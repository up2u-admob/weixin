
$(document).ready(function(){
		loadMenu();
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
		$("#m-mark").removeClass("animated fadeOutLeft");
		removeAnimaItems($("#main_class"), "flipInY");
  }
  function loadMenu(){
		hideItems($("#main_class") , true);
		$("#m-mark").addClass("animated fadeInLeft");
		setTimeout(function(){
			animaItems($("#main_class"), "flipInY");
		},1000);
  }
  function unloadMenu(){
	animaItems($("#main_class"), "flipOutY");
	setTimeout(function(){
		$("#m-mark").addClass("animated fadeOutLeft");
	},500 * $("#main_class").children("div").size());
  }
  function hideItems(parent, hideOrNot){
	var h = hideOrNot ? "hidden": "visible";
	parent.children("div").each(function(i){
		$(this).css("visibility", h);
	});
  }
  function animaItems(parent, anima){
	parent.children("div").each(function(i){
		var child = $(this);
		setTimeout(function(){
			child.css("visibility", "visible");
			child.addClass("animated "+anima);
		},500 * i);
	});
  }
  
  function removeAnimaItems(parent, anima){
	parent.children("div").each(function(i){
		$(this).removeClass("animated "+anima);
	});
  }
  