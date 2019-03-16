$(function() 
{ 
	$("#logo").on('click', function() 
		{ 
			var position = $("title").offset().top; 

			$("HTML, BODY").animate({ scrollTop: position 
		}, 1250); 
	});
});

$(function() 
{ 
	$("#story-scroll").on('click', function() 
		{ 
			var position = $(".section-story").offset().top - 135; 

			$("HTML, BODY").animate({ scrollTop: position 
		}, 1250); 
	});
});

$(function() 
{ 
	$("#menu-scroll").on('click', function() 
		{ 
			var position = $(".section-menu").offset().top - 135; 

			$("HTML, BODY").animate({ scrollTop: position 
		}, 1250); 
	});
});

$(function() 
{ 
	$("#awards-scroll").on('click', function() 
		{ 
			var position = $(".section-awards").offset().top - 135; 

			$("HTML, BODY").animate({ scrollTop: position 
		}, 1250); 
	});
});

$(function() 
{ 
	$("#contact-scroll").on('click', function() 
		{ 
			var position = $(".section-contact").offset().top; 

			$("HTML, BODY").animate({ scrollTop: position 
		}, 1250); 
	});
});

$(function(){

    var t = setInterval(function(){

        $('.banner-image').last().fadeOut(2000,function(){ // 2 second fade duration
            $this = $(this);
            $parent = $this.parent();
            $this.remove().css('display','block'); // remove the faded element
            $parent.prepend($this); // put it as the first element
        });

    },3000); // every 3 seconds
});