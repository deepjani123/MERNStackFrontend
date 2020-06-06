import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class UserLogin extends React.Component {
    
    //verify user api call
    userLogin(event) {
        event.preventDefault();
        
        axios.post("http://localhost:4000/login", {
            Email: this.refs.Email.value,
            password: this.refs.password.value
        })
        .then((response) => {
            console.log(response.status)

            if(response.status===200)
            {
                this.props.changeUserAuth();
                this.props.history.push("/viewproducts");


            }
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render() { 
        return (
            
            <div class="row">
                <h1 className="center"> User Login</h1>
                <form className="col s12" onSubmit={this.userLogin.bind(this)}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="Email" ref="Email" type="text" />
                            <label for="Email">Email</label>
                        </div>
                        <div class="input-field col s6">
                            <input id="password" ref="password" type="password" />
                            <label for="password">password</label>
                        </div>
                    </div>
                    <div className="row">
                        <button className="button waves-effect waves-light" type="submit" name="action">Login</button>
                    </div>
                    
                    
                </form>
            </div>
      
         );
    }
}
 
export default withRouter(UserLogin);