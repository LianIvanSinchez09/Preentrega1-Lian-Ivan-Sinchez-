import React from 'react'

const Rendering = () => {

    //renderizado condicional basado en una expresion

    let isVisible = true

    //isVisible && <ComponenteVisible/>

    

  return (
    <div>{isVisible && <ComponenteVisible/>}</div> // va a ser visible ya que la condicion es true
  )

  const [mensaje, setMensaje] = useState("");
  let isVisible2 = "Coder"
  let carrito = ["A"]

  return(
    <div>
    {
        mensaje ? <h1>{mensaje}</h1> : <h3>No hay mensajes</h3>
    }
    <button onClick={() => setMensaje('Mensaje modificado')}>Cambiar mensaje</button>
    </div>

  )


}

export default Rendering