import { DownloadButton } from '../DownloadButton';
import { GPSelector } from '../GPSelector';
import styles from './OptionsSection.module.css';

const OptionsSection = ({ onChange }) => (
    <div className={styles.Wrapper}>
        <GPSelector onChange={onChange} />
        <DownloadButton id="standing" text="Download image" />
    </div>
);

export { OptionsSection };