import { render } from '@testing-library/react';
import React, {Component} from 'react';
import "./RadioButton.css";

class RadioButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: "Swedish Citizen"
        };
    }
    handleOptionChange = changeEvent => {
        this.setState({
            selectedOption: changeEvent.target.value
        });
    };
    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();
        console.log("You have submitted:", this.state.selectedOption);
    };

render() {
        return (
            <div className="container">
            <div className="row mt-5">
            <div className="col-sm-12">
                <form onSubmit={this.handleFormSubmit}>
                <div className="form-check">
                    <label>
                    <input
                        type="radio"
                        name="react-tips"
                        value="Swedish Citizen"
                        checked={this.state.selectedOption === "Swedish Citizen"}
                        onChange={this.handleOptionChange}
                        className="form-check-input"
                    />
                    Swedish Citizen
                    </label>
                </div>
                <div className="form-check">
                    <label>
                    <input
                        type="radio"
                        name="react-tips"
                        value="EU Citizen"
                        checked={this.state.selectedOption === "EU Citizen"}
                        onChange={this.handleOptionChange}
                        className="form-check-input"
                    />
                    EU Citizen
                    </label>
                </div>
                <div className="form-check">
                    <label>
                    <input
                        type="radio"
                        name="react-tips"
                        value="Non-EU Citizen"
                        checked={this.state.selectedOption === "Non-EU Citizen"}
                        onChange={this.handleOptionChange}
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
