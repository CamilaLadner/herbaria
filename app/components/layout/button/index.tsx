import React from 'react'
import Link from 'next/link'
import styles from './index.module.css'

interface ButtonProps {
  text: string
  href: string
  className?: string
}

const Button: React.FC<ButtonProps> = ({ text, href, className }) => {
  return (
    <Link href={href} className={`${styles.button} ${className || ''}`}>
      {text}
    </Link>
  )
}

export default Button

