
window.addEventListener("load",(e)=>{
    e.preventDefault;
    var sambo = document.getElementById("sambo") ;
    var vato = document.getElementsByClassName("vato") ;
    var isa = document.getElementById("isa");
    var decor = document.getElementById("decor");
    // var misaka = parseInt(getComputedStyle(vato[1]).left,10);
    var b = 0;
    var point = 0;
    
    function stop_tout (){
        vato.classList.remove("vato_anim");
        decor.classList.remove("decor_anim");
    }
    
    //animation vato 
    vato[0].addEventListener("animationiteration",()=>{
            var x = Math.round((Math.random()*4)) ;
            vato[x].style.display = "none" ;
            setTimeout(()=>{
                vato[x].style.display = "block";
            },3000); 
    point++;
            isa.innerHTML = point;
    });  
    
    // animation sambo
    sambo_tab=['sambo_1.png','sambo_2.png','sambo_3.png','sambo_4.png'];
    setInterval(()=>{
        sambo.src = sambo_tab[b++];
        if ( b > 3 ) {
            b = 0;
        }
    },150)   
    
    //commande sambo 
    sambo.style.left = "0px";
    document.addEventListener("keydown", function(event) {
      if (event.keyCode === 37) {
        if ( 535 >= sambo.x) {
            sambo.style.left = parseInt(sambo.style.left) - 0 + 'px';
        }
        else {
            sambo.style.left = parseInt(sambo.style.left) - 10 + 'px';
        }
        
      }
      else if (event.keyCode === 39) {
        if ( sambo.x >= 785) {
            sambo.style.left = parseInt(sambo.style.left) + 0 + 'px';
        }
        else {
            sambo.style.left = parseInt(sambo.style.left) + 10 + 'px';
        }
        
      }
      else if (event.keyCode === 38) {
        sambo.classList.add("sauter") ;
        setTimeout(()=>{
            sambo.classList.remove("sauter") ;
        },1000);
      }
    });

    function detectionCollision() {
        const samboRect = sambo.getBoundingClientRect();
        var marge = 20;
        let point = 0;
        for ( let i = 0; i < vato.length; i++) {
            const vatoRect = vato[i].getBoundingClientRect();

            if (
                samboRect.left - marge < vatoRect.right - marge &&
                samboRect.right - marge > vatoRect.left - marge &&
                samboRect.top - marge < vatoRect.bottom - marge &&
                samboRect.bottom - marge > vatoRect.top - marge 
            ){
                if ( sambo.classList == "sambo sauter" ) {
                    //velona foana
                }
                else {
                    // stop_tout();
                    alert("Maty ianao");
                    location.reload();
                    point = 0;
                }      
            }
        }
    }
  
    setInterval(()=>{
        detectionCollision();
    },10);
});
