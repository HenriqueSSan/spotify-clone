import styles from './$JoinLink.module.scss';

export function JoinLink() {
  return (
    <a className={`${styles['l-join']} btn weight-700 rounded-100`} href="/" data-primary>
      Join the Waitlist
    </a>
  );
}
