const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchWithRetry = async (url, options = {}, maxRetries = 3, initialDelay = 1000) => {
  let lastError;
  let waitTime = initialDelay;

  // Asegurarse de que options.headers existe
  options.headers = {
    ...options.headers
  };

  for (let i = 0; i < maxRetries; i++) {
    try {
      // Agregar un pequeño retraso aleatorio para evitar patrones de solicitud
      const jitter = Math.random() * 1000;
      await delay(i > 0 ? jitter : 0);

      const response = await fetch(url, options);
      
      if (response.status === 429) {
        console.log(`Intento ${i + 1}/${maxRetries}: Rate limit alcanzado, esperando ${waitTime}ms...`);
        await delay(waitTime);
        waitTime *= 2; // Duplicamos el tiempo de espera para el siguiente intento
        continue;
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error.message || 'Error en la respuesta de la API');
      }

      return data;
    } catch (error) {
      lastError = error;
      console.log(`Intento ${i + 1}/${maxRetries} fallido:`, error.message);
      
      if (i < maxRetries - 1) {
        await delay(waitTime);
        waitTime *= 2;
      }
    }
  }

  throw new Error(`Failed after ${maxRetries} retries. Last error: ${lastError.message}`);
};