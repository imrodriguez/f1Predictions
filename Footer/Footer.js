import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.Footer}>
    ©2021 Mundo Mexica | Website developed by 
    {' '}
    <a href="https://github.com/imrodriguez">imrodriguez</a>
  </footer>
);

export { Footer };