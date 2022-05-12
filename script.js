const inputText = document.querySelector(".input-text")
const message = document.querySelector(".input-text-area")

function btnEncrypt(){
    const encryptedText = encrypt(inputText.value)
    message.value = encryptedText;
    document.getElementById("textRes").removeAttribute("hidden");
    document.getElementById("copyButton").removeAttribute("hidden");
    document.getElementById("imgMunheco").style.display = "none";
    document.getElementById("msg1").style.display = "none";
    document.getElementById("msg2").style.display = "none";
}

function encrypt(StringToEncrypt){
    let matrixCode = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    StringToEncrypt = StringToEncrypt.toLowerCase();
    for(let i= 0; i < matrixCode.length; i++) {
        if (StringToEncrypt.includes(matrixCode[i][0])) {
            StringToEncrypt = StringToEncrypt.replaceAll(matrixCode[i][0], matrixCode[i][1])
        }
    }
    
    return StringToEncrypt;
}

function btnDecrypt(){
    const decryptedText = decrypt(inputText.value)
    message.value = decryptedText;
    document.getElementById("textRes").removeAttribute("hidden");
    document.getElementById("copyButton").removeAttribute("hidden")
    document.getElementById("imgMunheco").style.display = "none";
    document.getElementById("msg1").style.display = "none";
    document.getElementById("msg2").style.display = "none";
}

function decrypt(StringToDecrypt){
    let matrixDecode = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];
    StringToDecrypt = StringToDecrypt.toLowerCase();
    for(let i= 0; i < matrixDecode.length; i++) {
        if (StringToDecrypt.includes(matrixDecode[i][0])) {
            StringToDecrypt = StringToDecrypt.replaceAll(matrixDecode[i][0], matrixDecode[i][1])
        }
    }
    return StringToDecrypt;
}

function btnCopy() {
    let copyText = document.querySelector(".input-text-area");
    copyText.select();
    document.execCommand("copy");
    alert("Texto copiado");
}
  