import React from 'react'
import styles from './AppNav.module.css'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify'
import { useBudget } from '../contexts/BudgetContext'

export default function AppNav() {
  const { name, setName, setBudgets, setExpenses, setIsLoged } = useBudget()
  const navigate = useNavigate()

  function handleDeleteUser() {
    if (window.confirm("Delete user and all data?")) {
      setName('')
      setBudgets([])
      setExpenses([])
      setIsLoged(false)
      navigate('/')
      toast.success('You have deleted you account!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  return (
    <nav className={styles.appnav}>
      <h1 className={styles.welcomeName}>Welcome, <span>{name}</span></h1>
      <button className={`btn btn-danger ${styles.btnDelete}`}
        onClick={handleDeleteUser}>
        Delete Account
        <span className={styles.iconDelete}>
          <FontAwesomeIcon icon={faTrashCan} style={{ color: "#ffffff", }} />  </span>
      </button>
    </nav>
  )
}
