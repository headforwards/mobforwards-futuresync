import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Firebase from 'firebase';
import  config from './config'

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {}
  }
  
  componentDidMount(){
    Firebase.initializeApp(config);
    var ref = Firebase.database().ref("/speakers");
    ref.on("value", data => {

      const state = data.val();
      console.log(state);
       this.setState({
         speakers : state 
       });
    });
  }

  render() {
    
    const { speakers} = this.state;

    return (

      <div className="container">
        <div className="row">
          <div className="col">
            <p>
            Here is a list of speakers
            </p>
            {
              speakers && speakers.map(m=><div data-speaker key={m.id}>{m.name}</div>)
            }
          </div>
          
        </div>
      </div>
    );
    
  }
}

export default App;
