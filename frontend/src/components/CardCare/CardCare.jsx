import styles from "./CardCare.module.css";

export default function CardCare(props) {
  return (
    <div className={styles.card}>
      <div className={styles.box}>{props.icon}</div>
      <div className={styles.texts}>
        <h1 className={styles.title}>{props.title}</h1>
        <p className={styles.description}>{props.description}</p>
      </div>
    </div>
  );
}
