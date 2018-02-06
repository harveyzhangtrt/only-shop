import React, { Component } from 'react';

class Account extends Component {
    state = {  }
    render() {
        return (
            <div className="account">
            <div className="container">
            <div className="account-top heading">
                    <h2>ACCOUNT</h2>
                </div>
                <div class="account-main">
                    <div className="row">
                    <div className="col account-left">
                        <h3  style={{marginBottom: 20}}>Login</h3>
                        <form className="form-group" >
                            <input className="form-control" placeholder="Email" type="text" required/>
                            <input className="form-control" placeholder="Password" type="password"  required/>
                            <div className="address">
                                <input className="btn btn-info" type="submit" value="Login"/>
                                <a className="forgot pull-right"  href="#">Forgot Your Password?</a>
                            </div>                    
                        </form>
                        
                    </div>
                    <div className="col account-right account-left">
                        <h3>New User? Create an Account</h3>
                        <p>By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.</p>
                        <a className="btn btn-info"  href="register.html">REGISTER</a>
                    </div>
                    <div className="clearfix"></div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Account;