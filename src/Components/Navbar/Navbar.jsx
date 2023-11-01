import { useEffect, useState } from 'react'
import './Navbar.css'
import { NavLink , Link } from 'react-router-dom'

const Navbar = () => {
  const [position, setPosition] = useState(false);

  const NavbarScrollHandler = () => {
    if (window.scrollY > 50) {
      setPosition(true);
    } else {
      setPosition(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', NavbarScrollHandler);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', NavbarScrollHandler);
    };
  }, []);

   


  return (
    <nav className={position ? 'y':'n'}>
    <nav className={position ?"navbar navbar-expand-lg navbar-light nvb" : 'navbar navbar-expand-lg navbar-light nvbOff'} >
  <div className="container">
    <Link className="navbar-brand" to="/">
      <img src="/images/logo.png" alt="LOGO" className="w-100 h-100 logo" />
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav gap-3 mx-auto position-relative nav-links py-3">
        <li className="nav-item ">
          <NavLink to="/" className="rounded-pill btn">
            Home
          </NavLink>
        </li>
        <li className="nav-item ">
          <NavLink to="/about" className="rounded-pill btn">
            About
          </NavLink>
        </li>
        <li className="nav-item ">
          <NavLink to="/tours" className="rounded-pill btn">
            Tours
          </NavLink>
        </li>
      </ul>
      
      <div className="d-flex gap-3 btns">
        <Link to="/login" className="btn rounded-pill">
          Login
        </Link>
        <Link to="/register" className="btn rounded-pill reg">
          Register
        </Link>
      </div>
    </div>
  </div>
</nav>
</nav>
  )
}

export default Navbar