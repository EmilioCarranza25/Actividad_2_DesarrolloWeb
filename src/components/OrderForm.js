import React, { useState } from 'react';
import useInventory from '../hooks/useInventory';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function OrderForm() {
  const { items } = useInventory();
  const [selectedProduct, setSelectedProduct] = useState('');
  const [quantity, setQuantity] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleProductChange = (e) => {
    setSelectedProduct(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedProduct && quantity) {
      setModalIsOpen(true);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <h1 className="h3 mb-3 fw-normal">Realizar Pedido</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="product" className="form-label">Producto:</label>
          <select
            id="product"
            className="form-select"
            value={selectedProduct}
            onChange={handleProductChange}
          >
            <option value="">Seleccionar producto</option>
            {items.map(item => (
              <option key={item.id} value={item.name}>{item.name}</option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="quantity" className="form-label">Cantidad:</label>
          <input
            id="quantity"
            type="number"
            className="form-control"
            value={quantity}
            onChange={handleQuantityChange}
            placeholder="Cantidad"
          />
        </div>
        <button type="submit" className="btn btn-primary">Enviar Pedido</button>
        <div className="d-grid gap-2 d-md-block">
        <a href="/" className="btn btn-primary me-2">Ir al inicio</a>
      </div>
      </form>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Confirmación de Pedido"
      >
        <h2>Pedido Enviado</h2>
        <p>Producto: {selectedProduct}</p>
        <p>Cantidad: {quantity}</p>
        <button onClick={closeModal} className="btn btn-secondary">Cerrar</button>
      </Modal>
    </div>
  );
}

export default OrderForm;
