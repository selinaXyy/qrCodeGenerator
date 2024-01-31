document.querySelector("#generate").addEventListener("click", generateQRCode);
document.querySelector(".download").addEventListener("click", downLoadImg);

function generateQRCode(){
    var userText = document.getElementById("userInput").value;
    var qrcodeContainer = document.getElementById("qrcode");
    qrcodeContainer.innerHTML = "";
    document.querySelector(".downloadURL").innerHTML = "";

    if (userText){
        var qrcode = new QRCode(qrcodeContainer, {
            text: userText,
            width: 200,
            height: 200,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });

        var downloadLink = document.createElement("a");
        downloadLink.id = "download";
        downloadLink.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"currentColor\" class=\"bi bi-download\" viewBox=\"0 0 16 16\"><path d=\"M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5\"/><path d=\"M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z\"/></svg> Download QR Code";
        document.querySelector(".downloadURL").appendChild(downloadLink);
        downLoadImg(downloadLink);
    }
}

function downLoadImg(link){
    var qrcodeCanvas = document.querySelector("#qrcode canvas");
    
    //convert canvas to data URL in PNG format (default)
    var qrcodeURL = qrcodeCanvas.toDataURL();
    link.href = qrcodeURL;

    //set filename
    link.download = "qrcode.png";
}