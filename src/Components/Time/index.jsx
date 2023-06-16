import Colaborador from '../Colaborador';
import './Time.css'
import hexToRgba from 'hex-to-rgba'; 
const Time = ({
    mudaCorTime,
    id,
    nome,
    cor,
    colaboradores,
    aoDeletar,
    aoFavoritar
}) => {
    return (
    colaboradores.length > 0 ? (
        <section className='time' style={{backgroundColor:hexToRgba(cor,'0.6')}}>
            <input 
                value={cor}
                type="color"
                className='input-cor'
                onChange={e => mudaCorTime(id, e.target.value)}
            />
            <h3 style={{borderColor:cor}}>{nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map(colaborador => (
                    <Colaborador
                        corDeFundo={cor}
                        id={colaborador.id}
                        key={colaborador.id}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                        favorito={colaborador.favorito}
                        aoDeletar={aoDeletar}
                        aoFavoritar={aoFavoritar}
                    />
                ))}
            </div>
        </section>
        ):''
    )
}

export default Time;