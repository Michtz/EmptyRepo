import React from 'react';
import styles from '../../styles/logo.module.scss';

const Logo = () => {
  return (
    <div className={styles['logo-container']}>
      <img src="https://www.leuchterag.ch/hubfs/Dev-22/docugate-template-logo-dev.svg" alt="logo"></img>
    </div>
  );
};

export default Logo;
