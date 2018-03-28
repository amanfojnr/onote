import React, { Component } from 'react';

class NoteItem extends Component {
  
    render(){
        return (
            <div className="noteitem">
             <ul>
                 <li><b>{this.props.note.slice(0, 35)} ...</b></li>
             </ul>
            </div>
        )
    }
}

export default NoteItem;