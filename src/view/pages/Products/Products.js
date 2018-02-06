import React, { Component } from 'react';
// import ProductList from '../../components/ProductCard';
import ProductCard from '../../components/ProductCard';
import Menu from '../../components/Menu';

class Products extends Component {
    state = {  }
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
            <div className="prdt"> 
                <div className="container">
                    <div class="ckeck-top heading">
                        <h2>Browse</h2>
                    </div>
                    <div className="prdt-top">
                        <div className="col-md-8 pull-right">
                            {this.renderCard()}
                        </div>	
                    </div>	
                        <div className="col-md-3 pull-right">
                            <Menu/>
                        </div>	
                        <div className="clearfix"></div>
                        
                    </div>	
				</div>	
       );
    }
}

export default Products;