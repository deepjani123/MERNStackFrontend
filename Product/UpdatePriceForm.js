import React from 'react';
import axios from 'axios';
import Navigation from '../Navigation/Navigation';
import {withRouter} from 'react-router-dom';

class UpdatePriceForm extends React.Component {
    
    //update product api call
    updateProduct(event) {
        console.log("INSIDE UPADTING :");
        event.preventDefault();
        
        axios.put("http://localhost:4000/product/" + this.props.match.params.value, {
            productPrice: this.refs.productPrice.value
        })
        .then((response) => {
            console.log(response)
            alert('price updated');
            this.props.history.push("/viewproducts");
        })
        .catch((error) => {
            console.log(error);
        });
    }
    
    render() {
        return (
            <div>
                <Navigation />
                <div class="row">
                    <h4 className="center"> Update Price</h4>
                    <form className="col s12" onSubmit={this.updateProduct.bind(this)}>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="productPrice" ref="productPrice" type="text" />
                                <label for="productName">Enter New Price</label>
                            </div>
                        </div>
                        <div className="row">
                            <button className="button waves-effect waves-light" type="submit" name="action">Update product</button>
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}
 
export default withRouter(UpdatePriceForm);