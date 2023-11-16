import React from 'react'
import { Spinner } from 'react-bootstrap'


const Loader = () => {
    return (
        <main className='centerflex'>
            <Spinner animation="border" variant="danger" />
            <h1 className='text-dark'>Estamos trabajando en ello...</h1>
        </main>
    )
}

export default Loader