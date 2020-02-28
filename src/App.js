import React, { useState, useEffect } from 'react';
import { Todos } from './components/Todos';

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    (async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/todos?_page=${currentPage}&_limit=10`);
      const data = await res.json();

      setTodos(data);
      setLoading(false);
    })();
  }, [currentPage]);

  return (
    loading ? (
      <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <h4 className="mb-4">Loading todos...</h4>
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading todos...</span>
        </div>
      </div>
    ) : (
      <div className="app py-5">
        <div className="container">
          <header>
            <h1 className="display-4">Reaction</h1>
            <p className="lead">Just another React frontend pagination</p>
          </header>
          
          <main>
            {todos.length ? (
              <Todos todos={todos} currentPage={currentPage} setCurrentPage={setCurrentPage} />
              ) : (
                <h3 className="pt-3">Sorry, no more todos.</h3>
              )
            }
          </main>
        </div>
      </div>
    )
  );
}

export default App;