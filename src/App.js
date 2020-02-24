import React, { useState, useEffect } from 'react';
import Todos from './components/Todos';

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

  if (loading) {
    return <h1>Loading todos...</h1>;
  }

  return (
    <div className="app">
      {todos.length ? (
        <Todos todos={todos} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        ) : (
          <h1>Sorry, no more todos.</h1>
        )
      }
    </div>
  );
}

export default App;