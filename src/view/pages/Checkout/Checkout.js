import React, { Component } from 'react';

class Checkout extends Component {
    state = {  }
    render() {
        return (
            <div class="ckeckout">
            <div class="container">
                <div class="ckeck-top heading">
                    <h2>CHECKOUT</h2>
                </div>
                <div class="ckeckout-top">
                <div class="cart-items">
                 <h3>My Shopping Bag (3)</h3>
                    
                <div class="in-check" >
                    <ul class="unit">
                        <li><span>Item</span></li>
                        <li><span>Product Name</span></li>		
                        <li><span>Unit Price</span></li>
                        <li><span>Delivery Details</span></li>
                        <li> </li>
                        <div class="clearfix"> </div>
                    </ul>
                    <ul class="cart-header">
                        <div class="close1"> </div>
                            <li class="ring-in"><a href="single.html" ><img src="images/c-1.jpg" class="img-responsive" alt=""/></a>
                            </li>
                            <li><span class="name">Analog Watches</span></li>
                            <li><span class="cost">$ 290.00</span></li>
                            <li><span>Free</span>
                            <p>Delivered in 2-3 business days</p></li>
                        <div class="clearfix"> </div>
                    </ul>
                    <ul class=" cart-header1">
                        <div class="close2"> </div>
                            <li class="ring-in"><a href="single.html" ><img src="images/c-2.jpg" class="img-responsive" alt=""/></a>
                            </li>
                            <li><span class="name">Analog Watches</span></li>
                            <li><span class="cost">$ 300.00</span></li>
                            <li><span>Free</span>
                            <p>Delivered in 2-3 business days</p></li>
                            <div class="clearfix"> </div>
                    </ul>
                    <ul class="cart-header2">
                        <div class="close3"> </div>
                            <li class="ring-in"><a href="single.html" ><img src="images/c-3.jpg" class="img-responsive" alt=""/></a>
                            </li>
                            <li><span class="name">Analog Watches</span></li>
                            <li><span class="cost">$ 360.00</span></li>
                            <li><span>Free</span>
                            <p>Delivered in 2-3 business days</p></li>
                            <div class="clearfix"> </div>
                    </ul>
                </div>
                </div>  
             </div>
            </div>
        </div>
    
        );
    }
}

export default Checkout;