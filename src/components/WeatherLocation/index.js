import React from 'react';
import Location from './Location.js';
import WeatherData from './WeatherData/index.js';
import { SUN } from '../../constants/weathers.js';
import transformWeather from "../../services/transformWeather.js";
import { CircularProgress } from 'material-ui';

const data = {
    temperature: 20,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s'
}

const data2 = {
    temperature: 30,
    weatherState: SUN,
    humidity: 20,
    wind: '20 m/s'
}

const location = "Managua, NI";
const api_key = "";
const api_weather = `https://openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`;

class WeatherLocation extends React.Component {

    constructor() {
        super();
        this.state = {
            city: "Managua",
            data: data
        }
    }

    handleUpdateClick = () => {
        fetch(api_weather)
            .then(data => {
                console.log(data);
                return data.json();
            }).then(weather_data => {
                const data = transformWeather(weather_data);
                this.setState({ data });
            })
            .catch(error => {
                console.warn("Error en la peticion:", error);
                const data = {
                    temperature: 20,
                    weatherState: SUN,
                    humidity: 10,
                    wind: '10 m/s'
                }
                this.setState({ data });
            });
        /*
    this.setState({
        //city: "Leon",
        data: data
    });*/
        console.log("Actualizado");
    }

    render = () => {
        const { city, data } = this.state;
        return (
            <div>
                <Location city={city} />
                {data ? <WeatherData data={data}></WeatherData> :
                    <CircularProgress size={60} thickness={7} />
                }
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
}

export default WeatherLocation;


