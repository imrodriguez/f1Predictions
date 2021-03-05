import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.Footer}>
    ©2021 F1Predictions | Website developed by 
    {' '}
    <a href="https://github.com/imrodriguez">imrodriguez</a>
  </footer>
);

export { Footer };