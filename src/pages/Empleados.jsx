import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import {collection, getDocs, getFirestore} from 'firebase/firestore'
import { listAll, ref } from 'firebase/storage';
import Loader from '../components/Loader';


export const Empleados = () => {
    const [perfiles, setPerfiles] = useState([])
    useEffect(() =>{
      //getFirestore: input de los datos de la database formada en firestore por el dev
      const dataBase = getFirestore()
      //especifico cual coleccion de la database queremos, en este caso los perfiles
      const profileCollection = collection(dataBase, 'perfiles')
      //getDocs trae la informacion de la variable con la collection a eleccion
      getDocs(profileCollection).then((snapshot) => {
        const docs = snapshot.docs.map((doc) => doc.data())
        setPerfiles(docs)
      })
    }, [])

    //lo mismo que el useState de perfiles pero para los empleados
    const [perfilesEmpleados, setPerfilesEmpleados] = useState([])
    useEffect(() =>{
        const databasePerfiles2 = getFirestore()
        const profileCollection = collection(databasePerfiles2, 'perfiles-low-tier')
        getDocs(profileCollection).then((snapshot2) => {
          const docs2 = snapshot2.docs.map((doc2) => doc2.data())
          setPerfilesEmpleados(docs2)
        })
      }, [])
    
      const [loading, setLoading] = useState(true)
      
      useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3500)
    }, [])

    return (
    <main  className="content-wrap">
        <section className="empleados-cover container-fluid">
            <div className="text-center filter-bg fs-6">
                <h1>Unite a la mejor panadería de Argentina</h1>
            </div>
        </section>
        {
            loading ? 

            <Loader/>

            :
        <>
        <section className="sales-index miembros-section">
            {
            perfiles.map((lider) => (
            <div className="fx-card card-container card-bg">
                <div className="usercard">
                    <div className="usercardPfp-container">
                        <div className="usercardPfp-bg"></div>
                        <img className="usercardPfp" src={lider.perfilPic} alt={lider.alt}></img>
                    </div>
                    <div className="desc-container">
                        <div className="card-title title-styling">
                            <h2 className='title-styling mt-1'>{lider.nombre} {lider.apellido}</h2>
                        </div>
                        <div className="roles-container">
                            <div className="role-circle">
                                <p className="title-styling">{lider.cargo}</p>
                            </div>
                        </div>
                        <button className="detail-button main-btn">Ver perfil</button>
                    </div>
                </div>
            </div>
            ))
            }
        </section>
        <section className="sales-index miembros-section">
        {
            perfilesEmpleados.map((emp) => (
            <div className="fx-card card-container card-bg">
                <div className="usercard">
                    <div className="usercardPfp-container">
                        <div className="usercardPfp-bg"></div>
                        <img className="usercardPfp" src={emp.perfilPic}></img>
                    </div>
                    <div className="desc-container">
                        <div className="card-title title-styling">
                            <h2 className='title-styling mt-1'>{emp.nombre} {emp.apellido}</h2>
                        </div>
                        <div className="roles-container">
                            <div className="role-circle">
                                <p className="title-styling">{emp.cargo}</p>
                            </div>
                        </div>
                        <button className="detail-button main-btn">Ver perfil</button>
                    </div>
                </div>
            </div>
            ))
            }
        </section>
        </>
        
        }
    </main>
    )
}

export default Empleados