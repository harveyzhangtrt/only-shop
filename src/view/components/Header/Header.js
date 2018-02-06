import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
    state = { show: '' }

    handleShow = (e) => {
        console.log(e.target.id);
        this.setState({
            show: e.target.id
        })
    }
    handleHide = () => {
        this.setState ({
            show: ''
        })
    }
    
    render() { 
        return(
            <div className="header-bottom">
            <div className="container">
                <div className="header">
                    <div className="top-nav">
                        <ul className=" memenu skyblue">
                            <li className="grid">
                                <Link to='/' className="active brand-name">Only Shop</Link>
                            </li>
                            <li className="grid"onMouseEnter={this.handleShow} onMouseOut={this.handleHide} >
                                <Link to='/products' className="active">Men</Link>
                            </li>
                            <li className="grid">
                                <Link to='/products' className="active">Woman</Link>
                            </li>
                            <li className="grid">
                                <Link to='/contact' className="active">Contact</Link>
                            </li>
                            <li className="grid">
                                <Link to='/account' className="active"><i class="fa fa-user fa-lg" aria-hidden="true"></i></Link>
                            </li>
                            <li className="grid">
                                <Link to='/checkout' className="active"><i class="fa fa-shopping-cart fa-lg" aria-hidden="true"></i></Link>
                            </li>
                            
                        </ul>
                        
                     </div>
                     <div className="pull-right"> 
                    <form className="form-inline  search-form" >
                        <input type="text" className="form-control" id="search" placeholder="Browse..."/>
                        <button type="submit" className="btn btn-info" style={{marginLeft: 5}}><i class="fa fa-search" aria-hidden="true"></i></button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Header;