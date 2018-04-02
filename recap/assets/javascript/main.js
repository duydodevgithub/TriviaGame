function getAns() {
    var ans1 = $("[name = 'q1']:checked").val();
    var ans2 = $("[name = 'q2']:checked").val();    
    console.log([ans1, ans2]);
}

$("button").on("click", getAns);