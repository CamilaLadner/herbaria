'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import styles from './index.module.css';
import Link from 'next/link';
import Image from 'next/image';
import AnnouncementBar from '../announcementBar';
import { useCart } from '../../../context/CartContext';


const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { openCart, totalItems } = useCart();
  // Inicializar siempre con 'sunrise' para evitar error de hidratación
  const [iconState, setIconState] = useState<'sunrise' | 'sunset'>('sunrise');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Inicializar el tema desde localStorage solo después del mount
  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      const htmlElement = document.documentElement;
      if (savedTheme === 'dark') {
        setIconState('sunset');
        htmlElement.classList.add('dark');
      } else {
        setIconState('sunrise');
        htmlElement.classList.remove('dark');
      }
    }
  }, []);

  // Actualizar el tema cuando cambia iconState (solo después del mount)
  useEffect(() => {
    if (!mounted) return;
    const htmlElement = document.documentElement;
    if (iconState === 'sunset') {
      htmlElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      htmlElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [iconState, mounted]);

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

  const handleScrollToAbout = () => {
    setIsMenuOpen(false);
    
    // Si estamos en la página principal, hacer scroll
    if (pathname === '/') {
      const element = document.getElementById('sobre-nosotros');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Si estamos en otra página, navegar a la página principal con hash
      router.push('/#sobre-nosotros');
      // Esperar a que la página se cargue y luego hacer scroll
      setTimeout(() => {
        const element = document.getElementById('sobre-nosotros');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  const CartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );

  const CartButton = () => (
    <button
      type="button"
      className={styles.cartBtn}
      onClick={() => {
        openCart();
        setIsMenuOpen(false);
      }}
      aria-label={totalItems > 0 ? `Abrir carrito, ${totalItems} productos` : 'Abrir carrito'}
    >
      <CartIcon />
      {totalItems > 0 ? (
        <span className={styles.cartBadge} aria-hidden="true">
          {totalItems > 99 ? '99+' : totalItems}
        </span>
      ) : null}
    </button>
  );

  const renderIcon = () => {
    switch (iconState) {
      case 'sunrise':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </svg>
        );
      case 'sunset':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </svg>
        );
    }
  };

  const themeLabel =
    iconState === 'sunset' ? 'Activar modo claro' : 'Activar modo oscuro';
  const themePressed = iconState === 'sunset';

  return (
    <>
      <AnnouncementBar />
    <header className={styles.navbar}>
      <Link href="/" className={styles.logo} aria-label="Herbaria, inicio">
        <Image
          src={iconState === 'sunset' ? "/logoDesktopDark.png" : "/logoNavBar.png"}
          alt=""
          width={100}
          height={100}
          className={styles.logoDesktop}
          aria-hidden="true"
        />
        <Image src="/logoMobile.png" alt="" className={styles.logoMobile} width={100} height={100} aria-hidden="true" />
      </Link>

      <button
        type="button"
        className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ''}`}
        onClick={toggleMenu}
        aria-label={isMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
        aria-expanded={isMenuOpen}
        aria-controls="menu-principal-navigation"
      >
        <span className={styles.hamburgerLine} aria-hidden="true" />
        <span className={styles.hamburgerLine} aria-hidden="true" />
        <span className={styles.hamburgerLine} aria-hidden="true" />
      </button>

      <div className={styles.button}>
        <button
          type="button"
          onClick={handleIconClick}
          className={styles.themeToggle}
          aria-label={themeLabel}
          aria-pressed={themePressed}
        >
          {renderIcon()}
        </button>
        <CartButton />
      </div>

      <nav
        id="menu-principal-navigation"
        className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}
        aria-label="Principal"
      >
        <button type="button" onClick={handleScrollToAbout} className={styles.menuLink}>
          Sobre nosotros
        </button>
        <Link href="/nuestros-productos" onClick={() => setIsMenuOpen(false)}>
          Nuestros productos
        </Link>
        <div className={styles.menuButtons}>
          <button
            type="button"
            onClick={handleIconClick}
            className={styles.themeToggle}
            aria-label={themeLabel}
            aria-pressed={themePressed}
          >
            {renderIcon()}
          </button>
          <CartButton />
        </div>
      </nav>
    </header>
    </>
  )
}

export default Navbar