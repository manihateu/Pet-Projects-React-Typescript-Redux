import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'

type Props = {}

const AppRoutes = (props: Props) => {
  return (
    <Routes>
      <Route index element={<Home/>}/>
    </Routes>
  )
}

export default AppRoutes