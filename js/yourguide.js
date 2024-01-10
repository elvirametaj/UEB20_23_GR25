var countryData = {
    poland: {
        name: "Poland",
        description: "Poland, a country nestled in the heart of Europe...",
        price: "$700",
        imagescr: "/images/polandbgimage.jpg",
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
    var countryNameElement = document.getElementById('countryName');
    var countryDescriptionElement = document.getElementById('countryDescription');
    var heroElement = document.getElementById('home');

    if (selectedCountry && countryData[selectedCountry]) {
        var country = countryData[selectedCountry];
        countryNameElement.textContent = country.name;
        countryDescriptionElement.textContent = country.description;

        heroElement.style.backgroundImage = 'url(' + country.imagescr + ')';
        heroElement.style.backgroundSize = 'cover';

    } else {
        countryNameElement.textContent = 'Country information not available.';
        countryDescriptionElement.textContent = '';
    }
});