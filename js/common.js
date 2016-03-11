$(document).ready(function() {
	var content = $("#content");

	function contentHeight(){
		content.find(".content_about").height($(window).height());
	}

	
	contentHeight();

	
	$(window).resize(function(){
		contentHeight();
	})



})