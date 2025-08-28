import React from "react";
import "./Modal.css"; // CSS modal terpisah

const Modal = ({ show, onClose, title, img, tech, github }) => {
  if (!show) return null; // Kalau show false, modal tidak muncul

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
        <h3>{title}</h3>
        <img src={img} alt={title} />
        <p>Teknologi: {tech}</p>
        <a href={github} target="_blank" rel="noopener noreferrer">Lihat GitHub</a>
      </div>
    </div>
  );
};

export default Modal;
