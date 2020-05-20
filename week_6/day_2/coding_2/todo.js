var all_item = [];
var task_done = [];

$("#add_item").click(add_item =>{
    var item = $("#user_input").val();
    all_item.push(item);
    $("#add_item").val("")
})

$("#all_item").click(show_item =>{
    $("li").remove();
    $("hr").remove();
    for(var i=0; i<all_item.length; i++){
        $("#list").append("<li></li>")
        $("li:last").attr ("value","")
        $("li:last").append("<input></input>")
        $("input:last").attr("type","checkbox")
        $("input:last").attr("id",all_item[i])
        $("input:last").attr("value", all_item[i])
        $("li:last").append("<p></p>")
        $("p:last").attr("id", all_item[i])
        $("p:last").text(all_item[i])
        $("#list").append("<hr>")
        
    }
})

$("#item_taken").click(complite_work =>{
    for(var i=0; i<all_item.length; i++){
        var checkbox = document.getElementById(all_item[i])
        if(checkbox.checked == true){
            task_done.push(all_item[i])
            all_item.pop(all_item[i])
            console.log(all_item)
            $("li").remove();
            $("hr").remove();
        }
        else{

        }
    }

    for(var i=0; i<all_item.length; i++){
        $("#list").append("<li></li>")
        $("li:last").attr ("value","")
        $("li:last").append("<input></input>")
        $("input:last").attr("type","checkbox")
        $("input:last").attr("id",all_item[i])
        $("input:last").attr("value", all_item[i])
        $("li:last").append("<p></p>")
        $("p:last").attr("id", all_item[i])
        $("p:last").text(all_item[i])
        $("#list").append("<hr>")
        console.log(task_done)
    }
});

$("#task_done").click(show_complited_task =>{
    $("h5").remove();
    $("hr").remove();
    for(var i=0; i<task_done.length; i++){
        $("#show_output").append("<h5></h5>")
        $("h5:last").attr ("value","")
        $("h5:last").append("<input></input>")
        $("input:last").attr("type","checkbox")
        $("input:last").attr("id",task_done[i])
        $("input:last").attr("value", task_done[i])
        $("h5:last").append("<p></p>")
        $("p:last").attr("id", task_done[i])
        $("p:last").text(task_done[i])
        $("#show_output").append("<hr>")
    }
})
$("#delet_data").click(del =>{
    for(var i=0; i<task_done.length; i++){
        var checkbox = document.getElementById(task_done[i])
        if(checkbox.checked == true){
            task_done.pop(task_done[i])
            console.log(task_done)
            $("h5").remove();
            $("hr").remove();
        }
        else{

        }
    }

    for(var i=0; i<task_done.length; i++){
        $("#show_output").append("<li></li>")
        $("li:last").attr ("value","")
        $("li:last").append("<input></input>")  
        $("input:last").attr("type","checkbox")
        $("input:last").attr("id",task_done[i])
        $("input:last").attr("value", task_done[i])
        $("li:last").append("<p></p>")
        $("p:last").attr("id", task_done[i])
        $("p:last").text(task_done[i])
        $("#output").append("<hr>")
        console.log(task_done)
    }
});