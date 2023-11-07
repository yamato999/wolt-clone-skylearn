import CategoriesList from "../components/CategoriesList";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Restaurants from "../components/Restaurants";

export default function Home() {
  return (
    <>
      <Header />
      <CategoriesList />
      <Restaurants />
      <Footer />
    </>
  );
}
