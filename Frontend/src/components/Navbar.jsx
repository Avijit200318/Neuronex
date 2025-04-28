import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <header className='h-20 py-8 px-16 flex justify-between items-center'>
            <Link to='/'>
                <h1 className="text-3xl">Neuronex</h1>
            </Link>
            <div className="relative flex gap-8 z-10">
                <Link to='/' className='text-lg uppercase'>Home</Link>
                <Link to='/' className='text-lg uppercase'>About</Link>
                <Link to='/' className='text-lg uppercase'>Contact</Link>
            </div>
        </header>
    )
}
