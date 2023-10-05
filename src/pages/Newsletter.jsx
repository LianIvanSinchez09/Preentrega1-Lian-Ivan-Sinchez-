import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export const Newsletter = () => {
  return (
    <main className="content-wrap">
            <section className="cover-newsletter">
                <div className="container">
                    <div className="newsletter-menu">
                    <h1 className="text-dark text-center">Suscríbete a nuestro boletín</h1>
                    <p className="text-center">Recibe notificaciones de nuevas recetas o nuevos productos.</p>
                    <form className="newsletter-input">
                        <div className="form-group">
                        <input type="email" className="form-control" placeholder="Tu Email"></input>
                        </div>
                        <div className="centerflex mt-3">
                        <button type="submit" className="secondary-btn">Suscribirme</button>
                        </div>
                    </form>
                    </div>
                </div>
            </section>
        </main>
  )
}

export default Newsletter
