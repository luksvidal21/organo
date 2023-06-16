import Banner from "./Components/Banner"
import Formulario from "./Components/Formulario"
import Time from "./Components/Time"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [times,setTimes] =useState([
    {
      id:uuidv4(),
      nome: 'Programação',
      cor: '#D9F7E9'
    },
    {
      id:uuidv4(),
      nome: 'Front-End',
      cor: '#E8F8FF'
    },
    {
      id:uuidv4(),
      nome: 'Data Science',
      cor: '#F0F8E2'
    },
    {
      id:uuidv4(),
      nome: 'Devops',
      cor: '#FDE7E8'
    },
    {
      id:uuidv4(),
      nome: 'UX e Design',
      cor: '#FAE9F5'
    },
    {
      id:uuidv4(),
      nome: 'Mobile',
      cor: '#FFF5D9'
    },
    {
      id:uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FFEEDF'
    }
  ])

  const [colaboradores, setColaboradores] = useState([])
  const aoAdicionarColaborador = (colaborador) => {
    setColaboradores([...colaboradores,{...colaborador, id:uuidv4(),favorito:false}])
  }

  const aoDeletar = (id) => {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  const aoFavoritar = (id) => {
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id) colaborador.favorito = !colaborador.favorito
      return colaborador;
    }))
  }

  const mudarCorDoTime = (id, cor) => {
    setTimes(times.map(time => {
      if(time.id === id){
        time.cor = cor;
      }
      return time
    }))
  }

  const cadastrarTime = (novoTime) => {
    setTimes([...times, {...novoTime, id: uuidv4()}])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario
        cadastrarTime={cadastrarTime} 
        aoColaboradorAdicionado={colaborador => aoAdicionarColaborador(colaborador)}
        times={times.map(time => time.nome)}
      />
      {times.map(time => (
        <Time
          mudaCorTime={mudarCorDoTime}
          key={time.id}
          id={time.id}
          nome={time.nome}
          cor={time.cor}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={aoDeletar}
          aoFavoritar={aoFavoritar}
        />
      ))}
    </div>
  )
}

export default App
