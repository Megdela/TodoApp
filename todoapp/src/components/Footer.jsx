import styles from "./footer.module.css";
export default function Footer({ completedTodos ,totalTodos}) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>completed: {completedTodos}</span>
      <span className={styles.item}>Todos: {totalTodos}</span>
    </div>
  );
}
