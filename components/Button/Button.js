import styles from './Button.module.css';

const Button = ({ children, action, variant }) => {  
    return (
      <button className={styles.Button} onClick={action} data-variant={variant}>
        {children}
      </button>
    );
  };

export { Button };