import './Campo.css'

const Campo = ({
    obrigatorio,
    label,
    placeholder,
    valor,
    aoAlterar,
    type = 'text'
}) => {

    const placeholderModificada = `${placeholder}...`
    const aoDigitar = (e) => {
        aoAlterar(e.target.value)
    }
    return (
        <div className={`campo campo-${type}`}>
            <label>
                {label}
            </label>
            <input 
                type={type} 
                value={valor}
                onChange={aoDigitar} 
                required={obrigatorio} 
                placeholder={placeholderModificada}
            />
        </div>
    )
}

export default Campo;