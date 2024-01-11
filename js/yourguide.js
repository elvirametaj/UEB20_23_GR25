var countryData = {
    poland: {
        name: "Poland",
        description: "Poland, a country nestled in the heart of Europe...",
        price: "$700",
        imagescr: "/images/polandbgimage.jpg",
        shortdescription:"Poland, a country adorned with breathtaking natural beauty, captivates visitors with its diverse landscapes and enchanting vistas. From the majestic Tatra Mountains in the south, where pristine alpine lakes mirror the towering peaks, to the picturesque Masurian Lakes region in the north, Poland offers a kaleidoscope of natural wonders Lush green forests blanket vast expanses of the countryside, revealing hidden gems like the Białowieża Forest, a UNESCO World Heritage site and Europe's last primeval forest. The Baltic Sea coastline introduces a different charm, with sandy beaches and serene coastal dunes stretching as far as the eye can see Polands numerous national parks, such as the Bieszczady and Karkonosze, showcase the countrys commitment to preserving its rich biodiversity. Tranquil lakes, meandering rivers, and rolling hills contribute to the countrys idyllic charm, inviting travelers to explore its untouched landscapes.",

        images: [
            '/images/poland.jpg',
            '/images/poland2.webp',
            '/images/nature-1.jpg',


        ]
    },
};

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

window.addEventListener('load', function () {
    var selectedCountry = getParameterByName('country');
    var country = countryData[selectedCountry];
    var countryNameElement = document.getElementById('countryName');
    var countryDescriptionElement = document.getElementById('countryDescription');
    var heroElement = document.getElementById('home');
    var shortDescriptionElement = document.getElementById('shortdescription');
    var imageRowElement = document.getElementById('imageRow');

    if (country) {
      
        countryNameElement.textContent = country.name;
        countryDescriptionElement.textContent = country.description;
        shortDescriptionElement.textContent = country.shortdescription;

        heroElement.style.backgroundImage = 'url(' + country.imagescr + ')';
        heroElement.style.backgroundSize = 'cover';

        country.images.forEach(function (imagePath) {
            var cardHtml = `
                <div class="col-md-4 mb-4">
                    <div class="card" style="width: 500px; height: 500px;">
                        <img src="${imagePath}" class="card-img-top" style="height: 300px; object-fit: cover;" alt="Image">
                        <div class="card-body">
                        </div>
                    </div>
                </div>
            `;
            var cardElement = document.createElement('div');
            cardElement.innerHTML = cardHtml;
            imageRowElement.appendChild(cardElement);
        });


        switch (selectedCountry) {
            case 'poland':
                // Your HTML for Poland specific details
                var polandDetailsHtml = `
                <div class="card" style="width=100%;">
                <div class="card-header">
                  Guide Plan
                </div>
                <div class="card-body">
                  <h5 class="card-title">Guide Plan </h5>
                  <p class="card-text">Visit Ploand starting from $700</p>
                  <a onclick="bookNow('Poland' , '700.00')" class="btn btn-primary">Book Now</a>
                </div>
              </div>
                `;
                var detailsElement = document.createElement('div');
                detailsElement.innerHTML = polandDetailsHtml;
                document.body.appendChild(detailsElement);
                break;
        }
    } else {
        countryNameElement.textContent = 'Country information not available.';
        countryDescriptionElement.textContent = '';
        shortDescriptionElement.textContent = '';
    }
});