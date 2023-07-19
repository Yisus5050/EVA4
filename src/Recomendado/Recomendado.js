import Boton from "../components/Boton";
import "./Recomendado.css";

const Recomendado = ({ handleClick }) => {
  return (
    <>
      <div className="titulo">
        <h2 className="recomendado-title">Recomendado</h2>
        <div className="recomendado-flex">
          <Boton onClickHandler={handleClick}  value="" title="Todos los productos" />
          <Boton onClickHandler={handleClick}  value="Nike" title="Nike" />
          <Boton onClickHandler={handleClick}  value="Adidas" title="Adidas" />
          <Boton onClickHandler={handleClick}  value="Puma" title="Puma" />
          <Boton onClickHandler={handleClick}  value="Vans" title="Vans" />
        </div>
      </div>
    </>
  );
};

export default Recomendado;
