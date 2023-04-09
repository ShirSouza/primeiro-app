import { useState } from 'react';

function App(){
  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([
    'Pagar a conta de luz',
    'Estudar React JS'
  ]);



  function handleRegister(e){
    e.preventDefault();

    setTarefas([...tarefas, input]);
    setInput('');

  }

  return(
    <div>
      <h1>Cadastrando usuario</h1>

      <form onSubmit={handleRegister}>
        <label>Nome da tarefa:</label><br/>
        <input 
         placeholder="Digite uma tarefa" 
         value={input}
         onChange={ (e) => setInput(e.target.value) }
        /><br/>
        <button type="submit">Registrar</button>
      </form>

      <br/><br/>

      <ul>
        {tarefas.map( tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;



// import Nome from './components/Nome'
// import { useState } from 'react';


// function App() {
//    const [aluno, setAluno] = useState('Sujeito Programador')
  
//    function handleChangeName(nome){
//     setAluno(nome)
//    }

//    return(
//      <div>
//         <h1>Componente App</h1><br />
//         <h2> Olá {aluno} </h2>
//         <button onClick={ () => handleChangeName('Lucas Oliveira') }>
//           Mudar Nome
//         </button>
//         {/* <Nome aluno="Lucas" idade={30} /> */}
//         <br/>
//         <br/>
//      </div>
//    );
// }

// export default App;

