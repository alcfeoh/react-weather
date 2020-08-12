import React from 'react';

export class ZipCodeEntry extends React.Component {

    state = {
        zipcode: '',
        error: false
    };

    updateZipcode = (event) => {
        const {value} = event.target;
        this.setState({zipcode: value, error: false});
        if (value.length != 5 || isNaN(Number(value))) {
            this.setState({error: true});
        }
    }

    addZipCode = () => {
        if (! this.state.error) {
            this.props.onZipAdded(this.state.zipcode)
        }
    }

    render() {
        const {onZipAdded} = this.props;
        return (
            <div className="well">
                <h2>Enter a zipcode:</h2>
                <input className="form-control" placeholder="Zipcode" type="text" id="addLocation"
                      value={this.state.zipcode} onChange={this.updateZipcode} />
                <br/>
                {this.state.error && <div className="alert alert-danger" role="alert">
                    Please enter a 5-digit zipcode
                </div>}
                <button className="btn btn-primary" id="addLocationBtn"
                        onClick={this.addZipCode}>
                    Add location
                </button>
            </div>
        );
    }
}