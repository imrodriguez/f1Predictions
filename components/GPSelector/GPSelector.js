import { getGPs } from '../../services/gps';
import styles from './GPSelector.module.css';

const GPSelector = ({ onChange }) => {
    const GPs = getGPs();

    return (
        <div className={styles.Wrapper}>
            <span>Select a GP:</span>
            <select onChange={(e) => onChange(e)}>
                <option value="" selected >None</option>
                {GPs.map((gp, index) => (
                    <option key={index}>{gp.place}</option>
                ))}
            </select>
        </div>
    );
};

export { GPSelector };