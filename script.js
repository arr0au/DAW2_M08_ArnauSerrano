// Función para ocultar todos los paneles y el menú principal
function hidePanels() {
    // Ocultar todos los paneles de contenido
    const panels = document.querySelectorAll('.content-panel');
    panels.forEach(panel => {
        panel.classList.add('hidden');
    });

    // Mostrar el título y el menú principal
    document.querySelector('.title-header').style.display = 'block';
    document.querySelector('.button-menu').style.display = 'flex';
}

// Escuchar clics en los botones del menú para mostrar paneles
document.addEventListener('DOMContentLoaded', () => {
    
    // Asignar eventos a los botones principales
    const buttons = document.querySelectorAll('.mc-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Obtenemos a dónde quiere ir leyendo el atributo onclick
            const attr = button.getAttribute('onclick');
            
            if(attr && attr.includes('#')) {
                e.preventDefault();
                // Extraer el ID del panel (ej: #perfil)
                const targetId = attr.match(/'#([^']+)'/)[1];
                
                // Ocultar título y menú principal
                document.querySelector('.title-header').style.display = 'none';
                document.querySelector('.button-menu').style.display = 'none';

                // Mostrar el panel correspondiente
                const targetPanel = document.getElementById(targetId);
                if(targetPanel) {
                    targetPanel.classList.remove('hidden');
                }
            }
        });
    });
});