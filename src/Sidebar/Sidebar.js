import Categoria from "./Categoria/Categoria";
import Precio from "./Precio/Precio";
import Colores from "./Colores/Colores";
import "./Sidebar.css";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
        <img src='./img/Logo.png' className="logotipo"></img>
        </div>
        <Categoria handleChange={handleChange} />
        <Precio handleChange={handleChange} />
        <Colores handleChange={handleChange} />
      </section>

    </>
  );
};

export default Sidebar;
