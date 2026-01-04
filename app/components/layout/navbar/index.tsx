'use client';

import { useState, useEffect } from 'react';
import styles from './index.module.css';
import Link from 'next/link';


const index = () => {
  const [iconState, setIconState] = useState<'sunrise' | 'sunset'>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme === 'dark' ? 'sunset' : 'sunrise';
    }
    return 'sunrise';
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (iconState === 'sunset') {
      htmlElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      htmlElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [iconState]);

  const handleIconClick = () => {
    if (iconState === 'sunrise') {
      setIconState('sunset');
    } else {
      setIconState('sunrise');
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderIcon = () => {
    switch (iconState) {
      case 'sunrise':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-sunrise">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 17h1m16 0h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7m-9.7 5.7a4 4 0 0 1 8 0" />
            <path d="M3 21l18 0" />
            <path d="M12 9v-6l3 3m-6 0l3 -3" />
          </svg>
        );
      case 'sunset':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-sunset">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 17h1m16 0h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7m-9.7 5.7a4 4 0 0 1 8 0" />
            <path d="M3 21l18 0" />
            <path d="M12 3v6l3 -3m-6 0l3 3" />
          </svg>
        );
    }
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img 
          src={iconState === 'sunset' ? "/logoDesktopDark.png" : "/logoNavBar.png"} 
          alt="logo" 
          className={styles.logoDesktop} 
        />
        <img src="/logoMobile.png" alt="logo" className={styles.logoMobile} />
      </div>

      <button 
        className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
      </button>

      <div className={styles.button}>
        <div onClick={handleIconClick}>
          {renderIcon()}
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17h-11v-14h-2" /><path d="M6 5l14 1l-1 7h-13" /></svg>
      </div>

      <div className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}>
        <Link href="/sobre-nosotros" onClick={() => setIsMenuOpen(false)}>Sobre nosotros</Link>
        <Link href="/nuestros-productos" onClick={() => setIsMenuOpen(false)}>Nuestros productos</Link>
        <Link href="/contacto" onClick={() => setIsMenuOpen(false)}>Contacto</Link>
        <div className={styles.menuButtons}>
          <div onClick={handleIconClick}>
            {renderIcon()}
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17h-11v-14h-2" /><path d="M6 5l14 1l-1 7h-13" /></svg>
        </div>
      </div>
    </div>
  )
}

export default index