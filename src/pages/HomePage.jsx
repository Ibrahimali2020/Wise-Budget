import React from 'react'
import AppNav from '../components/AppNav'
import { Outlet } from 'react-router-dom'

export default function HomePage() {
  return (
    <>
      <AppNav />

      <Outlet />
    </>
  )
}
