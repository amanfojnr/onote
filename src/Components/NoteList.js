import React, { Component } from 'react';
import NoteItem from './NoteItem.js';

class NoteList extends Component {
    
    render(){
        const noteList = this.props.db.notesDB.map((note) => {
           return (<li key={note.id}>
            <NoteItem note={note.body} />
            </li>)
        });

        return (
            <div className="notelist">
             <ul class="notelist-container">{noteList}</ul>
            </div>
        )
    }
}

export default NoteList;