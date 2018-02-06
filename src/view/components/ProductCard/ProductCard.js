import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class ProductCard extends Component {
    //get product info as  props
    //name, price, discount, image
    render() {
        const {name, price, discount, image} = this.props;
        return (
            <div className="product-left">
                <div className="product-main">
                    <Link to="/item" className="mask"><img className="img-fluid zoom-img" src={image} alt="" /></Link>
                    <div className="product-bottom">
                        <h3>{name}</h3>
                        <h4>
                            <span className="item_price" style={{marginLeft: -2}}>$ {price}</span>
                            <i className="fa fa-cart-plus fa-lg pull-right" style={{marginRight: 20}} aria-hidden="true"></i>
                        </h4>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductCard;