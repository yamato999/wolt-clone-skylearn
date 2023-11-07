import RestaurantHeader from "../components/RestaurantHeader";
import { useParams } from "react-router-dom";
import data from "../database/restaurants.json";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
export default function Restaurant() {
  const { restaurantId } = useParams();
  const filteredRestaurant = data.restaurants.find(
    (restaurant) => restaurant.id == restaurantId
  );
  return (
    <>
      <Header />
      <RestaurantHeader restaurant={filteredRestaurant} />
      <Menu restaurant={filteredRestaurant} />
      <Footer />
    </>
  );
}
