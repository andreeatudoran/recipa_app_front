import React from 'react';

function Header(props) {
    const { title } = props;
    return (
        <header id="Header" className='h-20 bg-cyan-600 flex justify-center'>
            <span className='text-white text-5xl text-light font-sans self-center'>{title}</span>
        </header>
    )
}

export default Header;