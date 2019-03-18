import React, {Component} from 'react';
import LocationList from "../components/WeatherLocation/LocationList";
import {connect} from "react-redux";
import {setCity, setSelectedCity} from '../actions/index';
import PropTypes from 'prop-types'

class LocationListContainer extends Component {
    handleSelectionLocation = city => {
        this.props.dispatchSetCity(city);
    }

    render() {
        return (
            <LocationList
                index={new Date().getTime()}
                cities={this.props.cities}
                onSelectedLocation={this.handleSelectionLocation}/>
        );
    }
}

LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired
};

const mapDispatchToPropsActions = dispatch => (
    {
        dispatchSetCity: value => dispatch(setSelectedCity(value))
    }
);

export default connect(null, mapDispatchToPropsActions)(LocationListContainer);