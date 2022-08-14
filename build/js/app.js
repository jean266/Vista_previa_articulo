const btnShare = document.querySelector('#boton_share');
const shareMobil = document.querySelector('.contenedor_share-mobile');
const shareDesktop = document.querySelector('.contenedor_share-desktop');

document.addEventListener('DOMContentLoaded', () => {
    iniciarApp();
});

function iniciarApp() {
    mostrarShare();
}

function mostrarShare() {
    
    btnShare.addEventListener('click', () => {
        const tamañoPantalla = document.body.clientWidth;
        
        if(tamañoPantalla > 768) {
            shareDesktop.classList.toggle('mostrar');
            btnShare.parentElement.classList.toggle('activo');
        } else {
            shareMobil.classList.toggle('mostrar');
            btnShare.parentElement.classList.toggle('activo');
        }
    });

}

window.addEventListener('resize', () => {
    const pantalla = document.body.clientWidth;
    
    if(pantalla > 768 && shareMobil.classList.contains('mostrar')) {
        shareMobil.classList.remove('mostrar');
        btnShare.parentElement.classList.remove('activo');
    } else if(pantalla < 768  && shareDesktop.classList.contains('mostrar')) {
        shareDesktop.classList.remove('mostrar');
        btnShare.parentElement.classList.remove('activo');
    }
});

