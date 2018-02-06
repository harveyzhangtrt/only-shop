import React from 'react';

const ItemInfo = () => (
    <div class="single-para simpleCart_shelfItem">
    <h2>Lorem Ipsum</h2>
        <div class="star-on">
            <ul class="star-footer">
                    <li><a href="#"><i> </i></a></li>
                    <li><a href="#"><i> </i></a></li>
                    <li><a href="#"><i> </i></a></li>
                    <li><a href="#"><i> </i></a></li>
                    <li><a href="#"><i> </i></a></li>
                </ul>
            <div class="review">
                <a href="#"> 1 customer review </a>
                
            </div>
        <div class="clearfix"> </div>
        </div>
        
        <h5 class="item_price">$ 95.00</h5>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
        <div class="available">
            <ul>
                <li>Color
                    <select>
                    <option>Silver</option>
                    <option>Black</option>
                    <option>Dark Black</option>
                    <option>Red</option>
                </select></li>
            <li class="size-in">Size<select>
                <option>Large</option>
                <option>Medium</option>
                <option>small</option>
                <option>Large</option>
                <option>small</option>
            </select></li>
            <div class="clearfix"> </div>
        </ul>
    </div>
        <ul class="tag-men">
            <li><span>TAG</span>
            <span class="women1">: Women,</span></li>
            <li><span>SKU</span>
            <span class="women1">: CK09</span></li>
        </ul>
            <a href="#" class="add-cart item_add">ADD TO CART</a>
        
    </div>
);

export default ItemInfo;