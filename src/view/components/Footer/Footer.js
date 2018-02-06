import React, { Component } from 'react';

class Footer extends Component {
    state = {  }
    render() {
        return (
            <div className="information">
            <div className="container">
                <div className="row">
                    <div className="col-md infor-left">
                        <h3>Follow Us</h3>
                        <ul>
                            <li><a href="#"><span className="fb"></span><h6>Facebook</h6></a></li>
                            <li><a href="#"><span className="twit"></span><h6>Twitter</h6></a></li>
                            <li><a href="#"><span className="google"></span><h6>Google+</h6></a></li>
                        </ul>
                    </div>
                    <div className="col-md infor-left">
                        <h3>Information</h3>
                        <ul>
                            <li><a href="#"><p>Specials</p></a></li>
                            <li><a href="#"><p>New Products</p></a></li>
                            <li><a href="#"><p>Our Stores</p></a></li>
                            <li><a href="contact.html"><p>Contact Us</p></a></li>
                            <li><a href="#"><p>Top Sellers</p></a></li>
                        </ul>
                    </div>

                    <div className="col-md infor-left">
                        <h3>Store Information</h3>
                        <h4>The company name,
                            <span>Lorem ipsum dolor,</span>
                            Glasglow Dr 40 Fe 72.</h4>
                        <h5>+955 123 4567</h5>	
                        <p><a href="mailto:example@email.com">contact@example.com</a></p>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
            <div class="footer">
		<div class="container">
			<div class="row">
				<div class="col-md footer-left">
					<form>
						<input className="btn btn-info" type="submit" value="Subscribe"/>
					</form>
				</div>
				<div class="col-md footer-right">					
					<p>© Only Shop 2017. All Rights Reserved </p>
				</div>
				<div class="clearfix"></div>
			</div>
		</div>
	</div>
        </div>
        );
    }
}

export default Footer;