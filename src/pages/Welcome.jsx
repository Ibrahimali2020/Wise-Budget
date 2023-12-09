import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import { useNavigate } from 'react-router-dom'
import { useBudget } from '../contexts/BudgetContext'


export default function Welcome() {
  const { isLoged } = useBudget()
  const navigate = useNavigate()

  useEffect(() => {
    if (isLoged) {
      // Redirect to the main app
      navigate('app', { replace: true });
    }
  }, [isLoged, navigate]);

  if (isLoged) {
    // If the user is already logged in, the effect will handle the redirection,
    // and this component doesn't need to render anything.
    return null;
  }

  return (
    <>
      <Hero />
    </>
  )
}
