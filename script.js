const entrada = document.querySelector('#input-texto');
const form = document.querySelector('form');
const criptografar = document.querySelector('#btn-cripto');
const descriptografar = document.querySelector('#btn-descripto');

// Criptografar
function criptografarTexto (entrada){
    
    let entradaTextoArray = [];
     entradaTextoArray = entrada.split("");   // separa letras
    let saidaCriptografada = "";
  
  for(let i = 0; i < entradaTextoArray.length; i++ ) {
    if(entradaTextoArray[i] == "a"){
      saidaCriptografada += "ai"; 
    }
    else if(entradaTextoArray[i] == "e"){
      saidaCriptografada += "enter"; 
    }
    else if(entradaTextoArray[i] == "i"){ 
        saidaCriptografada += "imes";
    }
    else if ( entradaTextoArray[i] == "o"){
        saidaCriptografada += "ober"; 
    }
    else if( entradaTextoArray[i] == "u"){
        saidaCriptografada += "ufat"; 
    }
    else {
          saidaCriptografada += entradaTextoArray[i];

        }
  }
  console.log(saidaCriptografada);
  return saidaCriptografada;
}

form.addEventListener('submit', function(event){
  event.preventDefault();
  let entradaTexto = {}; 
  entradaTexto.entradas = entrada.value;
  if (criptografar){
    criptografar.addEventListener('click', function(){
    });
    criptografarTexto(entradaTexto.entradas);
  } else {
    descriptografar.addEventListener('click', function(){
    });
    descriptografarTexto(entradaTexto.entradas);
  }
   entrada.value = '';
})




// Descriptografar

function descriptografarTexto(texto) {

let i = 0;
let naoAcabou = true;
  
  while(naoAcabou){
    if (texto.includes("ai")) {
      texto = texto.replace("ai", "a");
      i++
    } if (texto.includes("enter")) {
      texto = texto.replace("enter", "e");
      i++
    } if (texto.includes("imes")) {
      texto = texto.replace("imes", "i");
      i++
    } if (texto.includes("ober")) {
      texto = texto.replace("ober", "o");
      i++
    } if (texto.includes("ufat")) {
      texto = texto.replace("ufat", "u");
      i++
    }
     if(i==0){
      naoAcabou = false;
     }
      i=0;
  }
}


  















/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/

//  Regras Decodificador: 
// "enter" é convertido para "e" 
// "imes" é convertido para "i"
// "ai" é convertido para "a"
// "ober" é convertido para "o"
// "ufat" é convertido para "u"
// Apenas letras minúsculas
// Não permite acentuação     
  
