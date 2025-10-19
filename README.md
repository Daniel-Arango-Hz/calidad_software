
# 🧠 Calidad Software — Evaluación Cuantitativa de Aplicaciones Educativas

Aplicación web desarrollada con **React + TailwindCSS + Supabase** para evaluar la **calidad de software** siguiendo las métricas del estándar internacional **ISO/IEC 25010**.

---

## Características principales
- Evaluación basada en métricas **ISO/IEC 25010**
- Registro de aplicaciones y resultados en **Supabase (PostgreSQL)**
- Cálculo automático de **promedio, porcentaje y clasificación**
- Visualización de resultados globales y detallados por métrica
- Interfaz moderna, responsive y clara (TailwindCSS)

---

## Instalación y Configuración

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/calidad-software.git
cd calidad-software
```

2. Instala las dependencias:
```bash
npm install
```

3. Crea un archivo `.env` con tus credenciales de Supabase:
```env
VITE_SUPABASE_URL=https://TU_URL_SUPABASE.supabase.co
VITE_SUPABASE_ANON_KEY=TU_CLAVE_ANON
```

4. Ejecuta el proyecto:
```bash
npm run dev
```

---

##  Script SQL para Supabase

```sql
CREATE TABLE aplicaciones (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre VARCHAR(100) NOT NULL,
  descripcion TEXT,
  tipo VARCHAR(50),
  fecha_creacion TIMESTAMP DEFAULT NOW()
);

CREATE TABLE metricas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre VARCHAR(100) UNIQUE NOT NULL,
  descripcion TEXT,
  peso FLOAT DEFAULT 1.0 CHECK (peso >= 0),
  tipo VARCHAR(50),
  fecha_creacion TIMESTAMP DEFAULT NOW()
);

CREATE TABLE evaluaciones (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  id_aplicacion UUID REFERENCES aplicaciones(id) ON DELETE CASCADE,
  promedio FLOAT CHECK (promedio >= 0 AND promedio <= 5),
  porcentaje_calidad FLOAT CHECK (porcentaje_calidad >= 0 AND porcentaje_calidad <= 100),
  clasificacion VARCHAR(20),
  fecha TIMESTAMP DEFAULT NOW()
);

CREATE TABLE resultados_metricas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  id_evaluacion UUID REFERENCES evaluaciones(id) ON DELETE CASCADE,
  id_metrica UUID REFERENCES metricas(id) ON DELETE CASCADE,
  puntuacion FLOAT CHECK (puntuacion >= 0 AND puntuacion <= 5),
  observacion TEXT
);
```

---

##  Autor

**Daniel Arango Hernández**  
Proyecto educativo SENA — *Evaluación de Calidad de Software*  
 2025
