import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import { addReservation } from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App', () => {
  let wrapper
  beforeEach(() => {
    let mockResponse = {
      name: 'Juju B',
      date: '2019/10/13',
      time: '11:00pm',
      number: 3
    }
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      })
    })
    wrapper = shallow(<App />)
  });

  it('should match the snapshot with all of the data passed through', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call fetch with the correct URL',  () => {
    expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/reservations');
  });

});
