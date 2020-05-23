//URL and API Key for GeoNames
const geonamesBaseURL =
  "https://secure.geonames.org/searchJSON?formatted=true&q=";
const geonamesUsername = "heyjpipe";

//URL and API Key for WeatherBit
const weatherbitBaseURL = "https://api.weatherbit.io/v2.0/current?city=";
const weatherbitAPIKey = "6513abecb492407fad70352bcec6bf0f";

//URL and API Key for Pixabay
const pixabayURL = "https://pixabay.com/api/";
const pixabayAPIKey = "16710760-b7853649eb64652cdef2e1597";

//URL for travel-app API
const isLocalEnvironment =
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1";

const baseURL = isLocalEnvironment
  ? "http://localhost:8000"
  : "https://udacity-capstone-travel-app.herokuapp.com/";

const getGeoData = async (city) => {
  if (!city) alert("Please enter a valid city name");
  const geonamesEndpoint = `${geonamesBaseURL}${city}&username=${geonamesUsername}`;
  try {
    const response = await fetch(geonamesEndpoint);
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

const getWeatherData = async (city) => {
  if (!city) alert("Please enter a valid city name");
  const weatherbitEndpoint = `${weatherbitBaseURL}${city}&key=${weatherbitAPIKey}`;
  try {
    const response = await fetch(weatherbitEndpoint);
    if (response) return response.json();
  } catch (error) {
    console.error(error);
  }
};

const getPixabayImage = async (location) => {
  try {
    const pixabayEndpoint = `${pixabayURL}?key=${pixabayAPIKey}&q=${location}&image_type=photo&pretty=true&category=places`;
    let response = await fetch(pixabayEndpoint);
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

const getTrips = async () => {
  try {
    const trips = await fetch(`${baseURL}/trips`);
    return trips.json();
  } catch (error) {
    console.error(error);
  }
};

const postTrip = async (trip) => {
  try {
    const trips = await fetch(`${baseURL}/trips`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ trip }),
    });
    return trips.json();
  } catch (error) {
    console.error(error);
  }
};

const deleteTrip = async (tripId) => {
  try {
    const trips = await fetch(`${baseURL}/trips/${tripId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return trips.json();
  } catch (error) {
    console.error(error);
  }
};

export {
  getGeoData,
  getWeatherData,
  getPixabayImage,
  getTrips,
  postTrip,
  deleteTrip,
};