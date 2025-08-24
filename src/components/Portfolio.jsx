import React, { useState } from "react";
import Modal from "./Modal";

const Portfolio = () => {
  const [modalData, setModalData] = useState({ show: false });

  const projects = [
    {
      title: "CRUD Data Karyawan",
      desc: "Aplikasi sederhana untuk tambah, edit, hapus data karyawan.",
      img: "assets/crud-screenshot.png",
      tech: "HTML, CSS, JS, PHP, MySQL",
      github: "https://github.com/AnggaSaputra78/crud"
    },
    {
      title: "Landing Page",
      desc: "Website sederhana dengan React + CSS.",
      img: "assets/landing-screenshot.png",
      tech: "React, CSS",
      github: "https://github.com/AnggaSaputra78/landing"
    },
    {
      title: "Todo List App",
      desc: "Aplikasi untuk mencatat dan menyelesaikan tugas harian.",
      img: "assets/todo-screenshot.png",
      tech: "HTML, CSS, JS",
      github: "https://github.com/AnggaSaputra78/todo"
    }
  ];

  const openModal = (project) => setModalData({ show: true, ...project });
  const closeModal = () => setModalData({ show: false });

  return (
    <section id="portfolio" className="portfolio">
      <h2>Portofolio</h2>
      <div className="projects">
        {projects.map((proj, idx) => (
          <div key={idx} className="card" onClick={() => openModal(proj)}>
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
          </div>
        ))}
      </div>

      <Modal 
        show={modalData.show} 
        onClose={closeModal} 
        title={modalData.title} 
        img={modalData.img} 
        tech={modalData.tech} 
        github={modalData.github} 
      />
    </section>
  );
};

export default Portfolio;
