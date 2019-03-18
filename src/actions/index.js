import {OWM_API_KEY, OWM_FORECAST_URL} from "../constants/weathers";
import transformForecast from "../services/transformForecast";

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

export const setCity = payload => ({type: SET_CITY, payload});
export const setForecastDatra = payload => ({type: SET_FORECAST_DATA, payload});

export const setSelectedCity = payload => {

    return dispatch => {
        const url_forecast = `${OWM_FORECAST_URL}?q=${payload}&appid=${OWM_API_KEY}`;

        //activar en el estado un indicador de busqueda de datos
        dispatch(setCity(payload));

        return fetch(url_forecast)
            .then(
                data => (data.json())
            ).then(
                weather_data => {
                    const forecastData = transformForecast(weather_data);
                    console.log(forecastData);

                    //modificar el estado con el resultado de la promie (fetch)
                    dispatch(setForecastDatra({city: payload, forecastData}))
                }
            );
    };
}