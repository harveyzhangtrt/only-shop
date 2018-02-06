import React, { Component } from 'react';
import ProductCard from '../ProductCard';

class ProductList extends Component {
    state = {  }
    //get products info as props
    //id, name, price, discount, image - each product
    products = [
        {id:1, name:"ring", price:"15.99", discount:"10", image: "https://ph-live-03.slatic.net/p/8/couple-rings-jewellry-925-silver-adjustable-lovers-ring-jewelry-e016-intl-1488362617-35999911-11b63fe9255066679aeb4bd0ede57a88-product.jpg"},
        {id:2, name:"ring", price:"15.99", discount:"10", image: "https://ph-live-03.slatic.net/p/8/couple-rings-jewellry-925-silver-adjustable-lovers-ring-jewelry-e016-intl-1488362617-35999911-11b63fe9255066679aeb4bd0ede57a88-product.jpg"},
        {id:3, name:"ring", price:"15.99", discount:"10", image: "https://ph-live-03.slatic.net/p/8/couple-rings-jewellry-925-silver-adjustable-lovers-ring-jewelry-e016-intl-1488362617-35999911-11b63fe9255066679aeb4bd0ede57a88-product.jpg"},
        {id:4, name:"ring", price:"15.99", discount:"10", image: "https://ph-live-03.slatic.net/p/8/couple-rings-jewellry-925-silver-adjustable-lovers-ring-jewelry-e016-intl-1488362617-35999911-11b63fe9255066679aeb4bd0ede57a88-product.jpg"},
        {id:5, name:"ring", price:"15.99", discount:"10", image: "https://ph-live-03.slatic.net/p/8/couple-rings-jewellry-925-silver-adjustable-lovers-ring-jewelry-e016-intl-1488362617-35999911-11b63fe9255066679aeb4bd0ede57a88-product.jpg"},
        {id:6, name:"ring", price:"15.99", discount:"10", image: "https://ph-live-03.slatic.net/p/8/couple-rings-jewellry-925-silver-adjustable-lovers-ring-jewelry-e016-intl-1488362617-35999911-11b63fe9255066679aeb4bd0ede57a88-product.jpg"},
        {id:7, name:"ring", price:"15.99", discount:"10", image: "https://ph-live-03.slatic.net/p/8/couple-rings-jewellry-925-silver-adjustable-lovers-ring-jewelry-e016-intl-1488362617-35999911-11b63fe9255066679aeb4bd0ede57a88-product.jpg"},
        {id:8, name:"ring", price:"15.99", discount:"10", image: "https://ph-live-03.slatic.net/p/8/couple-rings-jewellry-925-silver-adjustable-lovers-ring-jewelry-e016-intl-1488362617-35999911-11b63fe9255066679aeb4bd0ede57a88-product.jpg"},
    ]
    renderCard = () => {
        return this.products.map(product => {
            return (
                    <ProductCard 
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        discount={product.discount}
                        image={product.image}
                    />

            )
        })
    }
    render() {
        return (
            <div className="product"> 
		        <div className="container">
                 <h2 class="account-top heading" style={{marginBottom: 30}}>Explor Our New Designs</h2>
                    <div className="product-top">
                        <div className="product-one">
                            {this.renderCard()}
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductList;