import { cleanName } from '../../helpers/cleanName';
import styles from './Team.module.css';

const Team = ({ name, position }) => (
    <div className={styles.Wrapper}>
        <span className={styles.Standing}>{position}</span>
        <img className={styles.Image} src={`/images/${cleanName(name)}.png`}/>
        <span className={styles.Name}>{name}</span>
    </div>
);

export { Team };