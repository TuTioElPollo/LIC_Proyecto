// Mostrar la tecla presionada. En una aplicación real no debería hacerlo.
// Probablemente sería buena idea mostrar únicamente en el caso que
// se ingresen teclas que no sean números.
function showChar(e){
 var code;
 if (!e) var e = window.event;
 if (e.keyCode) code = e.keyCode; //Todos los navegadores menos Netscape 4.0 o inferior
 else if (e.which) code = e.which; //Netscape 4.0 o inferior
 var character = String.fromCharCode(code);
 //alert('La tecla presionada fue: ' + character);
}
onload = function(){ 
  var ele = document.querySelectorAll('.validanumericos')[0];
  ele.onkeypress = function(e) {
     if(isNaN(this.value+String.fromCharCode(e.charCode)))
        return false;
  }
  ele.onpaste = function(e){
     e.preventDefault();
  }
}
// Dejar pasar únicamente números enteros y bloquear cualquier otra caracter
function numbersOnly(field, event){
 /*alert(field.value);*/
 var key, keychar;
 showChar(event); //Mostrar la tecla presionada
 if(window.event) //Todos los navegadores menos Netscape 4.0 o inferior
 key = window.event.keyCode;
 else if(event) //Netscape 4.0 o inferior
 key = event.which;
 else
 return true;
 keychar = String.fromCharCode(key);
 // Comprobar caracteres especiales como espacio en blanco
 // luego comprobar números
 if((key == null) || (key == 0) || (key == 8) || (key == 9) || (key == 13) ||
(key ==
27))
 return true;
 else if((("0123456789").indexOf(keychar) > -1)){
 window.status = "";
 return true;
 }
 else{
 window.status = "Este campo solo acepta números";
 return false;
 }
}

function sololetras(e){
   key=e.keyCode || e.which;

   teclado = String.fromCharCode(key).toLowerCase();

   letras = " abcdefghijklmnñopqrstuvwxyz";

   especiales = "8-37-38-46-164";

   teclado_especial=false;

   for(var i in especiales){

      if(key ==especiales[i]){
         teclado_especial=true;break;
      }      
   }

   if(letras.indexOf(teclado)==-1 && !teclado_especial){

         return false;
   }
}
