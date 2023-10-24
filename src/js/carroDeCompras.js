

// Productos que se muestran en la pagina pages/productos.html

function productosShowcase(id, nombre, descripcion, altDescription, altImg , origen, precio, imagen){
  this.id = id;
  this.nombre = nombre;
  this.descripcion = descripcion;
  this.altDescription = altDescription;
  this.altImg = altImg;
  this.origen = origen;
  this.precio = precio;
  this.imagen = imagen;
}

const showcase = [
  new productosShowcase(1, "Mix Regional", "Sabores de la patagonia", "Recetas regionales", "mix-regional" ,  "Mix totalmente Argentino", 350, "../imgs/products-pngs/product-1.png"),
  new  productosShowcase(2, "Cheesecake Festivo", "Ideal para reuniones empresariales", "Té con amigas" , "cheesecake-festivo" , "Elaborado con los mejores productos", 550, "../imgs/products-pngs/product-2.png"),
  new  productosShowcase(3, "Cheesecake Tradicional", "Receta de la abuela", "Elaborado con la tradición que nos caracteriza" , "cheesecake-tradicional" ,"Regala un toque de dulzura con el más exquisito sabor", 150, "../imgs/products-pngs/product-3.png"),
  new  productosShowcase(4, "Arte en Cupcake", "Diseños a pedido del cliente", "Realizado por nuestros mejores artistas en Cupcake" , "arte-en-cupcake" , "Regala felicidad", 300, "../imgs/products-pngs/product-4.png"),
]

let carrito = [];

function actualizarCarro() {
    // Obtén el elemento donde mostrarás los productos y el total en tu HTML
    const carritoElement = document.getElementById('carrito');
    const totalElement = document.getElementById('total');
  
    // Limpia el contenido actual del carrito
    carritoElement.innerHTML = '';
  
    // Calcula el total y muestra cada producto en el carrito
    let total = 0;
  
    carrito.forEach((producto, index) => {
      total += producto.precio;
      const productoElement = document.createElement('div');
      productoElement.innerHTML = `<div class="d-flex flex-row mt-3 mb-2">
        ${producto.nombre} ${producto.precio.toFixed(2)}
        <button type="button" class="secondary-btn mx-2" onclick="borrarItems(${index})">Eliminar</button>
        </div>
      `;
      // Muestra el total en el elemento correspondiente
      carritoElement.appendChild(productoElement);
    })
    totalElement.innerHTML = `
    <h5 class="text-dark mb-2">Total: ${total.toFixed(2)}</h5>
    `;
    ;
  }
function agregarItem(nombre, precio) {
    const nuevoProducto = {
        nombre: nombre,
        precio: precio
    };
    carrito.push(nuevoProducto);
    actualizarCarro();
    localStorage.setItem('carrito', JSON.stringify(carrito));
}
function showProducts(){
  const productContainer = document.getElementById("product");

  showcase.forEach(showc => {
      const publicacionProducto = document.createElement("div");
      publicacionProducto.classList.add("column-products", "d-flex", "gap-5", "justify-content-center", "align-items-center");
      publicacionProducto.innerHTML = `
      <div class="product-container">
          <img src="${showc.imagen}" alt="${showc.altImg}">
      </div>
      <div class="x-transition text-products-container">
          <h2 class="text-dark">${showc.nombre}</h3>
          <p class="fs-6">• ${showc.descripcion}</p>
          <p class="fs-6">• ${showc.altDescription}</p>
          <p class="fs-6">• ${showc.origen}</p>
          <div class="mb-5">
            <button class="open-modal btn-2" type="button" onclick="agregarItem('${showc.nombre}', ${showc.precio})">Añadir al Carrito</button>
          </div>
      </div>
      `;
      productContainer.appendChild(publicacionProducto);
  }
  );
}

showProducts();

function borrarItems(index){
  carrito.splice(index, 1);
  actualizarCarro();
}
window.onload = function (){
  const carritoGuardado = JSON.parse(localStorage.getItem('carrito'));
  if(carritoGuardado){
    carrito = carritoGuardado;
    actualizarCarro();
  }
}