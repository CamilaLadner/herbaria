import React from 'react'
import Link from 'next/link'
import styles from './index.module.css'

interface ButtonProps {
  text: string
  href?: string
  onClick?: () => void
  className?: string
}

const Button: React.FC<ButtonProps> = ({ text, href, onClick, className }) => {
  if (href) {
    return (
      <Link href={href} className={`${styles.button} ${className || ''}`}>
        {text}
      </Link>
    )
  }

  return (
    <button 
      onClick={onClick} 
      className={`${styles.button} ${className || ''}`}
    >
      {text}
    </button>
  )
}

export default Button

