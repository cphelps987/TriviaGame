$(document).ready(function () {

    console.log("ready!");


//start
    $('#start').on('click', function () {

        $(function () {
            $('#hide').removeClass('hidden');
        });
        $("#start").hide(); //start btn ends and removed and content shows

        runTimer();
    });

    var number = 5;
    var intervalId;


    function runTimer() { //do not add timer inside click function - just call it in click function when needed
        intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
        number--;
        $("#time-left").html("<h2>" + number + "</h2>");

        if (number === 0) {
            stopTimer();
        }
    }

    function stopTimer() { //set stop timer in own function then call it in run time function
        clearInterval(intervalId);
    }

   // $("#submit").on("click", function () {
    //     validate();
    // });
    //
      //   var amoutCorrect = 0;
    //   /*  var wrong = 0;
    //     var unanswered = 3 - (correct - wrong);*/

    var amountCorrect = 0;
    var amountWrong = 0;


    for(var i = 1; i <= 45; i++) {

        var radios = document.getElementsByName("question" + i);

        for(var j = 0; j < radios.length; j++) {
           // console.log(j); - going through each question and pulling index
            var radio = radios[j];
           // console.log(radios[j]); - going though each question and pulling the input

            if(radio.value === "correct" && radio.checked) {
                amountCorrect++;
                console.log("amount correct" + amountCorrect);//not showing up in console log
            } else {
                amountWrong++;
            }
        }
    }


       /* function validate() {

            if (value === correct) {
                correct ++;
                alert("correct");
            }
            else {
                wrong ++;
                alert("wrong");
            }
        }*/



}); //end of doc ready
console.log("change timer to 45 sec");
