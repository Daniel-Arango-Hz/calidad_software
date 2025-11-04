/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Evaluacion from "../pages/Evaluacion";
import '@testing-library/jest-dom';

const mockSupabaseFrom = jest.fn();
const mockSupabaseSelect = jest.fn();

// Mock de supabase
jest.mock('../lib/supabaseClient', () => ({
  supabase: {
    from: () => mockSupabaseFrom(),
  }
}));

// Mock de Chart.js
jest.mock('chart.js/auto', () => ({
  Chart: class {
    constructor() {}
  }
}));

// Mock de jspdf
jest.mock('jspdf', () => ({
  default: class {
    constructor() {
      return {
        setFontSize: jest.fn(),
        text: jest.fn(),
        addPage: jest.fn(),
        save: jest.fn(),
        internal: {
          pageSize: {
            getWidth: () => 595,
            getHeight: () => 842
          }
        }
      };
    }
  }
}));

// Mock de jspdf-autotable
jest.mock('jspdf-autotable', () => jest.fn());

describe('Evaluacion Component', () => {
  beforeEach(() => {
    // Configurar los mocks antes de cada prueba
    mockSupabaseFrom.mockReturnValue({
      select: () => mockSupabaseSelect()
    });

    mockSupabaseSelect.mockResolvedValue({
      data: [
        {
          id: 1,
          nombre: "Métrica de prueba",
          descripcion: "Descripción de prueba",
          tipo: "Funcional",
          peso: 20
        }
      ],
      error: null
    });

    // Mock de ResizeObserver
    global.ResizeObserver = class ResizeObserver {
      observe() {}
      unobserve() {}
      disconnect() {}
    };

    // Mock de canvas
    HTMLCanvasElement.prototype.getContext = () => ({
      fillRect: jest.fn(),
      clearRect: jest.fn(),
      getImageData: jest.fn(() => ({
        data: new Array(4)
      })),
      putImageData: jest.fn(),
      createImageData: jest.fn(),
      drawImage: jest.fn()
    });
  });

  test('renders evaluation form', async () => {
    render(
      <MemoryRouter>
        <Evaluacion />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Herramienta de Evaluación')).toBeInTheDocument();
    });

    expect(screen.getByPlaceholderText('Nombre de la aplicación')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Descripción...')).toBeInTheDocument();
  });
});
