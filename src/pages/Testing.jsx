import React from 'react'
import { useState, useEffect } from 'react'
import {collection, getDocs, getFirestore} from 'firebase/firestore'

// class Testing extends React.Component {
//   render() {
//     class ArmaPerfiles {
//       constructor(nombre, edad, ciudad) {
//         this.nombre = nombre;
//         this.edad = edad;
//         this.ciudad = ciudad;
//       }
//     }

//     const perfiles = [
//       new ArmaPerfiles("Lian", 22, "Neuquen"),
//       new ArmaPerfiles("Luciana", 43, "Neuquen"),
//       new ArmaPerfiles("Cristian", 41, "Neuquen")
//     ];

//     return (
//       // CONTADOR
//       <main>
//         <section className='centerflex margin-top'>
//           <div id="perfiles">
//             {perfiles.map((perfil, index) => (
//               <div key={index} className="d-flex flex-column">
//                 <h1 className='text-dark'>Hola, soy {perfil.nombre}!</h1>
//                 <p>Vivo en {perfil.ciudad}</p>
//                 <p>y tengo {perfil.edad} años</p>
//               </div>
//             ))}
//           </div>
//         </section>
//       </main>
//     );
//   }
// }

const Testing = () => {
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
  return (
    <main>
    {
      perfiles.map((p) => (
        <div className='d-flex flex-column margin-top'>
          <h1 className='text-dark'>Mi nombre: {p.name}</h1>
          <p>Mi apellido: {p.apellido}</p>
          <p>Mi rol en esta empresa es de: {p.cargo}</p>
          <p className='text-dark'>{p.desc}</p>
        </div>
      ))
    }
    </main>

  )
}


export default Testing;