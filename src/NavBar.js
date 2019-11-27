import React, {Component} from 'react'

import './NavBarcss.css';
class NavBar extends Component {
  render() {
    return(
    <div class="topnav">
        <a class="active"
    href="#home">Home</a>
        <a href="#entertainment">Entertainment</a>
        <a href="#more">More</a>
        <a href="#about">About</a>      
    </div>
    
    )
  }
}

export default NavBar;