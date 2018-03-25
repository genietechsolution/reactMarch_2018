import React from 'react';
import ReactDOM from 'react-dom';
import ProductsInner from './ProductsInner';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProductsInner />, div);
  ReactDOM.unmountComponentAtNode(div);
});
