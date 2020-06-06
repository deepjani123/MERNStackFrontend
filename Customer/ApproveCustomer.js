import React from 'react';
import axios from 'axios';
import Navigation from '../Navigation/Navigation';
import {withRouter} from 'react-router-dom';

class ApproveCustomer extends React.Component {

    //constructor
    constructor(props) {
        super(props);
        var isApp= (this.props.match.params.isapprove === "true");
        this.state = {
            selectedOption: isApp
        }

        this.handleOptionChange = this.handleOptionChange.bind(this);
    }


    //call approve function api on form action
    approveCustomer(event) {
        event.preventDefault();
        console.log("INSIDE Approve :");
        
        
        
        axios.put("http://localhost:4000/customer/" + this.props.match.params.value, {
            cusApproved: this.state.selectedOption
        })
        .then((response) => {
            console.log(response);
            this.props.history.push("/viewcustomers");

        })
        .catch((error) => {
            console.log(error);
        });
    }

    //function to handle radio button change value
    handleOptionChange(changeEvent) {
        
        this.setState({ selectedOption: changeEvent.target.value }, () => {
            console.log(this.state.selectedOption, 'changed value');
          }); 
    }
    
    render() {
        return (
            <div>
                <Navigation />
                    <div> 
                            <div class="row">
                                <h4 className="center"> Approve Customer</h4>
                                <form onSubmit={this.approveCustomer.bind(this)}>
                                    <p>
                                        <label>
                                        <input name="group1"  value="true" type="radio" onChange={this.handleOptionChange.bind(this)} />
                                            <span>True</span>
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                        <input name="group1" type="radio" value="false" onChange={this.handleOptionChange.bind(this)} />
                                            <span>False</span>
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            <button className="button waves-effect waves-light" type="submit" name="action">Approve Customer</button>
                                        </label>
                                    </p>
                                </form>
                            </div>
                    </div>
                
            </div>

        );
    }
}
 
export default withRouter(ApproveCustomer);