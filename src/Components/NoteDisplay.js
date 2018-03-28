import React, { Component } from 'react';

class NoteDisplay extends Component {
    render(){
        return (
            <div className="NoteDisplay">
             <p> {this.props.prewiewNote} </p>
            </div>
        )
    }
}

export default NoteDisplay;