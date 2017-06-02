$(document).ready(function () {

    console.log("ready!");


//start page
    $('#start').on('click', function () {

         $(function () {
             $('#hide').removeClass('hidden');
         });
       // $("#start").hide(); //start btn ends and removed and content shows

        runTimer();
    });



//start timer
    var number = 15;
    var intervalId;

    function runTimer() { //do not add timer inside click function - just call it in click function when needed
        intervalId = setInterval(decrement, 1000);
        $("#start").hide();
    }

    function decrement() {
        number--;
        $("#time-left").html("<h2>" + number + "</h2>");

        if (number === 0) {
            stopTimer();
            $("#triviaQuestions").hide();
            results();

        }
    }

    function stopTimer() { //set stop timer in own function then call it in run time function
        clearInterval(intervalId);
    }


//Count answers
    var amountCorrect = 0;
    var amountWrong = 0;
    var unanswered = 3;//pulling up -6 if no answer is selected if unanswered-- fixed but not added another else and adding unanswered -- to each if statement

    $('.submit').on('click', function (event) {

        event.preventDefault();//ALWAYS ADD PREVENT DEFAULT!!!!

        for(var i = 1; i <= 45; i++) {

            var radios = document.getElementsByName("question" + i);

            for(var j = 0; j < radios.length; j++) {
               // console.log(j); - going through each question and pulling index - worked
                var radio = radios[j];
               // console.log(radios[j]); - going though each question and pulling the input - worked

                if(radio.value === "correct" && radio.checked) {
                    amountCorrect++;
                    unanswered --;

                    //not showing up in console log
                } else if (radio.value === "wrong" && radio.checked) {
                    amountWrong++;
                    unanswered --;
                }
            }
        }

         $("#timer").hide();
         $("#time-left").hide();
         $("#triviaQuestions").hide();
         $("#start").hide();

         results();
    });

    function results() {
        $("#correctResult").html(amountCorrect);
        $("#wrongResult").html(amountWrong);
        $("#unansweredResult").html(unanswered);

    }

}); //end of doc ready
console.log("Reminder - change timer to 45 sec");

//having a hard time with getting the answers to stay on the page for more than a millisecond when
// the submit button is push - will stay on the page when the submit button is not push but wont show answers if
//any were selected
//
