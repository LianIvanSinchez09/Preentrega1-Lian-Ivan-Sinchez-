// algoritmo que aplica descuentos random a las tarjetas de productos

//obtengo los elementos con la id tarjetaJs
const elementoDescuento = document.querySelectorAll("#tarjetaJs");

//iteramos por cada elemento y le aplicamos el descuento
elementoDescuento.forEach(element => {
    const descuentoRandom = Math.floor(Math.random()*21);
    if(descuentoRandom !== 0){
        element.textContent = `Descuento solo por hoy! ${descuentoRandom}%`;
    }
});

// algoritmo que pone links en el footer

// instancia de links
const footerLinks = [
    {text: "Productos", url: "../pages/productos.html"},
    {text: "Empleados", url: "../pages/empleados.html"},
    {text: "Contacto", url: "../pages/contacto.html"},
    {text: "Newsletter", url: "../pages/newsletter.html"}
]
//seleccionamos el elemento con la clase .list unstyled
const listaFooter = document.querySelector(".list-unstyled");

// les asignamos un nodo + estilos con la funcion map
const footerLinksHTML = footerLinks.map(link => `
    <li><a class="nav-item link-nav" href="${link.url}">${link.text}</a></li>
    `);

// se convierte el array en un string con la funcion .join()
// listaFooter.innerHTML = footerLinksHTML.join('');


// bloque de codigo enfocado en la pagina de empleados.html

/* instancias del modal (.modal), del boton de para abrir el modal (.modal_key), 
boton para cerrar el modal (.modal_close), la clase .modal_container con estilos 
para el modal y el arreglo de objetos en empleados */

const modal = document.querySelector('.modal');
const openModals = document.querySelectorAll('.modal_key');
const closeModal = document.querySelector('.modal_close');
const modalContainer = document.querySelector('.modal_container');

// iteraracion a traves de cada boton de apertura de modal
openModals.forEach((openModalButton, index) => {
    openModalButton.addEventListener("click", (e) => {

        // solicitud GET usando fetch para obtener el JSON de empleados
        fetch("/src/json/miembros.json")
            .then(response => response.json())
            .then(data => {
                // obtener el empleado correspondiente al botón que se hizo clic
                const empleado = data[index];

                // crear el contenido del perfil
                const profileContent = `
                    <img class="rounded" src="${empleado.perfilPic}" alt="${empleado.nombre}">
                    <h2 class="text-dark">${empleado.nombre} ${empleado.apellido}</h2>
                    <p class="text-dark">${empleado.cargo}</p>
                    <p class="text-dark">${empleado.desc}</p>
                    <a href="#" class="modal_close">Cerrar</a>
                `;

                // insertar el contenido en el modal
                modalContainer.innerHTML = profileContent;

                // m,ostrar el modal
                modal.classList.add('modal_show');
            });
    });
});

// agregar un evento click al modal para cerrarlo si se hace clic en el botón de cerrar
if(modal){
    modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal_close")) {
        e.preventDefault();
        modal.classList.remove('modal_show');
    }
});
}
/*
-Boton para añadir X existencias de un mismo producto, para evitar spamear el boton de comprar
-Cambiar el nombre de la pagina empleados y se llame "Conocenos", con fotos de la fabrica y contactos
-Boton de eliminar todos los items
-decoracion del mapa
*/

