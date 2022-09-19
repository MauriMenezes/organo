import './ListaSuspensa.css'

const ListaSuspensa = (props) => {

  const aoAlterado = (e) => {
    props.aoAlterado(e.target.value)

  }

  return (

    <div className='lista-suspensa'>
      <label>{props.label}</label>


      <select onChange={aoAlterado} value={props.valor}>
        <option value=""></option>
        {props.itens.map(item => {
          return <option key={item}>{item}</option>
        })}
      </select>
    </div>
  )

}
export default ListaSuspensa;