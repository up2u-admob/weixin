var mainInAni = "fadeInRight";
var mainOutAni = "fadeOutLeft";
var itemInAni = "flipInY";
var itemOutAni = "flipOutY";

$(document).ready(function(){
		loadMenu();
		$("#main_class").css({ 
		"-webkit-transform":"scale(0.4)",
		"-moz-transform":"scale(0.4)",
		"-webkit-transform-origin": "left top",
		"-moz-transform-origin": "left top",
		"-webkit-transition":"-webkit-transform 0s ease-out 0s",
		"-moz-transition":"-moz-transform 0s ease-out 0s",});
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
	parent.children(".ani").each(function(i){
		$(this).css("visibility", h);
	});
	parent.children(".noani").each(function(i){
		$(this).css("visibility", h);
	});
  }
  function animaItems(parent, anima){
	parent.children(".ani").each(function(i){
		var child = $(this);
		if(child.children(".ani").size() > 0){
			child.children(".ani").each(function(){
				var grandchild = $(this);
				setTimeout(function(){
					grandchild.css("visibility", "visible");
					grandchild.addClass("animated "+anima);
					setTimeout(function(){
						grandchild.removeClass("animated "+anima);
					},300);
				},500 * i);
			});
		}
		else{
			setTimeout(function(){
				child.css("visibility", "visible");
				child.addClass("animated "+anima);
				setTimeout(function(){
					child.removeClass("animated "+anima);
				},300);
			},500 * i);
		}
		
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
  