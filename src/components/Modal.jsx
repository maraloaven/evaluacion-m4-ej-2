import ReactDOM from "react-dom";

function Modal({ title, children, onClose }) {
  return ReactDOM.createPortal(
    <div style={overlayStyles} onClick={onClose}> {/* Fondo con transparencia */}
      <div style={modalStyles} onClick={(e) => e.stopPropagation()}> {/* Evita que el clic en el modal cierre el modal */}
        <h3>{title}</h3>
        {children}
        <button onClick={onClose} style={closeButtonStyles}>Cerrar</button>
      </div>
    </div>,
    document.getElementById("modal-root") // El modal se renderiza en este div
  );
}

const overlayStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo translúcido
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000, // Asegura que el modal esté encima de todo
};

const modalStyles = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "8px",
  width: "400px",
  textAlign: "center",
  boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
  // Sin animación de entrada
};

const closeButtonStyles = {
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  padding: "10px 20px",
  borderRadius: "5px",
  cursor: "pointer",
  marginTop: "15px",
  fontSize: "16px",
};

export default Modal;
