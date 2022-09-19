
import Card from '../Card'
import './time.css'

const Time = (props) => {


  return (
    props.colaboradores.length > 0 && <section className='time' style={{ backgroundColor: props.corSecundaria }}>
      <h3 style={{ borderColor: props.corPrimaria }} >{props.nome}</h3>

      <div className='colaboradores'>

        {props.colaboradores.map(function (colaboradores) {
          return <Card
            key={colaboradores.nome}
            nome={colaboradores.nome}
            cargo={colaboradores.cargo}
            imagem={colaboradores.img}
            corDeFundo={props.corPrimaria}
          />

        })}
      </div>


    </section>
  )
}

export default Time