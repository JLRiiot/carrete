import React from 'react';
import App from './App';

it('renders the right components', () => {
  let wrapper = shallow(<App />);

  expect(wrapper).toMatchSnapshot();
});
