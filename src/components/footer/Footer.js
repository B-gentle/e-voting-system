import React from 'react';
import './footer.css';

const Footer = () => {
    let date = new Date().getFullYear();
  return (
    <footer>
<p>Designed By BeeTech&#8482; <br /> &copy; {date}</p>
    </footer>
  )
}

export default Footer