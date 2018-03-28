import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase';

import MenuBar from './Components/MenuBar.js';
import Notebook from './Components/Notebook.js';

class App extends Component {
  constructor(props){
    super(props);

    let config = {
      apiKey: "AIzaSyCrlA9J7atbEWdugWKNU1SEUA5JTqdcuds",
      authDomain: "onote-a9045.firebaseapp.com",
      databaseURL: "https://onote-a9045.firebaseio.com",
      projectId: "onote-a9045",
      storageBucket: "",
      messagingSenderId: "335970889530"
    };
  
  

    firebase.initializeApp(config);

    this.state = {
      notesDB : [
        { 
          body: "We are here and yes",
          id: 0,
        },
        {
          body: "Dead men tell no tales",
          id: 1,
        }
      ],
    };

    this.onChange = this.onChange.bind(this);
  }

   onChange(updatedList){
     this.setState({
       notesDB: updatedList,
     });
   }
  
  render() {
    return (
      <div className="app-container">
        <header className="menu">
          <MenuBar />
        </header>
       
        
        <Notebook  db={this.state} updateDB={this.onChange}/>
       

      </div>
    );
  }
}

export default App;
