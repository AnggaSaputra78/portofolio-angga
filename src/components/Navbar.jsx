<<<<<<< HEAD
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">🚀 Angga</div>

      {/* Tombol Hamburger */}
      <div
        className={`hamburger ${isActive ? "active" : ""}`}
        onClick={() => setIsActive(!isActive)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menu Link */}
      <div className={`nav-links ${isActive ? "active" : ""}`}>
        <a href="#beranda">Beranda</a>
        <a href="#tentang">Tentang</a>
        <a href="#portofolio">Portofolio</a>
        <a href="#kontak">Kontak</a>
      </div>
    </nav>
  );
}
=======
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">🚀 Angga</div>

      {/* Tombol Hamburger */}
      <div
        className={`hamburger ${isActive ? "active" : ""}`}
        onClick={() => setIsActive(!isActive)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menu Link */}
      <div className={`nav-links ${isActive ? "active" : ""}`}>
        <a href="#beranda">Beranda</a>
        <a href="#tentang">Tentang</a>
        <a href="#portofolio">Portofolio</a>
        <a href="#kontak">Kontak</a>
      </div>
    </nav>
  );
}
>>>>>>> 2fd3747 (Upload project portofolio)
