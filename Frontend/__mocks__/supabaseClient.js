// Mock mínimo de Supabase para tests
export const supabase = {
  from: (table) => ({
    select: async () => {
      // devolver métricas de ejemplo para los tests
      if (table === "metricas") {
        return {
          data: [
            { id: 1, nombre: "Usabilidad", descripcion: "Prueba", peso: 20, tipo: "Funcional" },
            { id: 2, nombre: "Rendimiento", descripcion: "Prueba", peso: 20, tipo: "No funcional" },
          ],
          error: null,
        };
      }
      return { data: [], error: null };
    },
    insert: async (payload) => ({ data: { id: 1 }, error: null }),
  }),
  // otros métodos que puedan usarse en tests pueden añadirse aquí
};
