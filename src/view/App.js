import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
// import Catalog from './components/Catalog';

import Account from './pages/Account';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Item from './pages/Item';
import Products from './pages/Products';
import Register from './pages/Register';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Route exact path="/" component={Home}/>
          <Route path="/account" component={Account}/>
          <Route path="/checkout" component={Checkout}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/item" component={Item}/>
          <Route path="/products" component={Products}/>
          <Route path="/register" component={Register}/>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
