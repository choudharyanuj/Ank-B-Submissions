$("#charechter").click(function(){
    var user_id = document.querySelector('#charechter').value
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
            $("#harry_potter").attr("src","http://hp-api.herokuapp.com/images/harry.jpg")
            $("#harry_potter").css({"width":"300px", "height":"300px"})
            document.getElementById('hp_n').innerHTML = "Name" + ":-" + output[0].name
            document.getElementById('hp_a').innerHTML = "Actor" + ":-" + output[0].actor
            document.getElementById('hp_d').innerHTML = "D.O.B" + ":-" + output[0].dateOfBirth
            document.getElementById('hp_g').innerHTML = "Gendar" + ":-" + output[0].gender
            document.getElementById('hp_an').innerHTML = "Ancestry" + ":-" + output[0].ancestry
            document.getElementById('hp_h').innerHTML = "House" + ":-" +output[0].house

            $("#hermione_granger").attr("src","http://hp-api.herokuapp.com/images/hermione.jpeg")
            $("#hermione_granger").css({"width":"300px", "height":"300px"})
            document.getElementById('hg_n').innerHTML = "Name" + ":-" + output[1].name
            document.getElementById('hg_a').innerHTML = "Actor" + ":-" + output[1].actor
            document.getElementById('hg_d').innerHTML = "D.O.B" + ":-" + output[1].dateOfBirth
            document.getElementById('hg_g').innerHTML = "Gendar" + ":-" + output[1].gender
            document.getElementById('hg_an').innerHTML = "Ancestry" + ":-" + output[1].ancestry
            document.getElementById('hg_h').innerHTML = "House" + ":-" +output[1].house

            $("#ron_weasley").attr("src","http://hp-api.herokuapp.com/images/ron.jpg")
            $("#ron_weasley").css({"width":"300px", "height":"300px"})
            document.getElementById('rw_n').innerHTML = "Name" + ":-" + output[2].name
            document.getElementById('rw_a').innerHTML = "Actor" + ":-" + output[2].actor
            document.getElementById('rw_d').innerHTML = "D.O.B" + ":-" + output[2].dateOfBirth
            document.getElementById('rw_g').innerHTML = "Gendar" + ":-" + output[2].gender
            document.getElementById('rw_an').innerHTML = "Ancestry" + ":-" + output[2].ancestry
            document.getElementById('rw_h').innerHTML = "House" + ":-" +output[2].house

            $("#draco_malfoy").attr("src","https://hp-api.herokuapp.com/images/draco.jpg")
            $("#draco_malfoy").css({"width":"300px", "height":"300px"})
            document.getElementById('dm_n').innerHTML = "Name" + ":-" + output[3].name
            document.getElementById('dm_a').innerHTML = "Actor" + ":-" + output[3].actor
            document.getElementById('dm_d').innerHTML = "D.O.B" + ":-" + output[3].dateOfBirth
            document.getElementById('dm_g').innerHTML = "Gendar" + ":-" + output[3].gender
            document.getElementById('dm_an').innerHTML = "Ancestry" + ":-" + output[3].ancestry
            document.getElementById('dm_h').innerHTML = "House" + ":-" +output[3].house

            $("#minerva_mcgonagall").attr("src","http://hp-api.herokuapp.com/images/mcgonagall.jpg")
            $("#minerva_mcgonagall").css({"width":"300px", "height":"300px"})
            document.getElementById('mm_n').innerHTML = "Name" + ":-" + output[4].name
            document.getElementById('mm_a').innerHTML = "Actor" + ":-" + output[4].actor
            document.getElementById('mm_d').innerHTML = "D.O.B" + ":-" + output[4].dateOfBirth
            document.getElementById('mm_g').innerHTML = "Gendar" + ":-" + output[4].gender
            document.getElementById('mm_an').innerHTML = "Ancestry" + ":-" + output[4].ancestry
            document.getElementById('mm_h').innerHTML = "House" + ":-" +output[4].house

            $("#cedric_diggory").attr("src","http://hp-api.herokuapp.com/images/cedric.png")
            $("#cedric_diggory").css({"width":"300px", "height":"300px"})
            document.getElementById('cd_n').innerHTML = "Name" + ":-" + output[5].name
            document.getElementById('cd_a').innerHTML = "Actor" + ":-" + output[5].actor
            document.getElementById('cd_d').innerHTML = "D.O.B" + ":-" + output[5].dateOfBirth
            document.getElementById('cd_g').innerHTML = "Gendar" + ":-" + output[5].gender
            document.getElementById('cd_an').innerHTML = "Ancestry" + ":-" + output[5].ancestry
            document.getElementById('cd_h').innerHTML = "House" + ":-" +output[5].house



            console.log(output)
        }
    }   
})