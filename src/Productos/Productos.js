import "./Producto.css";
import React from "react";


const Productos = ({ result }) => {
  return (
    <div className="todo">
      <section className="card-container">{result}</section>
    </div>
  );
};

export default Productos;
