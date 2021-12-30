$(function () {

    // tabitha's fixed header with calc of header

    var theWindow = $(window),

        body = $("body"),

        header = $("header"),

        headerBottom = header.outerHeight();

    if(window.location.hash && theWindow.width() > 1020) {

		body.addClass("fix-nav").css('padding-top', headerBottom);;

	}

    theWindow.on("scroll", function () {

        if (theWindow.width() > 1020) {

            if (theWindow.scrollTop() >= headerBottom) {

                body.addClass("fix-nav").css('padding-top', headerBottom);

            } else if (theWindow.scrollTop() <= headerBottom) {

                body.removeClass("fix-nav").css('padding-top','0');

            }

        }

    });

    
  
});
