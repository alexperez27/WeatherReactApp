import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import { CLOUD, CLOUDY, SUN, SNOW, WINDY } from '../../../constants/weathers';
import { PropTypes } from "prop-types";

const WeatherData = ({ data }) => {
    const { temperature, weatherState, humidity, wind } = data;
    return (
        <div>
            <WeatherTemperature temperature={temperature} weatherState={weatherState}></WeatherTemperature>
            <WeatherExtraInfo humidity={humidity} wind={wind}></WeatherExtraInfo>
        </div>
    )
};

WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number,
        weatherState: PropTypes.string,
        humidity: PropTypes.number,
        wind: PropTypes.string
    })
}

export default WeatherData;