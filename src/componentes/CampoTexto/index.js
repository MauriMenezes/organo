import { useState } from 'react';
import './Campotexto.css'



const CampoTexto = (props) => {
  // const [nome, setNome] = useState("")



  // const aoDigitado = (e) => {
  //   setNome(e.target.value)
  //   console.log(nome);

  // }


  const aoDigitado = (e) => {

    props.aoAlterado(e.target.value)
    // console.log(props.valor)
    // console.log(props.aoAlterado);
  }

  return (
    <div className="campo-texto">
      <label>
        {props.label}
      </label>


      <input
        value={props.valor}
        // value={nome}
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={props.placeholder}
      />

    </div>

  )

}

export default CampoTexto;