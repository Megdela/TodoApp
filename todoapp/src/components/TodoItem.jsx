import styles from "./todoitem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log("item deleted:", item);
    setTodos(todos.filter((todo) => todo !== item)); // Use strict equality
  }

  function handleClick(name) {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  // Define className based on item.done
  const className = item.done ? styles.completed : "";

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={className} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>
    </div>
  );
}
