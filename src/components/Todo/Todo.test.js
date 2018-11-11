import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { render } from 'react-testing-library';
import Todo from './Todo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Todo onClick={()=>{}} completed={true} text='Test Todo Text'  />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('renders Todo text message', () => {
  const todo = shallow(<Todo onClick={()=>{}} completed={true} text='Test Todo Text'  />);
  expect(todo.text()).toContain('Test Todo Text');
});

it('to have class complete when completed is true', () =>{
  const todo = mount(<Todo onClick={()=>{}} completed={true} text='Test Todo Text'  />);
  expect(todo.find('li').hasClass('complete')).toBe(true);
});

it('to not have class complete when completed is false', () =>{
  const todo = mount(<Todo onClick={()=>{}} completed={false} text='Test Todo Text'  />);
  expect(todo.find('li').hasClass('complete')).toBe(false);
});

it('to call function when clicked', () =>{
  let count = 0;
  const todo = mount(<Todo onClick={()=>{ count++;}} completed={false} text='Test Todo Text'  />);
  todo.find('li').simulate('click');
  todo.find('li').simulate('click');
  todo.find('li').simulate('click');
  expect(count).toBe(3);
});

it('should have high importance class when priority is 2', () => {
  const todo = mount(<Todo onClick={()=>{}} completed={false} text='Test Todo Text' priority={2} />);
  expect(todo.find('li').hasClass('importance-high')).toBe(true);
});

it('should have medium importance class when priority is 1', () => {
  const todo = mount(<Todo onClick={()=>{}} completed={false} text='Test Todo Text' priority={1} />);
  expect(todo.find('li').hasClass('importance-medium')).toBe(true);
});

it('should have low importance class when priority is 0', () => {
  const todo = mount(<Todo onClick={()=>{}} completed={false} text='Test Todo Text' priority={0} />);
  expect(todo.find('li').hasClass('importance-low')).toBe(true);
});