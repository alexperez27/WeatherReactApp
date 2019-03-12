import React from 'react';
import WeatherLocation from "../../components/WeatherLocation/index";
import PropTypes from 'prop-types';

const LocationList = ({cities, onSelectedLocation}) => {

    const handleWeatherLocationClick = city => {
        console.log("handleWeatherLocationClick");
        onSelectedLocation(city);
    };

    const strToComponent = cities => {
        cities.map((city, index) => (<WeatherLocation index={index}
                                                      city={city}
                                                      onWeatherLocationClick={() => handleWeatherLocationClick(city)}/>));
    };
    return (<div>
        {/*{strToComponent(cities)}*/}
        {cities.map((city, index) => (<WeatherLocation index={index}
                                                       city={city}
                                                       onWeatherLocationClick={() => handleWeatherLocationClick(city)}/>))}
    </div>);
};


LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func
}

export default LocationList;
