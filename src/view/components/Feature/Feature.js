import React, { Component } from 'react';
import './Feature.css';

class Feature extends Component {
    state = {  }

    
    render() { 
        return(
            <div className="about"> 
                <div className="container">
                    <h2 class="account-top heading" style={{marginBottom: 20}}>FEATURES</h2>
                    <div className="about-top row">
                        <div className="col-md-4 about-left">
                            <figure className="effect-bubba">
                                <img className="img-fluid" src="https://sc01.alicdn.com/kf/UT8XJqWXqpaXXagOFbXu/Ethnic-Pearl-Jewelry-Set-Rani-Haar-3.jpg_350x350.jpg" alt=""/>
                                <figcaption>
                                    <h2>Nulla maximus nunc</h2>
                                    <p>In sit amet sapien eros Integer dolore magna aliqua</p>	
                                </figcaption>			
                            </figure>
                        </div>
                        <div className="col-md-4 about-left">
                            <figure className="effect-bubba">
                                <img className="img-fluid" src="https://sc01.alicdn.com/kf/UT8XJqWXqpaXXagOFbXu/Ethnic-Pearl-Jewelry-Set-Rani-Haar-3.jpg_350x350.jpg" alt=""/>
                                <figcaption>
                                    <h4>Mauris erat augue</h4>
                                    <p>In sit amet sapien eros Integer dolore magna aliqua</p>	
                                </figcaption>			
                            </figure>
                        </div>
                        <div className="col-md-4 about-left">
                            <figure className="effect-bubba">
                                <img className="img-fluid" src="https://sc01.alicdn.com/kf/UT8XJqWXqpaXXagOFbXu/Ethnic-Pearl-Jewelry-Set-Rani-Haar-3.jpg_350x350.jpg" alt=""/>
                                <figcaption>
                                    <h4>Cras elit mauris</h4>
                                    <p>In sit amet sapien eros Integer dolore magna aliqua</p>	
                                </figcaption>			
                            </figure>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Feature;