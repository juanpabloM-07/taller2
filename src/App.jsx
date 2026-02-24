import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const productos = [
    {
      id: 1,
      nombre: "El Vigilante",
      precio: "3.500.000",
      img: "/img/vinil1.jpg",
      stock: "Disponible",
      badge: "bg-success",
    },
    {
      id: 2,
      nombre: "Lo Mato",
      precio: "150.000",
      img: "/img/vinil2.jpg",
      stock: "Pocas unidades",
      badge: "bg-warning text-dark",
    },
    {
      id: 3,
      nombre: "Crime Pays",
      precio: "280.000",
      img: "/img/vinil3.jpg",
      stock: "Agotado",
      badge: "bg-danger",
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 fw-bold">Nuestros Productos</h2>

      <div className="row g-4">
        {productos.map((p) => (
          <div key={p.id} className="col-md-6 col-xl-4">
            <div className="card h-100 shadow-sm border-0 rounded-4 text-center p-4">

              <img
                src={p.img}
                alt={p.nombre}
                className="img-fluid mb-3"
                style={{
                  height: "200px",
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "10px"
                }}
              />

              <h5 className="fw-bold">{p.nombre}</h5>

              <p className="text-primary fw-bold fs-4">
                COP ${p.precio}
              </p>

              <span className={`badge ${p.badge} px-3 py-2`}>
                {p.stock}
              </span>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;