import React from 'react';
import HeaderNav from './HeaderNav/HeaderNav';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import styles from './Header.module.css';
import HeaderSocial from './HeaderSocial/HeaderSocial';

const Header = () => {
    return (
        <div className={styles.app_wrapper_header}>
            <HeaderLogo/>
            <HeaderNav/>
            <HeaderSocial />
        </div>
    );
}

export default Header;