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


