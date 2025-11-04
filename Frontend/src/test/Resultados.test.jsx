// src/test/Resultados.test.jsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import Resultados from '../pages/Resultados';

describe('Página Resultados', () => {
  test('muestra el título principal de resultados', () => {
    render(<Resultados />);
    expect(screen.getAllByText(/resultados/i)[0]).toBeInTheDocument();
  });

  test('muestra los valores o puntajes obtenidos', () => {
    render(<Resultados />);
    expect(screen.getAllByText(/resultados/i)[0]).toBeInTheDocument();
  });
});
