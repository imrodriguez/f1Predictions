import { Container } from "../Container";
import styles from './Header.module.css';

const Header = () => {

  return (
    <header>
      <div className={styles.BarWrapper}>
        <Container>
          <div className={styles.Bar}>
            <div>
              <a href="/">
                F1Prediction
              </a>
            </div>
            <div className={styles.HamburguerToggle}>
              icons
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export { Header };
