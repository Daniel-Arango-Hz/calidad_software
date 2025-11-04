# calidad_software

# Frontend - Calidad de Software

## Configuración de Pruebas con Jest

### Prerequisitos
- Node.js (versión 16 o superior)
- npm (incluido con Node.js)

### Instalación

1. Instala las dependencias del proyecto:
```bash
npm install
```

2. Instala las dependencias necesarias para testing:
```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event jest-environment-jsdom identity-obj-proxy
```

### Ejecutar Pruebas

- Para ejecutar todas las pruebas:
```bash
npm test
```

- Para ejecutar pruebas específicas:
```bash
npm test nombreDelArchivo.test.jsx
```

- Para ejecutar pruebas en modo watch:
```bash
npm test -- --watch
```

### Estructura de las Pruebas

```
src/
├── test/
│   ├── setupTests.js         # Configuración global de pruebas
│   ├── Evaluacion.test.jsx   # Pruebas para el componente Evaluacion
│   ├── Home.test.jsx        # Pruebas para el componente Home
│   └── ...                  # Otros archivos de prueba
```

### Escribir Nuevas Pruebas

1. Crea un nuevo archivo de prueba con el nombre `ComponentName.test.jsx`
2. Importa las dependencias necesarias:
```javascript
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ComponentName from '../path/to/component';
```

3. Escribe tus pruebas:
```javascript
describe('ComponentName', () => {
  test('should render correctly', () => {
    render(<ComponentName />);
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });
});
```

### Consideraciones Importantes

- Los archivos de prueba deben terminar en `.test.jsx` o `.test.js`
- Usa `@testing-library/jest-dom` para matchers adicionales
- Utiliza `jest.mock()` para mockear módulos externos
- Para componentes que usan React Router, envuélvelos en `<MemoryRouter>`

### Comandos Útiles

- `npm test -- --coverage` : Genera un reporte de cobertura
- `npm test -- --verbose` : Muestra resultados detallados
- `npm test -- --updateSnapshot` : Actualiza snapshots

### Solución de Problemas Comunes

1. Si hay error con import.meta:
   - Asegúrate de tener bien configurado el mock en setupTests.js

2. Si hay problemas con módulos CSS:
   - Verifica que identity-obj-proxy esté configurado en jest.config.cjs

3. Para errores con fetch o APIs:
   - Usa jest.spyOn(global, 'fetch') para mockear llamadas

### Recursos Adicionales

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Testing Library Documentation](https://testing-library.com/docs/)
- [Jest DOM Documentation](https://github.com/testing-library/jest-dom)