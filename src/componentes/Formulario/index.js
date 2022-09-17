
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



  const times = [
    'Programação',
    'Front-End',
    'Back-End',
    'UX e Design'

  ]
  const salvar = (e) => {
    e.preventDefault()
    props.cadastro({

      nome,
      cargo,
      img,
      time
    })
  }

  return (

    <section className='formulario'>
      <form onSubmit={salvar}>
        <h2>Preencha os dados para criar o card do colaborador RECODE</h2>

        <CampoTexto
          //CAMPO NOME
          valor={nome}
          aoAlterado={
            function (valor) {
              setNome(valor)
              console.log(valor + " //");
            }}

          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome aqui"
        />

        <CampoTexto
          valor={cargo}
          aoAlterado={
            function aoAlterado(valor) {
              setCargo(valor)
              console.log(valor + " --/");
            }}
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu nome Cargo"
        />
        <CampoTexto
          valor={img}
          aoAlterado={
            function aoAlterado(valor) {
              setImg(valor)
              console.log(valor + " ?? ");
            }}
          label="Imagem"
          placeholder="Digite o endereço da imagem aqui"
        />
        <ListaSuspensa
          label='Time'
          itens={times}
          valor={time}
          aoAlterado={
            function (valor) {
              setTime(valor)
              console.log(valor + " <<< time");
            }}
        />
        <Botao>
          Criar Card
        </Botao>
      </form>
    </section>

  )

}
export default Formulario;