# :desktop_computer: Configure and Run

## Backend

### Setting Up Your Development Environment

1) Install and configure Git
2) Install Node, NVM, Vue CLI
3) Install the IDE of your choice ( Webstorm, VS code, etc.)

### Downloading and Running the Project

#### Step-1: Connect and Clone

   Connect to GitHub and clone the repository in your local using the
   command ``` git clone https://github.com/DiptiPrabhavale11/Weather-Forecast.git ```

### Step-2: Setup Environment file (Backend)

Create a .env file to the project directory and configure the below Environment variables with values

- PORT = ***add port number***
- DEV_MONGODB_URI = ***add mongodb dev connection uri***
- TEST_MONGODB_URI = ***add mongodb test connection uri***
- PROD_MONGODB_URI = ***add mongodb prod connection uri***

### Step-3: Run the application locally

1) Go to the Weather-Forecast folder
2) Run ``` npm install ``` to install all the dependencies of the backend
3) Execute the command ``` npm run dev ``` or ``` npm start ``` . It will start the node server at the specified port number. For example <http://locahost:5001>

## Frontend

### Step-1: Setup Environment file

Create a .env file under the frontend folder and configure the below Environment variables with values

- VUE_APP_API_URL = ***add weather API URL*** For Example: `http://api.openweathermap.org/data/2.5/forecast`
- VUE_APP_API_KEY= ***add weather API app key***

### Step-2: Setup Frontend and run the application locally

1) Go to the folder frontend from the repository ``` cd ./frontend ```
2) Run ``` npm install ``` to install all the dependencies of the frontend
3) Execute the command ``` npm run serve ```. It will start the local server at <http://locahost:8080>
