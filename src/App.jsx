import React, { useState } from "react";
import DoctorCard from "./components/DoctorCard";
import ServiceList from "./components/ServiceList";
import AppointmentForm from "./components/AppointmentForm";
import Modal from "./components/Modal";

import dr1 from "./assets/dr1.jpg";
import dr2 from "./assets/dr2.jpg";
import dr3 from "./assets/dr3.jpg";
import dr4 from "./assets/dr4.jpg";

import ser1 from "./assets/ser1.jpg";
import ser2 from "./assets/ser2.jpg";
import ser3 from "./assets/ser3.jpg";

function App() {
  const [activeSection, setActiveSection] = useState("doctors");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(""); 
  const [modalDetails, setModalDetails] = useState(""); 

  const doctors = [
    { name: "Dr. Mario", specialty: "Cardiología", experience: 10, image: dr1 },
    { name: "Dra. Ana Polo", specialty: "Medicina Interna", experience: 8, image: dr2 },
    { name: "Dr. Nick", specialty: "Cirugía General", experience: 5, image: dr3 },
    { name: "Dra. Simi", specialty: "Oftalmología", experience: 15, image: dr4 },
  ];

  const services = [
    { name: "Cardiología", description: "Especialización en el corazón y sistema circulatorio.", image: ser1 },
    { name: "Pediatría", description: "Especialización en la salud infantil.", image: ser2 },
    { name: "Radiología", description: "Diagnóstico a través de imágenes médicas.", image: ser3 },
  ];


  const openModal = (item, type) => {
    if (type === "doctor") {
      setModalContent(`Sobre ${item.name}`);  
      setModalDetails(`${item.name} es un médico especializado en ${item.specialty} con ${item.experience} años de experiencia.`);
    } else if (type === "service") {
      setModalContent(`Sobre ${item.name}`); 
      setModalDetails(`${item.name}: ${item.description}`);
    }
    setIsModalOpen(true); 
  };

  const closeModal = () => {
    setIsModalOpen(false); 
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Clínica Clínica</h1>

      {/* navbar */}
      <nav className="mb-4">
        <ul className="nav nav-pills justify-content-center">
          <li className="nav-item">
            <button
              className={`nav-link ${activeSection === "doctors" ? "active" : ""}`}
              onClick={() => setActiveSection("doctors")}
            >
              Doctores
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeSection === "services" ? "active" : ""}`}
              onClick={() => setActiveSection("services")}
            >
              Servicios
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeSection === "form" ? "active" : ""}`}
              onClick={() => setActiveSection("form")}
            >
              Agendar Cita
            </button>
          </li>
        </ul>
      </nav>

      {/* doctores */}
      {activeSection === "doctors" && (
        <div className="row">
          {doctors.map((doc, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <DoctorCard
                name={doc.name}
                specialty={doc.specialty}
                experience={doc.experience}
                image={doc.image}
                onClick={() => openModal(doc, "doctor")}
              />
            </div>
          ))}
        </div>
      )}

      {/* servicios */}
      {activeSection === "services" && (
        <div className="d-flex justify-content-center flex-wrap">
          {services.map((service, index) => (
            <div className="card" key={index} style={{ maxWidth: "300px", margin: "0 10px" }} onClick={() => openModal(service, "service")}>
              <img
                src={service.image}
                alt={service.name}
                className="card-img-top"
                style={{ maxHeight: "120px", width: "100%", objectFit: "contain", borderRadius: "5px", marginBottom: "10px" }}
              />
              <div className="card-body" style={{ textAlign: "center", padding: "10px" }}>
                <h5 className="card-title">{service.name}</h5>
                <p className="card-text">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeSection === "form" && <AppointmentForm />}

      {/* modal */}
      {isModalOpen && (
        <Modal title={modalContent} onClose={closeModal}>
          <p>{modalDetails}</p> 
        </Modal>
      )}
    </div>
  );
}

export default App;
