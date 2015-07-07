
//console.log($('.header').html());
//$('.header').html("<h3>This is javascript replacing or being added to the html header</h3>");

$(document).ready(function(){

    //var showPara = "<p>I am replacing the first paragraph</p>";
    //$('p:first').html(showPara);

    //makes all a-link tags open in new page
    $('a').attr('target', '_blank');

    /*changes all images to colin */
    //$('img').attr({src: 'images/Stodd_Colin_SP_172.jpg', alt: 'Colper pic'});

    /* append -> add something to a selector */
    //$('p').append("--==> Im appended to the paragraph tags.");

    /*put something before the selector */
    //$('p').prepend(" Im before the paragraph tags <===---#");

    /*add last paragraph to first paragraph */
    //$('p:last').appendTo('p:first');

    /*wraps whatever tag to the selector */
    //$('p').wrap("<div style='color:red;'/>");
    //$('.header').wrap("<p style='border: 5px solid fuchsia;'/>");

    /* adds a class to the selector */
    //$('p').addClass('border');






});