import styles from "./Header.module.css";
import { FaLocationDot } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className={styles.header}>
      <div className={styles.headerPart}>
        <img
          src="https://seeklogo.com/images/W/wolt-logo-8C99A6DA76-seeklogo.com.png"
          alt=""
          onClick={() => navigate("/")}
        />
        <FaLocationDot className={styles.icon} />
        <h4>Алматы</h4>
      </div>
      <input type="text" placeholder="Поиск в Wolt" />
      <div className={styles.headerPart}>
        <p>Войти</p>
        <p className={styles.register}>Зарегистрироваться</p>
      </div>
    </div>
  );
}
