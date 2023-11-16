import React, { useEffect, useState } from 'react';
import Loader from './Loader';

const Footer = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []); // Asegúrate de pasar un array vacío como dependencia para que useEffect se ejecute solo una vez al montar el componente

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <footer className="text-white">
          <div className='margin-top'>
            <div>
              <h5 className="display-5">Contacto</h5>
              <p className="fs-4">Teléfono: +366 123 XXXX</p>
              <p className="fs-4">Email: liansinchez00@gmail.com</p>
              <div>
                <h5 className="display-5">Enlaces</h5>
                <ul className="list-unstyled">
                  {/* links añadidos con .map en js/body.js */}
                </ul>
              </div>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;