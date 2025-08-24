import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import "./App.css";
import profilePic from './assets/profile.jpg';

function App() {
  return (
    <>
      {/* Navbar */}
      <nav>
        <a href="#hero">Home</a>
        <a href="#about">Tentang</a>
        <a href="#portfolio">Portofolio</a>
        <a href="#contact">Kontak</a>
      </nav>

          {/* Hero */}
    <section id="hero" className="hero">
      <img 
        src={profilePic} 
        alt="Foto Profil Angga Saputra" 
        className="profile-pic" 
      />
      <h1>Halo, Saya Angga Saputra 🚀</h1>
      <p>Mahasiswa yang sedang belajar menjadi Fullstack Web Developer</p>
      <a href="#portfolio" className="btn">Lihat Portofolio</a>
    </section>

      {/* About */}
      <section id="about" className="about">
        <h2>Tentang Saya</h2>
        <p>
          Saya seorang mahasiswa yang sedang belajar menjadi Fullstack Web Developer.
          Berpengalaman dalam membuat aplikasi sederhana dengan JavaScript, React, dan Node.js.
          Senang mempelajari hal baru di dunia teknologi.
        </p>
      </section>

        {/* Portfolio */}
<section id="portfolio" className="portfolio">
  <h2>Portofolio</h2>
  <div className="projects">
    <a href="https://karyawancrud.page.gd/" target="_blank" rel="noopener noreferrer" className="card">
      <h3>CRUD Data Karyawan</h3>
      <p>Aplikasi sederhana untuk tambah, edit, hapus data karyawan.</p>
    </a>

    <a href="https://catatanku.page.gd" target="_blank" rel="noopener noreferrer" className="card">
      <h3>Todo List App</h3>
      <p>Aplikasi untuk mencatat dan menyelesaikan tugas harian.</p>
    </a>
  </div>
</section>
{/* Contact */}
<section id="contact" className="contact">
  <h2>Kontak</h2>
  <p>Email: 
    <a 
      href="mailto:ludfidwi787@gmail.com?subject=Halo%20Angga&body=Isi%20email%20di%20sini" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      ludfidwi787@gmail.com
    </a>
  </p>
  <p>LinkedIn: 
    <a 
      href="https://www.linkedin.com/in/ludfi-dwi-septanto-rinaidi-angga-saputra" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      linkedin.com/in/ludfi-dwi-septanto-rinaidi-angga-saputra
    </a>
  </p>
  <p>GitHub: 
    <a 
      href="https://github.com/AnggaSaputra78" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      github.com/AnggaSaputra78
    </a>
  </p>
  <p>WA: 
    <a 
      href="https://wa.me/6281450324748" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      081450324748
    </a>
  </p>
</section>
    </>
  );
}
export default App;
