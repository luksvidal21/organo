import "./ListaSuspensa.css";

const ListaSuspensa = ({
  itens,
  label,
  valor,
  aoAlterar
}) => {

  const aoSelecionar = (e) => {
    aoAlterar(e.target.value)
  }
  return (
    <div className="lista-suspensa">
      <label htmlFor="">{label}</label>
      <select name="" id="" value={valor} onChange={aoSelecionar}>
        <option value=""></option>
        {itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;
