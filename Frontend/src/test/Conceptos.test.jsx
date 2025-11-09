// src/test/Conceptos.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Conceptos from '../pages/Conceptos';

describe('Página Conceptos', () => {
  test('renderiza el título o encabezado principal', () => {
    render(<Conceptos />);
    // El título principal es "Conceptos Fundamentales de Calidad"
    expect(
      screen.getByText(/Conceptos Fundamentales de Calidad/i)
    ).toBeInTheDocument();
  });

   test("muestra contenido o definición de calidad de software", () => {
    render(<Conceptos />);
    const conceptosTexts = screen.getAllByText(/calidad de software|iso|norma|estándar|criterio/i);
    expect(conceptosTexts.length).toBeGreaterThan(0);
    });

});
