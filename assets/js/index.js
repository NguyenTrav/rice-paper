$(function() 
{ 
	$("#story-scroll").on('click', function() 
		{ 
			var position = $(".section-story").offset().top - 135; 

			$("HTML, BODY").animate({ scrollTop: position 
		}, 1500); 
	});
});

$(function() 
{ 
	$("#menu-scroll").on('click', function() 
		{ 
			var position = $(".section-menu").offset().top - 135; 

			$("HTML, BODY").animate({ scrollTop: position 
		}, 1500); 
	});
});

$(function() 
{ 
	$("#awards-scroll").on('click', function() 
		{ 
			var position = $(".section-awards").offset().top - 135; 

			$("HTML, BODY").animate({ scrollTop: position 
		}, 1500); 
	});
});

$(function() 
{ 
	$("#contact-scroll").on('click', function() 
		{ 
			var position = $(".section-contact").offset().top; 

			$("HTML, BODY").animate({ scrollTop: position 
		}, 1500); 
	});
});