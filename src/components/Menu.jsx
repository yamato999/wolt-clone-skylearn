import styles from "./Menu.module.css";

export default function Menu({ restaurant }) {
  return (
    <div>
      {Object.entries(restaurant.menu).map(([category, dishes]) => (
        <MenuCategory
          key={category}
          category={category}
          dishes={dishes}
          dishImageUrl={restaurant.dishImageUrl}
        />
      ))}
    </div>
  );
}

function MenuCategory({ category, dishes, dishImageUrl }) {
  return (
    <div>
      <h3 className={styles.category}>{category}</h3>
      <div className={styles.dishContainer}>
        {dishes.map((dish) => (
          <Dish key={dish.name} dish={dish} dishImageUrl={dishImageUrl} />
        ))}
      </div>
    </div>
  );
}

function Dish({ dish, dishImageUrl }) {
  return (
    <div className={styles.dishCard}>
      <div>
        <h4>{dish.name}</h4>
        <h5>{dish.description}</h5>
        <p className={styles.price}>Цена: {dish.price} KZT</p>
      </div>
      <img src={dishImageUrl} alt="" />
    </div>
  );
}
