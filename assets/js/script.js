// The below list allows us to translate an input country name into an ISO 3166 country code
// Credit to incredimike on Git Hub https://gist.github.com/incredimike/1469814
// Minimally altered
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
    // We get our input data from the text boxes
    const cityInput = document.getElementById("cityInput").value.trim();
    const countryInput = document.getElementById("countryInput").value.trim();
    // We run the getCurrentWeather function using the input data
    getCurrentWeather(cityInput, countryInput);
})

// The below function gathers our weather data with OpenWeather's APIs
function getCurrentWeather (cityInput = "", countryInput = "") {
    // Displaying our container when weather data is fetched
    const weatherDataMainContainer = document.getElementById("weatherDataMainContainer")
    weatherDataMainContainer.classList.remove('invisible')
    // Taking our city input and trimming it
    const city = cityInput.trim();
    // Taking our country input and trimming it
    const countryCode = countryInput.trim();
    // My API key for OpenWeather
    const apiKey = "87ad64c572e097f561cf3c5bd1718cde";
    // Declaring our apiUrl variable for the functions below
    let apiUrl;
    // Stating that if a user enters a country, then:
    if(countryCode) {
        // We include the city, country, and API key in our geocoding API URL request
        apiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city},${countryCode}&limit=1&appid=${apiKey}`
    } else {
        // Or if they don't include a country, we just include the city and API key in our geocoding API URL request
        apiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`
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
            const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

            // We create a fetch request using the weather API URL from above
            fetch(weatherApiUrl)
                // If we get a response, we turn it into a Javascript object
                .then(response => response.json())
                // We take that object data and will translate it into HTML elements of the current weather and the forecast
                .then(weatherData => {
                    // The below function will use the weather data
                    displayWeather(weatherData);
                    // We run our saveSearches function to save our city and countryCode values
                    saveSearches(city, countryCode);
                })
                // If the fetch request fails the we log that to the console
                .catch(error => console.log('Error getting weather data: ', error));
            // We run our getForecast function using the lattitude and longitude variables from our geocoding fetch
            getForecast(lat, lon)
        })
        .catch(error => console.log('Error getting weather data: ', error));

}
// Getting our forecast data
function getForecast(lat, lon) {
    const apiKey = "87ad64c572e097f561cf3c5bd1718cde";
    const forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    // Fetching data with API and passing the data to our displayForecast function
    fetch(forecastApiUrl)
        .then(response => response.json())
        .then(forecastData => {
            displayForecast(forecastData.list);
        })
        .catch(error => console.log('Error getting weather data: ', error))
}

// The below parses the current weather data into HTML elements
function displayWeather(weatherData) {
    const weatherDataMain = document.getElementById("weatherDataMainContainer");
    weatherDataMain.innerHTML = "";

    const celsius = weatherData.main.temp;
    const fahrenheit = (celsius * (9/5)) + 32;

    const weatherHeaderMain = document.createElement('div');
    weatherHeaderMain.setAttribute('id', 'weatherHeaderMain')

    const weatherDisplay = document.createElement('h3');
    weatherDisplay.textContent = `${weatherData.name} Weather`;

    const weatherTemperature = document.createElement('p');
    weatherTemperature.textContent = `Temperature: ${celsius.toFixed(0)}°C / ${fahrenheit.toFixed(0)}°F`;

    const weatherDescription = document.createElement('p');
    weatherDescription.textContent = `Description: ${weatherData.weather[0].description}`;

    const weatherHumidity = document.createElement('p');
    weatherHumidity.textContent = `Humidity: ${weatherData.main.humidity}%`;

    const weatherWindSpeed = document.createElement('p');
    weatherWindSpeed.textContent = `Wind Speed: ${weatherData.wind.speed} m/s`;

    const weatherIconWrapper = document.createElement('p');
    const weatherIconCode = weatherData.weather[0].icon;
    const weatherIconUrl = `https://openweathermap.org/img/wn/${weatherIconCode}.png`;
    const weatherIcon = document.createElement('img');
    weatherIcon.setAttribute('src', weatherIconUrl)
    weatherIcon.setAttribute('alt', 'weather icon');
    // Appending HTML elements to the DOM
    weatherIconWrapper.appendChild(weatherIcon)
    weatherHeaderMain.appendChild(weatherDisplay);
    weatherHeaderMain.appendChild(weatherIconWrapper);
    weatherDataMain.appendChild(weatherHeaderMain);
    weatherDataMain.appendChild(weatherTemperature);
    weatherDataMain.appendChild(weatherDescription);
    weatherDataMain.appendChild(weatherHumidity);
    weatherDataMain.appendChild(weatherWindSpeed);
}
// Displaying our forecast data
function displayForecast(forecast) {
    // Finding the forecast contianer and clearing it
    const forecastContainerHTML = document.getElementById("weatherForecastDataContainer");
    forecastContainerHTML.innerHTML = "";
    // Forecast data is gathered in 3-hour data points. We consolidate each consecutive set of 8 for
    // each of the five days of forecast data
    for (let i = 0; i < forecast.length; i += 8) {
        
        const dayForecast = forecast[i];
        // Translating unix timecode to milliseconds
        const dateForecast = new Date(dayForecast.dt * 1000);
        // Displaying a shortened day (e.g. Mon, Tue, Wed)
        const dayOfWeekForecast = dateForecast.toLocaleDateString('en-US', { weekday: 'short'});
        // Declaring our weather data sums for our averages
        let totalTemperature = 0;
        let totalHumidity = 0;
        let totalWindSpeed = 0;
        // Adding each of our weather data points in its set of 8
        for (let j = i; j < i + 8; j++) {
            totalTemperature += forecast[j].main.temp;
            totalHumidity += forecast[j].main.humidity;
            totalWindSpeed += forecast[j].wind.speed;
        }
        // Averaging each set of 8
        const celsiusForecast = totalTemperature / 8;
        const fahrenheitForecast = (celsiusForecast * (9/5)) + 32;
        const humidityForecast = totalHumidity / 8;
        const windSpeedForecast = totalWindSpeed / 8;
        // Taking the condition from the 3rd, 11th, 19th, 27th, and 35th indexes (roughly halfway in each
        // set of 8)
        const weatherConditionForecast = forecast[i + 3].weather[0].main;
        // Creating our HTML elements
        const forecastHTML = document.createElement('div');
        forecastHTML.setAttribute('class', 'forecastDisplay');

        const dayOfWeekForecastHTML = document.createElement('p');
        dayOfWeekForecastHTML.setAttribute('class', 'forecastDay');
        dayOfWeekForecastHTML.textContent = dayOfWeekForecast;

        const temperatureForecastHTML = document.createElement('p');
        temperatureForecastHTML.textContent = `${celsiusForecast.toFixed(0)}°C / ${fahrenheitForecast.toFixed(0)}°F`;
        temperatureForecastHTML.classList.add('forecastSubtext')

        const weatherConditionForecastHTML = document.createElement('p');
        weatherConditionForecastHTML.textContent = weatherConditionForecast
        weatherConditionForecastHTML.classList.add('forecastSubtext')

        const humidityForecastHTML = document.createElement('p');
        humidityForecastHTML.textContent = `Humidity: ${humidityForecast.toFixed(0)}%`;
        humidityForecastHTML.classList.add('forecastSubtext')
    
        const windSpeedForecastHTML = document.createElement('p');
        windSpeedForecastHTML.textContent = `Wind Speed: ${windSpeedForecast.toFixed(2)} m/s`;
        windSpeedForecastHTML.classList.add('forecastSubtext')

        const forecastHeaderHTML = document.createElement('p')
        forecastHeaderHTML.classList.add('forecastHeader')

        const forecastIconWrapper = document.createElement('p')
        forecastIconWrapper.classList.add('forecastIconWrapper')
        const forecastIconCode = forecast[i].weather[0].icon;
        const forecastIconUrl = `https://openweathermap.org/img/wn/${forecastIconCode}.png`;
        const forecastIcon = document.createElement('img');
        forecastIcon.setAttribute('src', forecastIconUrl)
        forecastIcon.setAttribute('alt', 'weather icon');

        forecastIconWrapper.appendChild(forecastIcon);
        forecastHeaderHTML.appendChild(dayOfWeekForecastHTML);
        forecastHeaderHTML.appendChild(forecastIconWrapper);
        forecastHTML.appendChild(forecastHeaderHTML);
        forecastHTML.appendChild(temperatureForecastHTML);
        forecastHTML.appendChild(weatherConditionForecastHTML);
        forecastHTML.appendChild(humidityForecastHTML);
        forecastHTML.appendChild(windSpeedForecastHTML);
        forecastContainerHTML.appendChild(forecastHTML);
    };
}
// Saving our searches to local data
function saveSearches(city, country) {
    // Declaring our searchHistory variable and gathering any local storage data. If none exists,
    // we create an empty array
    let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    // If any location within our stored search history is searched again, we move it
    // to the top of the search history instead of duplicating it
    searchHistory = searchHistory.filter(search => !(search.city === city && search.country === country))
    searchHistory.unshift({ city, country });
    // Limiting our search history to 7 entries
    searchHistory = searchHistory.slice(0, 7)
    // Saving our search history
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    // Calling our displaySearchHistory function to update searches to the HTML once they're made
    displaySearchHistory();
}
// Displaying our search history data in the DOM
function displaySearchHistory() {
    const searchHistoryContainer = document.querySelector('.searchHistory');
    searchHistoryContainer.innerHTML = "";

    const searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    // Making each search history entry a button that can call a search for the same variables
    // when it's clicked
    searchHistory.forEach(search => {
        const button = document.createElement('button');
        button.textContent = `${search.city}, ${search.country}`;
        button.addEventListener('click', function() {
            getCurrentWeather(search.city, search.country);
        });

        searchHistoryContainer.appendChild(button);
    })
}
// On page load, we display search history and make our weatherDataMainContainer invisible
window.onload = function() {
    displaySearchHistory();
    const weatherDataMainContainer = document.getElementById("weatherDataMainContainer")
    weatherDataMainContainer.classList.add('invisible')
}