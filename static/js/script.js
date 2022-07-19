$(document).ready(function(){
    //Funcion que se ejecuta mientras se este realizando algun cambio en algún input
      $("input").keyup(function(){
        //Se asignan variables por cada uno de los inputs
        var nombres = $("#nombres").val();
        var apellidos = $("#apellidos").val();
        var edad = $("#edad").val();
        var correo = $("#correo").val();
        //Verifica que todos los campos NO esten vacios
        if(nombres !="" && apellidos !="" && edad !="" && correo !="") {
          $("#captcontainer").slideDown(450);
          
        }
      });

    //Lista de letras o palabras disponibles para su uso en el captcha
        var letras = ['A','B','C','D','a','b','c','d','1','2','3'];
    //Variable para trabajar con el for
        var i;
        //Bucle para generar aleatoriamente desde la lista de palabras en el captcha
            for(i = 0; i < 5; i++){
                var a = letras[Math.floor(Math.random()*letras.length)];
                var b = letras[Math.floor(Math.random()*letras.length)];
                var c = letras[Math.floor(Math.random()*letras.length)];
                var d = letras[Math.floor(Math.random()*letras.length)];
                var e = letras[Math.floor(Math.random()*letras.length)];

                var capt = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e;
            }
        
        //Se asigna el captcha dentro del formulario como texto

        var captText = $("#captchatext").text(capt);    
        $(document).append(captText);

        //Cuando se da click se activa esta funcion para la verificacion del captcha
        $("#enviar").on("click",function(){
            var respuesta = $("#captcha").val();
            //Trim es un metodo que permite quitar espacios al captcha
            var trimCapt = $.trim(capt);
            var trimResp = $.trim(respuesta);
            alert(trimCapt + ' ' + trimResp);
            //Se verifica que sean iguales el captcha y la respuesta ingresada
            if(trimCapt == trimResp){
                //Arroja esta alerta en caso de ser exitosa
                alert('Información recibida con éxito');
            }else{
                //Arroja esta alerta en caso de no ser igual
                alert('Error de captcha');
            }
            
        });
    
      
    });

    
    