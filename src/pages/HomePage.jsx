import React from 'react'
import AppNav from '../components/AppNav'
import { Outlet } from 'react-router-dom'

export default function HomePage({
  name,
  setName,
  setBudgets,
  setExpenses,
  setIsLoged,
}) {
  return (
    <>
      <AppNav
        name={name}
        setName={setName}
        setBudgets={setBudgets}
        setExpenses={setExpenses}
        setIsLoged={setIsLoged} />

      <Outlet />


    </>
  )
}
