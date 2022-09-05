import React from 'react';

const nav = {
    marginTop: '0px',
    margin: '0px',
    padding: '30px',
    width: '100vw',
    height: '10vh',
    background: '#282C34', 
    color: '#FFFFFF'
}

const title = {
    marginTop: '0px',
    marginBottom: '15px',
    fontSize: '28px',   
    color: '#FFFFFF' 
}

const Navbar = () => {
        return (
            <div style={nav}>
                    <div style={title}>BOOKSTORE SENAI</div>
            </div>      
    )
}
 
export default Navbar;