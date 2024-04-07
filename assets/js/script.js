// The below list allows us to translate an input country name into an ISO 3166 country code
// Credit to incredimike on Git Hub https://gist.github.com/incredimike/1469814
const countryListAlpha2 = {
    "AF": "Afghanistan",
    "AL": "Albania",
    "DZ": "Algeria",
    "AS": "American Samoa",
    "AD": "Andorra",
    "AO": "Angola",
    "AI": "Anguilla",
    "AQ": "Antarctica",
    "AG": "Antigua and Barbuda",
    "AR": "Argentina",
    "AM": "Armenia",
    "AW": "Aruba",
    "AU": "Australia",
    "AT": "Austria",
    "AZ": "Azerbaijan",
    "BS": "Bahamas (the)",
    "BH": "Bahrain",
    "BD": "Bangladesh",
    "BB": "Barbados",
    "BY": "Belarus",
    "BE": "Belgium",
    "BZ": "Belize",
    "BJ": "Benin",
    "BM": "Bermuda",
    "BT": "Bhutan",
    "BO": "Bolivia (Plurinational State of)",
    "BQ": "Bonaire, Sint Eustatius and Saba",
    "BA": "Bosnia and Herzegovina",
    "BW": "Botswana",
    "BV": "Bouvet Island",
    "BR": "Brazil",
    "IO": "British Indian Ocean Territory (the)",
    "BN": "Brunei Darussalam",
    "BG": "Bulgaria",
    "BF": "Burkina Faso",
    "BI": "Burundi",
    "CV": "Cabo Verde",
    "KH": "Cambodia",
    "CM": "Cameroon",
    "CA": "Canada",
    "KY": "Cayman Islands (the)",
    "CF": "Central African Republic (the)",
    "TD": "Chad",
    "CL": "Chile",
    "CN": "China",
    "CX": "Christmas Island",
    "CC": "Cocos (Keeling) Islands (the)",
    "CO": "Colombia",
    "KM": "Comoros (the)",
    "CD": "Congo (the Democratic Republic of the)",
    "CG": "Congo (the)",
    "CK": "Cook Islands (the)",
    "CR": "Costa Rica",
    "HR": "Croatia",
    "CU": "Cuba",
    "CW": "Curaçao",
    "CY": "Cyprus",
    "CZ": "Czechia",
    "CI": "Côte d'Ivoire",
    "DK": "Denmark",
    "DJ": "Djibouti",
    "DM": "Dominica",
    "DO": "Dominican Republic (the)",
    "EC": "Ecuador",
    "EG": "Egypt",
    "SV": "El Salvador",
    "GQ": "Equatorial Guinea",
    "ER": "Eritrea",
    "EE": "Estonia",
    "SZ": "Eswatini",
    "ET": "Ethiopia",
    "FK": "Falkland Islands (the) [Malvinas]",
    "FO": "Faroe Islands (the)",
    "FJ": "Fiji",
    "FI": "Finland",
    "FR": "France",
    "GF": "French Guiana",
    "PF": "French Polynesia",
    "TF": "French Southern Territories (the)",
    "GA": "Gabon",
    "GM": "Gambia (the)",
    "GE": "Georgia",
    "DE": "Germany",
    "GH": "Ghana",
    "GI": "Gibraltar",
    "GR": "Greece",
    "GL": "Greenland",
    "GD": "Grenada",
    "GP": "Guadeloupe",
    "GU": "Guam",
    "GT": "Guatemala",
    "GG": "Guernsey",
    "GN": "Guinea",
    "GW": "Guinea-Bissau",
    "GY": "Guyana",
    "HT": "Haiti",
    "HM": "Heard Island and McDonald Islands",
    "VA": "Holy See (the)",
    "HN": "Honduras",
    "HK": "Hong Kong",
    "HU": "Hungary",
    "IS": "Iceland",
    "IN": "India",
    "ID": "Indonesia",
    "IR": "Iran (Islamic Republic of)",
    "IQ": "Iraq",
    "IE": "Ireland",
    "IM": "Isle of Man",
    "IL": "Israel",
    "IT": "Italy",
    "JM": "Jamaica",
    "JP": "Japan",
    "JE": "Jersey",
    "JO": "Jordan",
    "KZ": "Kazakhstan",
    "KE": "Kenya",
    "KI": "Kiribati",
    "KP": "Korea (the Democratic People's Republic of)",
    "KR": "Korea (the Republic of)",
    "KW": "Kuwait",
    "KG": "Kyrgyzstan",
    "LA": "Lao People's Democratic Republic (the)",
    "LV": "Latvia",
    "LB": "Lebanon",
    "LS": "Lesotho",
    "LR": "Liberia",
    "LY": "Libya",
    "LI": "Liechtenstein",
    "LT": "Lithuania",
    "LU": "Luxembourg",
    "MO": "Macao",
    "MG": "Madagascar",
    "MW": "Malawi",
    "MY": "Malaysia",
    "MV": "Maldives",
    "ML": "Mali",
    "MT": "Malta",
    "MH": "Marshall Islands (the)",
    "MQ": "Martinique",
    "MR": "Mauritania",
    "MU": "Mauritius",
    "YT": "Mayotte",
    "MX": "Mexico",
    "FM": "Micronesia (Federated States of)",
    "MD": "Moldova (the Republic of)",
    "MC": "Monaco",
    "MN": "Mongolia",
    "ME": "Montenegro",
    "MS": "Montserrat",
    "MA": "Morocco",
    "MZ": "Mozambique",
    "MM": "Myanmar",
    "NA": "Namibia",
    "NR": "Nauru",
    "NP": "Nepal",
    "NL": "Netherlands (the)",
    "NC": "New Caledonia",
    "NZ": "New Zealand",
    "NI": "Nicaragua",
    "NE": "Niger (the)",
    "NG": "Nigeria",
    "NU": "Niue",
    "NF": "Norfolk Island",
    "MP": "Northern Mariana Islands (the)",
    "NO": "Norway",
    "OM": "Oman",
    "PK": "Pakistan",
    "PW": "Palau",
    "PS": "Palestine, State of",
    "PA": "Panama",
    "PG": "Papua New Guinea",
    "PY": "Paraguay",
    "PE": "Peru",
    "PH": "Philippines (the)",
    "PN": "Pitcairn",
    "PL": "Poland",
    "PT": "Portugal",
    "PR": "Puerto Rico",
    "QA": "Qatar",
    "MK": "Republic of North Macedonia",
    "RO": "Romania",
    "RU": "Russian Federation (the)",
    "RW": "Rwanda",
    "RE": "Réunion",
    "BL": "Saint Barthélemy",
    "SH": "Saint Helena, Ascension and Tristan da Cunha",
    "KN": "Saint Kitts and Nevis",
    "LC": "Saint Lucia",
    "MF": "Saint Martin (French part)",
    "PM": "Saint Pierre and Miquelon",
    "VC": "Saint Vincent and the Grenadines",
    "WS": "Samoa",
    "SM": "San Marino",
    "ST": "Sao Tome and Principe",
    "SA": "Saudi Arabia",
    "SN": "Senegal",
    "RS": "Serbia",
    "SC": "Seychelles",
    "SL": "Sierra Leone",
    "SG": "Singapore",
    "SX": "Sint Maarten (Dutch part)",
    "SK": "Slovakia",
    "SI": "Slovenia",
    "SB": "Solomon Islands",
    "SO": "Somalia",
    "ZA": "South Africa",
    "GS": "South Georgia and the South Sandwich Islands",
    "SS": "South Sudan",
    "ES": "Spain",
    "LK": "Sri Lanka",
    "SD": "Sudan (the)",
    "SR": "Suriname",
    "SJ": "Svalbard and Jan Mayen",
    "SE": "Sweden",
    "CH": "Switzerland",
    "SY": "Syrian Arab Republic",
    "TW": "Taiwan",
    "TJ": "Tajikistan",
    "TZ": "Tanzania, United Republic of",
    "TH": "Thailand",
    "TL": "Timor-Leste",
    "TG": "Togo",
    "TK": "Tokelau",
    "TO": "Tonga",
    "TT": "Trinidad and Tobago",
    "TN": "Tunisia",
    "TR": "Turkey",
    "TM": "Turkmenistan",
    "TC": "Turks and Caicos Islands (the)",
    "TV": "Tuvalu",
    "UG": "Uganda",
    "UA": "Ukraine",
    "AE": "United Arab Emirates (the)",
    "GB": "United Kingdom of Great Britain and Northern Ireland (the)",
    "UM": "United States Minor Outlying Islands (the)",
    "US": "United States of America (the)",
    "US": "America",
    "US": "United States",
    "US": "USA",
    "UY": "Uruguay",
    "UZ": "Uzbekistan",
    "VU": "Vanuatu",
    "VE": "Venezuela (Bolivarian Republic of)",
    "VN": "Viet Nam",
    "VG": "Virgin Islands (British)",
    "VI": "Virgin Islands (U.S.)",
    "WF": "Wallis and Futuna",
    "EH": "Western Sahara",
    "YE": "Yemen",
    "ZM": "Zambia",
    "ZW": "Zimbabwe",
    "AX": "Åland Islands"
};

// The below is an event listener to our get weather button
document.getElementById("getWeather-button").addEventListener("click", function() {
    getWeather();
})

// The below function gathers our weather data with OpenWeather's APIs
function getWeather () {
    // Taking our city input and trimming it
    const city = document.getElementById("cityInput").value.trim();
    // Taking our country input and trimming it
    const countryCode = document.getElementById("countryInput").value.trim();
    // My API key for OpenWeather
    const apiKey = "87ad64c572e097f561cf3c5bd1718cde";
    // Declaring our apiUrl variable for the functions below
    let apiUrl;
    // Stating that if a user enters a country, then:
    if(countryCode) {
        // We include the city, country, and API key in our geocoding API URL request
        apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${countryCode}&limit=1&appid=${apiKey}`
    } else {
        // Or if they don't include a country, we just include the city and API key in our geocoding API URL request
        apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`
    }

    // We create a fetch request with our geocoding URL from above
    fetch(apiUrl)
        // Then we store the response as a Javascript object
        .then(response => response.json())
        // Then we take that data
        .then(data => {
            // And if the data value is found to be falsy, we create HTML elements that display on the
            // page stating that we haven't found a response for the city that the user entered
            if (data.length === 0) {
                const weatherDataHTML = document.getElementById("weatherData");
                const weatherNoResponse = document.createElement('p');
                weatherNoResponse.textContent = "No weather data found";
                weatherDataHTML.appendChild(weatherNoResponse);

                return;
            }

            // If we do find city data, then we take the lattitude and longitude from the response and
            // create a weather API URL using those coordinates
            const lat = data[0].lat;
            const lon = data[0].lon;
            const weatherApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${apiKey}&units=metric`;

            // We create a fetch request using the weather API URL from above
            fetch(weatherApiUrl)
                // If we get a response, we turn it into a Javascript object
                .then(response => response.json())
                // We take that object data and will translate it into HTML elements of the current weather and the forecast
                .then(weatherData => {
                    // The below function will use the current weather data
                    displayWeather(weatherData.current)
                    // The below function will use the forecast for the next five days
                    displayForecast(weatherData.daily.slice(1,6));
                })
                // If the fetch request fails the we log that to the console
                .catch(error => console.log('Error getting weather data: ', error));
        })
        .catch(error => console.log('Error getting weather data: ', error));
}

// The below parses the current weather data into HTML elements
function displayWeather(currentWeather) {
    const celsius = weatherData.main.temp;
    const fahrenheit = (celsius * (9/5)) + 32;

    const weatherDataMain = document.getElementById("weatherData");
    weatherDataMain.setAttribute('class', 'weatherDataMain')

    const weatherHeaderMain = document.createElement('div');
    weatherHeaderMain.setAttribute('class', 'weatherHeaderMain')

    const weatherDisplay = document.createElement('h3');
    weatherDisplay.textContent = weatherData.name;

    const weatherTemperature = document.createElement('p');
    weatherTemperature.textContent = `Temperature: ${celsius.toFixed(0)}°C / ${fahrenheit.toFixed(0)}°F`;

    const weatherDescription = document.createElement('p');
    weatherDescription.textContent = `Description: ${weatherData.weather[0].description}`;

    const weatherHumidity = document.createElement('p');
    weatherHumidity.textContent = `Humidity: ${weatherData.main.humidity}%`;

    const weatherWindSpeed = document.createElement('p');
    weatherWindSpeed.textContent = `Wind Speed: ${weatherData.wind.speed} m/s`;

    // The following conditional statements give us the appropriate icon for the weather
    let weatherIcon = new Image();
    
    if (weatherData.weather[0].main === "Thunderstorm" ||
        (weatherData.weather[0].id >= 200 && weatherData.weather[0].main <= 299)) {
        weatherIcon.src = "https://openweathermap.org/img/wn/11d.png"
    } else if (weatherData.weather[0].main === "Drizzle" ||
        (weatherData.weather[0].id >= 300 && weatherData.weather[0].main <= 399)) {
        weatherIcon.src = "https://openweathermap.org/img/wn/09d.png"
    } else if (weatherData.weather[0].main === "Rain" &&
        (weatherData.weather[0].id >= 500 && weatherData.weather[0].main <= 504)) {
        weatherIcon.src = "https://openweathermap.org/img/wn/10d.png"
    } else if (weatherData.weather[0].main === "Rain" &&
        (weatherData.weather[0].id === 511)) {
        weatherIcon.src = "https://openweathermap.org/img/wn/13d.png"
    } else if (weatherData.weather[0].main === "Rain" &&
        (weatherData.weather[0].id >= 520 && weatherData.weather[0].main <= 599)) {
        weatherIcon.src = "https://openweathermap.org/img/wn/09d.png"
    } else if (weatherData.weather[0].main === "Snow" ||
        (weatherData.weather[0].id >= 600 && weatherData.weather[0].main <= 699)) {
        weatherIcon.src = "https://openweathermap.org/img/wn/13d.png"
    } else if (weatherData.weather[0].main === "Mist" ||
        (weatherData.weather[0].main === "Smoke") ||
        (weatherData.weather[0].main === "Haze") ||
        (weatherData.weather[0].main === "Dust") ||
        (weatherData.weather[0].main === "Fog") ||
        (weatherData.weather[0].main === "Sand") ||
        (weatherData.weather[0].main === "Ash") ||
        (weatherData.weather[0].main === "Squall") ||
        (weatherData.weather[0].main === "Tornado") ||
        (weatherData.weather[0].id >= 700 && weatherData.weather[0].main <= 799)) {
        weatherIcon.src = "https://openweathermap.org/img/wn/50d.png"
    } else if (weatherData.weather[0].main === "Clear" ||
        (weatherData.weather[0].id === 800)) {
        weatherIcon.src = "https://openweathermap.org/img/wn/01d.png"
    } else if (weatherData.weather[0].main === "Clouds" &&
        (weatherData.weather[0].id === 801)) {
        weatherIcon.src = "https://openweathermap.org/img/wn/02d.png"
    } else if (weatherData.weather[0].main === "Clouds" &&
        (weatherData.weather[0].id === 802)) {
        weatherIcon.src = "https://openweathermap.org/img/wn/03d.png"
    } else if (weatherData.weather[0].main === "Clouds" &&
        (weatherData.weather[0].id >= 803 && weatherData.weather[0].id <= 804)) {
        weatherIcon.src = "https://openweathermap.org/img/wn/04d.png"
    } else {
        weatherIcon.src = "https://openweathermap.org/img/wn/03d.png"
    }

    const weatherIconWrapper = document.createElement('p')

    weatherIconWrapper.appendChild(weatherIcon)
    weatherHeaderMain.appendChild(weatherDisplay);
    weatherHeaderMain.appendChild(weatherIconWrapper);
    weatherDataMain.appendChild(weatherHeaderMain);
    weatherDataMain.appendChild(weatherTemperature);
    weatherDataMain.appendChild(weatherDescription);
    weatherDataMain.appendChild(weatherHumidity);
    weatherDataMain.appendChild(weatherWindSpeed);
}

function displayForecast(forecast) {

}