import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";
//import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import LocationListContainer from "./containers/LocationListContainer";
import ForecastExtendedContainer from "./containers/ForecastExtendedContainer"

const cities = [
    "Managua, Nic",
    "Matagalpa, Nic"
];

class App extends Component {

    render() {

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
                                <LocationListContainer
                                    index={new Date().getTime()}
                                    cities={cities}/>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Paper elevation={2}>
                                <div className='detail'>
                                    <ForecastExtendedContainer/>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

App.propTypes = {}

export default App;


