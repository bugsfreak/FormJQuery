$(document).ready(function(){
      $("input").keyup(function(){
        var nombres = $("#nombres").val();
        var apellidos = $("#apellidos").val();
        var edad = $("#edad").val();
        var correo = $("#correo").val();
        // check if each input has at least one character
        // if yes, we display the CAPTCHA
        if(nombres !="" && apellidos !="" && edad !="" && correo !="") {
          $("#captcontainer").slideDown(450);
          
        }
      });

      var letras = ['A','B','C','D','a','b','c','d','1','2','3'];
            var i;

            for(i = 0; i < 5; i++){
                var a = letras[Math.floor(Math.random()*letras.length)];
                var b = letras[Math.floor(Math.random()*letras.length)];
                var c = letras[Math.floor(Math.random()*letras.length)];
                var d = letras[Math.floor(Math.random()*letras.length)];
                var e = letras[Math.floor(Math.random()*letras.length)];

                var capt = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e;
            }

        var captText = $("#captchatext").text(capt);    
        $(document).append(captText);
        
       
      $("#enviar").click(function(e){
        var respuesta = $("#captcha").val();
        var trimCapt = $.trim(capt);
        var trimResp = $.trim(respuesta);

        if(trimCapt == trimResp){
            alert('Información recibida con éxito');
        }else{
            alert('Error de captcha');
        }
        
      });
    });
    