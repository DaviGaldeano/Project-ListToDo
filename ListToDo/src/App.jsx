import { useState } from 'react';
import './App.css';
import ToDo from './components/ToDo';
import ToDoForm from './components/ToDoForm';
import Search from './components/Search';
import Filter from './components/Filter';
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

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("asc");
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

  const completeToDo = (id) => {
    const newToDo = [...toDo];
    const updatedToDo = newToDo.map((toDo) => {
      if (toDo.id === id) {
        toDo.isCompleted = !toDo.isCompleted;
      }
      return toDo;
    });
    setToDo(updatedToDo);
  }

    return (
      <div className='app'>
        <h1>Lista de Tarefas</h1>
        <Search search={search} setSeacrh={setSearch}/>
        <Filter filter={filter} setFilter={setFilter}/>
        <div className='to-do-list'>
        {toDo
          .filter((toDo) => 
            filter === "All"
            ? true 
            : filter === "Completed"
            ? toDo.isCompleted 
            : !toDo.isCompleted)
        .filter((toDo) => 
          toDo.text.toLowerCase().includes(search.toLowerCase())
        )
          .map((toDo) => (
        <ToDo toDo={toDo} key={toDo.id} deleteToDo={deleteToDo} completeToDo={completeToDo}/>
      ))}
      </div>
        <ToDoForm addToDo={addToDo}></ToDoForm>
  </div>
  )
}

export default App
