import "./App.css";
import CategoriesList from "./components/CategoriesList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Restaurants from "./components/Restaurants";

function App() {
  return (
    <>
      <Header />
      <CategoriesList />
      <Restaurants />
      <Footer />
    </>
  );
}

export default App;
