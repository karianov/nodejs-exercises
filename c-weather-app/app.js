const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=7be3e52a938d826432fcae3d8332ea80&query=Bogota';

request(url, (error, response, body) => {
  // Response
  const weatherData = JSON.parse(response.body);
  console.log(weatherData.current);
  // Error (If OK then error is null)
  console.warn(error);
  // Body is response.body
  console.log();
  console.log(body);
  console.log();
});