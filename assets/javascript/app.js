
$( "#dialog" ).dialog({ autoOpen: false });
var unAns = 0, correctAns = 0, incorrectAns = 0;
$("#btnStart").on("click",function(){
    $(".btn").css("visibility","hidden");    
    $(".questionBank").css("visibility","visible");
    countDown();
});


// $("#btnReset").on("click",function(){
//     reset();
//     $("#btnStart").on("click",function(){
//         $(".questionBank").css("visibility","visible");
//         countDown();
//     });
//     $(".questionBank").css("visibility","hidden");
    
// });

//validate form function
var solution = ["1a", "2a", "3b", "4c"];
function validate() {
    ans1 = 0, ans2 = 0, ans3 = 0, ans4 = 0;
    ans1 = $("[name='q1']:checked").val();
    ans2 = $("[name='q2']:checked").val();
    ans3 = $("[name='q3']:checked").val();
    ans4 = $("[name='q4']:checked").val();
    var ansArray = [ans1, ans2, ans3, ans4];
    for(i=0; i<4; i++) {
        console.log(ans1);
        if(ansArray[i] === solution[i]) {
            correctAns++;
        } else if (ansArray[i] === undefined) {
            unAns++;
        } else {
            incorrectAns++;
        }
    }
    displayResult();
    $("#dialog").on("dialogclose", function(){
        $(".btn").css("visibility","visible");
    });
    reset();
}
//display result function
function displayResult() {
    $(".btn").css("visibility","hidden");    
    $("#dialog").html("<span>Correct: </span>" + correctAns + "<br>" + "<span>Incorrect: </span>" + incorrectAns + "<br>" + "<span>Unanswered: </span>" + unAns)
    $("#dialog").dialog( "open" );    
}

//countdown timer function
var timer;
function countDown(){
    var i = 5;
    timer = setInterval(function(){
        i--;
        $(".alert").html("Time remaining: " + i);
        if(i == 0) {
        clearTimeout(timer);
        validate();
        }
    },1000);
}

// reset function
function reset() { 
    clearTimeout(timer);
    unAns = 0, correctAns = 0, incorrectAns = 0;
    ans1 = 0, ans2 = 0, ans3 = 0, ans4 = 0;
    $("[type='radio']:checked").prop("checked", false);
    $(".questionBank").css("visibility","hidden");
}