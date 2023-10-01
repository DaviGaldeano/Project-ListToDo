import { useState } from 'react';
import './App.css';
import ToDo from './components/ToDo';
import ToDoForm from './components/ToDoForm';
function App() {

  const [toDo, setToDo] = useState([
  
    {
      id:1,
      text: "criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id:2,
      text: "Ir pra academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id:3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    }
  ]);

  const addToDo = (text, category) => {
    const newToDo = [ 
      ...toDo,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      }
    ];

    setToDo(newToDo);
  };

  const deleteToDo = (id) => {
    const newToDo = [...toDo];
    const filteredToDo = newToDo.filter((toDo) =>
      toDo.id !== id ? toDo : null
    );
    setToDo(filteredToDo);
  }

    return (
      <div className='app'>
        <h1>Lista de Tarefas</h1>
        <div className='to-do-list'>
        {toDo.map((toDo) => (
        <ToDo toDo={toDo} key={toDo.id} deleteToDo={deleteToDo}/>
      ))}
      </div>
        <ToDoForm addToDo={addToDo}></ToDoForm>
  </div>
  )
}

export default App
