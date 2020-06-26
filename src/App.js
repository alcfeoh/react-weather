import React from 'react';
import './App.css';
import {ZipCodeEntry} from "./ZipCodeEntry";
import {CurrentConditions} from "./CurrentConditions";

class App extends React.Component {

    state = {
        zipcodes: []
    }

    addZip = (zipcode) => {
        console.log('Adding zipcode', zipcode);
        this.setState(previousState => {
            return {zipcodes: [...previousState.zipcodes, zipcode]}
        });
    }

    render() {
        return (
            <div className="container-fluid">
                <ZipCodeEntry onZipAdded={this.addZip}/>
                <div>
                    {this.state.zipcodes.map(zip =>  <CurrentConditions zipcode={zip} /> )}
                </div>
            </div>

        );
    }

}

export default App;
