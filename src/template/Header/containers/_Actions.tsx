import { JoinLink } from 'src/common/JoinLink';

import styles from '../$Header.module.scss';
import searchIcon from '../assets/search.svg';
import userIcon from '../assets/user-circle-light.png';

export function Actions() {
  return (
    <div className={styles['l-nav__actions']}>
      <button type="button">
        <img src={searchIcon} alt="" />
      </button>
      <button type="button">
        <img src={userIcon} alt="" />
      </button>

      <JoinLink />
    </div>
  );
}
