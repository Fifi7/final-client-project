
import './NavBar.css';
import image1 from '../Assets/logo1.png';
import React, {useState} from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function NavBar() {

  const [responsive, setResponsive] = useState(false);

  const toggleResponsive = () => {
    setResponsive(!responsive);
  };

  return (
    // <div className="topnav">
    <div className={`topnav ${responsive ? 'responsive' : ''}`}>
      <div className="logo">
        <img src={image1} alt="Logo" />
      </div>
      <Link to="/contact">Contact Us</Link>
      <Link to="/service">Service</Link>
      <Link to="/about">About Us</Link>
      <Link to="/">Home</Link>
      <Link to="/" className="icon" onClick={toggleResponsive}>
        &#9776;
        </Link>
    </div>
  );
}

export default NavBar;



// function NavBar() {
//   return (
//     <div className="topnav">
//       <div className="logo">
//         <img src={image1} alt="Logo" />
//       </div>
//       <a href="#contact-us">Contact Us</a>
//       <a href="#service">Service</a>
//       <a href="#about-us">About Us</a>
//       <a href="#home">Home</a>
//     </div>
//   );
// }

// export default NavBar;

