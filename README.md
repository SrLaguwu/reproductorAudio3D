1. Estado hasInteracted: Utilizo un estado llamado hasInteracted para controlar si el usuario ha hecho clic en el botón de inicio. Al inicio, este estado es false, lo que significa que la aplicación mostrará el botón.

2. Pantalla inicial: Mientras hasInteracted es false, se muestra un botón centrado en la pantalla que dice "Haz clic para comenzar". Cuando el usuario hace clic en el botón, llamo a la función handleStart.

3. Función handleStart: Esta función reproduce el audio y cambia el estado hasInteracted a true. Una vez que esto ocurre, la pantalla inicial desaparece y se muestra el contenido del componente como el Canvas y el resto de los elementos.

4. Reproducción de audio: El audio se reproduce automáticamente cuando el estado cambia y el componente completo se renderiza, permitiendo así cumplir con las políticas de los navegadores que requieren interacción del usuario.

(TODO ESTO SUCEDE DIRECTAMENTE DESDE EL ARCHIVO DE Home.jsx)
