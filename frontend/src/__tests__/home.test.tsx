import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HomePage from '../pages/HomePage';

it('Home renders correctly', () => {
  const home = render(<HomePage />);
  expect(home.getByText('ALL ACTIVITY')).toBeInTheDocument();
  expect(home.getByText('MY ACTIVITY')).toBeInTheDocument();
});
