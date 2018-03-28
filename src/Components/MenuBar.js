import React, { Component } from 'react';

class MenuBar extends Component {

    render() {
        return(
            <div className="menubar">
            <ul>
                <li>
                    <img 
                    src="https://s14.postimg.org/o2zduo241/onote-logo.png"
                    alt="onote logo"
                    />
                    </li>
                <li>
                    <img 
                    src="https://s14.postimg.org/5anir5y0x/help-icon.png"
                    alt="help"
                    onClick={() => {
                        alert("Welcome to ONote v1. I do stuff");
                    }}/></li>
            </ul>
           </div>
        )
  
    }
}

export default MenuBar;