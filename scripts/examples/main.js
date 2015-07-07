
/**
 * Created by cstodd on 5/19/15.
 */

$(document).ready(function() {
/* jQuery code goes below here */



$(".guess_box").click(function() {
    var discount = Math.floor((Math.random() * 5) + 5);
    var discount_msg = "Your Discount is " + discount + "%.";
    //alert(discount_msg);
    $("#discount").append(discount);

});

$(".clickme").click(function() {
    $("div div.header").slideToggle("fast");
});

    $("#close").click(function () {
        $("#discount").remove();
    });

//

    //$("li[class=d]").css("border", "3px solid brown");
    //$("img[src*=Stodd]").css("border", "3px solid brown");
    //$("li:nth-child(3)").css("border", "3px solid black");
    $("tr[class=dark]").css("background-color", "#dcdcdc");
    //
    //$("form :checkbox:checked").css("border", "5px solid green");


    //alert("There are " + $("img").length + " image elements.");

    //var elems = $("img").get();
//    alert("There are " + elems.length + " images");

//var btns = $("button").get();
//    console.log("There are " + btns.length + " buttons on the page.");


    console.log($("button").get(0));


    /* jQuery code ends */
});

