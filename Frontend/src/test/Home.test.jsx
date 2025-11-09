// src/test/Home.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';

describe('Home page', () => {
  test('título principal presente', () => {
    render(<Home />);
    // El título principal real es "Mejora Continua y Excelencia en el Desarrollo"
    expect(screen.getByText(/Mejora Continua y Excelencia en el Desarrollo/i)).toBeInTheDocument();
  });
});
