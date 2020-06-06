import React from 'react';
import {Link} from 'react-router-dom';
import M from 'materialize-css';

class Navigation extends React.Component {

    //to get the drop down menu
    componentDidMount() {
        M.AutoInit();
    }

    render() {
        return (
            <div>
                <nav>
                    <ul id="dropdown1" class="dropdown-content">
                        <li><Link to="/addproduct"> Add New Product</Link></li>
                        <li><Link to="/viewproducts"> View Products</Link></li>
                    </ul>

                    <div class="nav-wrapper">
                        <a href="#!" className="brand-logo"><Link to="/viewproducts"> MERN </Link></a>
                        <ul class="right hide-on-med-and-down">
                            <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Products<i class="material-icons right"></i></a></li>
                            <li><Link to="/viewcustomers">Customers</Link></li>
                            <li><Link to="/login">logout</Link></li>

                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navigation;