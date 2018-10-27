    $(document).ready (function(){
        //Function to hide the start button and show Trivia questions
            
        $("#start").click(function(){
            $(this).hide();
            $('.play').show();
            // Change the "display" div to "00:00."
            $("#countDown").text("00:00");
            counter.start();
            pushQuest();

            // prevents the clock from being speed up unnecessarily
        });

        var clockRunning = false;
        var intervalId;


        var counter = {
            time: 30,

            start: function() {
                // Use setInterval to start the count here and set the clock to running.
                if (!clockRunning) {
                intervalId = setInterval(counter.count, 1000);
                clockRunning = true;
                }
            },
            stop: function() {

                // DONE: Use clearInterval to stop the count here and set the clock to not be running.
                clearInterval(intervalId);
                clockRunning = false;
              },
            count: function() {
                // decrement time by 1
                counter.time--;
                // Get the current time, pass that into the counter.timeConverter function,
                //       and save the result in a variable.
                var converted = counter.timeConverter(counter.time);

                // Use the variable we just created to show the converted time in the "display" div.
                $("#countDown").text(converted);
                if (counter.time === 0){
                counter.stop();
                };
            },
            timeConverter: function(t) {

                var minutes = Math.floor(t / 60);
                var seconds = t - (minutes * 60);
            
                if (seconds < 10) {
                seconds = "0" + seconds;
                }
            
                if (minutes === 0) {
                minutes = "00";
                }
                else if (minutes < 10) {
                minutes = "0" + minutes;
                }
            
                return minutes + ":" + seconds;
            }
            };
        $("#Submit").click(function(){
            $('.play').hide();
            $('#results').show();
        });

        var answers = [];
        var questions = [];
        var correct = [];
        var incorrect = [];
        var queryURL = "https://opentdb.com/api.php?amount=5&category=27&difficulty=medium";
    
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
            for (i=0; i < response.results.length; i++){
                questions.push(response.results[i].question);
                console.log(questions);          
            } 
                for (i=0; i < response.results.length; i++){
                    correct.push(response.results[i].correct_answer);
                    console.log(correct);         
                } 
                for (i=0; i < response.results.length; i++){
                    incorrect.push(response.results[i].incorrect_answers);
                    console.log(incorrect);         
                } 
                function combine(){
                    for (j=0; j < incorrect.length+1; j++){
                        answers.push(correct[j]+incorrect[[j]]);
                        answers.math RandomSource
                        console.log(answers);
                    }
                }
            // answers = correct + incorrect;
        });
        function pushQuest(){
            var form = $("<form>");
            for (i=0; i < questions.length; i++){
                var quest = $("<h4>");
                quest.text(questions[i]);
                console.log(quest);
                $("#game").append(quest);
            // for (j=0; j < correct.length; j++){
            //     var ans = $("<input type="radio" name="gender" value="val1"checked>a<br>");
            //     ans.text(questions[j]);
            //     console.log(quest);
            //     $("#game").append(quest);
            // }
        };
    });
    // <div class="pick"> 
    // <input type="radio" name="gender" value="val1" checked>a<br>
    // <input type="radio" name="gender" value="val2">b<br>
    // <input type="radio" name="gender" value="val3">c<br>
    // <input type="radio" name="gender" value="val4">d
    // </div>