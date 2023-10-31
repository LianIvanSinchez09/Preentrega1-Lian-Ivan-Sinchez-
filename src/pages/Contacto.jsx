import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Styles from '../css/styles.css'

const Contacto = () => {
    return(
        <main className="bg-form content-wrap">
        <section className="mt-5">
        <div className="map-settings d-flex justify-content-center align-items-center">
            <div className="container-fluid centerflex gap-3 contacts-flex">
                <div className="info-box">
                    <h3 className="text-center">Contáctanos</h3>
                    <div className="form-styling">
                    <form className="me-xl-5 d-flex flex-column">
                        <label for="emailInput">Email</label>
                        <input type="email" className="form-control" id="emailInput" placeholder="Email"></input>
                        <label for="nomcompleto">Nombre Completo</label>
                        <input type="text" className="form-control" id="user_nombre" placeholder="Inserte nombre del remitente"></input>
                        <label for="direccionInput">Direccion</label>
                        <input type="text" className="form-control" id="direccionInput" placeholder="1234 Manuel Belgrano..."></input>
                        <label for="msg_usuario_input">Mensaje</label>
                        <input type="text" className="form-control" id="user_mensaje" placeholder="Inserte mensaje"></input>
                        <div className="form-row">
                            <label for="provinciaInput">Provincia</label>
                            <select id="provinciaInput" className="form-control">
                                <option selected>Elegir</option>
                                <option value="bsas">Buenos Aires</option>
                                <option value="caba">Ciudad Autónoma de Buenos Aires</option>
                                <option value="catamarca">Catamarca</option>
                                <option value="chaco">Chaco</option>
                                <option value="chubut">Chubut</option>
                                <option value="cordoba">Córdoba</option>
                                <option value="corrientes">Corrientes</option>
                                <option value="entre_rios">Entre Ríos</option>
                                <option value="formosa">Formosa</option>
                                <option value="jujuy">Jujuy</option>
                                <option value="la_pampa">La Pampa</option>
                                <option value="la_rioja">La Rioja</option>
                                <option value="mendoza">Mendoza</option>
                                <option value="misiones">Misiones</option>
                                <option value="neuquen">Neuquén</option>
                                <option value="rio_negro">Río Negro</option>
                                <option value="salta">Salta</option>
                                <option value="san_juan">San Juan</option>
                                <option value="san_luis">San Luis</option>
                                <option value="santa_cruz">Santa Cruz</option>
                                <option value="santa_fe">Santa Fe</option>
                                <option value="santiago_del_estero">Santiago del Estero</option>
                                <option value="tierra_del_fuego">Tierra del Fuego</option>
                                <option value="tucuman">Tucumán</option>
                            </select>
                        </div>
                        <button type="submit" className="main-btn mt-3">Enviar</button>
                    </form>
                </div>
            </div>
            <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24827.250548759952!2d-68.17045322568362!3d-38.93754499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a3335a7826929%3A0x988f06b7378fb7e0!2sBuenos%20Caprichos!5e0!3m2!1ses-419!2sar!4v1686533774392!5m2!1ses-419!2sar" height="580" width="580" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        </section>
    </main>
    )
}

export default Contacto