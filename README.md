# :sunny: [Weather-Forecast](https://weather-forecast-g9kz.onrender.com/)

It's a web application developed using Vue 3 to provide weather forecasts. To access the application, visit this [URL](https://weather-forecast-g9kz.onrender.com/),

## 🚀 Getting Started

### Project Setup
To set up this project on your local machine, please follow the detailed instructions provided [here](Documentation/ProjectSetup.md).

## 🎯 Key Features

### Frontend

- **Hourly Forcast**: Users can view hourly forecasts. It will show a few hours cards after the current time, with a 3-hour gap.
- **Daywise Forcast**: Users can view day-wise forecasts. It will show the forecast for 5 days including the current day.
- **City Search**: Users can use the dropdown list to search for a city and view its weather information. It will provide the hourly and daily forecast for the specified city.
- **Refresh**: Users can refresh the current data and obtain the most up-to-date weather information by clicking the refresh button at the top.
- **Home**: Users can use the Home icon to reset the Home Page to the three preset cities with the most recent weather information.

### Backend

  The backend provides a RESTful API to provide a list of cities. For the information of all APIs, refer to [here](/Documentation/APIDetails.md).

## 🛠️ Technologies Used

### 🖥️ Frontend

- [Vue 3](https://vuejs.org/guide/introduction.html)
- [Vuetify 3](https://vuetifyjs.com/en/components/all/#containment)
- [Vuex](https://v3.vuex.vuejs.org/)
- [npm](https://docs.npmjs.com/getting-started/what-is-npm)
- [Material Icons](https://pictogrammers.com/library/mdi/)
- [Axios](https://github.com/axios/axios)
- [ESLint](https://eslint.org/docs/latest/use/getting-started)

### 🛠️ Backend

- [Node](https://nodejs.org/docs/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/docs/)

## 🖥️ UI SCreens

- ### Home Page

  - This is the weather web application's landing page.
  - By default, it will provide weather information for the first city picked from the cities tabs.
  - It will retrieve the list of cities internally by using the backend API for cities. It will display a progress bar on the UI until the API's successful response.
  
  ![Home page](![image](https://github.com/DiptiPrabhavale11/Weather-Forecast-Vue/assets/113642858/fc36e142-8070-4a6f-9448-9bf1e023e314)

- ### Hourly Forecast

  - This is the Hourly Forecast that shows a few hours cards after the current time, with a 3-hour gap.
  - It shows Temperature in Celsius, Precipitation percentage, Weather image, and Time.
  - These weather images are fetched from the following URL

    `http://openweathermap.org/img/wn/${image name from weather API response.icon}@2x.png`

  ![image](https://github.com/DiptiPrabhavale11/Weather-Forecast-Vue/assets/113642858/904c31f5-84eb-4d84-9925-01a512dcca84)

- ### Daywise Forecast

  - This is the Daywise Forecast for 5 days including the current day.
  - It will show the Weather image, Date, Weather description, Minimum, Maximum & Feels like Temperature in Celsius, and precipitation percentage.

  ![image](https://github.com/DiptiPrabhavale11/Weather-Forecast-Vue/assets/113642858/2df4087f-197a-4e39-8b9e-6269cc515a36)

- ### City Selection, Tabs, and Refresh

  - Users can search a city from the search list of the cities.
  - It will add a new tab to the existing list when a new city is selected from the list.
  - It will populate new weather results based on the newly selected city.
  - If the user erases the entire city name from the search text field, the tab selection is reset to the first tab, and just three preset cities will be displayed
  - If the user deletes some of the text and exits the search, the previously selected city will remain in the search field.
  - The Refresh button will retrieve new weather results and display updated weather information as well as the time at the footer.

  ![image](https://github.com/DiptiPrabhavale11/Weather-Forecast-Vue/assets/113642858/ac6eb38a-a281-423a-889d-8eda2338771a)

- ### Application Header

  - This is the Application Header with the Home button and Search option for cities.
  - On click of the Home button, the tab selection is reset to the first tab, and just three preset cities will be displayed.
  - It will show weather details for the first city on the list.

  ![image](https://github.com/DiptiPrabhavale11/Weather-Forecast-Vue/assets/113642858/9795ae7e-e9f3-4d01-ae0a-a58bff53943d)

- ### Application Footer

  - This is the Application Footer which includes the Date and Time when the record was last updated.

  ![image](https://github.com/DiptiPrabhavale11/Weather-Forecast-Vue/assets/113642858/9c5f3f0a-a335-4d6d-9980-035f596c2e58)
