import React from 'react'

const Footer = () => {
    return (
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
  )
}

export default Footer