import React from 'react';

const home = {
    marginTop: '0px',
    margin: '0px',
    font: '18px', 
    padding: '30px',
    width: '100vw',
    height: '70vh',
    background: '#D9D9D9',
    verticalAlign: 'center',
    borderRadius: '0px',
    float: 'center',    

}
const card = {
    width: '325px',
    height: '120px',
    background: '#FFFF',
    borderRadius: '8px',
    fontSize: '16px',
    color: '#D9D9D9',
    display: 'center'
}

const Home = () => {
        return (
            <div style={home}>
                <div style={card}>
                    <span>Título: BOOKSTORE</span><br/>
                    <span>Detalhes</span><br/>
                    <p>Loren Ipsum Loren IpsumLoren IpsumLoren IpsumLoren IpsumLoren Ipsum</p>
                    </div>
                <br/>
                <div style={card}>
                    <span>Título: BOOKSTORE</span><br/>
                    <span>Detalhes</span><br/>
                    <p>Loren Ipsum Loren IpsumLoren IpsumLoren IpsumLoren IpsumLoren Ipsum</p>
                    </div>
                <br/>
                <div style={card}>
                    <span>Título: BOOKSTORE</span><br/>
                    <span>Detalhes</span><br/>
                    <p>Loren Ipsum Loren IpsumLoren IpsumLoren IpsumLoren IpsumLoren Ipsum</p>
                    </div>
                <br/>
                <div style={card}>
                    <span>Título: BOOKSTORE</span><br/>
                    <span>Detalhes</span><br/>
                    <p>Loren Ipsum Loren IpsumLoren IpsumLoren IpsumLoren IpsumLoren Ipsum</p>
                    </div>
                <br/>
                
            </div>      
    )
}
 
export default Home;