
$(function () {
		$(".gwd-image_2").addClass("animated fadeInLeft");	//title in
		$(".gwd-image_3").addClass("animated fadeInLeft");
		$(".gwd-image_5").addClass("animated fadeInRight");	//text in
		$(".main_nav img").css("display", "none");	//button hide
		$(".video_img").css("display", "none");
		$(".video_text").css("display", "none");
		
		//button animation after 500ms
		setTimeout(function(){
			$(".main_nav img").css("display", "block");
			$(".video_img").css("display", "block");
			$(".video_text").css("display", "block");
			$(".main_nav img").addClass("animated fadeInUp");
			$(".video_img").addClass("animated bounceIn");
			$(".video_text").addClass("animated fadeInRight");
		},500);
		
		//nav button clicked
        $(".main_nav img").click(function () {
			var source_img = this.alt;
			
			//remove animation, will not show next time when page load
			$(".gwd-image_2").removeClass("animated fadeInLeft");
			$(".gwd-image_3").removeClass("animated fadeInLeft");
			$(".gwd-image_5").removeClass("animated fadeInRight");
			$(".main_nav img").removeClass("animated fadeInUp");
		    $(".video_img").removeClass("animated bounceIn");	
			
			//clicked button jump
			var  _this = $(this);
            _this.addClass("animated bounceIn");
			
			//get page url
			var href = "index.html#"+this.alt;
			
			if (this.alt == "contact_main")
			{
				href = "contact.html";
			}
			
			//nav button out after button jumped(200ms)
			setTimeout(function(){
				_this.removeClass("animated bounceIn");
			    $(".main_nav img").addClass("animated fadeOutDown");
			},200);
			//locate to new page after 1200ms then button in animation start
			setTimeout(function(){
			    $(".main_nav img").removeClass("animated fadeOutDown");
				location.href = href;
				$(".main_nav img").addClass("animated fadeInUp");
				if (source_img == "teacher_main")
				{
					teachermain_page_load();
				}
				else if (source_img== "class_main")
				{
					classmain_page_load();
				}
			},1200);
        });
		
		function teachermain_page_load(){
			$(".main_list ul").css("display", "none");
			$("#background_1").css("display", "block");
			$("#background_2").css("display", "none");
			$("#background_3").css("display", "block");
			$(".main_word li").css("display", "block");
			$(".main_word li").addClass("animated zoomIn");
			
			setTimeout(function(){
			    $(".main_word li").removeClass("animated zoomIn");
				$(".main_word li").css("display", "none");
				$(".main_list ul").css("display", "block");
				$(".main_list li").addClass("animated fadeInDown");
				$("#background_1").addClass("animated fadeOutDown");
				$("#background_3").addClass("animated fadeOutDown");
			},2000);
			
			setTimeout(function(){
			    $("#background_1").css("display", "none");
                $("#background_3").css("display", "none");
    			$(".main_list li").removeClass("animated fadeInDown");
    			$("#background_1").removeClass("animated fadeOutDown");
                $("#background_3").removeClass("animated fadeOutDown");
            },4000);
		}
		
		function classmain_page_load(){
			$(".main_list2 ul").css("display", "none");
			$(".main_word2 li").css("display", "block");
			$(".main_word2 li").addClass("animated zoomIn");
			
			setTimeout(function(){
			    $(".main_word2 li").removeClass("animated zoomIn");
				$(".main_word2 li").css("display", "none");
				$(".main_list2 ul").css("display", "block");
				$(".main_list2 li").addClass("animated fadeInDown");
			},2000);
			
			setTimeout(function(){
    			$(".main_list2 li").removeClass("animated fadeInDown");
            },4000);
		}
		
		//2nd level pages link list clicked
		$(".main_list img").click(function () {
			//clicked item changed into red
			var  _this = this;
            var src = this.src;
			this.src = this.src+"r.png";
			//white bar show
			$(".select_bar").css("display", "block");
			//calc white bar position
			var left = parseInt(this.alt.slice(-1)) * 21;
			$(".select_bar").css("left", left+"%");
			//calc white animate
			$(".select_bar").animate({left: "-10%",width:'110%'});
			
			//set item color to black, hide white bar after 1s
			setTimeout(function(){
			    location.href= _this.alt.slice(0, -1)+".html";
			},400);
			setTimeout(function(){
				var src = _this.src;
				_this.src = _this.src.slice(0, -5);
				
				$(".select_bar").css("display", "none");
				$(".select_bar").css("width", "10%");
			},500);
        });
        
        //2nd level pages link list clicked
		$(".main_list2 img").click(function () {
			//clicked item changed into red
			var  _this = this;
            var src = this.src;
			this.src = this.src+"r.png";
			//white bar show
			$(".select_bar").css("display", "block");
			//calc white bar position
			var left = parseInt(this.alt.slice(-1)) * 13;
			$(".select_bar").css("left", left+"%");
			//calc white animate
			$(".select_bar").animate({left: "-10%",width:'110%'});
			
			//set item color to black, hide white bar after 1s
			setTimeout(function(){
			    location.href= _this.alt.slice(0, -1)+".html";
			},400);
			setTimeout(function(){
				var src = _this.src;
				_this.src = _this.src.slice(0, -5);
				
				$(".select_bar").css("display", "none");
				$(".select_bar").css("width", "10%");
			},500);
        });
    });
