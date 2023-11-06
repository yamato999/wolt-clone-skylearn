import styles from "./Header.module.css";
import { FaLocationDot } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerPart}>
        <img
          src="https://seeklogo.com/images/W/wolt-logo-8C99A6DA76-seeklogo.com.png"
          alt=""
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
