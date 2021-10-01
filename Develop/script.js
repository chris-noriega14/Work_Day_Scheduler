//This displays the today's date and time on the header.
//This time will be used to help identify which boxes to turn gray, red, or green.
var CurrentTime = moment().format('LLLL');
$("#currentDay").text(CurrentTime);