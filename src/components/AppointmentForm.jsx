import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

function AppointmentForm() {
  const [formData, setFormData] = useState({
    patientName: "",
    doctor: "",
    date: "",
  });
  const [appointments, setAppointments] = useState([]);
  const patientNameRef = useRef(null); // Referencia al campo "Nombre del Paciente"

  // Uso de useEffect para gestionar cambios en las citas
  useEffect(() => {
    console.log("Component mounted or appointments updated");
  }, [appointments]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.patientName || !formData.doctor || !formData.date) {
      alert("Hay campos sin completar.");
      return;
    }
    setAppointments([...appointments, formData]);
    setFormData({ patientName: "", doctor: "", date: "" });
  };

  useEffect(() => {
    patientNameRef.current.focus(); // Focaliza en el campo "Nombre del Paciente" al montar el componente
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit} className="p-3 border rounded">
        <div className="mb-3">
          <label htmlFor="patientName" className="form-label">
            Nombre del Paciente:
          </label>
          <input
            type="text"
            className="form-control"
            id="patientName"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
            ref={patientNameRef} // Asocia la referencia
          />
        </div>
        <div className="mb-3">
          <label htmlFor="doctor" className="form-label">
            Doctor:
          </label>
          <input
            type="text"
            className="form-control"
            id="doctor"
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Fecha de la Cita:
          </label>
          <input
            type="date"
            className="form-control"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Agendar Cita
        </button>
      </form>

      <div className="mt-4">
        <h5>Citas Agendadas:</h5>
        <ul>
          {appointments.map((appointment, index) => (
            <li key={index}>
              {appointment.patientName} tiene una cita con {appointment.doctor} el {appointment.date}.
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

AppointmentForm.propTypes = {
  patientName: PropTypes.string,
  doctor: PropTypes.string,
  date: PropTypes.string,
};

export default AppointmentForm;
