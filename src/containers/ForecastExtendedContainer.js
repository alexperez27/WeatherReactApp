import React, {Component} from 'react';
import ForecastExtended from "../components/ForecastExtended";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class ForecastExtendedContainer extends Component {
    render() {
        return (
            this.props.city ?
                <ForecastExtended city={this.props.city}/> :
                ""
        );
    }
}

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired
}

//const mapStateToProps = ({city}) => ({city});

const mapStateToProps = state => ({
    city: state.city
})

export default connect(mapStateToProps, null)(ForecastExtendedContainer);