import React from 'react';
import ReactDOM from 'react-dom';
import Helloworld from './Helloworld';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Helloworld />, div);
  ReactDOM.unmountComponentAtNode(div);
});
