import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from './Logo.module.css';
import { useNavigate } from 'react-router-dom';


export default function Logo({ name, isLoged, setIsLoged }) {
  const navigate = useNavigate()


  return (
    <div className={styles.logo} onClick={() => {
      if (!isLoged) return;
      navigate('app')
    }}>
      <FontAwesomeIcon icon={faHouse} size="lg" style={{ color: "#3498db", }} />
      <h4 className={styles.appName}>Wise<span className={styles.span}>Budget</span> </h4>
    </div>
  )
}
