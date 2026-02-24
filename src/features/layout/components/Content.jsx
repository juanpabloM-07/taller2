export const Content = () => {

  const productos = [
    { id: 1, nombre: 'El Vigilante', precio: '700.000', stock: 'En stock', badge: 'bg-success', img: '/img/vinil1.jpg' },
    { id: 2, nombre: 'Lo Mato', precio: '900.000', stock: 'Pocas unidades', badge: 'bg-warning text-dark', img: '/img/vinil2.jpg' },
    { id: 3, nombre: 'Crime Pays', precio: '860.000', stock: 'Agotado', badge: 'bg-secondary', img: '/img/vinil3.jpg' },
    { id: 4, nombre: 'La Gran Fuga', precio: '1.200.000', stock: 'En stock', badge: 'bg-success', img: '/img/vinil4.jpg' },
    { id: 5, nombre: 'El Malo', precio: '1.000.000', stock: 'Pocas unidades', badge: 'bg-warning text-dark', img: '/img/vinil5.jpg' },
    { id: 6, nombre: 'Siembra', precio: '1.900.000', stock: 'En stock', badge: 'bg-success', img: '/img/vinil6.jpg' },
    { id: 7, nombre: 'El Juicio', precio: '980.000', stock: 'En stock', badge: 'bg-success', img: '/img/vinil7.jpg' },
    { id: 8, nombre: 'The Hustler', precio: '2.000.000', stock: 'Pocas unidades', badge: 'bg-warning text-dark', img: '/img/vinil8.jpg' },
    { id: 9, nombre: 'Celia Y Willie', precio: '1.800.000', stock: 'En stock', badge: 'bg-success', img: '/img/vinil9.jpg' }
  ];

  return (
    <main className="container py-5">
      <div className="row g-4">

        {/* FORMULARIO */}
<div className="col-lg-9">
      <div className="row g-4">
        {productos.map((p) => (
          <div className="col-md-6 col-xl-4" key={p.id}>
            <div className="card h-100 shadow-sm border-0 rounded-4 text-center">

              <div className="card-body">

                <img
                  src={p.img}
                  alt={p.nombre}
                  className="img-fluid mb-3"
                  style={{ maxHeight: "180px", objectFit: "contain" }}
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/180'; }}
                />

                <h6 className="fw-bold">{p.nombre}</h6>

                <p className="text-primary fw-bold fs-5">
                  COP ${p.precio}
                </p>

                <span className={`badge ${p.badge} px-3 py-2`}>
                  {p.stock}
                </span>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* FORMULARIO */}
    <div className="col-lg-3">
      <div className="card shadow border-0 rounded-5 h-50">
        <div className="card-header bg-primary text-white py-4 rounded-top-9">
          <h6 className="mb-0 fw-bold">AGREGAR PRODUCTO</h6>
        </div>
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label className="form-label fw-semibold">Nombre:</label>
              <input type="text" className="form-control rounded-3" />
            </div>
            <div className="mb-3">
              <label className="form-label fw-semibold">Precio:</label>
              <input type="text" className="form-control rounded-3" />
            </div>
            <br />
            <button className="btn btn-success w-100 rounded-6 fw-bold py-2">
              AGREGAR
            </button>
          </form>
        </div>
      </div>
    </div>

  </div>
</main>
  )
}