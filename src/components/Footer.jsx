import React, { useEffect, useState } from 'react';
import Loader from './Loader';

const Footer = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []); 

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
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;