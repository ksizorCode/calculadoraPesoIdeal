/**
 * 🚀 Script Principal - index.html
 * Maneja la interacción del usuario y la navegación.
 */

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const sexButtons = document.querySelectorAll('button[type="button"]');
    let selectedSex = 'female'; // Valor por defecto según UI original

    // 🎨 Manejo de selección de sexo
    sexButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Limpiar estados
            sexButtons.forEach(b => {
                b.classList.remove('bg-primary-container', 'border-primary');
                b.classList.add('bg-surface-container-low', 'border-transparent');
                
                const icon = b.querySelector('.material-symbols-outlined');
                const text = b.querySelector('span:not(.material-symbols-outlined)');
                
                icon.classList.remove('text-on-primary-container', 'active-icon');
                icon.classList.add('text-secondary');
                text.classList.remove('text-on-primary-container');
                text.classList.add('text-on-surface');
            });

            // Activar botón clickeado
            btn.classList.add('bg-primary-container', 'border-primary');
            btn.classList.remove('bg-surface-container-low', 'border-transparent');
            
            const icon = btn.querySelector('.material-symbols-outlined');
            const text = btn.querySelector('span:not(.material-symbols-outlined)');
            
            icon.classList.add('text-on-primary-container', 'active-icon');
            icon.classList.remove('text-secondary');
            text.classList.add('text-on-primary-container');
            text.classList.remove('text-on-surface');

            selectedSex = text.innerText.toLowerCase() === 'hombre' ? 'male' : 'female';
        });
    });

    // 📩 Manejo de envío del formulario
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const edad = document.getElementById('edad').value;
        const altura = document.getElementById('altura').value;
        const peso = document.getElementById('peso').value;

        if (!edad || !altura || !peso) {
            alert('¡Por favor, completa todos los campos! ✨');
            return;
        }

        // Construir URL con parámetros para pasar datos a resultado.html
        const params = new URLSearchParams({
            sex: selectedSex,
            age: edad,
            height: altura,
            weight: peso
        });

        // Animación de salida (opcional, pero premium)
        document.body.style.opacity = '0';
        setTimeout(() => {
            window.location.href = `resultado.html?${params.toString()}`;
        }, 300);
    });
});
