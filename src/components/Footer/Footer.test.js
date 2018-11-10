import React from 'react';
import { shallow } from 'enzyme';
import { render } from 'react-testing-library';
import Footer from './Footer';

it('renders without crashing', () => {
  shallow(<Footer />);
});

it('renders Todo text message', () => {
  const wrapper = shallow(<Footer/>);
  expect(wrapper.text()).toContain('Show');
});