import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Filter from './components/Filter';
import Todos from './components/Todos';
import Pagination from './components/Pagination';
import Spinner from './components/Spinner';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [todosLoaded, setTodosLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage, setTodosPerPage] = useState(10);

  useEffect(() => {
    (async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos');
      const todos = await res.json();

      setTodos(todos);
      setTodosLoaded(true);
    })();
  }, []);

  // logic for getting current todos
  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  // change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    todosLoaded ? (
      <div className="app py-5">
        <div className="container">
          <Header />
          <Filter
            todosPerPage={todosPerPage}
            setTodosPerPage={setTodosPerPage}
          />
          <Todos todos={currentTodos} />
          <Pagination
            todosPerPage={todosPerPage}
            totalTodos={todos.length}
            paginate={paginate}
          />
        </div>
      </div> 
    ) : (
      <Spinner />
    )
  );
}

export default App;
