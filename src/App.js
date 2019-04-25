import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import config from './config';
import Firebase from 'firebase';

class App extends Component {
  
  constructor(props) {
    super(props);
    Firebase.initializeApp(config);
this.state = {}
  }

  getSpeakerData = () => {
    let ref = Firebase.database().ref('/speakers');
    ref.on('value', snapshot => {
      const state = snapshot.val();
      this.setState({ speakers : state});
    });
  }

  componentDidMount() {
    this.getSpeakerData();
  }

  render() {
    
    const { speakers } = this.state;
    console.log(speakers);
    return (

      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <h1>The Challenge</h1>
            <p>We are going to build a useful app by using the power of the mob</p>
            <p>View our progress throughout the day by visiting</p>
            <h3>https://futuresync2019mob.azurewebsites.net/</h3>
          </div>
          <div className="col">
          {speakers && speakers.length > 0 && speakers[2].name }
          </div>
          
        </div>
      </div>
    );
    
  }
}

export default App;
