
        var Global_data = [];
        var country_data = {
            Name:"",
            Population: "",
            GDP: "",
            life_exp: "",
            language: [],
        }
        function get_details(){
            country_data.Name = document.getElementById("name").value
            country_data.Population = document.getElementById("population").value
            country_data.GDP = document.getElementById("gdp").value
            country_data.life_exp = document.getElementById("life_exp").value
            var country_language = document.getElementById("language").value
            var lng = country_language.split(",")
            for(var i=0; i<lng.length; i++){
                country_data.language.push(lng[i])
            }
            console.log(country_data)

            var table_main = document.querySelector('.table_inside')
            var creat_tr = document.createElement("tr")
            creat_tr.setAttribute('id','tr_inside')
            table_main.appendChild(creat_tr)

            var table_tr = document.querySelector('#tr_inside')
            var creat_name = document.createElement("td")
            creat_name.textContent = country_data.Name
            table_tr.appendChild(creat_name)

            var creat_population = document.createElement('td')
            creat_population.textContent = country_data.Population
            table_tr.appendChild(creat_population)

            var creat_gdp = document.createElement('td')
            creat_gdp.textContent = country_data.GDP
            table_tr.appendChild(creat_gdp)

            var creat_lyf = document.createElement('td')
            creat_lyf.textContent = country_data.life_exp
            table_tr.appendChild(creat_lyf)

            var creat_lng = document.createElement('td')
            creat_lng.textContent = country_data.language
            table_tr.appendChild(creat_lng)

            Global_data.push(country_data)

            country_data = {
                Name:"",
                Population: "",
                GDP: "",
                life_exp: "",
                language: [],
            };
        
        console.log(Global_data)
        }
        function fillter(){
            var filter_byuser = document.getElementById("filter_input").value

            var population_greater = document.getElementById("population_greater")
            var population_lesser = document.getElementById("population_lesser")
            var lifeexp_equal = document.getElementById("lyfExp_equal")
            var gdp_greater = document.getElementById("gdp_greater")
            var gdp_lesser = document.getElementById("gdp_lesser")
            var languagefilter = document.getElementById("lng_equal")

                if(population_greater.checked){
                    Global_data.map(function(e){
                        if(Number(e.Population) > filter_byuser) {
                            var list = document.getElementById("tr_inside");
                            while (list.hasChildNodes()) {
                            list.removeChild(list.firstChild);
                            }

                            var table_main = document.querySelector('.table_inside')
                            var creat_tr = document.createElement("tr")
                            creat_tr.setAttribute('id','tr_inside')
                            table_main.appendChild(creat_tr)

                            var table_tr = document.querySelector('#tr_inside')
                            var creat_name = document.createElement("td")
                            creat_name.textContent = e.Name
                            table_tr.appendChild(creat_name)

                            var creat_population = document.createElement('td')
                            creat_population.textContent = e.Population
                            table_tr.appendChild(creat_population)

                            var creat_gdp = document.createElement('td')
                            creat_gdp.textContent = e.GDP
                            table_tr.appendChild(creat_gdp)

                            var creat_lyf = document.createElement('td')
                            creat_lyf.textContent = e.life_exp
                            table_tr.appendChild(creat_lyf)

                            var creat_lng = document.createElement('td')
                            creat_lng.textContent = e.language
                            table_tr.appendChild(creat_lng)
                        }
                    })
                }
                else if(population_lesser.checked){
                    Global_data.map(function(e){
                        if(Number(e.Population) < filter_byuser) {
                            var list = document.getElementById("tr_inside");
                            while (list.hasChildNodes()) {
                            list.removeChild(list.firstChild);
                            }

                            var table_main = document.querySelector('.table_inside')
                            var creat_tr = document.createElement("tr")
                            creat_tr.setAttribute('id','tr_inside')
                            table_main.appendChild(creat_tr)

                            var table_tr = document.querySelector('#tr_inside')
                            var creat_name = document.createElement("td")
                            creat_name.textContent = e.Name
                            table_tr.appendChild(creat_name)

                            var creat_population = document.createElement('td')
                            creat_population.textContent = e.Population
                            table_tr.appendChild(creat_population)

                            var creat_gdp = document.createElement('td')
                            creat_gdp.textContent = e.GDP
                            table_tr.appendChild(creat_gdp)

                            var creat_lyf = document.createElement('td')
                            creat_lyf.textContent = e.life_exp
                            table_tr.appendChild(creat_lyf)

                            var creat_lng = document.createElement('td')
                            creat_lng.textContent = e.language
                            table_tr.appendChild(creat_lng)
                        }
                    })
                }
                else if(lifeexp_equal.checked){
                    Global_data.map(function(e){
                        if(Number(e.life_exp) == filter_byuser) {
                            var list = document.getElementById("tr_inside");
                            while (list.hasChildNodes()) {
                            list.removeChild(list.firstChild);
                            }

                            var table_main = document.querySelector('.table_inside')
                            var creat_tr = document.createElement("tr")
                            creat_tr.setAttribute('id','tr_inside')
                            table_main.appendChild(creat_tr)

                            var table_tr = document.querySelector('#tr_inside')
                            var creat_name = document.createElement("td")
                            creat_name.textContent = e.Name
                            table_tr.appendChild(creat_name)

                            var creat_population = document.createElement('td')
                            creat_population.textContent = e.Population
                            table_tr.appendChild(creat_population)

                            var creat_gdp = document.createElement('td')
                            creat_gdp.textContent = e.GDP
                            table_tr.appendChild(creat_gdp)

                            var creat_lyf = document.createElement('td')
                            creat_lyf.textContent = e.life_exp
                            table_tr.appendChild(creat_lyf)

                            var creat_lng = document.createElement('td')
                            creat_lng.textContent = e.language
                            table_tr.appendChild(creat_lng)
                        }
                    })
                }
                else if(gdp_greater.checked){
                    Global_data.map(function(e){
                        if(Number(e.GDP) > filter_byuser) {
                            var list = document.getElementById("tr_inside");
                            while (list.hasChildNodes()) {
                            list.removeChild(list.firstChild);
                            }

                            var table_main = document.querySelector('.table_inside')
                            var creat_tr = document.createElement("tr")
                            creat_tr.setAttribute('id','tr_inside')
                            table_main.appendChild(creat_tr)

                            var table_tr = document.querySelector('#tr_inside')
                            var creat_name = document.createElement("td")
                            creat_name.textContent = e.Name
                            table_tr.appendChild(creat_name)

                            var creat_population = document.createElement('td')
                            creat_population.textContent = e.Population
                            table_tr.appendChild(creat_population)

                            var creat_gdp = document.createElement('td')
                            creat_gdp.textContent = e.GDP
                            table_tr.appendChild(creat_gdp)

                            var creat_lyf = document.createElement('td')
                            creat_lyf.textContent = e.life_exp
                            table_tr.appendChild(creat_lyf)

                            var creat_lng = document.createElement('td')
                            creat_lng.textContent = e.language
                            table_tr.appendChild(creat_lng)
                        }
                    })
                }
                else if(gdp_lesser.checked){
                    Global_data.map(function(e){
                        if(Number(e.GDP) < filter_byuser) {
                            var list = document.getElementById("tr_inside");
                            while (list.hasChildNodes()) {
                            list.removeChild(list.firstChild);
                            }

                            var table_main = document.querySelector('.table_inside')
                            var creat_tr = document.createElement("tr")
                            creat_tr.setAttribute('id','tr_inside')
                            table_main.appendChild(creat_tr)

                            var table_tr = document.querySelector('#tr_inside')
                            var creat_name = document.createElement("td")
                            creat_name.textContent = e.Name
                            table_tr.appendChild(creat_name)

                            var creat_population = document.createElement('td')
                            creat_population.textContent = e.Population
                            table_tr.appendChild(creat_population)

                            var creat_gdp = document.createElement('td')
                            creat_gdp.textContent = e.GDP
                            table_tr.appendChild(creat_gdp)

                            var creat_lyf = document.createElement('td')
                            creat_lyf.textContent = e.life_exp
                            table_tr.appendChild(creat_lyf)

                            var creat_lng = document.createElement('td')
                            creat_lng.textContent = e.language
                            table_tr.appendChild(creat_lng)
                        }
                    })
                }
                else if(languagefilter.checked){
                    Global_data.map(function(e){
                        if(e.language == filter_byuser) {
                            var list = document.getElementById("tr_inside");
                            while (list.hasChildNodes()) {
                            list.removeChild(list.firstChild);
                            }

                            var table_main = document.querySelector('.table_inside')
                            var creat_tr = document.createElement("tr")
                            creat_tr.setAttribute('id','tr_inside')
                            table_main.appendChild(creat_tr)

                            var table_tr = document.querySelector('#tr_inside')
                            var creat_name = document.createElement("td")
                            creat_name.textContent = e.Name
                            table_tr.appendChild(creat_name)

                            var creat_population = document.createElement('td')
                            creat_population.textContent = e.Population
                            table_tr.appendChild(creat_population)

                            var creat_gdp = document.createElement('td')
                            creat_gdp.textContent = e.GDP
                            table_tr.appendChild(creat_gdp)

                            var creat_lyf = document.createElement('td')
                            creat_lyf.textContent = e.life_exp
                            table_tr.appendChild(creat_lyf)

                            var creat_lng = document.createElement('td')
                            creat_lng.textContent = e.language
                            table_tr.appendChild(creat_lng)
                        }
                    })
                }
           

        }  