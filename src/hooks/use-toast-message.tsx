import { useEffect, useRef } from 'react';
import { toast as Toast } from 'sonner';

export function useToastMessage(message?: string) {
  const lastMessageRef = useRef<string | null>(null);
  const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (message && message !== lastMessageRef.current) {
      // Mostramos el toast y actualizamos el último mensaje mostrado
      if (message.includes('Éxito')) {
        Toast.success(message);
      } else {
        Toast.error(message);
      }
      lastMessageRef.current = message;

      // Limpiamos el timeout anterior, si existe
      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current);
      }

      // Establecemos un timeout para reiniciar lastMessageRef después de unos segundos
      toastTimeoutRef.current = setTimeout(() => {
        lastMessageRef.current = null;
      }, 3000); // Cambia 3000 por el tiempo en milisegundos que prefieras
    }
  }, [message]);
}
