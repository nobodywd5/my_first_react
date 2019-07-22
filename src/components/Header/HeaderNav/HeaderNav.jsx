import React from 'react';
import styles from './HeaderNav.module.css';
import './HeaderNav.css';
import StartSubmenu from './StartSubmenu/StartSubmenu';
import MarketingSubmenu from './MarketingSubmenu/MarketingSubmenu';
import ItSubmenu from './ItSubmenu/ItSubmenu';
import BezpiczenstwoSubmenu from './BezpiczenstwoSubmenu/BezpiczenstwoSubmenu';
import FinanseSubmenu from './FinanseSubmenu/FinanseSubmenu';
import StrefaKlientaSubmenu from './StrefaKlientaSubmenu/StrefaKlientaSubmenu';

const HeaderNav = () => {
    return (
        <nav className={styles.nav}>
            <div>
                <a href="#s"><StartSubmenu /></a>
            </div>
            <div>
                <a href="#s"><MarketingSubmenu /></a>
            </div>
            <div>
                <a href="#s"><ItSubmenu /></a>
            </div>
            <div>
                <a href="#s"><BezpiczenstwoSubmenu /></a>
            </div>
            <div>
                <a href="#s"><FinanseSubmenu /></a>
            </div>
            <div>
                <a href="#s"><StrefaKlientaSubmenu /></a>
            </div>
        </nav>
    );
}

export default HeaderNav;