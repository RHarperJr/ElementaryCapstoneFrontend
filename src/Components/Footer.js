import React from '../../node_modules/react';
import moment from '../../node_modules/moment';
//import logo from '../images/mathlogo.jpg';

var date=moment().format("MM/DD/YYYY");

const Footer = () => <div className = "footer"> About Us | Terms of Use | Privacy Policy |
 Date: {date} 
 </div>
//<img src = {logo} className="App-logo" alt="logo" ></img>
export default Footer; 