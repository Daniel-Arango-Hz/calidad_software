// jest.env.js
import { jest } from '@jest/globals';

globalThis.console = {
  ...console,
  error: jest.fn(), // silencia los warnings tipo act(...)
};

// Mock de import.meta.env para Vite
globalThis.import = {
  meta: {
    env: {
      VITE_GOOGLE_API_KEY: 'test_api_key',
      MODE: 'test'
    }
  }
};

// Configuración del entorno de pruebas
// Mock de import.meta
if (typeof globalThis.import === 'undefined') {
  globalThis.import = {};
}

globalThis.import.meta = {
  env: {
    VITE_GOOGLE_API_KEY: 'mock-api-key',
    // Agrega aquí otras variables de entorno que necesites
  }
};

// Configuración del entorno de pruebas
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
