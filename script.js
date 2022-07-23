var areaText = document.querySelector("#texto-modificar");
var btnCryptor = document.querySelector("#btnCriptografar");
var btnDescryp = document.querySelector("#btnDescriptografar");
var btnCopy = document.querySelector("#botao-copiar");
var drawAndText = document.querySelector("#drawAndText");
var outText = document.querySelector("#saidaDoTexto");

btnCryptor.addEventListener('click', function(){
    showOrHide();
    var typedText = areaText.value;
    var encryText = cryptoText(typedText);
    var encryTextArea = document.querySelector("#saidaDoTexto");
    encryTextArea.textContent = encryText;
});

btnDescryp.addEventListener("click", function(){
   
    var typedText = areaText.value;
    var decryText = decrypText(typedText);
    
    var encryTextArea = document.querySelector("#saidaDoTexto");
    encryTextArea.textContent = decryText;
});

btnCopy.addEventListener("click", async function(){
    let text = document.querySelector("#saidaDoTexto").innerHTML;
    navigator.clipboard.writeText(text);
    
});

function cryptoText(text){
    var result = text.replace(/e/gi, 'enter') 
    result = result.replace(/i/gi, 'imes') 
    result = result.replace(/a/gi, 'ai') 
    result = result.replace(/o/gi, 'ober')
    result = result.replace(/u/gi, 'ufat')
   
    return result
}

function decrypText(text){
    var result = text.replace(/enter/gi, 'e') 
    result = result.replace(/imes/gi, 'i') 
    result = result.replace(/ai/gi, 'a') 
    result = result.replace(/ober/gi, 'o')
    result = result.replace(/ufat/gi, 'u')
   
    return result

}

function showOrHide(){
    
    drawAndText.classList.add('fadeOut');
    drawAndText.remove();
}

