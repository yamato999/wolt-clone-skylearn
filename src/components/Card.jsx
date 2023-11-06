import styles from "./Card.module.css";

export default function Card({ imageSrc, title, description, size }) {
  const cardSizeClass = size === "small" ? styles.smallCard : styles.largeCard;
  return (
    <div className={`${styles.card} ${cardSizeClass}`}>
      <img src={imageSrc} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
