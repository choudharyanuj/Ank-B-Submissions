var milisecond
var second
var minutes
var hour
var count = 0
var count_second = 0
var count_minutes = 0
var count_hour = 0
var play = 

$("#start").click (start => {

    milisecond = setInterval( beigning =>{
        count++
        if(count == 1000){
            count = 0
        }
        $("#milli_second").text(count);
    }, 0)
   

    second = setInterval( beigning =>{
        count_second++
        if(count_second == 60){
            count_second = 0
        }
        $("#second").text(count_second);
    }, 1000)

    minutes = setInterval( beigning =>{
        count_minutes++
        if(count_minutes == 60){
            count_minutes = 0
        }
        $("#minutes").text(count_minutes);
    }, 60000)

    hour = setInterval( beigning =>{
        count_hour++
        $("#hour").text(count_hour);
    }, 360000)

});

$("#stop").click (pause => {
    clearInterval(milisecond)
    clearInterval(second)
    clearInterval(minutes)
    clearInterval(hour)
    
});

$("#split").click (split => {
    $("#output").append("<div></div>")
    $("div:last").attr("class","d-flex flex-row justify-content-around")

    $("div:last").append ("<p></p>")
    $("p:last").text("Split")
    
    $("div:last").append ("<div></div>")
    $("div:last").attr("class","d-flex flex-row")

    $("div:last").append ("<p></p>")
    $("p:last").text (count_hour)

    $("div:last").append ("<p></p>")
    $("p:last").text (":")

    $("div:last").append ("<p></p>")
    $("p:last").text (count_minutes)

    $("div:last").append ("<p></p>")
    $("p:last").text (":")


    $("div:last").append ("<p></p>")
    $("p:last").text (count_second)

    $("div:last").append ("<p></p>")
    $("p:last").text (":")

    $("div:last").append ("<p></p>")
    $("p:last").text (count)
    
});

$("#reset").click (reset =>{
    clearInterval(milisecond)
    clearInterval(second)
    clearInterval(minutes)
    clearInterval(hour)

    $("#milli_second").text("00");
    $("#second").text("00");
    $("#minutes").text("00");
    $("#hour").text("00");

    count = 0;
    count_second = 0;
    count_minutes = 0;
    count_hour = 0;
});