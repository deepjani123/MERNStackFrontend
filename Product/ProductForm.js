import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

class ProductForm extends React.Component {
    
    //function to call add product api
    submitProduct(event) {
        event.preventDefault();
        
        axios.post("http://localhost:4000/products", {
            productName: this.refs.productName.value,
            productDescription: this.refs.productDescription.value,
            productPrice: this.refs.productPrice.value
        })
        .then((response) => {
            console.log(response)
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
                    <h1 className="center"> Add a new Product</h1>
                    <form className="col s12" onSubmit={this.submitProduct.bind(this)}>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="productName" ref="productName" type="text" />
                                <label for="productName">Product Name</label>
                            </div>
                            <div class="input-field col s6">
                                <input id="productPrice" ref="productPrice" type="text" />
                                <label for="productPrice">Product Price</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="productDescription" ref="productDescription" type="text" />
                                <label for="productDescription">Product Description</label>
                            </div>
                        </div>
                        <button className="button waves-effect waves-light" type="submit" name="action">Add product</button>


                    </form>
                </div>
            </div>
      
         );
    }
}
 
export default withRouter(ProductForm);