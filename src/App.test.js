import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import './setupTests';
import Firebase from 'firebase';

jest.mock('firebase', () => {
  return {
    initializeApp: jest.fn()
  }
})

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('initalizes the database connection correctly', () => {
  expect(Firebase.initializeApp).toHaveBeenCalled();
});

it('sets the state', () => {
  const app = shallow(<App />);
  expect(app.state()).toMatchObject({});
});

