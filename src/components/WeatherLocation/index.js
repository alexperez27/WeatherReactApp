import React from 'react';
import Location from './Location.js';
import WeatherData from './WeatherData/index.js';
import {SUN, OWM_URL, OWM_API_KEY} from '../../constants/weathers.js';
import transformWeather from "../../services/transformWeather.js";
import {CircularProgress} from 'material-ui';
import {PropTypes} from "prop-types";
import './styles.css'

const data = {
    temperature: 20,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s'
}

class WeatherLocation extends React.Component {

    constructor({city}) {
        super();
        this.state = {
            city,
            data: data
        }
    }

    //componentWillMount(){}
    handleUpdateClick = () => {
        const api_weather = `${OWM_URL}?q=${this.state.city}&appid=${OWM_API_KEY}`;

        fetch(api_weather)
            .then(data => {
                return data.json();
            }).then(weather_data => {
            const data = transformWeather(weather_data);
            this.setState({data});
        })
            .catch(error => {
                console.warn("Error en la peticion:", error);
                const data = {
                    temperature: 20,
                    weatherState: SUN,
                    humidity: 10,
                    wind: '10 m/s'
                }
                this.setState({data});
            });
        /*
    this.setState({
        //city: "Leon",
        data: data
    });*/
        console.log("Actualizado");
    }

    render = () => {
        const {onWeatherLocationClick} = this.props;
        const {city, data} = this.state;
        return (
            <div className='weatherLocationCont' onClick={onWeatherLocationClick}>
                <Location city={city}/>
                {data ? <WeatherData data={data}/> :
                    <CircularProgress size={60} thickness={7}/>
                }
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
}

WeatherLocation.propTypes = {
    city: PropTypes.string,
    onWeatherLocationClick: PropTypes.func
}

export default WeatherLocation;


