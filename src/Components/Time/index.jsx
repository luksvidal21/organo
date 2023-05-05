import Colaborador from '../Colaborador';
import './Time.css' 
const Time = (props) => {

    const deletar = props.aoDeletar
    return (
    props.colaboradores.length > 0 ? (
        <section className='time' style={{backgroundColor:props.corSecundaria}}>
            <input 
                value={props.corSecundaria}
                type="color"
                className='input-cor'
                onChange={e => props.mudaCorTime(props.nome, e.target.value)}
            />
            <h3 style={{borderColor:props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => (
                    <Colaborador
                        corDeFundo={props.corPrimaria}
                        key={colaborador.nome}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                        aoDeletar={deletar}
                    />
                ))}
            </div>
        </section>
        ):''
    )
}

export default Time;