import React from 'react';
import styles from './ErrorMessage.css';

export default ({ className }) => (
    <div className={[
        styles.component,
        className
    ].join(' ')}>
        <span className={styles.inner}>
            There has been an error.
        </span>
    </div>
);
