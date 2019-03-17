import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import LocationList from "./components/WeatherLocation/LocationList";
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";
//import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import ForecastExtended from './components/ForecastExtended'

const cities = [
    "Managua, Nic",
    "Matagalpa, Nic"
];

class App extends Component {

    constructor() {
        super();
        this.state = {city: undefined}
    }

    handleSelectionLocation = city => {
        console.log("handleSelectionLocation", city);
        this.setState({city});
    }

    render() {
        const {city} = this.state;
        /*<MuiThemeProvider>
            </MuiThemeProvider>*/
        return (
            <div className="App">
                <Grid container>
                    <Grid item xs={12}>Titulo
                    </Grid>
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <Paper>
                                <LocationList
                                    index={new Date().getTime()}
                                    cities={cities}
                                    onSelectedLocation={this.handleSelectionLocation}/>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Paper elevation={2}>
                                <div className='detail'>
                                    {city ? <ForecastExtended city={city}/> : "Seleccione una ciduad"}
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default App;
