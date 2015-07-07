/**
 * Created by cstodd on 6/15/15.
 */

$(document).ready(function () {
    //
    //var fav = f;
    //$("button#favorite").click(function () {
    //    if (fav == false) {
    //        fav = true;
    //    }
    //});//end button
    //
    //$("button#restoreMe").click(function(){
    //    if (fav == true) {
    //        fav = false;
    //    }
    //});//end button

    /* replace with */
    //$('#favorite').click(function () {
    //    $('.something').replaceWith("<h1>Im great!</h1> ");
    //
    //});

    /* filter, slice, eq */
    //$('#restoreMe').click(function () {
    //    console.log($('.menu_list').children().filter('.colin-fav').text());
    //    console.log("****");
    //    console.log($('.menu_list').children().slice(0, 1).text());
    //    console.log("****");
    //    console.log($('.menu_list').children().eq(2).text());
    //});

    /* Find method */
    var $lists = $('li');
    console.log($lists.find('.colin-fav'));


    /* wrap method */
    $('li .colin-fav').wrap("<a href='http://www.colinstodd.com' target='_blank'></a>");


  var colin_fav = function () {
    /* Detach (take it away but keep in Memory)*/
    $('#favorite').click(function () {
      $flav = $('.flavors .something').detach();
      $cone = $('.cones .something').detach();
      $top = $('.toppings .something').detach();
    });

    /* Next/ append put back on the detached above. */
    $('#restoreMe').click(function () {
      $('.flavors').append($flav);
      $('.cones').append($cone);
      $('.toppings').append($top);

    });
  }; //function End

  colin_fav(); //calls the colin_fav function


  //$('.sunday').before("<li>Im before a menu item</li>");







});/* End JavaScript */
