# Creating a Weather-Gathering Application

## Utilizing OpenWeather APIs and Javascript to Gather and Display Weather Data

### Table of Contents

[Project Status](#project-status)

[Screenshots of the completed application](#screenshots-of-completed-site-build)

[Purpose](#purpose)

[Technologies Used](#technologies-used)

[HTML Elements](#html-elements)

[CSS Elements](#css-elements)

[Javascript](#javascript)

[License](#license)

[Acknowledgements](#acknowledgements)

## Project Status

**Complete**

[Git Hub Repository](https://github.com/aaguimond/module06-challenge-weather-dashboard)

[Live Task Board Page](https://aaguimond.github.io/module06-challenge-weather-dashboard/)

## Screenshots of Completed Site Build

**Below is a screenshot of the page**

![a screenshot of the weather dashboard page](/assets/screenshots/KanbanTaskBoardClean.png?raw=true)

## Purpose

This project's purpose was to integrate server-side API's and Javascript into a functional weather-data-gathering application.

## Technologies Used

This project was completed using [Git Bash](https://git-scm.com/about), [Visual Studio Code](https://code.visualstudio.com/) (with the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)), [Google Chrome](https://www.google.com/chrome/), [Git Hub](https://github.com/), and the [OpenWeather API](https://openweathermap.org/)

## HTML Elements

There are minimal HTML elements that are used by the application's Javascript functions to append the weather data to.

## CSS Elements

There are several media queries in place to keep the page responsive and elegant based on the viewport's size. Examples of the various designs can be seen above in the [page screenshots section](#screenshots-of-completed-site-build).

The page utilizes color gradients that emulate our sky. The main current weather container's gradient emulates the colors of a sunrise or sunset, while the forecast and header/sidebar elements resemble a clear blue sky.

## Javascript

The page uses quite a bit of Javascript logic. Among the functions are:

* Saving search data to local storage
    * Displaying the search data as buttons on the page that will request data from the OpenWeather API when clicked
* Displaying requested current weather and 5 day weather forecast data as card-like elements within the DOM

Extensive and detailed comments are present in each Javascript file for further clarification

## License

[MIT](https://opensource.org/license/mit)

## Acknowledgements

Thank you to my teachers and my classmates for guiding me on my educational journey.
Thank you to [incredimike](https://gist.github.com/incredimike/1469814) for their country code list.