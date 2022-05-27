import React, { useState, useEffect } from "react";
import "./Navbar.css";
function Navbar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
        alt="Netflix Logo"
      />
      <div className="nav_menu">
        <a className="nav_item" href="#Homepage">
          Inicio
        </a>

        <a className="nav_item" href="#Homepage">
          Series
        </a>

        <a className="nav_item" href="#Homepage">
          Peliculas
        </a>

        <a className="nav_item" href="#Homepage">
          Novedades populares
        </a>

        <a className="nav_item" href="#Homepage">
          Mi lista
        </a>
      </div>

      <img
        className="avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="avatar"
      />
    </div>
  );
}

export default Navbar;
