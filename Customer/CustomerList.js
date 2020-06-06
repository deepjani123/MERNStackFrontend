import React from 'react';
import {Link} from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import axios from 'axios';

class CustomerList extends React.Component {

  //constructor
    constructor(props) {
        super(props);
        this.state = {
          customers: [],
          currentCustomer: {},
        }
    
      }

      //populate products array
    componentDidMount() {
        const custUrl = "http://localhost:4000/customers"
          //get customer data
          axios.get(custUrl)
            .then((Response) => {
              this.setState ({
                customers: Response.data
                
              })
            })
            .catch((error) => {
              console.log(error);
            });
      };


    render() {

        return ( 
            <div>
                <Navigation />
            <div>
                    <table className="striped center">
                        <thead>
                            <tr>
                                <th>Customer Name</th>
                                <th>Email</th>
                                <th>is Approved</th>
                                <th>Delete Customer</th>
                                <th>Approve Customer</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.customers.map((item) => (
                                <tr key={item._id}>
                                    <td>{item.cusName}</td>
                                    <td>{item.cusEmail}</td>
                                    <td>{JSON.stringify(item.cusApproved)}</td>
                                    <td><Link to={`/deletecustomer/${ item._id }`}>Delete Customer </Link></td>
                                    <td><Link to={`/approvecustomer/${ item._id }/${ item.cusApproved }`}> Approve Customer</Link></td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
    
}
 
export default CustomerList;