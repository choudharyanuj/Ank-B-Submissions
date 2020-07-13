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
     output_name = name
    }
})

$("#get_color").click(u_color => {
    var color = document.getElementById("color").value;
    if(color==""){
        alert("fill color details")
    }
    else{
     output_color = color
    }
})

$("#get_fsize").click(u_fsize => {
  var fsize = document.getElementById("f_size").value;
  if(fsize==""){
    alert("plz fill font_size detail's")
  }
  else{
    output_fsize = fsize
  }
})

$("#show_details").click(showdetail =>{
    var output = new header(output_name, output_color, output_fsize)
    $("#output").text(output.name)
    $("#output").css("color", output.color)
    $("#output").css("font-size", output_fsize+"px")
})