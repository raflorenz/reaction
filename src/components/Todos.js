import React from 'react';

export function Todos(props) {
  const { todos, currentPage, setCurrentPage } = props;

  return (
    <>
      <ul className="px-4 py-4">
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>

      <button onClick={() => setCurrentPage(currentPage + 1)}>Page {currentPage}</button>
    </>
  );
}