import { render } from '@testing-library/react';
import React, {Component} from 'react';
import "./RadioButton.css";

class RadioButton extends Component {
    // state which tells which selected radiobutton to render
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: "Swedish Citizen" //if swedish citizen is selected other options should be deselected
        };
    }
    // Handles the event change when user is selecting different radiobuttons
    handleOptionChange = changeEvent => {
        this.setState({
            selectedOption: changeEvent.target.value
        });
    };
    // Handles the submit event when user submits form
    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();
        console.log("You have submitted:", this.state.selectedOption); //Log in console on browser to check state
    };

render() {
        return (
            // Radio button elements
            <div className="container">
            <div className="row mt-5">
            <div className="col-sm-12">
                <form onSubmit={this.handleFormSubmit}>
                {/* First radiobutton */}
                <div className="form-check">
                    <label>
                    <input
                        type="radio"
                        name="radio-button"
                        value="Swedish Citizen"
                        checked={this.state.selectedOption === "Swedish Citizen"} //if true the state is swedish citizen
                        onChange={this.handleOptionChange} //change state if user clicks on radiobutton
                        className="form-check-input"
                    />
                    Swedish Citizen
                    </label>
                </div>
                {/* Second radiobutton */}
                <div className="form-check">
                    <label>
                    <input
                        type="radio"
                        name="radio-button"
                        value="EU Citizen"
                        checked={this.state.selectedOption === "EU Citizen"} //if true the state is eu citizen
                        onChange={this.handleOptionChange} //change state if user clicks on radiobutton
                        className="form-check-input"
                    />
                    EU Citizen
                    </label>
                </div>
                {/* Third radiobutton */}
                <div className="form-check">
                    <label>
                    <input
                        type="radio"
                        name="radio-button"
                        value="Non-EU Citizen"
                        checked={this.state.selectedOption === "Non-EU Citizen"} //if true the state is non-eu citizen
                        onChange={this.handleOptionChange} //change state if user clicks on radiobutton
                        className="form-check-input"
                    />
                    Non-EU Citizen
                    </label>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary mt-2" type="submit">
                    Save
                    </button>
                </div>
                </form>
            </div>
            </div>
        </div>
        );
    }
}

export default RadioButton;
