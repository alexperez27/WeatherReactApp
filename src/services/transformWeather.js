import {DRIZZLE, RAIN, SNOW, SUN, THUNDER} from '../constants/weathers.js';
import convert from 'convert-units';

const getTemp = kelvin => {
    return Number(convert(kelvin).from('K').to('C')).toFixed(2);
};

const getWeatherState = weather => {
    const {id} = weather;

    if (id < 300) {
        return THUNDER;
    } else if (id < 400) {
        return DRIZZLE;
    } else if (id < 600) {
        return RAIN;
    } else if (id < 700) {
        return SNOW;
    } else {
        return SUN;
    }
};

const transformWeather = weather_data => {
    const {humidity, temp} = weather_data.main;
    const {speed} = weather_data.wind;
    const weatherState = getWeatherState(weather_data.weather[0].main);
    const temperature = getTemp(temp);

    return {
        humidity,
        temperature: Number(temperature),
        weatherState,
        wind: `${speed} m/s`
    };
};

export default transformWeather;