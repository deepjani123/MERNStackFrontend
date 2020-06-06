import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

//delete customer api call
const DeleteCustomer = (props) => {

         axios.delete("http://localhost:4000/customer/" + props.match.params.value)
         .then((response) => {
             console.log(response)
         })
         .catch((error) => {
             console.log(error);
         });
    return (

        <div>
            Customer deleted successfully
            <Link to="/viewcustomers">View Customers</Link>
        </div>
        
        // event.preventDefault();

    );
}

export default DeleteCustomer;