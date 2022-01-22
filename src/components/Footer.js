import styles from './Footer.module.css'

import React from 'react';

export default function Footer() {
  return <>
      <div className={styles.main}>
          <p>&copy; {(new Date().getFullYear())} <a href="https://tomassetti.net">tomassetti.net</a></p>
      </div>
  </>;  
}
