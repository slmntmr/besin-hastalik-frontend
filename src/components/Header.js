import styles from '../styles/header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Besin Hastalık Uygulaması</h1>
      <nav className={styles.navLinks}>
        <a href="/diseases">Hastalıklar</a>
        <a href="/foods">Besinler</a>
      </nav>
    </header>
  );
};

export default Header;
