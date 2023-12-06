import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import styles from './Hero.module.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from './Button';

export default function Hero({ name, setName, isLoged, setIsLoged }) {
  const navigate = useNavigate()

  function handleCreateAccount() {
    if (!name) return;
    setIsLoged(true)
    navigate("app", { replace: true })
    toast.success(`Welcome, ${name}`, {
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

  function handleSubmit(e) {
    e.preventDefault();
    handleCreateAccount()
  }

  return (
    <section className={`${styles.hero} container`}>
      <div className={styles.leftSideContent}>
        <h1 className={styles.h1}>Master Your Finances with Wise
          <span className={styles.span}>Budget</span>
        </h1>
        <h3 className={styles.h3}>Empower your journey with our seamless tools for intelligent financial management.</h3>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <input
              value={name}
              required
              onChange={e => setName(e.target.value)}
              type="text"
              className={`form-control input-lg col-lg ${styles.nameInput}`}
              placeholder="What is your name?"
            />
            <Button color='dark' type="submit" icon={faUserPlus}>Create Account</Button>
          </div>
        </form>
      </div>
      <img className={styles.heroImg} src="./planmoneybg.png" alt="" />
    </section >
  );
}
