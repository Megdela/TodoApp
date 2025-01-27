import styles from "./header.module.css";
export default function Header() {
  const options = {
    weekday: "short",

    month: "short",
    day: "numeric",
  };
  const currentDate = new Date().toLocaleDateString("en-US", options);
  
  return (
    <div className={styles.header}>
      My Day
      <span>{`Today's Date: ${currentDate}`}</span>
    </div>
  );
}
