import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Firebase from 'firebase';
import  config from './config';
import Speaker from './Speaker';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {speakers:[]}
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
    let list = speakers.map(m=><Speaker speaker={m} key={m.id}/>)

    return (

      <div className="container">
        <div className="row">
          <div className="col">
            <h1>
            Futuresync Speakers
            </h1>
            <hr/>
            <div className="pad2">&nbsp;</div>
            {
              list
            }
          </div>
          
        </div>
      </div>
    );
    
  }
}

export default App;
