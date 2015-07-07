/**
 * Created by colin on 6/8/15.
 */

$(document).ready(function () {
    /* slides toggle the header up and down */
    //$(".clickme").click(function() {
    //    $("div div.header").slideToggle("fast");
    //});

        // Function starts
    function getRandom(num){
        var my_num = Math.floor(Math.random()*num);
        return my_num;
    }

    function checkForCode(){
        var discount = getRandom(10);
        var discount_msg = "Your discount for this item is: " + discount + "%.";
        //return(discount_msg);
        $('#discount').append(discount_msg);
        // Prevents code from running again.
        $(this).unbind();
    }

    //var hideCode = function () {
    //    var numRand = getRandom(10);
    //    $("img[class=guess_box]").each(function  (index, value) {
    //        if (numRand == index) {
    //            $(this).append("<span id='discount'>Something else</span>");
    //            return false;
    //        }
    //    });
    //};

    function addBorder(){
        $('img[class=guess_box]').addClass('my_hover');
    }

    $('img[class=guess_box]').mouseover(function () {
        checkForCode();
        //hideCode();
        addBorder();

    });



     //function getRandom(num) {
    //    var my_num = Math.floor(Math.random() * num);
    //    console.log(my_num);
    //}
    //
    //getRandom();

    /* Clears the discount code */
    $("#close").click(function () {
        $("#discount").remove();
    });

  //$('p').click(checkForCode);

    //function hideImage(){
    //    $(this).hide('fast');
    //}
    //
    //$('.guess_box').click(hideImage);


    getRandom();


/* jQuery end */
});

