import React from 'react';
import {Link} from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import axios from 'axios';

class ProductList extends React.Component {
  //constructor
    constructor(props) {
        super(props);
        this.state = {
          products: [],
          currentProduct: {},
          test: true
        }

      }

      //populate products with products api
    componentDidMount() {
        const url = "http://localhost:4000/products";
        axios.get(url)
        .then((Response) => {
          this.setState ({
            products: Response.data
          })
        })
        .catch((error) => {
          console.log(error);
        });
    }


    
    render() {  
        return (
            <div>
                <div>
                    <Navigation />
                </div>

                <div>
                    <table className="striped center">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Product Price</th>
                                <th>Update Price</th>
                                <th>Delete Product</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.products.map((item) => (
                                <tr key={item._id}>
                                    <td>{item.productName}</td>
                                    <td>{item.productPrice}</td>
                                    <td><Link to={`/updateprice/${item._id}`}> Update Price</Link></td>
                                    <td><Link to={`/deleteproduct/${item._id}`}> Delete Product</Link></td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        );

    }
}
export default ProductList;