<<<<<<< HEAD
import React, { useState } from "react";
import sertifikatIBMThumb from "../assets/sertifikatibm-thumbnail.jpg";
import sertifikatIBMpdf from "../assets/sertifikat-ibm.pdf";
import sertifikatketerampilanThumb from "../assets/sertifikatketerampilan-thumbnail.jpg";
import KeterampilanKrusialDeveloperdiEraAIpdf from "../assets/keterampilan-krusial-developer-ai.pdf";
import "./Certificate.css";

const Certificate = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);

  const openModal = async (pdfFile) => {
    try {
      const response = await fetch(pdfFile);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob); // bikin object URL
      setSelectedPdf(url);
    } catch (error) {
      console.error("Gagal membuka PDF:", error);
    }
  };

  const closeModal = () => {
    setSelectedPdf(null);
  };

  return (
    <section id="certificate" className="certificate">
      <h2>Sertifikat</h2>
      <div className="certificates">
        {/* Sertifikat 1 */}
        <div
          className="card"
          onClick={() => openModal(sertifikatIBMpdf)}
        >
          <img
            src={sertifikatIBMThumb}
            alt="Sertifikat Classifying Data Using IBM Granite"
            className="certificate-img"
          />
          <h3>Sertifikat Classifying Data Using IBM Granite</h3>
          <p>Sertifikat dasar Klasifikasi Data.</p>
        </div>

        {/* Sertifikat 2 */}
        <div
          className="card"
          onClick={() => openModal(KeterampilanKrusialDeveloperdiEraAIpdf)}
        >
          <img
            src={sertifikatketerampilanThumb}
            alt="Sertifikat Keterampilan Krusial Developer di Era AI"
            className="certificate-img"
          />
          <h3>Sertifikat Keterampilan Krusial Developer di Era AI</h3>
          <p>DevCoach 196: Prompt Engineering.</p>
        </div>
        {/* Sertifikat 3 */}
        <div
          className="card"
          onClick={() => openModal(KeterampilanKrusialDeveloperdiEraAIpdf)}
        >
          <img
            src={sertifikatketerampilanThumb}
            alt="Belajar Dasar Cloud dan Gen AI di AWS"
            className="certificate-img"
          />
          <h3>Belajar Dasar Cloud dan Gen AI di AWS</h3>
          <p>Sertifikat Kelulusan</p>
        </div>
      </div>

      {/* Modal Preview */}
      {selectedPdf && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}>
              ✖
            </button>
            <iframe
              src={selectedPdf}
              title="PDF Viewer"
              className="pdf-viewer"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificate;
=======
import React, { useState } from "react";
import sertifikatIBMThumb from "../assets/sertifikatibm-thumbnail.jpg";
import sertifikatIBMpdf from "../assets/sertifikat-ibm.pdf";
import sertifikatketerampilanThumb from "../assets/sertifikatketerampilan-thumbnail.jpg";
import KeterampilanKrusialDeveloperdiEraAIpdf from "../assets/keterampilan-krusial-developer-ai.pdf";
import "./Certificate.css";

const Certificate = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);

  const openModal = async (pdfFile) => {
    try {
      const response = await fetch(pdfFile);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob); // bikin object URL
      setSelectedPdf(url);
    } catch (error) {
      console.error("Gagal membuka PDF:", error);
    }
  };

  const closeModal = () => {
    setSelectedPdf(null);
  };

  return (
    <section id="certificate" className="certificate">
      <h2>Sertifikat</h2>
      <div className="certificates">
        {/* Sertifikat 1 */}
        <div
          className="card"
          onClick={() => openModal(sertifikatIBMpdf)}
        >
          <img
            src={sertifikatIBMThumb}
            alt="Sertifikat Classifying Data Using IBM Granite"
            className="certificate-img"
          />
          <h3>Sertifikat Classifying Data Using IBM Granite</h3>
          <p>Sertifikat dasar Klasifikasi Data.</p>
        </div>

        {/* Sertifikat 2 */}
        <div
          className="card"
          onClick={() => openModal(KeterampilanKrusialDeveloperdiEraAIpdf)}
        >
          <img
            src={sertifikatketerampilanThumb}
            alt="Sertifikat Keterampilan Krusial Developer di Era AI"
            className="certificate-img"
          />
          <h3>Sertifikat Keterampilan Krusial Developer di Era AI</h3>
          <p>DevCoach 196: Prompt Engineering.</p>
        </div>
        {/* Sertifikat 3 */}
        <div
          className="card"
          onClick={() => openModal(KeterampilanKrusialDeveloperdiEraAIpdf)}
        >
          <img
            src={sertifikatketerampilanThumb}
            alt="Belajar Dasar Cloud dan Gen AI di AWS"
            className="certificate-img"
          />
          <h3>Belajar Dasar Cloud dan Gen AI di AWS</h3>
          <p>Sertifikat Kelulusan</p>
        </div>
      </div>

      {/* Modal Preview */}
      {selectedPdf && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}>
              ✖
            </button>
            <iframe
              src={selectedPdf}
              title="PDF Viewer"
              className="pdf-viewer"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificate;
>>>>>>> 2fd3747 (Upload project portofolio)
