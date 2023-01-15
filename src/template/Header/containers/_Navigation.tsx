import styles from '../$Header.module.scss';

export function Navigation() {
  return (
    <nav className={styles['l-nav__menu']}>
      <ul className={styles['l-nav__list']}>
        <li>
          <a href="/">Invest</a>
        </li>
        <li>
          <a href="/">FAQs</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
      </ul>
    </nav>
  );
}
