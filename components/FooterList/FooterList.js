import { useEffect, useState } from 'react';
import styles from './FooterList.module.css';

const FooterList = () => {
    const [url, SetUrl] = useState();

    useEffect(() => {
        if (window) {
            SetUrl(window.location.origin);
        }
    },[]);

    if (!url) {
        return null;
    }

    return (
        <div className={styles.Wrapper}>
            <p>
                You can make your own prediction on {url}
            </p>
        </div>
    );
};

export { FooterList };