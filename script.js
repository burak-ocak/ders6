let kisiSayisiElemani = document.querySelector("#kisiSayisi");
let kisiListesiElemani = document.querySelector("#kisiListesi");

fetch("http://api.open-notify.org/astros.json")
.then( (bilgi) => bilgi.json() )
.then( (veri)=>{
    let kisiSayisi = veri.number;
    let KisiArray = veri.people;

    kisiSayisiElemani.innerHTML = kisiSayisi;

    kisiListesiElemani.innerHTML = "";

    KisiArray.forEach(eleman => {
        let adSoyad = eleman.name;

        let yeniLiElemani = document.createElement("li");
        yeniLiElemani.classList.add("list-group-item");
        yeniLiElemani.textContent = adSoyad;

        kisiListesiElemani.append(yeniLiElemani);
    });
} )