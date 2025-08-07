import React from 'react'
import DashboardData from '../pages/dashboard/DashboardData'
import { Outlet } from 'react-router'

export default function MainLayout() {
  return (
    <div>
      <DashboardData/>
      <Outlet/>
    </div>
  )
}
