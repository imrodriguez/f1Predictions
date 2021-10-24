import styles from './Driver.module.css';
import { cleanName } from '../../helpers/cleanName';

const Driver = ({ name, surname, team, position }) => (
    <div className={styles.Wrapper} data-position={position}>
        <span className={styles.Standing}>{position}</span>
        {(position === 1) 
        ? <img className={styles.DriverImage} src={`/images/${cleanName(name)}.png`} />
        : <img className={styles.Image} src={`/images/${cleanName(team)}.png`} />}
        <div className={styles.Text}>
            <span className={styles.Name}>{name}</span>
            <span className={styles.Surname}>{surname}</span>
        </div>
    </div>
);

export { Driver };