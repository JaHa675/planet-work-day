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

// saves each text area when the save button is clicked
$(".saveBtn").on("click", function (event){
    var textAreaFilling =$(`#${event.target.previousElementSibling.id}`).val();
    localStorage.setItem(`${event.target.id}text`, textAreaFilling);
    console.log("saved")
});
// loads each text area from local storage on load
for (var i = 9; i <=17; i++){
    var textAreaTarget = $(`#${i}`);
    textAreaTarget.text(localStorage.getItem(`btn${i}text`));
}