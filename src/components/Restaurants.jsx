import restaurantsData from "../database/restaurants.json";
import Card from "./Card";
import styles from "./Restaurants.module.css";

export default function Restaurants() {
  const restaurants = restaurantsData.restaurants.map((restaurant) => (
    <div key={restaurant.id} className={styles["card-container"]}>
      <Card
        imageSrc={restaurant.imageUrl}
        title={restaurant.title}
        description={restaurant.description}
      />
    </div>
  ));

  return (
    <>
      <h2 className={styles.textHeader}>Все рестораны</h2>
      <div className={styles.restaurants}>{restaurants}</div>
    </>
  );
}
