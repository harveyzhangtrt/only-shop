import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

class ItemCarousel extends Component {
    state = {  }
    render() {
        return (
            <Carousel width="300px" autoPlay infiniteLoop showArrows={false} showStatus={false} interval={2500} showIndicators={false}>
            <div>
                <img src='https://ph-live-03.slatic.net/p/8/couple-rings-jewellry-925-silver-adjustable-lovers-ring-jewelry-e016-intl-1488362617-35999911-11b63fe9255066679aeb4bd0ede57a88-product.jpg' />
                <p className="legend"></p>
            </div>
            <div>
                <img src='https://ph-live-03.slatic.net/p/8/couple-rings-jewellry-925-silver-adjustable-lovers-ring-jewelry-e016-intl-1488362617-35999911-11b63fe9255066679aeb4bd0ede57a88-product.jpg' />
                <p className="legend"></p>
            </div>
            <div>
                <img src='https://ph-live-03.slatic.net/p/8/couple-rings-jewellry-925-silver-adjustable-lovers-ring-jewelry-e016-intl-1488362617-35999911-11b63fe9255066679aeb4bd0ede57a88-product.jpg' />
                <p className="legend"></p>
            </div>
            </Carousel>

        );
    }
}

export default ItemCarousel;