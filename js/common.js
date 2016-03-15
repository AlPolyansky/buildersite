$(document).ready(function() {
	var content = $("#content");
	var mobile_menu_wrap = $(".mobile_menu_wrap");
	var top_line = $(".top_line");
	var down_line = $(".down_line");
	var top_line_open = "top_line_open";
	var down_line_open = "down_line_open";
	var content_contacts = $(".content_contacts");
	var content_about = $(".content_about");


	$("#mcs_container").mCustomScrollbar({
		 axis:"y",
		 theme:"light-2",
		 mouseWheel:{ preventDefault: true},
		
	});



	function mobileButton(){
		$(".button_wrap").on("click",function(){
			top_line.toggleClass(top_line_open);
			down_line.toggleClass(down_line_open);
			if(mobile_menu_wrap.attr("data-open") == "1"){
				mobile_menu_wrap.attr("data-open","0");
				mobile_menu_wrap.fadeIn("slow",function(){
					$(this).stop(true);
				});
				
			}
			else{
				mobile_menu_wrap.attr("data-open","1");
				mobile_menu_wrap.fadeOut("slow",function(){
					$(this).stop(true);
				});
				
			}
		})


		mobile_menu_wrap.find("li").on("click",function(){
			top_line.removeClass(top_line_open);
			down_line.removeClass(down_line_open);
			mobile_menu_wrap.attr("data-open","1");
			mobile_menu_wrap.fadeOut("slow",function(){
				$(this).stop(true);
			});
		})
	}


	




	


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
	addScroll2id();
	mobileButton();
	ajaxForm();


	function parallaxEffect(){
			if($(window).width() >= 1200){
			var test = -($(window).scrollTop() / 30);

			if($(window).scrollTop() < $("#services").offset().top){
				content_about.css({"background-position": "center " + test + "px"})
			}
			content_contacts.css({"background-position": "center " + test + "px"})
				
			
		}
		else{
			content_about.css({"background-position": "center 0"})
			content_contacts.css({"background-position": "center 0"})
		}
		}






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


function ajaxForm(){



	$(".input_wrap").find("input").keyup(function(){
	        	if($(this).val()){
	        		$(this).removeClass("inputError");
	        		$(this).siblings("span").empty();
	        	}
	        });
	$(".input_wrap").find("textarea").keyup(function(){
	        	if($(this).val()){
	        		$(this).removeClass("inputError");
	        		$(this).siblings("span").empty();
	        	}
	});

	$('button').click(function (e){
				e.preventDefault();
				var pattern = /^([0-9a-zA-Z_-]+\.)*[0-9a-zA-Z_-]+@[0-9a-zA-Z_-]+(\.[0-9a-zA-Z_-]+)*\.[a-z]{2,6}$/;
				var email =$("#email");
				var name = $("#name");
	        	var text = $("#text"); 
	        	var contacts_form_wrap = $(".contacts_form_wrap");
	        	var input_wrap = $(".input_wrap");
	        	var error=0; 
	        	var dataString = 'name='+ name.val() + '&email=' + email.val().toLowerCase() + '&text=' + text.val();
	           	
	           	var field = ["name", "email","text"];




	            for(var i = 0; i < input_wrap.length; i++){
	            	if(input_wrap.find("#" + field[i]).val() === ""){
	            		error = 1;
	            		input_wrap.find("#" + field[i]).addClass("inputError");
	            		input_wrap.find("#" + field[i]).siblings("span").text("*поле пустое").animate({opacity : 1},800);
	            	}
	            	else{
	            		input_wrap.find("#" + field[i]).removeClass("inputError");
	            		input_wrap.find("#" + field[i]).siblings("span").empty();
	            	}

	            	}
	            	if(email.val() !== ""){
	            		if(!pattern.test(email.val())){
	            			error = 1;
	            			email.siblings("span").text("не верный e-mail").animate({opacity : 1},800);
	            			email.addClass("inputError");
				        }
	            	}


	            	


	      
	            

	        if(error === 0){
	            	
	            
				            input_wrap.find("span").empty();
							/*$.ajax({  
				      			type: "POST",  
				      			url: "/assets/templates/portfolio/ajax/mail.php",
				      			data: dataString,
				      		success:  function() {
				                        
				                        $('.contacts_form_wrap').trigger( 'reset' );
				                        $('.success').fadeIn("slow");
				                        setTimeout(function(){
											$('.success').fadeOut("slow");
										} ,3000);
				                }
				    		});*/
				}
				else{
					setTimeout(function(){
						contacts_form_wrap.find("input").removeClass("inputError");
						contacts_form_wrap.find("textarea").removeClass("inputError");
						contacts_form_wrap.find("span").animate({opacity : 0},800);
					},6000);
				}

	     });


}

	$(window).scroll(function(){
		
		parallaxEffect();
		sectionPos();
		

	})	



	$(window).resize(function(){
		if($(this).width() < 1200){
			content_about.css({"background-position": "center 0"});
			content_contacts.css({"background-position": "center 0"});
		}
	})

	$(window).load(function(){
		$(".loader_wrap").fadeOut(400);
		$(".loader").delay(400).fadeOut("slow");
	})



})