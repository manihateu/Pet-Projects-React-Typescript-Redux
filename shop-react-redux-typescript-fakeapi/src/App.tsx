import React, { FC } from 'react'
import AppRoutes from './components/Routes/AppRoutes'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'

type Props = {}

const App: FC = (props: Props) => {
  return (
    <div className='app'>
      <Header/>
      <div className="container">
        <Sidebar/>
        <AppRoutes/>
      </div>
      
    </div>
  )
}

export default App
