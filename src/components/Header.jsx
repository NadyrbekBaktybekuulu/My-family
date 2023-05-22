import styles from "./Header.module.css";

const Header = () => {
   return (
      <div className={styles.header}>
         <div>
            <img className='logo' src="logo.png" alt='logo' />
         </div>

         <nav className={styles.nav_menu}>
            <div className={styles.item}>
               <a href="#" className={`${styles.nav_link} ${styles.active}`}>Главная</a>
            </div>
            <div className={styles.item}>
               <a href="#" className={styles.nav_link}>Новости</a>
            </div>
            <div className={styles.item}>
               <a href="#" className={styles.nav_link}>О нас</a>
            </div>
            <div className={styles.item}>
               <a href="#" className={styles.nav_link}>Контакты</a>
            </div>
            <div className={styles.item}>
               <a href="#" className={styles.nav_link}>Истории</a>
            </div>
         </nav>
      </div>

   )
}

export default Header;  