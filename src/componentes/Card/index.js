import './Card.css'

const Card = ({ nome, imagem, cargo, corDeFundo }) => {
  return (
    <div className='colaborador'>
      <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt=''></img>
      </div>

      <div className='rodape'>
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>

    </div>

  )
}
export default Card