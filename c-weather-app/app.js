const request = require('postman-request');

const weatherStackUrl =
  'http://api.weatherstack.com/current?access_key=7be3e52a938d826432fcae3d8332ea80&query=Bogota&units=m';

request({ url: weatherStackUrl, json: true }, (error, response, body) => {
  const weatherMeasure = response.body.current;
  console.log(
    weatherMeasure.weather_descriptions[0] +
      '. It is currently ' +
      weatherMeasure.temperature +
      ' degrees out. It feels like ' +
      weatherMeasure.feelslike +
      ' degrees out.'
  );
});

// HTTP request challenge
const placeName = 'Los Angeles';
const mapboxUrl =
  'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
  placeName +
  '.json?access_token=pk.eyJ1Ijoia2V2aW5yaWFubyIsImEiOiJja2ZuN2Vyd2UxcTI0MzFwbTh1NjJjejN2In0.SPtK8iZqQJ0ZtjwIzyFM2A&limit=1';

request({ url: mapboxUrl, json: true }, (error, response, body) => {
  const place = response.body.features[0];
  console.log(place.place_name + '.');
  console.log('Longitude: ' + place.center[0]);
  console.log('Latitude: ' + place.center[1]);
});
