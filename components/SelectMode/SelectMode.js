import { Button } from '../Button';
import styles from "./SelectMode.module.css";

const SelectMode = () => (
  <>
  <p className={styles.Description}>You can make your own prediction about F1. <br/><br/>Select Mode:</p>
  <div className={styles.Wrapper}>
    <div className={styles.Option}>
      <Button action="/drivers">Drivers standing</Button>
    </div>
    <div className={styles.Option}>
      <Button action="/teams">Teams standing</Button>
    </div>
  </div>
  </>
);

export { SelectMode };
