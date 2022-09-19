
import { useState } from 'react';
import Banner from './componentes/Banner';
import Footer from './componentes/footer';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';


function App() {
  // map
  const numbers = [1, 2, 3, 4, 5]
  //arrow function
  const doubleNumbers = numbers.map(elem => elem * 2)
  // console.log(doubleNumbers);
  /////Normal
  // const doubleNumbers = numbers.map(function (elem) {
  //   return elem * 2
  // })
  // console.log(doubleNumbers);

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Back-End',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FFF5D9'
    }
  ]

  const [colaborador, setColaborador] = useState([])

  const aoColaboradorAdd = (colab) => {
    console.log(colab);
    setColaborador([...colaborador, colab])

  }
  return (
    <div className="App">
      <Banner />
      <Formulario cadastro=
        {function (colab) {
          aoColaboradorAdd(colab)
          console.log(colab);
        }}
        times={times.map(function (time) {
          return time.nome
        })}
      />


      {times.map(function (times) {
        return <Time
          key={times.nome}
          nome={times.nome}
          corPrimaria={times.corPrimaria}
          corSecundaria={times.corSecundaria}
          colaboradores={colaborador.filter(function (colaboradores) {
            return colaboradores.time === times.nome
          })}
        />
      })}

      <Footer />

      {/* {times.map(times => <Time nome={times.nome}></Time>)} */}
    </div>
  );
}

export default App;
