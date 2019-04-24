import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
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
          <div className="col"></div>
        </div>
      </div>
    );
    
  }
}

export default App;
