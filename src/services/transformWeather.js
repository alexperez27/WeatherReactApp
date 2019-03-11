import { SUN } from '../constants/weathers.js';
import convert from 'convert-units';

const getTemp = kelvin => {
    return Number(convert(kelvin).from('K').to('C')).toFixed(2);
}

const getWeatherState = weather => {
    return SUN;
}

const transformWeather = weather_data => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = this.getWeatherState(this.weather);
    const temperature = this.getTemp(temp);

    const data = {
        humidity,
        temperature: temperature,
        weatherState,
        wind: `${speed} m/s`
    }

    return data;
}

export default transformWeather;