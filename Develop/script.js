var currentDay = moment();
$("#currentDay").text(currentDay.format("dddd, MMMM Do, HH:mm:ss"));
var currentHour = Number(currentDay.format("H"));

// changes all the backgrounds dynamically

function backgroundChange (){
    currentDay = moment();
    for (let i = 9; i <= 17; i++) {
        var currentHourIndex = document.getElementById(`${i}`);
        if (currentHour == i) {
            $(currentHourIndex).addClass("present");
            $(currentHourIndex).removeClass("past");
        } else if (currentHour > i){
            $(currentHourIndex).addClass("past");
            $(currentHourIndex).removeClass("present");
        }else {
            $(currentHourIndex).addClass("future");
            $(currentHourIndex).removeClass("past");
        }
    }
}
backgroundChange()

setInterval(function () {
    currentDay = moment();
    $("#currentDay").text(currentDay.format("dddd, MMMM Do, HH:mm:ss"));
    // changes background if time rolls over
    backgroundChange();
}, 1000);

