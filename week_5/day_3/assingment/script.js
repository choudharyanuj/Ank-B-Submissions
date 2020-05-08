var store = [];
function getUserData(user_id){
    var result = null;
    var user_number = ''
    var xhr = new XMLHttpRequest(); 
    var url = 'https://hp-api.herokuapp.com/api/characters'

    xhr.open('GET', url); 
    xhr.send()
    console.log(url)
    xhr.onload = function (){
        if(xhr.status == 200){
            result = xhr.response;
            var output = JSON.parse(result)
            store.push(output)
            // output.map(function (e){
            //     user_number = e.name
            //     store.push(user_number)
            // })
            // getwoied(user_number,date);
            console.log(output[0].name)
            $("#charechter").click(function(){
            $("#harry_potter").attr("src","http://hp-api.herokuapp.com/images/harry.jpg")})
            document.getElementById('hp_n').innerHTML = "Name:" + "" + output[0].name
            document.getElementById('hp_a').innerHTML = "Actor" + "" + output[0].actor
            document.getElementById('hp_d').innerHTML = "D.O.B" + "" + output[0].dateOfBirth
            document.getElementById('hp_g').innerHTML = "Gendar" + "" + output[0].gender
            document.getElementById('hp_an').innerHTML = "Ancestry" + "" + output[0].ancestry
            document.getElementById('hp_h').innerHTML = "House" + "" +output[0].house
        }
    }
    console.log(store)
    
}

function getwoied(user_number,date){
    var result = null;
    var xhr = new XMLHttpRequest(); 
    var url = 'https://www.metaweather.com/api/location/'
                +user_number+'/'+date
    xhr.open('GET', url); 
    xhr.send()
    console.log(url)
    xhr.onload = function (){
        if(xhr.status == 200){
            result = xhr.response;
            var output = JSON.parse(result)
            
            document.getElementById('temp').innerHTML=output['1'].humidity+"C"
            document.getElementById('min_max_temp').innerHTML="MIN:"+output['1'].min_temp+"  "+"MAX:" +output['1'].max_temp
            document.getElementById('hum').innerHTML="Humidity"+output['1'].predictability+"%"
            document.getElementById('pre').innerHTML="pressure:"
            document.getElementById('status').innerHTML=output['1'].weather_state_name
            document.getElementById('wind').innerHTML="wind"
            document.getElementById('W_value').innerHTML=output['1'].wind_speed+"mb"
            document.getElementById('W_deg').innerHTML="Deg:"+output['1'].wind_direction
        }
    }
}
 
  var displayBtn = document.querySelector('#charechter')
  displayBtn.addEventListener('click',function(){
    var user_id = document.querySelector('#charechter').value
    // var date = document.getElementById('date').value
    getUserData(user_id);
  });
