import React, { Component } from 'react';
import {NavLink } from 'react-router-dom';

class MathMain extends Component {
    render() {
        return(
        <div>
            Welcome to the Math Page.
            <li>
                <NavLink exact to="/math/calc">Discount Calculator</NavLink>
            </li>
            <li>
                <NavLink exact to="/math/weight">Weight</NavLink>
            </li>
        </div>
        )
    }
}

export default MathMain;







