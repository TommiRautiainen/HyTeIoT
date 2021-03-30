import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>IoT Sääasema</h1>
            <Link to="/" style={linkStyle}>Sääasema</Link> - <Link to="/portfolio" style={linkStyle}>Portfolio</Link>
        </header>
    )
}
const linkStyle = {
  color:'#ffffff',
  textDecoration:'none'
} 
const headerStyle = {
  background: '#333333',
  color: '#ffffff',
  textAlign: 'center',
  position: 'static',
  top: '0px',
  width: '100%',
  padding: '10px'
}
export default Header;