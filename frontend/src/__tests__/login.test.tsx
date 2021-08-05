import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoginPage from '../pages/HomePage';

it('Login renders correctly', () => {
  const login = render(<LoginPage />);
  expect(login.getByText('Email')).toBeInTheDocument();
  expect(login.getByText('Password')).toBeInTheDocument();
  expect(login.getByText('Login')).toBeInTheDocument();
});
