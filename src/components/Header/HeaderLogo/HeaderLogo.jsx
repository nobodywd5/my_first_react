import React from 'react';
import styles from './HeaderLogo.module.css';

const HeaderLogo = () => {
    return (
        <div>
            <img className={styles.menuItemLogo} src="https://domenafirmy.pl/wp-content/uploads/2018/09/domenafirmy-logo.svg" alt="logo"/>
        </div>
    );
}

export default HeaderLogo;