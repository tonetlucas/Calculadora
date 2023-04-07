function numero(valor) {
 document.querySelector('.resultado').value+= valor;
}

function operacion() {
   var opera = document.querySelector('.resultado').value;
   if(opera == 0){
    document.querySelector('.resultado').value = "Sem operação";
   } else{
    document.querySelector('.resultado').value = eval(opera);
   }
}

function resetar() {
    document.querySelector('.resultado').value = ""
}