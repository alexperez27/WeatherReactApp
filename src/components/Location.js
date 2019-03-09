import React from 'react';

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

export default Location;