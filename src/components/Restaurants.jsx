import restaurantsData from "../database/restaurants.json";
import Card from "./Card";
import styles from "./Restaurants.module.css";
import { Link } from "react-router-dom";

export default function Restaurants() {
  const handleOpenRestaurant = () => {
    console.log("restaurant clicked!");
    return;
  };
  const restaurants = restaurantsData.restaurants.map((restaurant) => (
    <div key={restaurant.id} className={styles["card-container"]}>
      <Link to={`/restaurant/${restaurant.id}`} className={styles.customLink}>
        <Card
          imageSrc={restaurant.imageUrl}
          title={restaurant.title}
          description={restaurant.description}
        />
      </Link>
    </div>
  ));

  return (
    <>
      <h2 className={styles.textHeader}>Все рестораны</h2>
      <div className={styles.restaurants}>{restaurants}</div>
    </>
  );
}
