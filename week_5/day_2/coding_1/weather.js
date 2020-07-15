function getUserData(user_id,date){
    var result = null;
    var user_number = ''
    var xhr = new XMLHttpRequest(); 
    var url = 'https://www.metaweather.com/api/location/search/?query='
                +user_id
    xhr.open('GET', url); 
    xhr.send()
    console.log(url)
    xhr.onload = function (){
        if(xhr.status == 200){
            result = xhr.response;
            var output = JSON.parse(result)
            output.map(function (e){
                user_number = e.woeid
            })
            getwoied(user_number,date);
        }
    }
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
 
  var displayBtn = document.querySelector('#submit')
  displayBtn.addEventListener('click',function(){
    var user_id = document.querySelector('#search').value
    var date = document.getElementById('date').value
    getUserData(user_id,date);
  });
