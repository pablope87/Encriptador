// VARIABLES

var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var laptop = document.querySelector(".contenedor-laptop");
var parrafo = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".textoresultado")


// BOTONES

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;



// FUNCIONES

function encriptar(){
    ocultarObjetos();
    var area = mostrarTexto()
    resultado.textContent = encriptarTexto(area);
}

function desencriptar(){
    ocultarObjetos();
    var area = mostrarTexto()
    resultado.textContent = desencriptarTexto(area);
}

function mostrarTexto(){
      var area = document.querySelector(".area");
      return area.value;
  }

function ocultarObjetos(){
    laptop.classList.add("ocultar");
    parrafo.classList.add("ocultar");

}

// FUNCION ENCRIPTAR

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
        textoFinal = textoFinal + "ai";
        }

        else if(texto[i] == "e"){
        textoFinal = textoFinal + "enter";
        }

        else if(texto[i] == "i"){
        textoFinal = textoFinal + "imes";
        }

        else if(texto[i] == "o"){
        textoFinal = textoFinal + "ober";
        }
            
        else if(texto[i] == "u"){
        textoFinal = textoFinal + "ufat";
        }
        else{
        textoFinal = textoFinal + texto[i];
        }
    }

    return textoFinal;
}

// FUNCION DESENCRIPTAR

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
        textoFinal = textoFinal + "a";
        i = i+1;
        }

        else if(texto[i] == "e"){
        textoFinal = textoFinal + "e";
        i = i+4;
        }

        else if(texto[i] == "i"){
        textoFinal = textoFinal + "i";
        i = i+3;
        }

        else if(texto[i] == "o"){
        textoFinal = textoFinal + "o";
        i = i+3;
        }
            
        else if(texto[i] == "u"){
        textoFinal = textoFinal + "u";
        i = i+3;
        }
        else{
        textoFinal = textoFinal + texto[i];
        }
    }

    return textoFinal;
}

// BOTON COPIAR


let tex = document.getElementById('tex')

let copyButton = document.getElementById('copyButton')

copyButton.addEventListener('click', () => {
    
    let copyText = tex
    
    copyText.select();
    document.execCommand("copy")

})

// SWEET ALERT

function mostrar(){
    swal('Listo','Mensaje Copiado','success');
}








