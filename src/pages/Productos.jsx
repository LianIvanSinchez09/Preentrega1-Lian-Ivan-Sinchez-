import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export const Productos = () => {
  return (
    <main className="content-wrap">
    <section className="mb-3">
      <div className="cover-products">
        <div className="centerflex text-center">
          <h1>Nuestros Productos</h1>
        </div>
      </div>
    </section>
      <section className="product-showcase mb-5">
          <h2 className="display-5 text-center text-dark mb-5 opacity-0-100">Sin conservantes • Envios gratis • Para compartir cuando quieras</h2>
          <div id="product">
              {/* productos añadidos en js/productos */}
          </div>
      </section>
  </main>
  )
}

export default Productos
