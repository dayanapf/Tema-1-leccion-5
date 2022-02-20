// Ejercicio 1
//alert("Primer programa en JavaScript");

/* Ejercicio 2
Profe quise agregar cada una de las situaciones posibles en las cuales el formulario no fuera válido
*/
$(document).ready(function() {           
            
   $("#enviar_id").click(function(){
      var usuario = $("#nombre_id");
      var pass = $("#pass_id");
      var correo = $("#correo_id");

      var usurio_vacio = esta_vacio(usuario);
      var pass_vacio = esta_vacio(pass);
      var correo_vacio = esta_vacio(correo);
       
      if(usurio_vacio && pass_vacio  && correo_vacio)
      {                    
          usuario.css({"borderColor":"red"});
          pass.css({"borderColor":"red"});
          correo.css({"borderColor":"red"});
          alert("Los campos estan vacios");          
      }
      else if((usurio_vacio && pass_vacio) || (usurio_vacio && correo_vacio) || (pass_vacio && correo_vacio) )
      {
          var alert_vacios= [];
          var i = 0;
          if(usurio_vacio){        
              alert_vacios [i] = "usuario ";
              usuario.css({"borderColor":"red"});
              i++;
          }
          if(pass_vacio){        
              alert_vacios [i] = "password ";  
              pass.css({"borderColor":"red"});
              i++;      
          }
          if(correo_vacio){             
              alert_vacios [i] = "correo ";
              correo.css({"borderColor":"red"});
              i++;
          }
          alert("Los campos " + alert_vacios + " no pueden estar vacios");
      }else if(usurio_vacio || pass_vacio || correo_vacio){
         if(usurio_vacio){   
            usuario.css({"borderColor":"red"});
             alert("El campo usuario no puede estar vacio");
         }
         else if(pass_vacio){        
            pass.css({"borderColor":"red"});
             alert("El campo password no puede estar vacio");      
         }
         else if(correo_vacio){             
            correo.css({"borderColor":"red"});
             alert("El campo correo no puede estar vacio");
         }        
         
     }
     else {
         alert("Formulario válido");
     }

   });       
});
  


function esta_vacio(valor){
    var vacio = false;
    var exp_no_espacio = /^\s+$/;
    if (!valor.val() || valor.val().length == 0 || exp_no_espacio.test(valor.val()) )
    {
        vacio = true;       
    }
  
    return vacio;
     
}
// Concluye Ejercicio 2