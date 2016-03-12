$(document).ready(function() {
	var content = $("#content");




	function contentHeight(){
		$(".content_about").css("height", $(window).height());
	}

	
	contentHeight();

	//$(".content_about").stellar();




	$(window).resize(function(){
		contentHeight();
	})

	//$('.content_about').parallax({imageSrc: 'img/room_1.jpg'});

})