import React from 'react';
import { PropTypes } from "prop-types";

//const Location = (props) => {
const Location = ({city}) => {
    //const city = props.city; 
    // destructuring:
    //const {city} = props;

    //console.log(props);
    //debugger;
    return (<div>
        <h1>
            {city}
        </h1>
        </div>);
};

Location.propTypes ={
    city: PropTypes.string
}

export default Location;