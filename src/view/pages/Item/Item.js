import React, { Component } from 'react';
import ItemCarousel from './ItemCarousel';
import ItemInfo from './ItemInfo';

class Item extends Component {
    state = {  }
    render() {
        return (
        <div class="single">
		    <div class="container">
                        <div class="col-md-7 pull-right">
                        <ItemInfo/>
                            </div>
                            <div class="col-md-5 pull-right">	
                        <ItemCarousel/>
                            {/* pass images */}
                    </div>

                <div class="clearfix"> </div>
             </div>
        </div>
        );
    }
}

export default Item;