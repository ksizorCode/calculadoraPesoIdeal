# Lógica de la Aplicación 🧠

Este directorio contiene la inteligencia de la calculadora, separada en módulos para mayor escalabilidad.

## Módulos 📂

### 1. `calculator.js` ⚖️
Contiene el motor de cálculo puro. Implementa:
- **Fórmula de Lorentz**: Basada en la altura y el sexo.
- **Fórmula de Devine**: Tradicionalmente usada en entornos clínicos.
- **Cálculo de IMC**: Índice de Masa Corporal.

### 2. `main.js` 🚀
Controla la página de inicio (`index.html`):
- Gestión de botones de sexo.
- Validación de formularios.
- Redirección con parámetros.

### 3. `display-results.js` 📊
Controla la visualización (`resultado.html`):
- Lee los datos de la URL.
- Invoca al motor de cálculo.
- Actualiza el DOM dinámicamente. ✨

## Ventajas 🌈
- **Código Limpio**: Lógica separada de la vista.
- **Escalable**: Fácil de añadir nuevas fórmulas o funcionalidades.
