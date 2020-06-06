import React from 'react';
import './App.css';
import ProductList from './Product/ProductList';
import ProductForm from './Product/ProductForm';
import UpdatePriceForm from './Product/UpdatePriceForm';
import { BrowserRouter, Route } from 'react-router-dom';
import DeleteProduct from './Product/DeleteProduct';
import CustomerList from './Customer/CustomerList';
import DeleteCustomer from './Customer/DeleteCustomer';
import ApproveCustomer from './Customer/ApproveCustomer';
import UserLogin from './User/UserLogin';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userAuth: false
    }

    this.changeUserAuth=this.changeUserAuth.bind(this);
  }

  changeUserAuth() {
    this.setState({
      userAuth: !this.state.userAuth,
    })
  }


  render () {
    return (
      <div>


            <BrowserRouter>
              {/* user links */}
              <Route path="/login" render={(props) => <UserLogin changeUserAuth={this.changeUserAuth} isAuthed={true}/>}></Route>


              <Route path="/viewproducts" render={(props) => <ProductList userAuth={this.state.userAuth} products={this.state.products} isAuthed={true}></ProductList>}></Route>
              <Route path="/addproduct" component={ProductForm}></Route>
              <Route path="/updateprice/:value" component={UpdatePriceForm}></Route>
              <Route path="/deleteproduct/:value" component={DeleteProduct}></Route>

              {/*customer links*/}
              <Route path="/viewcustomers" render={(props) => <CustomerList customers={this.state.customers} updateCurrentCustomer={this.updateCurrentCustomer} isAuthed={true}></CustomerList>}></Route>
              <Route path="/deletecustomer/:value" component={DeleteCustomer}></Route>
              <Route path="/approvecustomer/:value/:isapprove" component={ApproveCustomer}></Route>

            </BrowserRouter>


            </div>

    );

  }
}

export default App;
