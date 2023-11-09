import React, { useEffect, useState } from 'react'
import {collection, getDocs, getFirestore} from 'firebase/firestore'

const UserCard = () => {
  const [perfiles, setPerfiles] = useState([])
  useEffect(() =>{
    //getFirestore: input de los datos de la database formada en firestore por el dev
    const dataBase = getFirestore()
    //especifico cual coleccion de la database quiero, en este caso los perfiles
    const profileCollection = collection(dataBase, 'perfiles')
    //getDocs trae la informacion de la variable con la collection a eleccion
    getDocs(profileCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data())
      setPerfiles(docs) 
    })
  }, [])
  return (
    <div>
    {
      perfiles.map((p) => (
        <div>
          <h1>Mi nombre: {p.name}</h1>
          <p>Mi apellido: {p.apellido}</p>
          <p>Mi rol en esta empresa es de: {p.cargo}</p>
          
        </div>
      ))
    }
    </div>

  )
}



export default UserCard