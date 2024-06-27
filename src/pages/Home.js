import React from 'react';

function Home() {
  return (
    <div className="container mt-5">
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Bienvenido a la aplicación de inventario</h1>
          <p className="col-md-8 fs-4">Gestiona tus productos de manera eficiente.</p>
        </div>
      </div>
      <div className="d-grid gap-2 d-md-block">
        <a href="/inventory" className="btn btn-primary me-2">Ir a Inventario</a>
        <a href="/orders" className="btn btn-secondary">Ir a Pedidos</a>
      </div>
    </div>
  );
}

export default Home;
