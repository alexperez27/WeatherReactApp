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

class ForecastExtended extends Component {

    constructor() {
        super();
        this.state = {forecastData: null}
    }

    componentDidMount() {
        //fetch or axios
        this.updateCity(this.props.city);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.city !== this.props.city) {
            this.setState({forecastData: null});
            this.updateCity(nextProps.city);
        }
    }


    updateCity = city => {
        const url_forecast = `${OWM_FORECAST_URL}?q=${city}&appid=${OWM_API_KEY}`;

        fetch(url_forecast)
            .then(
                data => (data.json())
            ).then(
            weather_data => {
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                this.setState({forecastData});
            }
        )
    }

    renderForecastItemDays(forecastData) {
        //return <h1>Render items</h1>;
        return forecastData.map(forecast => (
            <ForecastItem
                key={`${forecast.weekDay}${forecast.hour}`}
                weekDay={forecast.weekDay}
                hour={forecast.hour}
                data={forecast.data}/>
        ));
    }

    renderProgress = () => {
        return <h3>Cargando pronostico extendido...</h3>
    }

    render() {
        const {city} = this.props;
        const {forecastData} = this.state;

        return (<div>
            <h2>Pronostico extendido para {city}</h2>
            {forecastData ?
                this.renderForecastItemDays(this.state.forecastData) :
                this.renderProgress()
            }
        </div>);
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string
}

export default ForecastExtended;