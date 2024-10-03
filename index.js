
function result(){
          var rand=Math.floor(Math.random()*100 +1)
          var result= rand+"%";   
          document.getElementById("ha").innerHTML="Your Love Score is:"
         var ress = document.getElementById("vis").style.visibility="visible";
         document.getElementById("vis").innerHTML=result
          
         if(rand>=75){
          
          document.getElementById("vis").innerHTML=result+" 😍"
          
         }
         if(75>rand && rand>=50){
          
          document.getElementById("vis").innerHTML=result+" 😁"
         }
         if(rand<50){
          document.getElementById("vis").innerHTML=result+" 🤣"
         }
}