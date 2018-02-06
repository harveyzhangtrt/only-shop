import React, { Component } from 'react';
import Banner from '../../components/Banner';
import Feature from '../../components/Feature';
import ProductList from '../../components/ProductList';
class Home extends Component {
    state = {  }
    render() {
        return (
            
            <div>
                <Banner/>
                <Feature/>
                <ProductList/> 
                {/* pass products to child */}
            </div>
            
        );
    }
}

export default Home;