// Mock de import.meta.env y process.env para tests
export const mockViteEnv = {
  VITE_GOOGLE_API_KEY: 'mock-api-key-for-tests'
};

if (typeof process === 'undefined') {
  global.process = { env: mockViteEnv };
}

if (typeof window !== 'undefined') {
  window.process = { env: mockViteEnv };
}