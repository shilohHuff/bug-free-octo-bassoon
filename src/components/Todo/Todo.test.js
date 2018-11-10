import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-testing-library';
import Todo from './Todo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Todo onClick={()=>{}} completed={true} text='Test Todo Text'  />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('renders Todo text message', () => {
  const { getByText } = render(<Todo onClick={()=>{}} completed={true} text='Test Todo Text'  />);
  expect(getByText('Test Todo Text')).toBeInTheDocument();
});