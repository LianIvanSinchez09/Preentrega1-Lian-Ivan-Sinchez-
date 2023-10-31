import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export const Empleados = () => {
  return (
    <main className="content-wrap">
        <section className="empleados-cover container-fluid">
            <div className="text-center filter-bg fs-6">
                <h1>Unite a la mejor panadería de Argentina</h1>
            </div>
        </section>
        <section id="modal" className="modal">
            <div className="modal_container">

            </div>
        </section>
        <section className="miembros-section border">
            <h5 className="text-center text-dark">Nuestros lideres</h5>
            <div className="admins-section">
                <div id="profile-1" className="usercard">
                    <img src="../imgs/founder1.jpg" alt="fundador1"></img>
                    <h5 className="text-center">Gael Huertas</h5>
                    <p className="text-center text-dark">Lider de marketing</p>
                    <a href="#" id='modal_key' className="btn-2">Ver Perfil</a>
                </div>
                <div id="profile-2" className="usercard">
                    <img src="../imgs/founder2.jpg" alt="fundador2"></img>
                    <h5 className="text-center">Julian Martos</h5>
                    <p className="text-center">Community Manager</p>
                    <a href="#" id='modal_key' className="btn-2">Ver Perfil</a>
                </div>
                <div id="profile-3" className="usercard">
                    <img src="../imgs/founder3.jpg" alt="fundador3"></img>
                    <h5 className="text-center">Dario Caro</h5>
                    <p className="text-center">Lider chef</p>
                    <a href="#" id='modal_key' className="btn-2">Ver Perfil</a>
                </div>
            </div>
            <h5 className="text-center text-dark">Nuestros Empleados</h5>
            <div className="employee-section">
                <div id="profile-4" className="usercard">
                    <img src="../imgs/employee1.jpg" alt="empleado1"></img>
                    <h5 className="text-center display-6">Lorena Martinez</h5>
                    <p className="text-center">Panadera Oficial</p>
                    <a href="#" id='modal_key' className="btn-2">Ver Perfil</a>
                </div>
                <div id="profile-5" className="usercard">
                    <img src="../imgs/employee2.jpg" alt="empleado2"></img>
                    <h5 className="text-center">Valeria Rodriguez</h5>
                    <p className="text-center">Panadera Oficial</p>
                    <a href="#" id='modal_key' className="btn-2">Ver Perfil</a>
                </div>
                <div id="profile-6" className="usercard">
                    <img src="../imgs/employee3.jpg" alt="empleado3"></img>
                    <h5 className="text-center">Luis Caro</h5>
                    <p className="text-center">Panadero Oficial</p>
                    <a href="#" id='modal_key' className="btn-2">Ver Perfil</a>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Empleados