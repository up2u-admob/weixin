
$(document).ready(function(){

		console.log($(".teacher_list").children("div"))
		$(".teacher_list").children("div").each(function(){
			$(this).css("visibility","hidden");
		});
		
		$(window).scroll(function () { 
		});
		
		$(document).on("scrollstop",function(){
			$(".teacher_list").children("div").each(function(){
				if(isInWindow($(this)) &&  !$(this).hasClass("animated")){
					showTeacher($(this));
				}
			});
		});
		
  });
  
  function isInWindow(tea){
	if(tea.offset().top + ( tea.height() * 0.6) <= $(window).height()){
		return true;
	}
	return false;
  }
  
  function showTeacher(tea){
	tea.css("visibility", "visible");
	var p = tea.children("div.photo");
	var n = p.next("div");
	var c = n.next("div");
	var co = c.next("div");
	var l = (tea.attr('class').indexOf("left") >= 0);
	if(l == true){
		p.addClass("animated fadeInLeft");
		n.addClass("animated fadeInRight");
		c.addClass("animated fadeInRight");
		co.addClass("animated fadeInRight");
	}else{
		p.addClass("animated fadeInRight");
		n.addClass("animated fadeInLeft");
		c.addClass("animated fadeInLeft");
		co.addClass("animated fadeInLeft");
    }
  };
