import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


class DeleteProduct extends React.Component {


        render() {
            //delete product api
            axios.delete("http://localhost:4000/product/" + this.props.match.params.value)
                .then((response) => {
                    console.log(response)
                })
                .catch((error) => {
                    console.log(error);
                });

            return (
                
                <div>
                    Product deleted successfully
                    <Link to="/viewproducts">View Products</Link>
                </div>
                
                // event.preventDefault();
        
            );        
        }
    
}

export default DeleteProduct;