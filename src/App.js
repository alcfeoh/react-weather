import React from 'react';
import './App.css';
import {ZipCodeEntry} from "./ZipCodeEntry";

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
                <ul>
                    {this.state.zipcodes.map(zip => <li>{zip}</li>) }
                </ul>
            </div>

        );
    }

}

export default App;
