import { useState } from "react";
import Card from "./Card";
import categoriesData from "../database/categories.json";
import styles from "./CategoriesList.module.css";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
export default function CategoriesList() {
  const [start, setStart] = useState(0);
  const countOfCategories = 6;

  const displayedCategories = categoriesData.categories.slice(
    start,
    start + countOfCategories
  );
  const handleNext = () => {
    if (start < 6) {
      setStart(start + countOfCategories);
    } else {
      setStart(0);
    }
  };
  const handlePrev = () => {
    if (start >= 6) {
      setStart(start - countOfCategories);
    } else {
      setStart(6);
    }
  };
  return (
    <>
      <div className={styles.categoriesHeader}>
        <h3>Категории</h3>
        <div className={styles.categoriesIcons}>
          <GrLinkPrevious onClick={handlePrev} style={{ cursor: "pointer" }} />
          <GrLinkNext onClick={handleNext} style={{ cursor: "pointer" }} />
        </div>
      </div>
      <div className={styles.categoriesContainer}>
        {displayedCategories.map((category) => (
          <Card
            imageSrc={category.imageUrl}
            title={category.title}
            description={category.description}
            size="small"
          />
        ))}
      </div>
    </>
  );
}
