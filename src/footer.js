import React, {Component} from 'react';

import './footercss.css';
class footer extends Component{

    render() {
        return(
        <div id="menu" align="middle"> 
        <p>This Is My Footer</p>   
        <a href="/index.htm">HOME</a>
        <a href="/about/contact_us.htm">CONTACT</a>
    </div>
        )
      }
    }
    
export default footer;