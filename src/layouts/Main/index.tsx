import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'
import Footer from './Footer'

function MainLayout() {
  return (
    <div className='flex flex-col min-h-screen items-center overflow-x-hidden'>
      <Header className='flex-none bg-mainBg' />
      <div className='flex-auto flex mt-8 w-full'>
        <div className='mx-auto min-h-screen w-full'>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout
