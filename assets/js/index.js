$(function() 
{ 
	$("#logo").on('click', function() 
		{ 
			var position = $("title").offset().top; 

			$("HTML, BODY").animate({ scrollTop: position 
		}, 500); 
	});
});

$(function() 
{ 
	$("#story-scroll").on('click', function() 
		{ 
			var position = $(".section-story").offset().top - 135; 

			$("HTML, BODY").animate({ scrollTop: position 
		}, 1000); 
	});
});

$(function() 
{ 
	$("#menu-scroll").on('click', function() 
		{ 
			var position = $(".section-menu").offset().top - 135; 

			$("HTML, BODY").animate({ scrollTop: position 
		}, 1000); 
	});
});

$(function() 
{ 
	$("#press-scroll").on('click', function() 
		{ 
			var position = $(".section-press").offset().top - 135; 

			$("HTML, BODY").animate({ scrollTop: position 
		}, 1000); 
	});
});

$(function() 
{ 
	$("#contact-scroll").on('click', function() 
		{ 
			var position = $(".section-contact").offset().top; 

			$("HTML, BODY").animate({ scrollTop: position 
		}, 1000); 
	});
});
