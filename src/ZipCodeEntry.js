import React from 'react';

export class ZipCodeEntry extends React.Component {

    state = { zipcode: ''};

    updateZipcode = (event) => {
        this.setState({zipcode: event.target.value})
    }

    render() {
        const {onZipAdded} = this.props;
        return (
            <div className="well">
                <h2>Enter a zipcode:</h2>
                <input className="form-control" placeholder="Zipcode" type="text" id="addLocation"
                      value={this.state.zipcode} onChange={this.updateZipcode} />
                <br/>
                <button className="btn btn-primary" id="addLocationBtn"
                        onClick={() => onZipAdded(this.state.zipcode)}>
                    Add location
                </button>
            </div>
        );
    }
}