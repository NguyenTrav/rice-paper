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
			var position = $(".section-story").offset().top - 72; 

			$("HTML, BODY").animate({ scrollTop: position 
		}, 1000); 
	});
});

$(function() 
{ 
	$("#menu-scroll").on('click', function() 
		{ 
			var position = $(".section-menu").offset().top - 72; 

			$("HTML, BODY").animate({ scrollTop: position 
		}, 1000); 
	});
});

$(function() 
{ 
	$("#press-scroll").on('click', function() 
		{ 
			var position = $(".section-press").offset().top - 72; 

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

document.addEventListener("DOMContentLoaded", function() {
  var lazyBackgrounds = [].slice.call(document.querySelectorAll("#l-splash, .image-greet, .image-about, .image-menu, .image-press, .image-contact"));

  if ("IntersectionObserver" in window) {
    let lazyBackgroundObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("load");
          lazyBackgroundObserver.unobserve(entry.target);
        }
      });
    });

    lazyBackgrounds.forEach(function(lazyBackground) {
      lazyBackgroundObserver.observe(lazyBackground);
    });
  }
});
