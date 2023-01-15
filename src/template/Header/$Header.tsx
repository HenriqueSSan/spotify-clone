import styles from './$Header.module.scss';
import logoImg from './assets/logo.svg';
import Containers from './containers';

export const Header = () => {
  return (
    <header className={styles['l-header']}>
      <nav
        className={`${styles['l-nav']} ${styles['l-header__container']} align-items-center justify-between`}
      >
        <a className={styles['l-nav__logo']} href="/">
          <img src={logoImg} alt="" />
        </a>

        <Containers.Navigation />

        <Containers.Actions />
      </nav>
    </header>
  );
};
