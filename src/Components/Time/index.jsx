import Colaborador from '../Colaborador';
import './Time.css'
import hexToRgba from 'hex-to-rgba'; 
const Time = (props) => {

    const deletar = props.aoDeletar
    return (
    props.colaboradores.length > 0 ? (
        <section className='time' style={{backgroundColor:hexToRgba(props.cor,'0.6')}}>
            <input 
                value={props.cor}
                type="color"
                className='input-cor'
                onChange={e => props.mudaCorTime(props.id, e.target.value)}
            />
            <h3 style={{borderColor:props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => (
                    <Colaborador
                        corDeFundo={props.cor}
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