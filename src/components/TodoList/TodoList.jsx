/* eslint-disable */

export const TodoList = ({ todos }) => (
  <section className="TodoList">
    {todos.map(todo => (
      <todoInfo key={todo.id} todo={todo} />
    ))}
  </section>
);
