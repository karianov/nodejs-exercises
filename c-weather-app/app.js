const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=7be3e52a938d826432fcae3d8332ea80&query=Bogota&units=m';

request({ url: url, json: true }, (error, response, body) => {
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
