var textArea = document.querySelector('textarea')
var btnEncript = document.querySelector('.btn-encript')
var btnUnencript = document.querySelector('.btn-unencript')
var btnCopy = document.getElementById('btn-copy')
var text = document.getElementById('text-message')
var textContainer = document.getElementById('text-content')
var textMessage = document.getElementById('text-message')
var hideElement = document.getElementById('hide')
var showElement = document.querySelector('.show')
var spanCrypt = document.getElementById('crypt-message')
var messageContainer = document.getElementById('message')
var message = ''
var cryptMessage = ''
//expresion regular para asegurar que el usuario ingrese unicamente espacios y letras minusculas
var regExpText = /^[a-z ]+$/
var aCrypt = "ai"
var eCrypt = "enter"
var iCrypt = "imes"
var oCrypt = "ober"
var uCrypt = "ufat"

function encriptText(){
    if(regExpText.test(textArea.value)){
        message = textArea.value
        textContainer.lastElementChild.innerHTML = ''
        for(var i = 0; i < message.length; i++){
            if(message[i] === "a"){
                cryptMessage = cryptMessage.concat(aCrypt)
            }else if(message[i] === "e"){
                cryptMessage = cryptMessage.concat(eCrypt)
            }else if(message[i] === "i"){
                cryptMessage = cryptMessage.concat(iCrypt)
            }else if(message[i] === "o"){
                cryptMessage = cryptMessage.concat(oCrypt)
            }else if(message[i] === "u"){
                cryptMessage = cryptMessage.concat(uCrypt)
            }else{
                cryptMessage = cryptMessage.concat(message[i])
            }
        }
        setTimeout(function(){
            showElement.classList.remove('show')
            showElement.classList.add('hide-element')
            hideElement.classList.remove('hide-element')    
            hideElement.classList.add('show-element')        
            textArea.value = ''
            spanCrypt.value = `${cryptMessage}`
        }, 500)
    }else{
        textContainer.lastElementChild.innerHTML = '<span style="color:red;">Debes escribir un texto para encriptar o desencriptar!</span>'
    }
}

function copyEncriptText(){
    spanCrypt.select()
    document.execCommand('copy')
    hideElement.lastElementChild.innerHTML = `<span style="color: green; background-color: #b0b0c5; margin-top:5px;">Texto copiado!</span>`
}



btnEncript.addEventListener('click', function(){
    encriptText()
})

btnCopy.addEventListener('click', function(){
    copyEncriptText()
})