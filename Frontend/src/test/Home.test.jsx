// src/test/Home.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';

describe('Home page', () => {
  test('título principal presente', () => {
    render(<Home />);
    expect(screen.getByText(/Evalúa la Calidad de Software|Evalua la Calidad de Software/i)).toBeInTheDocument();
  });
});
