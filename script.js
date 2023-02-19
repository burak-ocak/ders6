let body = document.querySelector("body");

let prObje = new Promise( (basarili, basarisiz) => {
    //zaman alan işlemler burada kullanılır(sms göndermek vb)
    for(let i = 0; i < 100000; i++){

        console.log(i);
    }
    basarili("OK");
} );

prObje.then( (deger)=>{
    console.log("SMS gönderimi tamamlandı!" + deger);
    let h2 = document.createElement("h2");
    h2.textContent = "SMS gönderildi!";
    body.append(h2);
} )

//Promiseler içerisinde süre alan kodlar barındırır. İşlemler tamamlanınca negatif veya pozitif bir sonuç döndürürler.

//Programcılar, promiseleri dinleyerek, promiseler işini bitirince farklı işlemler yaptırmak üzere kodlarını yazabilirler.