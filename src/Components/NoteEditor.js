import React, { Component } from 'react';
import NoteDisplay from './NoteDisplay.js'

class NoteEditor extends Component {
    // Creates a writing panel to edit or create new notes
    constructor(props){
        super(props);
        this.state = {
                      note: "Enter note here",
                      };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    
    handleChange(event){
        this.setState({note: event.target.value,});
    }


   handleSubmit(event){
        // save new note to db
    
    if (this.state.note === ""){
        alert("Input something buddy");
    }
        
    else {
        this.props.db.notesDB.push({
            body: this.state.note,
            id: this.props.db.notesDB.length,
            });
    
            this.props.updateDB(this.props.db.notesDB);
            event.target.value = "";
           console.log(this.props.db.notesDB);
         this.setState({
               note: "",
          });
        }
        event.preventDefault();
     }

    

    render() {
        return (
            <div className="note-editor-container">
               <div className="note-editor">
               <form onSubmit={this.handleSubmit}>
            
                    <textarea
                    value={this.state.note}
                    name="body" 
                    onChange={this.handleChange}
                    rows="8"
                    cols="20"
                    maxLength="200"
                    wrap="hard"
                    />
                    <br />
                    <input type="submit" value="save" />
                </form>
               </div>
            </div>
        )
    }
}

export default NoteEditor;