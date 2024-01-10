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
    portugal: {
        name: "Portugal",
        description: "Portugal, a country of diversity...",
        price: "$800",
        imagescr: "/images/portugalbg.jpg",
        shortdescription:"Portugal, a country blessed with enchanting landscapes, captivates visitors with its diverse natural beauty. From the golden beaches of the Algarve to the lush vineyards of the Douro Valley, Portugal offers a tapestry of scenic wonders. The rugged coastline is adorned with dramatic cliffs and hidden coves, providing breathtaking views of the Atlantic Ocean. Inland, rolling hills are dotted with picturesque villages and olive groves, while the majestic Serra da Estrela mountain range invites exploration with its pristine lakes and alpine landscapes. Portugal's natural beauty extends to its national parks, such as Peneda-Gerês, where dense forests, cascading waterfalls, and wildlife abound. Whether wandering through ancient cork oak forests or savoring the tranquility of the Azores' volcanic landscapes, Portugal invites travelers to immerse themselves in a world of captivating natural wonders.",
        images: [
            '/images/portugal1.jpg',
            '/images/portugal2.jpeg',
            '/images/portugal3.jpeg',


        ]
    },
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
    albania: {
        name: "Albania",
        description: "Albania, a country nestled in the heart of Europe...",
        price: "$500",
        imagescr: "/images/albaniabg.jpeg",
        shortdescription:"Albania, a hidden gem in the heart of the Balkans, unveils a tapestry of natural wonders that captivate the soul. The pristine beaches along the Albanian Riviera, kissed by the turquoise waters of the Adriatic and Ionian Seas, invite relaxation in tranquil coastal settings. Inland, the rugged landscapes of the Albanian Alps boast majestic peaks and pristine alpine lakes, offering a haven for hikers and nature enthusiasts. The tranquil shores of Lake Ohrid, a UNESCO World Heritage site, reflect the beauty of medieval towns nestled along its banks. Albania's diverse ecosystems include lush forests, such as the protected areas of Llogara Pass and Valbona Valley, where biodiversity thrives. From the historic landscapes of Butrint National Park to the untamed beauty of Theth National Park, Albania beckons travelers to discover its rich tapestry of natural wonders",
        images: [
            '/images/albania1.webp',
            '/images/albania2.jpeg',
            '/images/albania3.jpeg',


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
                <table class="table table-bordered" >
                <thead style="background-color:lightblue;color:white;">
                    <tr>
                        <th>Category</th>
                        <th>Medium Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Hotel</td>
                        <td>$100 - $200 per night</td>
                    </tr>
                    <tr>
                        <td>Restaurant</td>
                        <td>$15 - $30 per person</td>
                    </tr>
                    <!-- Add more rows for other categories -->
                </tbody>
            </table>
                `;
                var detailsElement = document.createElement('div');
                detailsElement.innerHTML = polandDetailsHtml;
                document.body.appendChild(detailsElement);
                break;

                case 'portugal':
                    var polandDetailsHtml = `
                    <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Medium Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Hotel</td>
                            <td>$80 - $150 per night</td>
                        </tr>
                        <tr>
                            <td>Restaurant</td>
                            <td>$12 - $25 per person</td>
                        </tr>
                        <tr>
                            <td>Transportation</td>
                            <td>$1.50 - $2.50 per ticket</td>
                        </tr>
                        <!-- Add more rows for other categories -->
                    </tbody>
                </table>
                    `;
                    case 'albania':
                        var polandDetailsHtml = `
                        <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Medium Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Hotel</td>
                                <td>$40 - $80 per night</td>
                            </tr>
                            <tr>
                                <td>Restaurant</td>
                                <td>$8 - $15 per person</td>
                            </tr>
                            <tr>
                                <td>Public Transportation</td>
                                <td>$0.50 - $1.50 per ticket</td>
                            </tr>
                            <!-- Add more rows for other categories -->
                        </tbody>
                    </table>
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