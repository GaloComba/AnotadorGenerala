  
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
      {
        path: '/about/',
        url: 'about.html',
      },
      {
        path: '/index/',
        url: 'index.html',
      },
    ]
    // ... other parameters
  });

var mainView = app.views.create('.view-main');

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});

// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e) {
    // Do something here when page loaded and initialized
    console.log(e);
})

// Option 2. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="index"]', function (e) {
  $$("#bot1").on("click", fnnombres);
 
  console.log(e);
  
}) 

$$(document).on('page:init', '.page[data-name="about"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log(e);
    $$("#jugador1").html(nom1);
    $$("#jugador2").html(nom2);
    $$("#dad11").on("click",fnpuntos11);
    $$("#dad12").on("click",fnpuntos12);
    $$("#dad21").on("click",fnpuntos21);
    $$("#dad22").on("click",fnpuntos22);
    $$("#dad31").on("click",fnpuntos31);
    $$("#dad32").on("click",fnpuntos32);
    $$("#dad41").on("click",fnpuntos41);
    $$("#dad42").on("click",fnpuntos42);
    $$("#dad51").on("click",fnpuntos51);
    $$("#dad52").on("click",fnpuntos52);
    $$("#dad61").on("click",fnpuntos61);
    $$("#dad62").on("click",fnpuntos62);
    $$("#escalera1").on("click",fnescalera1);
    $$("#escalera2").on("click",fnescalera2);
    $$("#full1").on("click",fnfull1);
    $$("#full2").on("click",fnfull2);
    $$("#poker1").on("click",fnpoker1);
    $$("#poker2").on("click",fnpoker2);
    $$("#generala1").on("click",fngenerala1);
    $$("#generala2").on("click",fngenerala2);
    $$("#volver1").on("click",fntotal1);
    $$("#volver2").on("click",fntotal1);
    $$("#volver3").on("click",fntotal2);
    $$("#volver4").on("click",fntotal2); 
    $$("#limpiar").on("click",fnlimpiar);
    $$("#terminar").on("click",fnterminar);
    $$("#inicio").on("click",fnterminar);
    
})
// funciones
var nom1="", nom2="";
var total1 = 0, total2 = 0 ;
var dado1=0, dad1=0;
var dado2=0, dad2=0;
var jug=0, jug2=0, a=0, b=0;

function fnnombres(){
  nom1=$$("#jug1").val();
  nom2=$$("#jug2").val();
  console.log(nom1);
  console.log(nom2);
  mainView.router.navigate("/about/");

}
function fnlimpiar(){
  for(i=1;i<=6;i++){
    $$("#da1"+i).html("");
    $$("#da2"+i).html("");
  }
  $$("#total1").html("");
  $$("#total2").html("");
  $$("#esc1").html("");
  $$("#esc2").html("");
  $$("#f1").html("");
  $$("#f2").html("");
  $$("#pok1").html("");
  $$("#pok2").html("");
  $$("#gen1").html("");
  $$("#gen2").html("");
  total1=0;
  jug=0;
  a=0;
  dad1=0;
  dado1=0;
  total2=0;
  jug2=0;
  b=0;
  dad2=0;
  dado2=0;
}
function fnterminar(){
  nom1="";
  nom2="";
  total1=0;
  jug=0;
  a=0;
  dad1=0;
  dado1=0;
  total2=0;
  jug2=0;
  b=0;
  dad2=0;
  dado2=0;
  mainView.router.navigate("/index/");
  console.log("index");
}

function fnpuntos11(){
  dado1=1;
  $$("#pop").html("Dado 1");
      $$("#d11").on("click", fnpuntos011);
      $$("#d12").on("click", fnpuntos012);
      $$("#d13").on("click", fnpuntos013);
      $$("#d14").on("click", fnpuntos014);
      $$("#d15").on("click", fnpuntos015);
      $$("#d16").on("click", fnpuntos016);
}
function fnpuntos12(){
  dado2=1;
  $$("#pop3").html("Dado 1");
      $$("#d21").on("click", fnpuntos021);
      $$("#d22").on("click", fnpuntos022);
      $$("#d23").on("click", fnpuntos023);
      $$("#d24").on("click", fnpuntos024);
      $$("#d25").on("click", fnpuntos025);
      $$("#d26").on("click", fnpuntos026);
}
function fnpuntos21(){
  dado1=2;
  $$("#pop").html("Dado 2");
      $$("#d11").on("click", fnpuntos011);
      $$("#d12").on("click", fnpuntos012);
      $$("#d13").on("click", fnpuntos013);
      $$("#d14").on("click", fnpuntos014);
      $$("#d15").on("click", fnpuntos015);
      $$("#d16").on("click", fnpuntos016);   
}
function fnpuntos22(){
  dado2=2;
  $$("#pop3").html("Dado 2");
      $$("#d21").on("click", fnpuntos021);
      $$("#d22").on("click", fnpuntos022);
      $$("#d23").on("click", fnpuntos023);
      $$("#d24").on("click", fnpuntos024);
      $$("#d25").on("click", fnpuntos025);
      $$("#d26").on("click", fnpuntos026);
}
function fnpuntos31(){
  dado1=3;
  $$("#pop").html("Dado 3");
      $$("#d11").on("click", fnpuntos021);
      $$("#d12").on("click", fnpuntos022);
      $$("#d13").on("click", fnpuntos023);
      $$("#d14").on("click", fnpuntos024);
      $$("#d15").on("click", fnpuntos025);
      $$("#d16").on("click", fnpuntos026);
}
function fnpuntos32(){
  dado2=3;
  $$("#pop3").html("Dado 3");
      $$("#d21").on("click", fnpuntos021);
      $$("#d22").on("click", fnpuntos022);
      $$("#d23").on("click", fnpuntos023);
      $$("#d24").on("click", fnpuntos024);
      $$("#d25").on("click", fnpuntos025);
      $$("#d26").on("click", fnpuntos026);
}
function fnpuntos41(){
  dado1=4;
  $$("#pop").html("Dado 4");
      $$("#d11").on("click", fnpuntos011);
      $$("#d12").on("click", fnpuntos012);
      $$("#d13").on("click", fnpuntos013);
      $$("#d14").on("click", fnpuntos014);
      $$("#d15").on("click", fnpuntos015);
      $$("#d16").on("click", fnpuntos016);
}
function fnpuntos42(){
  dado2=4;
  $$("#pop3").html("Dado 4");
      $$("#d21").on("click", fnpuntos021);
      $$("#d22").on("click", fnpuntos022);
      $$("#d23").on("click", fnpuntos023);
      $$("#d24").on("click", fnpuntos024);
      $$("#d25").on("click", fnpuntos025);
      $$("#d26").on("click", fnpuntos026);
}
function fnpuntos51(){
  dado1=5;
  $$("#pop").html("Dado 5");
      $$("#d11").on("click", fnpuntos011);
      $$("#d12").on("click", fnpuntos012);
      $$("#d13").on("click", fnpuntos013);
      $$("#d14").on("click", fnpuntos014);
      $$("#d15").on("click", fnpuntos015);
      $$("#d16").on("click", fnpuntos016);
}
function fnpuntos52(){
  dado2=5;
  $$("#pop3").html("Dado 5");
      $$("#d21").on("click", fnpuntos021);
      $$("#d22").on("click", fnpuntos022);
      $$("#d23").on("click", fnpuntos023);
      $$("#d24").on("click", fnpuntos024);
      $$("#d25").on("click", fnpuntos025);
      $$("#d26").on("click", fnpuntos026);
}
function fnpuntos61(){
  dado1=6;
  $$("#pop").html("Dado 6");
      $$("#d11").on("click", fnpuntos011);
      $$("#d12").on("click", fnpuntos012);
      $$("#d13").on("click", fnpuntos013);
      $$("#d14").on("click", fnpuntos014);
      $$("#d15").on("click", fnpuntos015);
      $$("#d16").on("click", fnpuntos016);
}
function fnpuntos62(){
  dado2=6;
  $$("#pop3").html("Dado 6");
      $$("#d21").on("click", fnpuntos021);
      $$("#d22").on("click", fnpuntos022);
      $$("#d23").on("click", fnpuntos023);
      $$("#d24").on("click", fnpuntos024);
      $$("#d25").on("click", fnpuntos025);
      $$("#d26").on("click", fnpuntos026);
}
function fnescalera1(){
  opcion1=1;
  $$("#pop2").html("Escalera");
  $$("#op11").on("click", fnjugada11);
  $$("#op12").on("click", fnjugada12);
  $$("#op13").on("click", fnjugada13);
}
function fnescalera2(){
  opcion2=1;
  $$("#pop4").html("Escalera");
  $$("#op21").on("click", fnjugada21);
  $$("#op22").on("click", fnjugada22);
  $$("#op23").on("click", fnjugada23);
  
}
function fnfull1(){
  opcion1=2;
  $$("#pop2").html("Full");
  $$("#op11").on("click", fnjugada11);
  $$("#op12").on("click", fnjugada12);
  $$("#op13").on("click", fnjugada13);
}
function fnfull2(){
  opcion2=2;
  $$("#pop4").html("Full");
  $$("#op21").on("click", fnjugada21);
  $$("#op22").on("click", fnjugada22);
  $$("#op23").on("click", fnjugada23);
  
}
function fnpoker1(){
  opcion1=3;
  $$("#pop2").html("Poker");
  $$("#op11").on("click", fnjugada11);
  $$("#op12").on("click", fnjugada12);
  $$("#op13").on("click", fnjugada13);
}
function fnpoker2(){
  opcion2=3;
  $$("#pop4").html("Poker");
  $$("#op21").on("click", fnjugada21);
  $$("#op22").on("click", fnjugada22);
  $$("#op23").on("click", fnjugada23);
  
}
function fngenerala1(){
  opcion1=4;
  $$("#pop2").html("Generala");
  $$("#op11").on("click", fnjugada11);
  $$("#op12").on("click", fnjugada12);
  $$("#op13").on("click", fnjugada13);
}
function fngenerala2(){
  opcion2=4;
  $$("#pop4").html("Generala");
  $$("#op21").on("click", fnjugada21);
  $$("#op22").on("click", fnjugada22);
  $$("#op23").on("click", fnjugada23);
}

function fnpuntos011(){
    dad1=1*dado1;
    console.log(dado1);   
  $$("#da1"+dado1).html(dad1); 
  console.log(total1);
  a=1;
}
function fnpuntos012(){
  console.log(dado1);
  dad1=2*dado1;
  $$("#da1"+dado1).html(dad1); 
  a=1;
}
function fnpuntos013(){
  console.log(dado1);
  dad1=3*dado1;
  $$("#da1"+dado1).html(dad1);
  a=1;
}
function fnpuntos014(){
  console.log(dado1);
  dad1=4*dado1;
  $$("#da1"+dado1).html(dad1); 
  a=1;
}
function fnpuntos015(){
  console.log(dado1);
  dad1=5*dado1;
  $$("#da1"+dado1).html(dad1); 
  a=1;  
}
function fnpuntos016(){
  console.log(dado1);
  dad1=0;
  $$("#da1"+dado1).html(dad1); 
  a=1;
}
function fnpuntos021(){
  dad2=1*dado2;  
  $$("#da2"+dado2).html(dad2); 
  console.log(dad2);
  b=1;
}
function fnpuntos022(){
  console.log(dado2);
  dad2=2*dado2;
  $$("#da2"+dado2).html(dad2); 
  console.log(dad2);
  b=1;
}
function fnpuntos023(){
  console.log(dado2);
  dad2=3*dado2;
  $$("#da2"+dado2).html(dad2);
  b=1;
}
function fnpuntos024(){
  console.log(dado2);
  dad2=4*dado2;
  $$("#da2"+dado2).html(dad2); 
  b=1;
}
function fnpuntos025(){
  console.log(dado2);
  dad2=5*dado2;
  $$("#da2"+dado2).html(dad2); 
  b=1;  
}
function fnpuntos026(){
  console.log(dado2);
  dad2=0;
  $$("#da2"+dado2).html(dad2); 
  b=1;
}

function fnjugada11(){
  a=1;
  if(opcion1==1){
    jug=25;
    $$("#esc1").html(jug); 
  }
  if(opcion1==2){
    jug=35;
    $$("#f1").html(jug);  
  }
  if(opcion1==3){
    jug=45;
    $$("#pok1").html(jug); 
  }
  if(opcion1==4){
    $$("#gen1").html("GANADOR!"); 
  }
}
function fnjugada12(){
  a=1;
  if(opcion1==1){
    jug=20;
    $$("#esc1").html(jug);
    
  }
  if(opcion1==2){
    jug=30;
    $$("#f1").html(jug);
    
  }
  if(opcion1==3){
    jug=40;
    $$("#pok1").html(jug);
    
  }
  if(opcion1==4){
    jug=50;
    $$("#gen1").html(jug);  
  }
}
function fnjugada13(){
    a=1;
    if(opcion1==1){
      jug=0;
      $$("#esc1").html(jug);
      
    }
    if(opcion1==2){
      jug=0;
      $$("#f1").html(jug);
      
    }
    if(opcion1==3){
      jug=0;
      $$("#pok1").html(jug);
      
    }
    if(opcion1==4){
      jug=0;
      $$("#gen1").html(jug);  
    }
  }

  function fnjugada21(){
      b=1;
    if(opcion2==1){
      jug2=25;
      $$("#esc2").html(jug2);
    }
    if(opcion2==2){
      jug2=35;
      $$("#f2").html(jug2);
    }
    if(opcion2==3){
      jug2=45;
      $$("#pok2").html(jug2);
    }
    if(opcion2==4){
      $$("#gen2").html("GANADOR!");  
    }
    
  }
  function fnjugada22(){
      b=1;
      if(opcion2==1){
        jug2=20;
        $$("#esc2").html(jug2);
      }
      if(opcion2==2){
        jug2=30;
        $$("#f2").html(jug2);
      }
      if(opcion2==3){
        jug2=40;
        $$("#pok2").html(jug2);
      }
      if(opcion2==4){
        jug2=50;
        $$("#gen2").html(jug2); 
      }
      
  }
  function fnjugada23(){
        b=1;
        if(opcion2==1){
          jug2=0;
          $$("#esc2").html(jug2);
        }
        if(opcion2==2){
          jug2=0;
          $$("#f2").html(jug2);
        }
        if(opcion2==3){
          ju2=0;
          $$("#pok2").html(jug2);
        }
        if(opcion2==4){
          jug2=0;
          $$("#gen2").html(jug2);
        }
        
  }

function fntotal1(){
  console.log("entre en fntotal1")
  if(a==1){
  total1=total1+dad1+jug;
  $$("#total1").html(total1);
  console.log(total1);
  jug=0;
  a=0;
  dad1=0;
  }
}
function fntotal2(){
  console.log("entre en fntotal2")
  if(b==1){
  total2=total2+dad2+jug2;
  $$("#total2").html(total2);
  console.log(total2);
  jug2=0;
  b=0;
  dad2=0;
  }
}