$(document).ready(function() {
    var savedSchedule;
    if (localStorage.getItem("savedSchedule") !== undefined) {
        savedSchedule = localStorage.getItem("savedSchedule");
    }

    var currentDate = moment().format('MMMM Do YYYY');
    var currentTime = moment().set('minute', 0).set('second', 0);

    console.log(`Current: ${currentTime}`);

    $("#currentDay").text(currentDate);

    var i = 0;
    $(".time-block").each(function() {
        var timeBlockTime = moment().set('hour', 9 + i).set('minute', 0).set('second', 0);
        console.log(`Card date: ${timeBlockTime}`);

        if (timeBlockTime.isSame(currentTime, 'hour')) {
            $(this).find(".description").addClass("present");
        }
        else if (timeBlockTime.isBefore(currentTime)) {
            $(this).find(".description").addClass("past");
        }
        else if (timeBlockTime.isAfter(currentTime)) {
            $(this).find(".description").addClass("future");
        }

        console.log(`Same as current time? ${timeBlockTime.isSame(currentTime, 'hour')}`);

        i++;
    })

    $(".saveBtn").on("click", function() {

    });
});