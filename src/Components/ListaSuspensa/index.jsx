import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {

  const aoSelecionar = (e) => {
    props.aoAlterar(e.target.value)
  }
  return (
    <div className="lista-suspensa">
      <label htmlFor="">{props.label}</label>
      <select name="" id="" value={props.valor} onChange={aoSelecionar}>
        <option value=""></option>
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;
