import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import './setupTests';
import {getSpeakers} from './firebaseService';

jest.mock('./firebaseService',()  => {
  return {
    getSpeakers : jest.fn()
  }
});

describe("app", () => {
  afterEach (() => {
    getSpeakers.mockReset();
  }); 

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('sets the state', () => {
    const app = shallow(<App />);
    expect(app.state()).toMatchObject({});
  });
  
  it('should display a list of speakers', () => {
    getSpeakers.mockReturnValueOnce(['donnie', 'brasco']);
    const app = shallow(<App />);

    expect(getSpeakers).toHaveBeenCalled();
    expect(app.find('[data-speaker]').length).toBe(2);
  });
})