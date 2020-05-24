import React, { useState, useEffect } from 'react';
import { Todos } from './components/Todos';
import { Pagination } from './components/Pagination';
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
          <header>
            <h1 className="display-4">Reaction</h1>
            <p className="lead">Just another React frontend pagination</p>
          </header>
          
          <main>
            <form className="text-right pt-3 pb-2">
              <label>
                Items per page:
                <select className="ml-2" value={todosPerPage} onChange={e => setTodosPerPage(e.target.value)}>
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                  <option value="25">25</option>
                </select>
              </label>
            </form>
            <Todos todos={currentTodos} />
            <Pagination todosPerPage={todosPerPage} totalTodos={todos.length} paginate={paginate} />
          </main>
        </div>
      </div>
    ) : (
      <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <h4 className="mb-4">Loading todos...</h4>
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading todos...</span>
        </div>
      </div>
    )
  );
}

export default App;
