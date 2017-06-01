$(document).ready(function () {

    console.log("ready!");



//start
    $('#start').on('click', function() {

        $(function () {
            $('#question').removeClass('hidden');
        });
        $("#start").hide();

       //start btn ends and removed and content

        runTimer();
    });

    var number = 5;
    var intervalId;


    function runTimer() {
        intervalId = setInterval(decrement, 1000);
    }
        function decrement() {
            number--;
            $("#time-left").html("<h2>" + number + "</h2>");

            if (number === 0) {
             stopTimer();
             }
    }

    function stopTimer() {
     clearInterval(intervalId);
     }

    var correct = 0;
    var incorrect = 0;
    var unanswered = 3 - (correct - incorrect);

}); //end of doc ready
