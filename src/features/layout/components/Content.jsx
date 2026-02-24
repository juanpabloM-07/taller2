// 1. Importamos las imágenes (esto genera rutas seguras para GitHub)
import vinil1 from '../../../../public/img/vinil1.jpg';
import vinil2 from '../../../../public/img/vinil2.jpg';
import vinil3 from '../../../../public/img/vinil3.jpg';
import vinil4 from '../../../../public/img/vinil4.jpg';
import vinil5 from '../../../../public/img/vinil5.jpg';
import vinil6 from '../../../../public/img/vinil6.jpg';
import vinil7 from '../../../../public/img/vinil7.jpg';
import vinil8 from '../../../../public/img/vinil8.jpg';
import vinil9 from '../../../../public/img/vinil9.jpg';

export const Content = () => {
  const productos = [
    { id: 1, nombre: 'El Vigilante', precio: '700.000', stock: 'En stock', badge: 'bg-success', img: vinil1 },
    { id: 2, nombre: 'Lo Mato', precio: '900.000', stock: 'Pocas unidades', badge: 'bg-warning text-dark', img: vinil2 },
    { id: 3, nombre: 'Crime Pays', precio: '860.000', stock: 'Agotado', badge: 'bg-secondary', img: vinil3 },
    { id: 4, nombre: 'La Gran Fuga', precio: '1.200.000', stock: 'En stock', badge: 'bg-success', img: vinil4 },
    { id: 5, nombre: 'El Malo', precio: '1.000.000', stock: 'Pocas unidades', badge: 'bg-warning text-dark', img: vinil5 },
    { id: 6, nombre: 'Siembra', precio: '1.900.000', stock: 'En stock', badge: 'bg-success', img: vinil6 },
    { id: 7, nombre: 'El Juicio', precio: '980.000', stock: 'En stock', badge: 'bg-success', img: vinil7 },
    { id: 8, nombre: 'The Hustler', precio: '2.000.000', stock: 'Pocas unidades', badge: 'bg-warning text-dark', img: vinil8 },
    { id: 9, nombre: 'Celia Y Willie', precio: '1.800.000', stock: 'En stock', badge: 'bg-success', img: vinil9 }
  ];

  return (
    <main className="container py-5">
      <div className="row g-4">
        <div className="col-lg-9">
          <div className="row g-4">
            {productos.map((p) => (
              <div className="col-md-6 col-xl-4" key={p.id}>
                <div className="card h-100 shadow-sm border-0 rounded-4 text-center">
                  <div className="card-body">
                    <img
                      src={p.img} // Ahora p.img es la variable importada arriba
                      alt={p.nombre}
                      className="img-fluid mb-3"
                      style={{ maxHeight: "180px", objectFit: "contain" }}
                    />
                    <h6 className="fw-bold">{p.nombre}</h6>
                    <p className="text-primary fw-bold fs-5">COP ${p.precio}</p>
                    <span className={`badge ${p.badge} px-3 py-2`}>{p.stock}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Tu columna del formulario se mantiene igual aquí abajo... */}
      </div>
    </main>
  );
};