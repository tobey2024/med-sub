import React from 'react'
import Navbar from './components/navbar'

const PageLayout = ({children}) => {
  return (
    <>
        <Navbar />
        {children}
    </>
  )
}

export default PageLayout