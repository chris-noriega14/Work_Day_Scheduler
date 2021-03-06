//This section of code displays the today's date and time on the header.
//This time will be used to help identify which boxes to turn gray, red, or green.
var CurrentTime = moment().format('LLLL');
$("#currentDay").text(CurrentTime);

//This section of code retains the event description information of each time slot after refreshing the page.
// var keepData = localStorage.setItem(textarea);

var hourBlock = moment().startOf('day').add(9,'h').format("H"); //hour of first block (used for testing)
var currentHour = moment().hours(); //Current hour (24 hour format)

//This section attampts to retain the text from the description section once the page has refreshed.
function PageReload () {
    if(location.reload(true)) {
        // document.getElementById("hour9").value = localStorage.getItem("timeStamp","valueStamp");
        console.log("Test");
    }
}

//This section of code compares the current time of day vs. the time on the time slots.
//This helps us figure out which color the description boxes need to be.

$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));

function updateCSS () {
    $(".description").each(function() {
        var divBlock = parseInt($(this).parent().attr("id"));
        if(divBlock < currentHour){
            $(this).addClass("past");
        }
        else if (divBlock == currentHour) {
            $(this).addClass("present");
        }
        else if (divBlock > currentHour) {
            $(this).addClass("future");
        }      
    })
}
updateCSS();
//This code adds the time slot and description to local storage once you click the save button.
$(".saveBtn").on("click", function() {
    var valueStamp = $(this).siblings(".description").val();
    var timeStamp = $(this).parent().attr("id");
    localStorage.setItem(timeStamp,valueStamp);
});

