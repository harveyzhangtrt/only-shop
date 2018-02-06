import React, { Component } from 'react';
import './Menu.css';
class Menu extends Component {
    state = {  }
    render() {
        return (
            <div className="w_sidebar">
            <section  className="sky-form">
                <h4>categories</h4>
                <div className="row1 scroll-pane">
                    <div className="col col-4">		
                    <label className="checkbox"><input type="checkbox" name="checkbox" checked="true"/><i></i>All</label>
                        <label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>Women</label>
                        <label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>Kids</label>
                        <label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>Men</label>			
                    </div>
                </div>
            </section>
            <section class="sky-form">
                <h4>discount</h4>
                    <div class="row1 row2 scroll-pane">
                        <div class="col col-4">
                            <label class="radio"><input type="radio" name="radio" checked=""/><i></i>60%</label>
                            <label class="radio"><input type="radio" name="radio"/><i></i>50%</label>
                            <label class="radio"><input type="radio" name="radio"/><i></i>40%</label>
                        </div>
                        <div class="col col-4">
                            <label class="radio"><input type="radio" name="radio"/><i></i>30%</label>
                            <label class="radio"><input type="radio" name="radio"/><i></i>20%</label>
                            <label class="radio"><input type="radio" name="radio"/><i></i>10%</label>
                        </div>
                    </div>						
            </section>
            </div>	

        );
    }
}

export default Menu;