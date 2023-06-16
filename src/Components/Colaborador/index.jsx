import { 
    AiFillCloseCircle,
    AiOutlineHeart,
    AiFillHeart
} from 'react-icons/ai'
import './Colaborador.css'

const Colaborador = ({
    nome, 
    cargo, 
    imagem, 
    corDeFundo, 
    aoDeletar,
    id,
    favorito,
    aoFavoritar
}) => {

    const favoritar = () => {
        aoFavoritar(id)
    }

    const props = {
        size:25,
        onClick: favoritar
    }

    return (
        <div className='colaborador'>
            <AiFillCloseCircle size={25} className='deletar' onClick={() => aoDeletar(id)}/>
            <div className='cabecalho' style={{backgroundColor:corDeFundo}}>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
                <div className='favoritar'>
                    {favorito 
                        ?<AiFillHeart {...props} color='#ff0000'/>
                        :<AiOutlineHeart {...props}/>
                    }
                </div>
            </div>
            
        </div>
    )
}

export default Colaborador;