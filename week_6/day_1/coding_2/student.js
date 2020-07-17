class input{
    constructor(std_name, std_mail, std_mob){
        this.std_name = std_name;
        this.std_mail = std_mail;
        this.std_mob = std_mob;
    }
}


$("#get_value").click (submit =>{
    let std_name = $("#std_name").val();
    let std_mail = $("#std_mail").val();
    let std_mob = $("#std_mob").val();

$("#new_input").append("<input></input>")
    $('input:last').attr("id","last")
    $("#last").attr("class","border border-danger mt-3")
    $("#last").attr("placeholder","enter subject's number sepreted with (,)")

$("#new_input").append("<button>Submit subject mark's</button>")
    $('button:last').attr("id","show_detail")
    $("#show_detail").attr("class","btn btn-outline-success mt-2")

    let output = new input( std_name, std_mail, std_mob)

    $("#std_name_output").text ("Name:"+ output.std_name)
    $("#std_mail_output").text ("Email-id:"+ output.std_mail)   
    $("#std_mob_output").text ("mobile:"+ output.std_mob)


    $("#show_detail").click( showDetails => {

        var  all_sub_mark = [];  
        let sub_mark = $("#last").val();
        let seprate_comma = (sub_mark.split(','));
        all_sub_mark.push(seprate_comma)
        
           
        
       
        class allmark extends input{
            constructor(std_name, std_mail, std_mob, ...[all_sub_mark]){
                super(std_name, std_mail, std_mob);
                this.all_sub_mark = all_sub_mark;
            }
        }
        
        
    
        var output = new allmark( std_name, std_mail, std_mob, all_sub_mark)
        
        console.log(output)
        $("#std_name_output").text ("Name:"+ output.std_name)
        $("#std_mail_output").text ("Email-id:"+ output.std_mail)   
        $("#std_mob_output").text ("mobile:"+ output.std_mob)


        $("#new_input").append("<button>Show Highest Mark</button>")
            $('button:last').attr("id","show_highest")
            $("#show_highest").attr("class","btn btn-outline-success mt-2")

        $("#new_input").append("<button>Total Subject</button>")
            $('button:last').attr("id","show_allsub")
            $("#show_allsub").attr("class","btn btn-outline-success mt-2")

        $("#new_input").append("<button>Show subjectwise mark</button>")
            $('button:last').attr("id","show_subjmark")
            $("#show_subjmark").attr("class","btn btn-outline-success mt-2")

        $("#new_input").append("<button>Show Avrg mark</button>")
            $('button:last').attr("id","show_avgmark")
            $("#show_avgmark").attr("class","btn btn-outline-success mt-2")

        $("#new_input").append("<button>Show Lowest Mark</button>")
            $('button:last').attr("id","show_lowestmark")
            $("#show_lowestmark").attr("class","btn btn-outline-success mt-2")


        $("#show_highest").click (showHighest => {
            var highestmark = []
            output.all_sub_mark.map((e) => {
                e.map((y) => {
                    highestmark.push(Number(y))
                })
            })
            $("#std_maxmark_output").text ("HighestMark:"+ Math.max(...highestmark))   
        });

        $("#show_allsub").click(showsubj => {
            $("#std_subj_output").text ("HINDI,ENGLISH,MATH,SCEINCE,SOCAL SCIENCE")
        });

        $("#show_subjmark").click (showsubjmark => {
            let subjmark = [];
            output.all_sub_mark.map((e) => {
                e.map((y) => {
                    subjmark.push(Number(y))
                });
            });
            $("#std_allmark_output").text("Hindi:"+subjmark[0]+"," + " "+ "ENGLISH:"+subjmark[1] +"," + " "+ "MATH:"+subjmark[2] +"," +" "+ "SCEINCE:"+subjmark[3] +"," +" "+ "SOCAL SCIENCE:"+subjmark[4])
        });

        $("#show_avgmark").click (showavg => {
            let avgmark = [];
            let sum = 0
            output.all_sub_mark.map((e) => {
                e.map((y) => {
                    avgmark.push(Number(y))
                });
            });
            for(var i=0; i<avgmark.length; i++){
                sum = sum + avgmark[i]
            }
            $("#std_avrgmark_output").text("Avg Marks:" + sum/avgmark.length)
        });

        $("#show_lowestmark").click (showmin => {
            var minmark = []
            output.all_sub_mark.map((e) => {
                e.map((y) => {
                    minmark.push(Number(y))
                })
            })
            $("#std_lowmark_output").text ("minmark:"+ Math.min(...minmark))   
        })
    });
    
});
