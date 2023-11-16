import React, { useState, useEffect } from 'react';


const Testing = () => {
  const Padre = () => {
    return (
      <Anidado mensaje="Hola mundo" />
    );
  };

  const Anidado = (props) => {
    return (
      <h1 className='text-dark'>{props.mensaje}</h1>
    );
  };

  return (
    <main className='centerflex'>
      <Padre />
    </main>
  );
};

export default Testing;


// const Testing = () => {
  //   const [imageUrl, setImageUrl] = useState('');
  
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await fetch('https://api.spoonacular.com/food/menuItems/search?apiKey=8950d365cda64b0ba99c7fde86b1842c&number=10&maxSugar=');
  //         const data = await response.json();
  
  //         return (
  //           console.log(data.summary)
  //         );
  
  //         // Actualiza el estado con la URL de la imagen
  //         setImageUrl(data.image);
  //       } catch (error) {
  //         console.error('Error fetching recipe data:', error);
  //       }
  //     };
  
  //     fetchData();
  //   }, []);
  // };


// https://api.spoonacular.com/recipes/69095/tasteWidget.json?apiKey=8950d365cda64b0ba99c7fde86b1842c
// 8950d365cda64b0ba99c7fde86b1842c API KEY apiKey=8950d365cda64b0ba99c7fde86b1842c&includeNutrition=true