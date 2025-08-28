import { useState, useEffect } from "react";
import "./App.css";
import profilePic from "./assets/profile.jpg";

// Sertifikat IBM 1
import sertifikatIBMThumb1 from "./assets/sertifikatibm-thumbnail.jpg";
import sertifikatIBMpdf1 from "./assets/sertifikat-ibm.pdf";

// Sertifikat IBM 2
import sertifikatIBMThumb2 from "./assets/sertifikatibm2-thumbnail.jpg";
import sertifikatIBMpdf2 from "./assets/sertifikat-ibm2.pdf";

// Sertifikat Dicoding
import KeterampilanKrusialDeveloperdiEraAIpdf from "./assets/keterampilan-krusial-developer-di-era-ai.pdf";
import sertifikatketerampilanThumb from "./assets/sertifikatketerampilan-thumbnail.jpg";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Tutup menu ketika resize window (jika beralih ke desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll ketika menu terbuka
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Portofolio</div>

        {/* Menu */}
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <a href="#hero" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              Tentang
            </a>
          </li>
          <li>
            <a href="#portfolio" onClick={closeMenu}>
              Portofolio
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Kontak
            </a>
          </li>
          <li>
            <a href="#certificate" onClick={closeMenu}>
              Sertifikat
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <div className={`hamburger ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <img src={profilePic} alt="Foto Profil" className="profile-pic" />
        <h1>HALO, SAYA LUDFI DWI SEPTANTO RINAIDI ANGGA SAPUTRA</h1>
        <p>Mahasiswa yang sedang belajar menjadi Fullstack Web Developer</p>
        <a href="#portfolio" className="btn">
          Lihat Portofolio
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>Tentang Saya</h2>
        <p>
          Saya seorang mahasiswa yang sedang belajar menjadi Fullstack Web Developer.
          Berpengalaman dalam membuat aplikasi sederhana dengan JavaScript, React, dan Node.js.
          Senang mempelajari hal baru di dunia teknologi.
        </p>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio">
        <h2>Portofolio</h2>
        <div className="projects">
          <a
            href="https://crudkaryawan.page.gd/"
            target="_blank"
            rel="noopener noreferrer"
            className="card"
          >
            <h3>CRUD Data Karyawan</h3>
            <p>Aplicasi sederhana untuk tambah, edit, hapus data karyawan.</p>
          </a>

          <a
            href="https://catatanku.page.gd"
            target="_blank"
            rel="noopener noreferrer"
            className="card"
          >
            <h3>Todo List App</h3>
            <p>Aplikasi untuk mencatat dan menyelesaikan tugas harian.</p>
          </a>
        </div>
      </section>

      {/* Certificate Section */}
      <section id="certificate" className="certificate">
        <h2>Sertifikat</h2>
        <div className="certificates">
          {/* Sertifikat 1 */}
          <a
            href={sertifikatIBMpdf1}
            target="_blank"
            rel="noopener noreferrer"
            className="card"
          >
            <img
              src={sertifikatIBMThumb1}
              alt="Sertifikat Classifying Data Using IBM Granite"
              className="certificate-img"
            />
            <h3>Sertifikat Classifying Data Using IBM Granite</h3>
            <p>Sertifikat dasar Klasifikasi Data.</p>
          </a>

          {/* Sertifikat 2 */}
          <a
            href={sertifikatIBMpdf2}
            target="_blank"
            rel="noopener noreferrer"
            className="card"
          >
            <img
              src={sertifikatIBMThumb2}
              alt="Sertifikat IBM  Data Classification and Summarization"
              className="certificate-img"
            />
            <h3>Sertifikat IBM  Data Classification and Summarization</h3>
            <p>Sertifikat Klasifikasi dan Ringkasan Data.</p>
          </a>

          {/* Sertifikat 3 */}
          <a
            href={KeterampilanKrusialDeveloperdiEraAIpdf}
            target="_blank"
            rel="noopener noreferrer"
            className="card"
          >
            <img
              src={sertifikatketerampilanThumb}
              alt="Sertifikat Keterampilan Krusial Developer di Era AI"
              className="certificate-img"
            />
            <h3>Belajar Dasar Cloud dan Gen AI di AWS</h3>
            <p>Sertifikat Kelulusan</p>
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Kontak</h2>
        <p>
          Email:{" "}
          <a
            href="mailto:ludfidwi787@gmail.com?subject=Halo%20Angga&body=Isi%20email%20di%20sini"
            target="_blank"
            rel="noopener noreferrer"
          >
            ludfidwi787@gmail.com
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/ludfi-dwi-septanto-rinaidi-angga-saputra"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/ludfi-dwi-septanto-rinaidi-angga-saputra
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/AnggaSaputra78"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/AnggaSaputra78
          </a>
        </p>
        <p>
          WA:{" "}
          <a href="https://wa.me/6281450324748" target="_blank" rel="noopener noreferrer">
            081450324748
          </a>
        </p>
      </section>
    </div>
  );
}
export default App;