var countryData = {
    poland: {
        name: "Poland",
        description: "Poland, a country nestled in the heart of Europe...",
        price: "$700",
        imagescr: "/images/polandgb.jpeg",
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

var selectedCountry = getParameterByName('country');

if (selectedCountry && countryData[selectedCountry]) {
    var country = countryData[selectedCountry];
    document.write('<h1>' + country.name + '</h1>');
    document.write('<p>' + country.description + '</p>');
    document.write('<p>Price: ' + country.price + '</p>');

    document.body.style.backgroundImage = 'url(' + country.imagescr + ')';
} else {
    document.write('<p>Country information not available.</p>');
}