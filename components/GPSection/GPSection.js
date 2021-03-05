import { cleanName } from '../../helpers/cleanName';
import styles from './GPSection.module.css';

const GPSection = ({ GP }) => (
    <div className={styles.Background}>
        <p className={styles.Title}>Predictions for:</p>
        <div className={styles.Wrapper}>
            <div className={styles.Flag}><img src={`/images/${cleanName(GP.place)}.png`} /></div>
            <p className={styles.Place}>GP of {GP.place}</p>
        </div>
    </div>
);

export { GPSection };