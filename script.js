let haberListeEleman = document.querySelector("#row");
let yukleniyor = document.querySelector("#yukleniyor");



setTimeout(() => {
    fetch("https://hn.algolia.com/api/v1/search?query=chatgpt")
        .then((bilgi) => bilgi.json())
        .then(veri => {
            let haberArray = veri.hits;

            haberArray.forEach(eleman => {
                let baslik = eleman.title;
                let yazar = eleman.author;
                let haberLink = eleman.url;
                let yorumSayisi = eleman.num_comments;

                let yeniKolon = document.createElement("div");
                yeniKolon.classList.add("col-md-3"); //kolon uzunluğu 3'ün altına düştüğünde (telefonla giriş yapıldığında) kolonlar alt alta gözüksün.

                let haberSablonHTML = `
            <div class="card" style="width: 100%;">
            <div class="card-body">
              <h5 class="card-title">${baslik}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${yazar}</h6>

              <a href="${haberLink}" class="card-link">Haber bağlantısı</a>
              Yorum: <span>${yorumSayisi}</span>
            </div>
          </div>
            `

                yeniKolon.innerHTML = haberSablonHTML;
                haberListeEleman.append(yeniKolon);
                yukleniyor.classList.remove("spinner-border")
            });
        });
}, 3000);

