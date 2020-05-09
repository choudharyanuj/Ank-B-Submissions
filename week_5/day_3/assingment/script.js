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
            $("#harry_potter").attr("src",output[0].image)
            $("#harry_potter").css({"width":"300px", "height":"300px"})
            $('#hp_n').text("Name" + ":-" + output[0].name)
            $('#hp_a').text("Actor" + ":-" + output[0].actor)
            $('#hp_d').text("D.O.B" + ":-" + output[0].dateOfBirth)
            $('#hp_g').text("Gendar" + ":-" + output[0].gender)
            $('#hp_an').text("Ancestry" + ":-" + output[0].ancestry)
            $('#hp_h').text("House" + ":-" +output[0].house)

            $("#hermione_granger").attr("src", output[1].image)
            $("#hermione_granger").css({"width":"300px", "height":"300px"})
            $('#hg_n').text("Name" + ":-" + output[1].name)
            $('#hg_a').text("Actor" + ":-" + output[1].actor)
            $('#hg_d').text("D.O.B" + ":-" + output[1].dateOfBirth)
            $('#hg_g').text("Gendar" + ":-" + output[1].gender)
            $('#hg_an').text("Ancestry" + ":-" + output[1].ancestry)
            $('#hg_h').text("House" + ":-" +output[1].house)

            $("#ron_weasley").attr("src", output[2].image)
            $("#ron_weasley").css({"width":"300px", "height":"300px"})
            $('#rw_n').text("Name" + ":-" + output[2].name)
            $('#rw_a').text("Actor" + ":-" + output[2].actor)
            $('#rw_d').text("D.O.B" + ":-" + output[2].dateOfBirth)
            $('#rw_g').text("Gendar" + ":-" + output[2].gender)
            $('#rw_an').text("Ancestry" + ":-" + output[2].ancestry)
            $('#rw_h').text("House" + ":-" +output[2].house)

            $("#draco_malfoy").attr("src", output[3].image)
            $("#draco_malfoy").css({"width":"300px", "height":"300px"})
            $('#dm_n').text("Name" + ":-" + output[3].name)
            $('#dm_a').text("Actor" + ":-" + output[3].actor)
            $('#dm_d').text("D.O.B" + ":-" + output[3].dateOfBirth)
            $('#dm_g').text("Gendar" + ":-" + output[3].gender)
            $('#dm_an').text("Ancestry" + ":-" + output[3].ancestry)
            $('#dm_h').text("House" + ":-" +output[3].house)

            $("#minerva_mcgonagall").attr("src", output[4].image)
            $("#minerva_mcgonagall").css({"width":"300px", "height":"300px"})
            $('#mm_n').text("Name" + ":-" + output[4].name)
            $('#mm_a').text("Actor" + ":-" + output[4].actor)
            $('#mm_d').text("D.O.B" + ":-" + output[4].dateOfBirth)
            $('#mm_g').text("Gendar" + ":-" + output[4].gender)
            $('#mm_an').text("Ancestry" + ":-" + output[4].ancestry)
            $('#mm_h').text("House" + ":-" +output[4].house)

            $("#cedric_diggory").attr("src", output[5].image)
            $("#cedric_diggory").css({"width":"300px", "height":"300px"})
            $('#cd_n').text("Name" + ":-" + output[5].name)
            $('#cd_a').text("Actor" + ":-" + output[5].actor)
            $('#cd_d').text("D.O.B" + ":-" + output[5].dateOfBirth)
            $('#cd_g').text("Gendar" + ":-" + output[5].gender)
            $('#cd_an').text("Ancestry" + ":-" + output[5].ancestry)
            $('#cd_h').text("House" + ":-" +output[5].house)

        }
    }   
})
$("#student").click(function(){
    var user_id = document.querySelector('#charechter').value
    var result = null;
    var user_number = ''
    var xhr = new XMLHttpRequest(); 
    var url = 'https://hp-api.herokuapp.com/api/characters/students'

    xhr.open('GET', url); 
    xhr.send()
    console.log(url)
    xhr.onload = function (){
        if(xhr.status == 200){
            result = xhr.response;
            var output = JSON.parse(result)
            $("#harry_potter").attr("src", output[0].image)
            $("#harry_potter").css({"width":"300px", "height":"300px"})
            $('#hp_n').text("Name" + ":-" + output[0].name)
            $('#hp_a').text("Actor" + ":-" + output[0].actor)
            $('#hp_d').text("D.O.B" + ":-" + output[0].dateOfBirth)
            $('#hp_g').text("Gendar" + ":-" + output[0].gender)
            $('#hp_an').text("Ancestry" + ":-" + output[0].ancestry)
            $('#hp_h').text("House" + ":-" +output[0].house)

            $("#hermione_granger").attr("src", output[1].image)
            $("#hermione_granger").css({"width":"300px", "height":"300px"})
            $('#hg_n').text("Name" + ":-" + output[1].name)
            $('#hg_a').text("Actor" + ":-" + output[1].actor)
            $('#hg_d').text("D.O.B" + ":-" + output[1].dateOfBirth)
            $('#hg_g').text("Gendar" + ":-" + output[1].gender)
            $('#hg_an').text("Ancestry" + ":-" + output[1].ancestry)
            $('#hg_h').text("House" + ":-" +output[1].house)

            $("#ron_weasley").attr("src", output[2].image)
            $("#ron_weasley").css({"width":"300px", "height":"300px"})
            $('#rw_n').text("Name" + ":-" + output[2].name)
            $('#rw_a').text("Actor" + ":-" + output[2].actor)
            $('#rw_d').text("D.O.B" + ":-" + output[2].dateOfBirth)
            $('#rw_g').text("Gendar" + ":-" + output[2].gender)
            $('#rw_an').text("Ancestry" + ":-" + output[2].ancestry)
            $('#rw_h').text("House" + ":-" +output[2].house)

            $("#draco_malfoy").attr("src", output[3].image)
            $("#draco_malfoy").css({"width":"300px", "height":"300px"})
            $('#dm_n').text("Name" + ":-" + output[3].name)
            $('#dm_a').text("Actor" + ":-" + output[3].actor)
            $('#dm_d').text("D.O.B" + ":-" + output[3].dateOfBirth)
            $('#dm_g').text("Gendar" + ":-" + output[3].gender)
            $('#dm_an').text("Ancestry" + ":-" + output[3].ancestry)
            $('#dm_h').text("House" + ":-" +output[3].house)

            $("#minerva_mcgonagall").attr("src",output[4].image)
            $("#minerva_mcgonagall").css({"width":"300px", "height":"300px"})
            $('#mm_n').text("Name" + ":-" + output[4].name)
            $('#mm_a').text("Actor" + ":-" + output[4].actor)
            $('#mm_d').text("D.O.B" + ":-" + output[4].dateOfBirth)
            $('#mm_g').text("Gendar" + ":-" + output[4].gender)
            $('#mm_an').text("Ancestry" + ":-" + output[4].ancestry)
            $('#mm_h').text("House" + ":-" +output[4].house)

            $("#cedric_diggory").attr("src", output[5].image)
            $("#cedric_diggory").css({"width":"300px", "height":"300px"})
            $('#cd_n').text("Name" + ":-" + output[5].name)
            $('#cd_a').text("Actor" + ":-" + output[5].actor)
            $('#cd_d').text("D.O.B" + ":-" + output[5].dateOfBirth)
            $('#cd_g').text("Gendar" + ":-" + output[5].gender)
            $('#cd_an').text("Ancestry" + ":-" + output[5].ancestry)
            $('#cd_h').text("House" + ":-" +output[5].house)
        }
    }   
})
$("#staff").click(function(){
    var user_id = document.querySelector('#charechter').value
    var result = null;
    var user_number = ''
    var xhr = new XMLHttpRequest(); 
    var url = 'https://hp-api.herokuapp.com/api/characters/staff'

    xhr.open('GET', url); 
    xhr.send()
    console.log(url)
    xhr.onload = function (){
        if(xhr.status == 200){
            result = xhr.response;
            var output = JSON.parse(result)
            $("#harry_potter").attr("src",output[0].image)
            $("#harry_potter").css({"width":"300px", "height":"300px"})
            $('#hp_n').text("Name" + ":-" + output[0].name)
            $('#hp_a').text("Actor" + ":-" + output[0].actor)
            $('#hp_d').text("D.O.B" + ":-" + output[0].dateOfBirth)
            $('#hp_g').text("Gendar" + ":-" + output[0].gender)
            $('#hp_an').text("Ancestry" + ":-" + output[0].ancestry)
            $('#hp_h').text("House" + ":-" +output[0].house)

            $("#hermione_granger").attr("src",output[1].image)
            $("#hermione_granger").css({"width":"300px", "height":"300px"})
            $('#hg_n').text("Name" + ":-" + output[1].name)
            $('#hg_a').text("Actor" + ":-" + output[1].actor)
            $('#hg_d').text("D.O.B" + ":-" + output[1].dateOfBirth)
            $('#hg_g').text("Gendar" + ":-" + output[1].gender)
            $('#hg_an').text("Ancestry" + ":-" + output[1].ancestry)
            $('#hg_h').text("House" + ":-" +output[1].house)

            $("#ron_weasley").attr("src",output[2].image)
            $("#ron_weasley").css({"width":"300px", "height":"300px"})
            $('#rw_n').text("Name" + ":-" + output[2].name)
            $('#rw_a').text("Actor" + ":-" + output[2].actor)
            $('#rw_d').text("D.O.B" + ":-" + output[2].dateOfBirth)
            $('#rw_g').text("Gendar" + ":-" + output[2].gender)
            $('#rw_an').text("Ancestry" + ":-" + output[2].ancestry)
            $('#rw_h').text("House" + ":-" +output[2].house)

            $("#draco_malfoy").attr("src", output[3].image)
            $("#draco_malfoy").css({"width":"300px", "height":"300px"})
            $('#dm_n').text("Name" + ":-" + output[3].name)
            $('#dm_a').text("Actor" + ":-" + output[3].actor)
            $('#dm_d').text("D.O.B" + ":-" + output[3].dateOfBirth)
            $('#dm_g').text("Gendar" + ":-" + output[3].gender)
            $('#dm_an').text("Ancestry" + ":-" + output[3].ancestry)
            $('#dm_h').text("House" + ":-" +output[3].house)

            $("#minerva_mcgonagall").attr("src", output[4].image)
            $("#minerva_mcgonagall").css({"width":"300px", "height":"300px"})
            $('#mm_n').text("Name" + ":-" + output[4].name)
            $('#mm_a').text("Actor" + ":-" + output[4].actor)
            $('#mm_d').text("D.O.B" + ":-" + output[4].dateOfBirth)
            $('#mm_g').text("Gendar" + ":-" + output[4].gender)
            $('#mm_an').text("Ancestry" + ":-" + output[4].ancestry)
            $('#mm_h').text("House" + ":-" +output[4].house)

            $("#cedric_diggory").attr("src", output[5].image)
            $("#cedric_diggory").css({"width":"300px", "height":"300px"})
            $('#cd_n').text("Name" + ":-" + output[5].name)
            $('#cd_a').text("Actor" + ":-" + output[5].actor)
            $('#cd_d').text("D.O.B" + ":-" + output[5].dateOfBirth)
            $('#cd_g').text("Gendar" + ":-" + output[5].gender)
            $('#cd_an').text("Ancestry" + ":-" + output[5].ancestry)
            $('#cd_h').text("House" + ":-" +output[5].house)
            console.log(output)
        }
    }   
})
$("#house").click(function(){
    var user_id = document.querySelector('#charechter').value
    var result = null;
    var user_number = ''
    var xhr = new XMLHttpRequest(); 
    var url = 'https://hp-api.herokuapp.com/api/characters/house/gryffindor'

    xhr.open('GET', url); 
    xhr.send()
    console.log(url)
    xhr.onload = function (){
        if(xhr.status == 200){
            result = xhr.response;
            var output = JSON.parse(result)
            $("#harry_potter").attr("src",output[0].image)
            $("#harry_potter").css({"width":"300px", "height":"300px"})
            $('#hp_n').text("Name" + ":-" + output[0].name)
            $('#hp_a').text("Actor" + ":-" + output[0].actor)
            $('#hp_d').text("D.O.B" + ":-" + output[0].dateOfBirth)
            $('#hp_g').text("Gendar" + ":-" + output[0].gender)
            $('#hp_an').text("Ancestry" + ":-" + output[0].ancestry)
            $('#hp_h').text("House" + ":-" +output[0].house)

            $("#hermione_granger").attr("src",output[1].image)
            $("#hermione_granger").css({"width":"300px", "height":"300px"})
            $('#hg_n').text("Name" + ":-" + output[1].name)
            $('#hg_a').text("Actor" + ":-" + output[1].actor)
            $('#hg_d').text("D.O.B" + ":-" + output[1].dateOfBirth)
            $('#hg_g').text("Gendar" + ":-" + output[1].gender)
            $('#hg_an').text("Ancestry" + ":-" + output[1].ancestry)
            $('#hg_h').text("House" + ":-" +output[1].house)

            $("#ron_weasley").attr("src",output[2].image)
            $("#ron_weasley").css({"width":"300px", "height":"300px"})
            $('#rw_n').text("Name" + ":-" + output[2].name)
            $('#rw_a').text("Actor" + ":-" + output[2].actor)
            $('#rw_d').text("D.O.B" + ":-" + output[2].dateOfBirth)
            $('#rw_g').text("Gendar" + ":-" + output[2].gender)
            $('#rw_an').text("Ancestry" + ":-" + output[2].ancestry)
            $('#rw_h').text("House" + ":-" +output[2].house)

            $("#draco_malfoy").attr("src", output[3].image)
            $("#draco_malfoy").css({"width":"300px", "height":"300px"})
            $('#dm_n').text("Name" + ":-" + output[3].name)
            $('#dm_a').text("Actor" + ":-" + output[3].actor)
            $('#dm_d').text("D.O.B" + ":-" + output[3].dateOfBirth)
            $('#dm_g').text("Gendar" + ":-" + output[3].gender)
            $('#dm_an').text("Ancestry" + ":-" + output[3].ancestry)
            $('#dm_h').text("House" + ":-" +output[3].house)

            $("#minerva_mcgonagall").attr("src", output[4].image)
            $("#minerva_mcgonagall").css({"width":"300px", "height":"300px"})
            $('#mm_n').text("Name" + ":-" + output[4].name)
            $('#mm_a').text("Actor" + ":-" + output[4].actor)
            $('#mm_d').text("D.O.B" + ":-" + output[4].dateOfBirth)
            $('#mm_g').text("Gendar" + ":-" + output[4].gender)
            $('#mm_an').text("Ancestry" + ":-" + output[4].ancestry)
            $('#mm_h').text("House" + ":-" +output[4].house)

            $("#cedric_diggory").attr("src", output[5].image)
            $("#cedric_diggory").css({"width":"300px", "height":"300px"})
            $('#cd_n').text("Name" + ":-" + output[5].name)
            $('#cd_a').text("Actor" + ":-" + output[5].actor)
            $('#cd_d').text("D.O.B" + ":-" + output[5].dateOfBirth)
            $('#cd_g').text("Gendar" + ":-" + output[5].gender)
            $('#cd_an').text("Ancestry" + ":-" + output[5].ancestry)
            $('#cd_h').text("House" + ":-" +output[5].house)
            console.log(output)
        }
    }   
})