import React from 'react';

export function Todos({ todos }) {
  return (
    <ul className="list-group py-5">
      {todos.map(todo => (
        <li key={todo.id} className="list-group-item">
          {todo.title}
        </li>
      ))}
    </ul>
  );
}