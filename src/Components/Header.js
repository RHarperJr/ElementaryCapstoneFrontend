import logo from '../images/logo.png';
import React, { Component } from 'react';


class Header extends Component {

    state = {
        time: 0
    }

    increment = () => {
        this.setState({ time: this.state.time + 1 });
    }

    componentDidMount() { 
        setInterval(() => { this.increment() }, 1000); 
    }


    render() {
        return (
            <div className="header">
                <img src={logo} className="App-logo" alt="logo" />

            East Villagers Elementary School

            <div className="counter">You have spent {this.state.time} seconds on our site!</div>
            </div>
        )
    }

}






export default Header;
