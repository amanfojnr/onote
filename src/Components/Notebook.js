import React, { Component } from 'react';
import Notelist from './NoteList.js';
import NoteEditor from './NoteEditor.js';

class Notebook extends Component {

    render(){
        return (
            <div className="notebook-container">
                <Notelist 
                db={this.props.db} 
                />
                <NoteEditor
                db={this.props.db}
                updateDB={this.props.updateDB}
                /> 
            </div>
        )
    }
}

export default Notebook;