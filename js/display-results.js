/**
 * 📊 Script de Resultados - resultado.html
 * Calcula y muestra los resultados dinámicamente.
 */

import { WeightCalculator } from './calculator.js';

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    
    // Obtener datos de la URL
    const sex = params.get('sex') || 'female';
    const height = parseFloat(params.get('height'));
    const weight = parseFloat(params.get('weight'));
    const age = params.get('age');

    if (!height || !weight) {
        // Redirigir si no hay datos
        window.location.href = 'index.html';
        return;
    }

    // 🧠 Realizar cálculos
    const range = WeightCalculator.getIdealRange(height, sex);
    const bmi = WeightCalculator.calculateBMI(weight, height);
    const status = WeightCalculator.getBMIStatus(bmi);

    // ✨ Actualizar la UI
    // Rango de peso
    const rangeDisplay = document.querySelector('.text-tertiary-container span.text-primary') || document.querySelector('span.text-primary');
    if (rangeDisplay) {
        rangeDisplay.textContent = `${range.min} - ${range.max} kg`;
    }

    // IMC
    const bmiValue = document.querySelector('.text-5xl.font-extrabold');
    const bmiStatus = document.querySelector('.text-sm.font-medium.uppercase');
    if (bmiValue) bmiValue.textContent = bmi.toFixed(1);
    if (bmiStatus) bmiStatus.textContent = status;

    // Barra de progreso IMC (simple para este demo)
    const progressBar = document.querySelector('.bg-primary.w-\\[65\\%\\]');
    if (progressBar) {
        let percent = (bmi / 40) * 100; // Normalizando a un máximo de 40 IMC
        if (percent > 100) percent = 100;
        progressBar.style.width = `${percent}%`;
    }

    // Personalización del mensaje (Marina -> Nombre del usuario o genérico)
    const welcomeMsg = document.querySelector('h3.text-2xl.font-bold');
    if (welcomeMsg) {
        welcomeMsg.textContent = `¡Sigue así! ✨`;
    }

    // 🔄 Botón Volver a calcular
    const backBtn = document.querySelector('button');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }
});
