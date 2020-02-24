import React from 'react';

function Todos(props) {
  const { todos, currentPage, setCurrentPage } = props;

  return (
    <div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>

      <button onClick={() => setCurrentPage(currentPage + 1)}>Page {currentPage}</button>
    </div>
  );
}

export default Todos;