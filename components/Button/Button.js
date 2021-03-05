import styles from './Button.module.css';

const Button = ({ children, action, variant }) => {
    if (typeof action === 'string') {
      return (
        <a className={styles.Button} href={action} data-variant={variant}>
          {children}
        </a>
      )
    }
  
    return (
      <button className={styles.Button} onClick={action} data-variant={variant}>
        {children}
      </button>
    );
  };

export { Button };