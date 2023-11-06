import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContainerDownload}>
        <img
          src="https://i.pinimg.com/originals/c7/81/bd/c781bd3c408d96d47b40600b3849f7e6.png"
          alt=""
        />
        <img
          src="https://images.ctfassets.net/23u853certza/7xaqvusYmbDlca5umD9bZo/6eb7f24a2582e1520a7fa8ca814eb0fa/Download_on_the_App_Store_Badge_RU_RGB_blk_100317.svg"
          alt=""
        />
        <img
          src="https://images.ctfassets.net/23u853certza/1Djo4jOj0doR5PfWVzj9O6/ae8c2e6cecef29c11884762058c1f2d3/google-play-badge__17_.png"
          alt=""
        />
      </div>
      <div>
        <h3>Партнерство с Wolt</h3>
        <p>Курьерам</p>
        <p>Для ресторанов</p>
        <p>Для магазинов</p>
      </div>
      <div>
        <h3>Компания</h3>
        <p>О нас</p>
        <p>What we stand for</p>
        <p>Вакансии</p>
        <p>Устойчивое развитие</p>
        <p>Безопасность</p>
        <p>Инвесторам</p>
      </div>
      <div>
        <h3>Продукты</h3>
        <p>Wolt Drive</p>
        <p>Wolt Market</p>
        <p>Wolt+</p>
        <p>Для компаний</p>
      </div>
      <div>
        <h3>Полезные ссылки</h3>
        <p>Поддержка</p>
        <p>Медиа</p>
        <p>Контакты</p>
        <p>Speak up</p>
        <p>Промокоды</p>
        <p>Developers</p>
      </div>
      <div>
        <h3>Следите за нами</h3>
        <p>Блог</p>
        <p>Блог инженеров</p>
        <p>Instagram</p>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>LinkedIn</p>
        <p>Wolt Life</p>
      </div>
    </div>
  );
}
