import React from 'react'
import {Outlet} from 'react-router-dom'
import Container from "@/components/UI/Container"

const MainLayout = () => {
  return (
    <Container>
      <Outlet/>
    </Container>
  )
}

export default MainLayout