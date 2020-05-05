var os_information = [];
// var get_details = "";
function getUserData(user_id){
    var result = null;
    var xhr = new XMLHttpRequest(); 
    var url = 'http://localhost:8080/codenames/'
             +user_id
    xhr.open('GET', url); 
    xhr.send()
    xhr.onload = function (){
      if(xhr.status == 200){
        result = xhr.response;
        console.log(result)
        var output = JSON.parse(result)
        os_information.push(output)
        printUserData(user_id)
    }
    else{
        console.log("Error Code is:" + xhr.status);
    }
}
}

var printUserData = function(user_id){
    var list = document.getElementById("delet_p");
    while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
    }
    var body = document.querySelector('.body');
    var display = document.createElement('p');
    var store_data = []
    if(user_id == "select"){ 
        display.textContent = 'Error! No user data received or invalid request!';
    }
    else{
        os_information.map(function(name) {
            if(name.os=="undefined"){
                display.textContent =null
            }
            else{
            display.textContent = name.os
            store_data = name.codenames
            body.append(display);
            }
        })
    }

    if(store_data.length != 0){
        store_data.map(function(version) {
            console.log(version)
            var display_version = document.createElement('p');
            var display_name = document.createElement('p');
            display_version.textContent = version.version
            display_name.textContent = version.name
            body.append(display_name)
            body.append(display_version);
        })
    }
    else{
        var display_null = document.createElement('p');
        display_null.textContent = null
        body.append(display_null)
    }
  }
  
  var displayBtn = document.querySelector('#submit')
  displayBtn.addEventListener('click',function(){
    var user_id = document.querySelector('#os').value
    getUserData(user_id);
  });
