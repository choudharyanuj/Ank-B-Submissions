class input{
    constructor(car_name, car_model, car_speed, car_dist){
        this.car_name = car_name;
        this.car_model = car_model;
        this.car_speed = car_speed;
        this.car_dist = car_dist;
        
    }
}


$("#get_value").click (submit =>{
    let car_name = $("#car_name").val();
    let car_model = $("#car_model").val();
    let car_speed = $("#car_speed").val();

$("#new_input").append("<input></input>")
    $('input:last').attr("id","last")
    $("#last").attr("class","border border-danger mt-3")
    $("#last").attr("placeholder","enter distance that u travelled")
$("#new_input").append("<button>Show Detail's</button>")
    $('button:last').attr("id","show_detail")
    $("#show_detail").attr("class","btn btn-outline-success mt-2")


    console.log("Hell")
    $("#show_detail").click( abc => {
      
        let car_dist = $("#last").val();
    
    
        let output = new input( car_name, car_model, car_speed, car_dist)
        console.log(output)
        
        $("#car_name_output").text ("Car-Name:"+ output.car_name)
        $("#car_model_output").text ("Car-Model:"+ output.car_model)   
        $("#car_speed_output").text ("Maxm-speed:"+ output.car_speed + "km/hr")
        $("#car_dist_output").text ("Distance-covered:"+ output.car_dist + "km")
    }); 
});

