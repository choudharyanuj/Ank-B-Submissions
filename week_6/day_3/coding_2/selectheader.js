var output_name = ""
var output_color = ""
var output_fsize = ""
class header {
    constructor(name, color, fsize){
        this.name = name
        this.color = color
        this.fsize = fsize

    }

}

$("#get_name").click(u_name => {
    var name = document.getElementById("name").value;
    if(name==""){
        alert("plz submit name")
    }
    else{
        $("#names").append(`<option>${name}</optopn>`)
     output_name = name
    }
})

$("#get_color").click(u_color => {
    var color = document.getElementById("color").value;
    if(color==""){
        alert("fill color details")
    }
    else{
        $("#colors").append(`<option>${color}</optopn>`)
     output_color = color
    }
})

$("#get_fsize").click(u_fsize => {
  var fsize = document.getElementById("f_size").value;
  if(fsize==""){
    alert("plz fill font_size detail's")
  }
  else{
    $("#fsizes").append(`<option>${fsize}</optopn>`)
    output_fsize = fsize
  }
})

$("#show_details").click(showdetail =>{
    let name = document.getElementById("names").value;
    let color = document.getElementById("colors").value;
    let fsize = document.getElementById("fsizes").value;
    let output = new header(name, color, fsize)
    $("#output").text(output.name)
    $("#output").css("color", output.color)
    $("#output").css("font-size", output_fsize+"px")
})