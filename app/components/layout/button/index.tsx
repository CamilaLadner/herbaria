import React from 'react'
import Link from 'next/link'
import styles from './index.module.css'

interface ButtonProps {
  text: string
  href?: string
  onClick?: () => void
  className?: string
  ariaLabel?: string
}

const Button: React.FC<ButtonProps> = ({ text, href, onClick, className, ariaLabel }) => {
  if (href) {
    return (
      <Link href={href} className={`${styles.button} ${className || ''}`}>
        {text}
      </Link>
    )
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${styles.button} ${className || ''}`}
      aria-label={ariaLabel}
    >
      {text}
    </button>
  )
}

export default Button

