function getUserData(input_information){
    var result = null;
    var xhr = new XMLHttpRequest(); 
    var json = JSON.stringify(input_information);
    console.log(json)
    console.log(input_information)
    var url = 'http://localhost:8080/auth/register'
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
            "name": "",
            "email": "",
            "password": "",
            "username": "",
            "mobile": "",
            "description": "" 
        }
        var user_name = document.querySelector('#name').value
        var user_email = document.querySelector('#email').value
        var user_id = document.querySelector('#username').value
        var user_password = document.querySelector('#password').value
        var user_mobile = document.querySelector('#mobile').value
        var user_description = document.querySelector('#description').value

        if(user_name.length>=3 && user_email.length >=3 && user_id.length>=3 && user_password.length >=3 && user_description.length >=3){
           input_information.name = user_name
           input_information.email = user_email
           input_information.password = user_password
           input_information.username = user_id
           input_information.mobile = user_mobile
           input_information.description = user_description
            getUserData(input_information);
        }
        else{
            alert('plz fill form correctly')
        }
    });