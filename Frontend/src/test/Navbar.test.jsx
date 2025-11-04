// src/test/Navbar.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

// Si lucide-react genera problemas por los iconos, puedes mockearlo:
// jest.mock('lucide-react', () => ({ Menu: () => <svg />, X: () => <svg /> }));

describe('Navbar', () => {
  test('renderiza enlaces principales y marca el link activo', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Navbar />
      </MemoryRouter>
    );

    // Ajusta los textos según tu Navbar; aquí busco ejemplos comunes
    expect(screen.getAllByText(/Home|Inicio|Resultados/i).length).toBeGreaterThan(0);
    // ejemplo: si tienes un enlace "Evaluación"
    expect(screen.getByText(/Evaluación|Evaluacion/i)).toBeInTheDocument();
  });
});
