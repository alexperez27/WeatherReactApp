import React, {Component} from "react";
import PropTypes from 'prop-types';
import ForecastItem from "./ForecastItem";
import {OWM_API_KEY, OWM_FORECAST_URL} from "../constants/weathers";
import transformForecast from "../services/transformForecast";

const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes'
]

const data = {
    temperature: 10,
    humidity: 10,
    weatherState: 'normal',
    wind: 'normal'
}

const renderForecastItemDays = (forecastData) => {
    //return <h1>Render items</h1>;
    return forecastData.map(forecast => (
        <ForecastItem
            key={`${forecast.weekDay}${forecast.hour}`}
            weekDay={forecast.weekDay}
            hour={forecast.hour}
            data={forecast.data}/>
    ));
};

const renderProgress = () => {
    return <h3>Cargando pronostico extendido...</h3>
};

const ForecastExtended = ({city, forecastData}) => {
    console.log("ForecastExtended", {city, forecastData});
    //<h2 className='forecast-title'>Pronostico extendido para {city}</h2>
    return (
        <div>
            {
                city ?
                    <h2 className='forecast-title'>Pronostico extendido para {city}</h2> :
                    <h2 className='forecast-title'>Pronostico extendido para</h2>
            }
            {forecastData ?
                renderForecastItemDays(forecastData) :
                renderProgress()
            }
        </div>
    )
};

ForecastExtended.propTypes = {
    city: PropTypes.string,
    forecastData: PropTypes.array.isRequired
}

export default ForecastExtended;