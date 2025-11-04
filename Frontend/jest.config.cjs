module.exports = {
  testEnvironment: "jsdom",

  testMatch: ["<rootDir>/src/test/**/*.(test|spec).{js,jsx}"],

  transform: {
    "^.+\\.(js|jsx)$": "babel-jest"
  },

  moduleFileExtensions: ["js", "jsx", "json", "node"],

  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",

    // Mock para Supabase
    "^../lib/supabaseClient$": "<rootDir>/__mocks__/supabaseClient.js",
    "^@/lib/supabaseClient$": "<rootDir>/__mocks__/supabaseClient.js",

    // Mock para variables de entorno de Vite
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "^.+\\.svg$": "jest-svg-transformer",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js"
  },

  // Setup files
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js", "<rootDir>/src/test/setupTests.js"],

  // Asegura compatibilidad con ESM y JSX
  extensionsToTreatAsEsm: [".jsx"],

  // Ignora carpetas innecesarias
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],

  // Setup del entorno
  setupFiles: ["<rootDir>/jest.env.js"],

  // Transform ignore patterns
  transformIgnorePatterns: [
    "/node_modules/(?!(@testing-library|@babel)/)",
  ]
};
