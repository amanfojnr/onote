import React, { Component } from 'react';
import Remarkable from 'remarkable';




class NoteDisplay extends Component {
    
    render(){
        return (
            <div 
            className="NoteDisplay"
            /*dangerouslySetInnerHTML={() => {
                let md = new Remarkable();
                return {__html: md.render(this.props.prewiewNote)};
            }
            }
            */>
            <p>
            {this.props.prewiewNote}
            </p>
            </div>
        )
    }
}

export default NoteDisplay; 