$("#get_value").click ( op => {
    let operation = $("#operation").val();
    let num1 = $("#num1").val();
    let num2 = $("#num2").val  ();
        final_op(operation, num1, num2);
   
})

final_op =(operation, num1, num2) =>{
        console.log(operation, num1, num2)
    if(operation=="select"){
        const result = "you have not select operation" 
        $("#output").text(`your calculation is = ${result}`)
    }
    else if(operation==="add"){
        let num3 = Number(num1) + Number(num2)
        console.log(num3)
        $("#output").text(`your calculation is = ${num3}`)
    }
    else if(operation==="subtraction"){
        let num3 = Number(num1) - Number(num2)
        console.log(num3)
        $("#output").text(`your calculation is = ${num3}`)
    }
    else if(operation==="multiplication"){
        let num3 = Number(num1) * Number(num2)
        console.log(num3)
        $("#output").text(`your calculation is = ${num3}`)
    }
    else if(operation==="division"){
        let num3 = Number(num1) / Number(num2)
        console.log(num3)
        $("#output").text(`your calculation is = ${num3}`)
    }
    
};