var milisecond
var second
var minutes
var hour
var count = 0
var count_second = 0
var count_minutes = 0
var count_hour = 0

$("#submit").click(submit => {
    var user_input = [];
    let user_value = $("#user_value").val().split(":");
    user_input.push(user_value)

    user_input.map((e) => {
        count_second = Number( e[2])
        count_minutes = Number( e[1])
        count_hour = Number( e[0])

        $("#second").text(e[2]);
        $("#minutes").text(e[1]);
        $("#hour").text(e[0]);
        
    })
    
})

$("#start").click (start => {

    if(count_second==0){
        count_minutes = count_minutes - 1
        $("#minutes").text(count_minutes);
        minutes = setInterval( beigning =>{
        count_minutes--
            if(count_minutes ==0){ 
                hour = setInterval( beigning =>{
                    count_hour--
                    $("#hour").text(count_hour);
                }, 360000)
            count_minutes=60
            }
        $("#minutes").text(count_minutes);
        }, 60000)

        count_second = 60
        second = setInterval( beigning =>{
        count_second--
        if(count_second==0){
            count_second = 60
        }
        $("#second").text(count_second);
        }, 1000)
    }
    else{
        second = setInterval( beigning =>{
            count_second--
            if(count_second==0){
                minutes = setInterval( beigning =>{
                    count_minutes--
                    if(count_minutes ==0){
                        count_minutes=60
                        count_hour = count_hour-1
                        hour = setInterval( beigning =>{
                            count_hour--
                            $("#hour").text(count_hour);
                        }, 360000)
                    count_minutes = 60
                    }
                    $("#minutes").text(count_minutes);
                }, 60000)
                count_second = 60
            }
            $("#second").text(count_second);
        }, 1000) 
    }
    
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