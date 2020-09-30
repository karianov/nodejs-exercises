const request = require('postman-request');

const weatherStackUrl =
  'http://api.weatherstack.com/current?access_key=7be3e52a938d826432fcae3d8332ea80&query=4.59889,-74.08083&units=m';

request({ url: weatherStackUrl, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to weather service.');
  } else if (response.body.error) {
    console.log('Unable to find location');
  } else {
    const weatherMeasure = response.body.current;
    console.log(
      weatherMeasure.weather_descriptions[0] +
        '. It is currently ' +
        weatherMeasure.temperature +
        ' degrees out. It feels like ' +
        weatherMeasure.feelslike +
        ' degrees out.'
    );
  }
});

// HTTP request challenge
const placeName = 'Bogota';
const mapboxUrl =
  'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
  placeName +
  '.json?access_token=pk.eyJ1Ijoia2V2aW5yaWFubyIsImEiOiJja2ZuN2Vyd2UxcTI0MzFwbTh1NjJjejN2In0.SPtK8iZqQJ0ZtjwIzyFM2A&limit=1';

request({ url: mapboxUrl, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to location service.');
  } else if (response.body.features.length === 0) {
    console.log('Unable to find the location. Try with a different search.');
  } else {
    const place = response.body.features[0];
    console.log(place.place_name + '.');
    console.log('Longitude: ' + place.center[0]);
    console.log('Latitude: ' + place.center[1]);
  }
});
