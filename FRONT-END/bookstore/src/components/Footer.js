import React from 'react';

const footer = {
    marginTop: '0px',
    marginLeft: '0px',
    padding: '5%',
    width: '100vw',
    height: '145px',
    background: '#282C34',
    verticalAlign: 'center',
    display: 'center',    
    color: '#FFFFFF',
    position: 'fixed',
    top:'80vh'
}

const Footer = () => {
        return (
            <h6 style={footer}>@Copyright Senai by Jason Volney</h6>
    )
}
 
export default Footer;