
import Botao from '../Botao';
import { useState } from 'react';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'

const Formulario = (props) => {

  const [nome, setNome] = useState("")
  const [cargo, setCargo] = useState("")
  const [img, setImg] = useState("")
  const [time, setTime] = useState("")




  const salvar = (e) => {
    e.preventDefault()
    props.cadastro({

      nome,
      cargo,
      img,
      time
    })
    setNome('')
    setCargo('')
    setImg('')
    setTime('')
  }
  return (

    <section className='formulario'>
      <form onSubmit={salvar}>
        <h2>Preencha os dados para criar o card do colaborador RECODE</h2>

        <CampoTexto
          //CAMPO NOME
          valor={nome}
          aoAlterado={valor => setNome(valor)}
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome aqui"
        />

        <CampoTexto
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu nome Cargo"
        />
        <CampoTexto
          valor={img}
          aoAlterado={valor => setImg(valor)}
          label="Imagem"
          placeholder="Digite o endereço da imagem aqui"
        />
        <ListaSuspensa
          label='Time'
          itens={props.times}
          valor={time}
          aoAlterado={valor => setTime(valor)}


        />
        <Botao>
          Criar Card
        </Botao>
      </form>
    </section>

  )

}
export default Formulario;