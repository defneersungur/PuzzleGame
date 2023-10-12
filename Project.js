



// alert("jQuery imported")
$( function(){
    // alert("Page is loaded")
    $(".letter1,.letter2,.letter3,.letter4,.letter5,.letter6").click(function(){
        //alert("Page is loaded")
        $(this).css("background", "rgb(17, 169, 200)");
        
        
    })
    let letterss=["T","N","I","M","A"];
    $(".shuffle").click(function(){
        
        

        //alert("Page is loaded");
        let tmp=["T","N","I","M","A"];
        let f1 = Math.floor(Math.random() * tmp.length);
        
        $(".letters p").remove();
        $(".letters ").append(`<p class=letter1> ${tmp[f1]} </p>`);
        letterss[0]=tmp[f1];
        
        
        tmp.splice(f1,1);
        let f2 = Math.floor(Math.random() * tmp.length);
                  
        $(".letters ").append(`<p class=letter2> ${tmp[f2]} </p>`);
        letterss[1]=tmp[f2];

        
        tmp.splice(f2,1);
        let f3 = Math.floor(Math.random() * tmp.length);
                  
        $(".letters ").append(`<p class=letter3> ${tmp[f3]} </p>`);
        letterss[2]=tmp[f3];

        tmp.splice(f3,1);
        let f4 = Math.floor(Math.random() * tmp.length);
                  
        $(".letters ").append(`<p class=letter4> ${tmp[f4]} </p>`);
        letterss[3]=tmp[f4];

        tmp.splice(f4,1);
        let f5 = Math.floor(Math.random() * tmp.length);
                  
        $(".letters ").append(`<p class=letter5> ${tmp[f5]} </p>`);
        letterss[4]=tmp[f5];
        
      
        


   
         
        let b=a;
        let words=[];
        var i=1000;
        var n=0;
        let ebu="";
        let abb="MANTI";
        let word1="SUE";
        
        var k=0;
        $(".letter1").click(function(){
            
            let fru=letterss[0];
            var i=i+50;
            words[n]=fru;

                $(".inputArea h2").append(`
                
                ${fru} 
                
                `) ;
                n++
                ebu=fru;
                k++;
                
                
               
                
                
            

           
                
        
        })
        $(".letter2").click(function(){

            let fru=letterss[1];
            var i=i+50;
            words[n]=fru;
            $(".inputArea h2").append(`
        
             ${fru} 
        
            `) ;
            ebu=ebu+fru;
            n++;
            $(".inputArea h2").width(`${i}`);

            
          
           let c=words;
          
        })
       

       
        $(".letter3").click(function(){

            let fru=letterss[2];
            var i=i+50;
            ebu=ebu+fru;
            $(".inputArea h2").append(`
        
             ${fru} 
        
            `) ;

           
            $(".inputArea h2").width(`${i}`);
          
        })

        $(".letter5").click(function(){

            let fru=letterss[4];
            var i=i+50;
            ebu=ebu+fru;
        
            $(".inputArea h2").append(`
        
             ${fru} 
        
            `) ;

          
            $(".inputArea h2").width(`${i}`);
            
        })

        $(".letter4").click(function(){

            let fru=letterss[3];
            var i=i+50;
            ebu=ebu+fru;
        
            $(".inputArea h2").append(`
        
             ${fru} 
        
            `) ;

            $(".inputArea h2").width(`${i}`);
           
        })



    })
         let a=["S","E"];
        let b=a;
        
        let words=[];
        var i=1000;
        var n=0;
        let ebu="";
        let abb="MANTI";
        let word1="ANT";
        let word2="TAM";
        let word3="TANIM";
        let word4="TANI";



        
        $(".letter1").click(function(){
            let fru="T";
            var i=i+50;
            words[n]=fru;
            $(".inputArea h2").append(`
        
             ${fru} 
        
            `) ;
            n++
            ebu=fru;

            


        
        })
        $(".letter2").click(function(){

            let fru="N";
            var i=i+50;
            words[n]=fru;
            $(".inputArea h2").append(`
        
             ${fru} 
        
            `) ;
            ebu=ebu+fru;
            n++;
            $(".inputArea h2").width(`${i}`);

            
          
           let c=words;
          

        })
       

       
        $(".letter3").click(function(){

            let fru="I";
            var i=i+50;
            ebu=ebu+fru;
            $(".inputArea h2").append(`
        
             ${fru} 
        
            `) ;

            
            $(".inputArea h2").width(`${i}`);
           
        })

        $(".letter5").click(function(){

            let fru="A";
            var i=i+50;
            if(ebu=="")
            ebu=fru;
            else
            ebu=ebu+fru;
        
            $(".inputArea h2").append(`
        
             ${fru} 
        
            `) ;

            
            $(".inputArea h2").width(`${i}`);
           
        })

        $(".letter4").click(function(){

            let fru="M";
            var i=i+50;
            ebu=ebu+fru;
        
            $(".inputArea h2").append(`
        
             ${fru} 
        
            `) ;

            
            $(".inputArea h2").width(`${i}`);
           
        })

        $(function(){
            $(".bulb").on("click",function (){
                 
                $(" .a,.n1,.t1,.n,.t,.i1,.m,u1,.m1,.ben1,.t,.a1,.n2,.i3,.m1,.t1,.ben,.n2,.i").css("color","black");
              });     
          })
        
          //when you double click the bulb icon, it will hide all 
          $(function(){
            $(".bulb").on("dblclick",function (){
                //alert(" dbl clicked"); 
                $(" .a,.n1,.t1,.n,.t,.i1,.m,u1,.m1,.ben1,.t,.a1,.n2,.i3,.m1,.t1,.ben,.n2,.i").css("color","white");
                
              });     
          })

        var $panel = $("ul#panel") ;

        $("#box").contextmenu(function(e){
            addItem(e, "right")
            e.preventDefault() ;
            
        })
        function addItem(e){
            // $panel.prepend(`<li>Event: ${e.type} ${param}</li>`)
            
            if(ebu===abb)
            {
                $(".a,.n,.t,.i1,.m" ).css("background","rgb(17, 169, 200)");

                $(".letter1,.letter2,.letter3,.letter4,.letter5,.letter6").css("background", "gray");
                $(".inputArea h2").remove();
                $(".inputArea ").append(`<h2> </h2>`) ;
        
              
        
            
            }
            else if(ebu===word1)
            {
                $(".a,.n1,.t1" ).css("background","rgb(17, 169, 200)");
                $(".letter1,.letter2,.letter3,.letter4,.letter5,.letter6").css("background", "gray");
                $(".inputArea h2").remove();
                $(".inputArea ").append(`<h2> </h2>`) ;
                
            }
            else if(ebu===word2)
            {
                $(".u1,.m1,.ben1" ).css("background","rgb(17, 169, 200)");
                $(".letter1,.letter2,.letter3,.letter4,.letter5,.letter6").css("background", "gray");
                $(".inputArea h2").remove();
                $(".inputArea ").append(`<h2> </h2>`) ;
                
            }
            else if(ebu===word3)
            {
                $(".t,.a1,.n2,.i3,.m1" ).css("background","rgb(17, 169, 200)");
                $(".letter1,.letter2,.letter3,.letter4,.letter5,.letter6").css("background", "gray");
                $(".inputArea h2").remove();
                $(".inputArea ").append(`<h2> </h2>`) ;
                
            }
            else if(ebu===word4)
            {
                $(".t1,.ben,.n2,.i" ).css("background","rgb(17, 169, 200)");
                $(".letter1,.letter2,.letter3,.letter4,.letter5,.letter6").css("background", "gray");
                $(".inputArea h2").remove();
                $(".inputArea ").append(`<h2> </h2>`) ;
                
            }
        else
           {
            $(".letter1,.letter2,.letter3,.letter4,.letter5,.letter6").css("background", "gray");

            $(".inputArea h2").remove();
            
            $(".inputArea ").append(`<h2> </h2>`) ;
               
           }    
           
              
        
            
            

        }
    
       
        

        
        
})


