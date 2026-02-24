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