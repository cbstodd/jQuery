/**
 * Created by cstodd on 7/6/15.
 */

$(document).ready(function(){
  $('#bull-ad').hide();
  $('#lab-ad').hide();
  $('#pom-ad').hide();
  $('#dach-ad').hide();

  var bullClick = 0, labClick = 0, pomClick = 0, dachClick = 0;

  $("div #bull").click(function(){
    if (bullClick < 1){
      bullClick += 1;
    } else {
      bullClick = 0;
      $("div #bull-pup").hide();
      $("div #bull-ad").show('right');

    }
  });

  $("div #lab").click(function(){
    if (labClick < 1) { labClick += 1; }
    else { labClick = 0;
        $('div #lab-pup').hide('slow');
        $('div #lab-ad').show('slow'); }
  });

  $("div #pom").click(function(){
    if (pomClick < 1){
      pomClick += 1;
    } else {
      pomClick = 0;
        $('div #pom-pup').hide('slow');
        $('div #pom-ad').show('slow');
    }
  });

  $("div #dach").click(function(){
    if (dachClick < 1) {
      dachClick += 1;
    } else {
      dachClick = 0;
        $('div #dach-pup').hide('slow');
        $('div #dach-ad').show('slow');
    }
  });


  /* Creates a lighting effect via setTimeout */
  //dach_in(5000);
  //function dach_in(t) {
  //  $("#dach-ad").fadeIn(250).fadeOut(250);
  //  setTimeout("dach_in()", t);
  //}
  //
  //dach_pup_in(10000);
  //function dach_pup_in(t) {
  //  $("#dach-pup").fadeIn('slow').fadeOut('slow');
  //  setTimeout("dach_in()", t);
  //}


  /* Animate */
  //$("#clickMe").click(function () {
  //  $("h1").animate({
  //      fontSize: "20px",
  //      opacity: 0,
  //      fontWeight: "normal"
  //  }, 1000);
  //
  //    $("p").animate({
  //        fontSize: "15px",
  //        color: 'yellow'
  //    }, 1500);
  //});
  //
  //$("#restoreMe").click(function () {
  //  $("h1").animate({
  //      fontSize:"63px",
  //      opacity: 1,
  //      fontWeight: "bold"
  //  }, 500);

      //$("p").animate({
      //    fontSize: "21px",
      //    color: "black"
      //}, 500);
  //});


    /* Add or subtract more and less using css and animate */
    $('#clickMe').click(function () {
        $('p').css({fontSize: "+=5px"});

    });

    $('#restoreMe').click(function(){
        $('p').animate({fontSize: "-=5px"});
    });

});  //End jQuery function