let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    buscarFormulario.classList.remove('active');
    cartaItems.classList.remove('active');
}
let buscarFormulario = document.querySelector('.buscar-formulario');

document.querySelector('#buscar-btn').onclick = () => {
    buscarFormulario.classList.toggle('active');
    navbar.classList.remove('active');
    cartaItems.classList.remove('active');
}

let cartaItem = document.querySelector('.carta-items-contenedor');

document.querySelector('#carrito-btn').onclick = () => {
    cartaItem.classList.toggle('active');
    buscarFormulario.classList.remove('active');
    navbar.classList.remove('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
    buscarFormulario.classList.remove('active');
    cartaItems.classList.remove('active');
}