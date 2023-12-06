import React from 'react'
import styles from './Card.module.css'

export default function Card({ children }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardLine}>
        {children}
      </div>
    </div>
  )
}
