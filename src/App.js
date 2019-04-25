import React, { Component } from 'react';
import Firebase from 'firebase';
import config from './config';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  
  constructor(props) {
    super(props);
    Firebase.initializeApp(config);

    this.state = {};
  }

  render() {
    
    return (

      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            We now have 3 tests passing and connected to firebase :)
          </div>
          <div className="col">
        
          </div>
          
        </div>
      </div>
    );
    
  }
}

export default App;
