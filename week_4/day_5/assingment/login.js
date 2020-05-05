function getUserData(input_information){
    var result = null;
    var xhr = new XMLHttpRequest(); 
    var json = JSON.stringify(input_information);
    console.log(json)
    console.log(input_information)
    var url = 'http://localhost:8080/auth/login'
    xhr.open('post', url);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(json)
    xhr.onload = function (){
        if(xhr.status == 200){
            result = xhr.response;
            console.log(result)
            alert("congratulation your form succesfully submited")
        }
        else{
            console.log("Error Code is:" + xhr.status);   
        }
    }
}
var displayBtn = document.querySelector('#submit')
    displayBtn.addEventListener('click',function(){
        var input_information = {
            "username": "",
            "password": "",
        }
        var user_id = document.querySelector('#user').value
        var user_password = document.querySelector('#pass').value

        if(user_id == "masai-school" && user_password == "secret"){
            input_information.username = user_id
            input_information.password = user_password

            getUserData(input_information);
        }
        else{
            alert('plz fill correct username & password')
        }
    });