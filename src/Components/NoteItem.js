import React, { Component } from 'react';

class NoteItem extends Component {
  
    render(){
        return (
            <div className="noteitem">
             <ul>
                 <li><b>{this.props.note}</b></li>
             </ul>
            </div>
        )
    }
}

export default NoteItem;