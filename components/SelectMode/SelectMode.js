import { Button } from '../Button';
import Router from 'next/router'
import styles from "./SelectMode.module.css";

const SelectMode = () => (
  <div className={styles.CenterScreen}>
    <p className={styles.Description}>You can make your own prediction about F1. <br /><br />Select Mode:</p>
    <div className={styles.Wrapper}>
      <div className={styles.Option}>
        <Button action={() => Router.push('/drivers')}>Drivers standing</Button>
      </div>
      <div className={styles.Option}>
        <Button action={() => Router.push('/teams')}>Teams standing</Button>
      </div>
    </div>
  </div>
);

export { SelectMode };
