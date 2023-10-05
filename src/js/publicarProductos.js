// Función constructora para productos
function constructoraTarjetas(id, nombre, descripcion, precio, imagen){
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.imagen = imagen;
}

// instancias de productos
const productos = [
    new constructoraTarjetas (1, "Mix Regional", "Pastafrola, medialunas y más (1 docena)", 350, "imgs/products-pngs/product-1.png"),
    new  constructoraTarjetas (2, "Cheesecake Festivo", "Cheesecake de frutilla y chocolate (1)", 550, "imgs/products-pngs/product-2.png"),
    new  constructoraTarjetas (3, "Cheesecake Tradicional", "Cheesecake con frutilla y pasta de maní (1)", 150, "imgs/products-pngs/product-3.png"),
    new  constructoraTarjetas (4, "Arte en cupcake", "Cupcake de crema con chispas de chocolate y frutilla en la cima (1)", 300, "imgs/products-pngs/product-4.png"),
];

// Mostrar los productos en las tarjetas
function mostrarProductos(){
    const container = document.querySelector(".container-fluid.sales-index");

    productos.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("card", "product-card") // estilos css

        card.innerHTML = `
        <img class="card-img-top pb-3" src="${producto.imagen}" alt="${producto.nombre}">
        <div class="card-body">
            <div>
                <h5 class="card-title fs-3">${producto.nombre}</h5>
                <p class="card-text text-dark fs-5">${producto.descripcion}</p>
                <p id="tarjetaJs" class="h6 text-dark"></p>
                <span class="text-dark">$${producto.precio}</span>
            </div>
            <button class="btn-2"><a href="pages/productos.html">Ir a Productos</a></button>
        </div>
        `;

        container.appendChild(card);
    }
    );
}

mostrarProductos();

