
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'

const Formulario = () => {

  const times = [
    'Front-End',
    'Back-End',
    'UX e Design',
    'Inovação e gestão'
  ]
  const aoSalvar = (e) => {
    e.preventDefault()
    console.log("form submetido")
  }
  return (

    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador RECODE</h2>
        <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome aqui" />
        <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu nome Cargo" />
        <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem aqui" />
        <ListaSuspensa label='Time' itens={times} />
        <Botao>
          Criar Card
        </Botao>
      </form>
    </section>

  )

}
export default Formulario;