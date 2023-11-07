import styles from "./RestaurantHeader.module.css";

export default function RestaurantHeader({ restaurant }) {
  return (
    <div className={styles.restaurantHeader}>
      <img src={restaurant.imageUrl} />
      <h2>{restaurant.title}</h2>
      <p>{restaurant.description}</p>
    </div>
  );
}
