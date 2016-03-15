$(document).ready(function() {
	var content = $("#content");


	$("#mcs_container").mCustomScrollbar({
		 axis:"y",
		 theme:"light-2",
		 mouseWheel:{ preventDefault: true},
		
	});




	$(".button_wrap").on("click",function(){
		$(".top_line").toggleClass("top_line_open");
		$(".down_line").toggleClass("down_line_open");
		if($(".mobile_menu_wrap").attr("data-open") == "1"){
			$(".mobile_menu_wrap").attr("data-open","0");
			$(".mobile_menu_wrap").fadeIn("slow",function(){
				$(this).stop(true);
			});
			
		}
		else{
			$(".mobile_menu_wrap").attr("data-open","1");
			$(".mobile_menu_wrap").fadeOut("slow",function(){
				$(this).stop(true);
			});
			
		}
	})




	$(".mobile_menu_wrap").find("li").on("click",function(){
		$(".top_line").removeClass("top_line_open");
		$(".down_line").removeClass("down_line_open");
		$(".mobile_menu_wrap").attr("data-open","1");
			$(".mobile_menu_wrap").fadeOut("slow",function(){
				$(this).stop(true);
			});
	})


	function culcForm(){
		$(".culc_form").on("click",function(){
				$(".culc_menu").toggleClass("culc_menu_open");
				if($(".culc_menu").hasClass("culc_menu_open")){
					$(this).css({"background-color":"inherit"});
					$(".culc_button").addClass("culc_button_open");

				}
				else{
					$(this).removeAttr("style");
					$(".culc_button").removeClass("culc_button_open");
				}
				


			
			

		})
		
		$(document).click( function(event){
      		if( $(event.target).closest(".culc_wrap").length ) 
       		 return;
     		 $(".culc_menu").removeClass("culc_menu_open");
     		 $(".culc_form").removeAttr("style");
			$(".culc_button").removeClass("culc_button_open");
     		 event.stopPropagation();
    	});


		$(".check").on("click",function(){
			$(this).toggleClass("i_mark");
		})


		$(".culc_clear").on("click",function(){
			$(".culc_job").find("i").removeClass("i_mark");
			$(".culc_result span").text(0);

		})
		
		
	}



	function culcResult(){
		$(".check").on("click",function(){
			var result = 0;
			for(var i = 0; i < $(".i_mark").length; i++){
				var result = +result + +$(".i_mark").eq(i).siblings(".job_res").text();
				$(".culc_result span").text(result);
			}
			if($(".i_mark").length == 0){
				$(".culc_result span").text(0);
			}

		})
	}




	function contentHeight(){
		$(".content_about").css("height", $(window).height());
	}


	function addScroll2id(){
		$(".header_menu").find("a").mPageScroll2id({ scrollSpeed: 800, offset: 80 });
		$(".footer_menu nav").find("a").mPageScroll2id({ scrollSpeed: 800, offset: 80  });
		
		$(".mobile_menu_wrap").find("a").mPageScroll2id({ scrollSpeed: 800, offset: 80  });
	}


	

	culcForm();
	culcResult();
	contentHeight();
	addScroll2id();






function sectionPos(){
	var section = $("section h2");
	var navMenu = $(".header_menu").find("a");
	section.waypoint(function(){
		var hash = $(this).attr("data-target");

		navMenu.removeClass("active");

		$.each(navMenu, function(){
			if($(this).attr("data-target") == hash){
				$(this).addClass("active");
			}
		})
	},{offset: "30%"})
}




	$(window).scroll(function(){
		if($(window).width() >= 1200){
			var test = -($(window).scrollTop() / 30);

			if($(window).scrollTop() < $("#services").offset().top){
				$(".content_about").css({"background-position": "center " + test + "px"})
			}
			$(".content_contacts").css({"background-position": "center " + test + "px"})
				
			
		}
		else{
			$(".content_about").css({"background-position": "center 0"})
			$(".content_contacts").css({"background-position": "center 0"})
		}
		sectionPos();

	})	



	$(window).resize(function(){
		contentHeight();
	})



})