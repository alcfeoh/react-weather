import React from 'react';

export class CurrentConditions extends React.Component {

    render() {
        const {zipcode} = this.props;
        return (
            <div className="well flex">
                <div>
                    <h3>Rancho Cordova ({zipcode})</h3>
                    <h4>Current conditions: Clouds</h4>
                    <h4>Temperatures today:</h4>
                    <p>
                        Current 58
                        - Max 65
                        - Min 48
                    </p>
                    <p>
                        <a href="/forecast/95742">Show 5-day forecast for Rancho Cordova</a>
                    </p>
                </div>
                <div>
                    <span className="close">×</span>
                    <img src="https://www.angulartraining.com/images/weather/sun.png" />
                </div>
            </div>
        );
    }
}