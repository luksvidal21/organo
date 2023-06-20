import { useState } from "react"
import Botao from "../Botao"
import Campo from "../Campo"
import ListaSuspensa from "../ListaSuspensa"
import './Formulario.css'

const Formulario = ({
    cadastrarTime,
    aoColaboradorAdicionado,
    times
}) => {

    const [nome,setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem,setImagem] = useState('');
    const [time,setTime] = useState('');
    const [nomeTime,setNomeTime] = useState('');
    const [corTime,setCorTime] = useState('');

    const aoSalvar = (e)=>{
        e.preventDefault();
        aoColaboradorAdicionado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome("")
        setCargo("")
        setImagem("")
        setTime("")
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados do colaborador do organo</h2>
                <Campo 
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterar={valor => setNome(valor)}
                />
                <Campo
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterar={valor => setCargo(valor)}
                />
                <Campo
                    label="Imagem"
                    placeholder="Informe o endereço da imagem"
                    valor={imagem}
                    aoAlterar={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    itens={times}
                    label="Times"
                    valor={time}
                    aoAlterar= {valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
            <form onSubmit={(e)=> {
                e.preventDefault()
                cadastrarTime({nome:nomeTime,cor:corTime})
            }}>
                <h2>Preencha os dados para criar um novo time</h2>
                <Campo 
                    obrigatorio
                    label="Nome"
                    placeholder="Digite o nome do time"
                    valor={nomeTime}
                    aoAlterar={valor => setNomeTime(valor)}
                />
                <Campo
                    type="color"
                    obrigatorio
                    label="Cor"
                    placeholder="Digite a cor do time"
                    valor={corTime}
                    aoAlterar={valor => setCorTime(valor)}
                />
                <Botao>
                    Criar um novo time
                </Botao>
            </form>
            
        </section>
    )
}

export default Formulario;