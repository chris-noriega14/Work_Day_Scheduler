//This section of code displays the today's date and time on the header.
//This time will be used to help identify which boxes to turn gray, red, or green.
var CurrentTime = moment().format('LLLL');
$("#currentDay").text(CurrentTime);

//This section of code retains the event description information of each time slot after refreshing the page.
// var keepData = localStorage.setItem(textarea);

var hourBlock = moment().startOf('day').add(9,'h').format("H"); //hour of first block (used for testing)
var currentHour = moment().format("H") //Current hour (24 hour format)

//This section attampts to retain the text from the description section once the page has refreshed.
function PageReload () {
    if(location.reload(true)) {
        document.getElementById("hour9").value = localStorage.getItem("timeStamp","valueStamp");
        console.log("Test");
    }
}

//This section of code compares the current time of day vs. the time on the time slots.
//This helps us figure out which color the description boxes need to be.
for (var i = 8; i < 17; i++) {
    var DescBGColor;

    if(currentHour == i){
        DescBGColor = 'present';
    } 
    else if (currentHour > i) {
        DescBGColor = 'past';
    }
    else if (currentHour < i) {
        DescBGColor = 'future';
    }      
};

//This code adds the time slot and description to local storage once you click the save button.
$(".saveBtn").on("click", function() {
    var valueStamp = $(this).siblings(".description").val();
    var timeStamp = $(this).parent().attr("id");
    localStorage.setItem(timeStamp,valueStamp);
});