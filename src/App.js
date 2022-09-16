
import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';


function App() {
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

        }}
      />
    </div>
  );
}

export default App;
