import React from 'react';
import './App.css';
import {ZipCodeEntry} from "./ZipCodeEntry";
import {CurrentConditions} from "./CurrentConditions";
import {ADD_ZIPCODE, REMOVE_ZIPCODE} from "./state";
import {connect} from "react-redux";

function mapStateToProps(state) {
    return {
        zipcodes: state.zipcodes
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        addZip: (zip) => dispatch({type: ADD_ZIPCODE, zipcode: zip}),
        removeZip: (zip) => dispatch({type: REMOVE_ZIPCODE, zipcode: zip})
    };
}

class App extends React.Component {

    render() {
        return (
                <div className="container-fluid">
                    <ZipCodeEntry onZipAdded={this.props.addZip}/>
                    <div>
                        {this.props.zipcodes.map(zip =>
                            <CurrentConditions zipcode={zip} onClose={() => this.props.removeZip(zip)} /> )}
                    </div>
                </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
