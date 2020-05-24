$(document).ready(function() {
    var scheduleList;
    if (localStorage.getItem("savedSchedule") == null) {
        scheduleList = {9:"", 10:"", 11:"", 12:"", 13:"", 14:"", 15:"", 16:"", 17:""};
    }
    else {
        scheduleList = JSON.parse(localStorage.getItem("savedSchedule"));
    }

    var currentDate = moment().format('MMMM Do YYYY');
    var currentTime = moment().set('minute', 0).set('second', 0);

    console.log(`Current: ${currentTime}`);

    $("#currentDay").text(currentDate);

    var i = 0;
    $(".time-block").each(function() {
        var hourNum = 9 + i;
        var timeBlockTime = moment().set('hour', hourNum).set('minute', 0).set('second', 0);
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

        var importedInput = scheduleList[hourNum];
        console.log("Imported note: " + importedInput);

        $(this).find(".notes").val(importedInput);
        i++;
    })

    $(".saveBtn").on("click", function() {
        var input = $(this).parent().siblings(".description").find(".notes").val();
        console.log(input);

        var hour = parseInt($(this).parents(".time-block").find(".hour").attr("hour"));
        console.log(hour);

        scheduleList[hour] = input;

        console.log(scheduleList);

        localStorage.setItem("savedSchedule", JSON.stringify(scheduleList));
    });
});