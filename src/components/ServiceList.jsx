function ServiceList({ services }) {
  return (
    <div className="d-flex justify-content-center flex-wrap"> {/* Asegura que las tarjetas estén en una fila horizontal */}
      {services.map((service, index) => (
        <div className="card" key={index} style={{ maxWidth: "300px", margin: "0 10px" }}> {/* Ajustamos el tamaño máximo de la tarjeta */}
          <img
            src={service.image}
            alt={service.name}
            className="card-img-top"
            style={{ maxHeight: "120px", width: "100%", objectFit: "contain", borderRadius: "5px", marginBottom: "10px" }} 
          />
          <div className="card-body" style={{ textAlign: "center", padding: "10px" }}>
            <h5 className="card-title">{service.name}</h5>
            <p className="card-text">
              {service.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ServiceList;
