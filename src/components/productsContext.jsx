import React from 'react'

export const productsContext = React.createContext();

const productsDb = () => {
    const [productos, setProductos] = useState([])
    
    useEffect(() =>{
      const dbProd = getFirestore()
      const prodCollection = collection(dbProd, 'productos')
      getDocs(prodCollection)
      .then((snapshot) => {
        const docs = snapshot.docs.map((doc) => doc.data())
        setProductos(docs)
      })
      .catch((error) => {
        console.error("Error al cargar los productos:", error)
      })
    }, [])

    return (
        <productsContext.Provider>
            <div>

            </div>
        </productsContext.Provider>

    )
}

export default productsDb