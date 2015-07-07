/**
 * Created by colin on 6/10/15.
 */

$(document).ready(function(){


    /* Add Class/ remove class */

    /* Look up mouse events to change actions other than click */
   //$('#header').mouseenter(function () {
   //    $('#header').addClass("hover");
   //    $('#header').removeClass("no_hover");
   //    /* notice no dot on the css class "hover" and no_hover" */
   //});
   //
   // $('#header').mouseleave(function () {
   //     $('#header').removeClass("hover");
   //     $('#header').addClass("no_hover");
   //     /* notice no dot on the css class "hover" and no_hover" */
   // });

    function addBox(){
      $('#addbtn').click(function () {
        $('#header').addClass("hover");
        $('#header').removeClass("no_hover");
        /* notice no dot on the css class "hover" and no_hover" */
      });
    }

    function removeBox(){
      $('#rmbtn').click(function () {
        $('#header').removeClass("hover");
        $('#header').addClass("no_hover");
        /* notice no dot on the css class "hover" and no_hover" */
      });
    }



  function changeText(){
    $('p').mouseenter(function() {
      $('p:first').addClass('enlarge');
    });

    $('p').mouseleave(function () {
      $('p:first').removeClass('enlarge');
    });

  }

  addBox();
  removeBox();
  changeText();











});