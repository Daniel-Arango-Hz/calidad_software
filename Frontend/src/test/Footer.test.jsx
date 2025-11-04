// src/test/Footer.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer', () => {
  test('muestra copyright o texto principal', () => {
    render(<Footer />);
    expect(screen.getByText(/copyright|©|202/i)).toBeInTheDocument();
  });
});
