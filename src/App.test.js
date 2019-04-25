import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import './setupTests';
import Speaker from './Speaker';

jest.mock("firebase", () => {
  return {
    initializeApp : jest.fn(),
    database:() => {
      return {
        ref :() => {
          return {
            on : jest.fn()
          }
        }
      }
    }
  }
});

describe("app", () => {
  
  it('sets the state', () => {
    const app = shallow(<App />);
    expect(app.state()).toMatchObject({});
  });
  
  it('should display a list of speakers', () => {

    const app = shallow(<App />);
    app.setState({speakers: [
      {name:"Test", talk: {title: "Title"}, id: 'id1'},
      {name:"Test2", talk: {title: "Title2"}, id: 'id2'}
    ]
  })
    expect(app.find(Speaker).length).toBe(2);
  });
})