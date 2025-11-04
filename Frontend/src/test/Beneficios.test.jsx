// src/test/Beneficios.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Beneficios from '../pages/Beneficios';

describe('Página Beneficios', () => {
  test('muestra el título principal de Beneficios', () => {
    render(<Beneficios />);
    expect(screen.getAllByText(/beneficios/i)[0]).toBeInTheDocument();
  });

   test("muestra el título principal de Beneficios", () => {
    render(<Beneficios />);
    const beneficiosTexts = screen.getAllByText(/beneficios/i);
    expect(beneficiosTexts.length).toBeGreaterThan(0);
    });
});
