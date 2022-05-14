import React from 'react';

function Header(props) {
    const { title } = props;
    return (
        <header id="Header" className='h-20 bg-indigo-400 flex justify-center'>
            <span className='text-white text-5xl text-light font-serif self-center'>{title}</span>
        </header>
    )
}

export default Header;