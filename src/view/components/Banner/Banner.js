import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Banner.css';
import Img0 from '../../images/b1.jpeg';
import Img1 from '../../images/b2.jpeg';
import Img2 from '../../images/b3.jpeg';

class Banner extends Component {
    state = {  }
    render() {
        return (
            <div className="banner">
                <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} interval={2500} showIndicators={false}>
                <div>
                    <img src={Img0} />
                    <p className="legend"></p>
                </div>
                <div>
                    <img src={Img1} />
                    <p className="legend"></p>
                </div>
                <div>
                    <img src={Img2} />
                    <p className="legend"></p>
                </div>
                </Carousel>
            </div>

        );
    }
}

export default Banner;