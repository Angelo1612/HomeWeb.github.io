const btnMenu = document.querySelector('.btn-menu');
const menu = document.querySelector('.lista');
let on_off = true;

const gallery = document.querySelectorAll('.seccion-imagenes .img-tec img');
const modal = document.querySelector('.modal');
const imgModal = document.querySelector('#imgModal');
const caption = document.querySelector('#caption');

// Menu Responsive
btnMenu.addEventListener('click', () => {
     
    if (on_off) {
       menu.style.left = "0";
       menu.style.transition = "300ms";
       on_off = false;
    }else{
        on_off = false;
        menu.style.left = "-100%";
        menu.style.transition = "300ms";
        on_off = true;
    }

});

// Imagenes
gallery.forEach((images) => {
     
    images.addEventListener('click', (event) => {
       modal.style.display = "block";

       let srcImg = event.target.src;
       let altImg = event.target.alt;

       imgModal.src = srcImg;
       caption.innerHTML = altImg;
              
    });
     
});

// Cerrar Modal
document.querySelector('#closeModal').addEventListener('click', () => {
    modal.style.display = "none";
});