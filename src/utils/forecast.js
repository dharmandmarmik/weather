const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=31959dc57589631d1487a88e13a8d624' + '&query=' + latitude + ',' + longitude + '&units=f'
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            console.log(body)
            // callback(undefined, `<table><tr><td>weather_descriptions</td><td>${body.current.weather_descriptions}</td></tr><tr><td>Time</td><td>${body.location.localtime}</td></tr><tr><td>Is Day?</td><td>${body.current.is_day}</td></tr><tr><td>Temperature</td><td>${body.current.temperature}</td></tr><tr><td>humidiity </td><td>${body.current.humidity}</td></tr><tr><td>wind speed </td><td>${body.current.wind_speed}</td></td></tr><tr><td>degreeOfWind </td><td>${body.current.wind_degree}</td></tr><tr><td>WindDir</td><td>${body.current.wind_dir}</td></tr><tr><td>RainProbability </td><td>${body.current.precip}</td></tr><tr><td>Visibility</td><td>${body.current.visibility}</td></tr><tr><td>Pressure </td><td>${body.current.pressure}</td></tr><tr><td>Cloudcover </td><td>${body.current.cloudcover}</td></tr><tr><td>UV Index </td><td>${body.current.uv_index}</td></tr><tr><td>Precipitation </td><td>${body.current.precip}</td></tr></table>`)
            callback(undefined, `<table class="table"><thead><th scope="col">Weather description</th><th scope="col">Time</th><th scope="col">Is Day?</th><th scope="col">Temperature</th><th scope="col">Humidity</th><th scope="col">Wind Speed</th><th scope="col">WindOfDegree</th><th scope="col">WindDir</th><th scope="col">RainProbability</th><th scope="col">Visibility</th><th scope="col">pressure</th><th scope="col">cloudCover</th><th scope="col">UV index</th><th scope="col">Precipitation</th></thead><tbody><td>${body.current.weather_descriptions}</td><td>${body.location.localtime}</td><td>${body.current.is_day}</td><td>${body.current.temperature}</td><td>${body.current.humidity}</td><td>${body.current.wind_speed}</td><td>${body.current.wind_degree}</td><td>${body.current.wind_dir}</td><td>${body.current.precip}</td><td>${body.current.visibility}</td><td>${body.current.pressure}</td><td>${body.current.cloudcover}</td><td>UV Index </td><td>${body.current.precip}</td></tbody></table>`)
        }
    })
}

module.exports = forecast