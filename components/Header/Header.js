import { Container } from "../Container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
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
            <div className={styles.Icons}>
              <a target="_blank" href="https://github.com/imrodriguez/f1Predictions"><FontAwesomeIcon icon={faGithub} /></a>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export { Header };
