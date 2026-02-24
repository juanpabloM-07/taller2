export const Content = () => {

import React, { useState } from "react";
import ProductCard from "./Productcard";
import ProductForm from "./ProductFrom";


const Products = () => {
  const [products, setProducts] = useState([
    {
      name: "Auriculares Bluetooth",
      price: 159900,
      stock: 15,
      category: "Audio",
      image:
        "https://i.blogs.es/a657de/oppo-enco-buds2-pro-cabecera/500_333.jpeg",
    },
    {
      name: "Teclado Mecánico",
      price: 249000,
      stock: 5,
      category: "Periféricos",
      image:
        "https://pcgamermedellin.com/wp-content/uploads/2023/11/teclado-mecanico-60-t-dagger-switch-rojo-3-1.jpg",
    },
    {
      name: "Cámara Web HD",
      price: 4390000,
      stock: 2,
      category: "Cámaras",
      image:
        "https://www.canon.com.mx/datacenter/image/resize-center/328x328/imagenesproducto/fichero/4989_G7X_Mark_III_01.jpg/",
    },
    {
      name: "Nintendo Switch",
      price: 1299000,
      stock: 2,
      category: "Juegos",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_733474-MLA99974458897_112025-O.webp",
    },
  ]);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <div className="container py-4">
      <div className="row">

        {/* IZQUIERDA → CARDS */}
        <div className="col-lg-8">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4>Productos</h4>
            <small className="text-muted">
              Mostrando {products.length} productos
            </small>
          </div>

          <div className="row g-4">
            {products.map((product, index) => (
              <div className="col-md-6" key={index}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        {/* DERECHA → FORMULARIO */}
        <div className="col-lg-4">
          <ProductForm addProduct={addProduct} />
        </div>

      </div>
    </div>
  );
};

export default Products;

  return (
    <main className="container py-5">
      <div className="row g-4">

        {/* PRODUCTOS */}
        <div className="col-lg-9">
          <div className="row g-4">

            {productos.map((p) => (
              <div key={p.id} className="col-md-6 col-xl-4">
                <div className="card h-100 shadow-sm border-0 rounded-4 text-center p-4">

                  {/* IMAGEN */}
                  <img
                    src={p.img}
                    alt={p.nombre}
                    className="img-fluid mb-3"
                    style={{
                      height: "180px",
                      objectFit: "cover",
                      borderRadius: "12px"
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

        {/* FORMULARIO */}
        <div className="col-lg-3">
          <div className="card shadow border-0 rounded-4 h-100 d-flex flex-column">

            <div className="card-header bg-primary text-white py-3 rounded-top-4">
              <h6 className="mb-0 fw-bold">AGREGAR PRODUCTO</h6>
            </div>

            <div className="card-body d-flex flex-column">

              <div className="mb-3">
                <label className="form-label fw-semibold">Nombre:</label>
                <input type="text" className="form-control rounded-3" />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Precio:</label>
                <input type="text" className="form-control rounded-3" />
              </div>

              <div className="mt-auto">
                <button className="btn btn-success w-100 rounded-3">
                  AGREGAR
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </main>
  );
};