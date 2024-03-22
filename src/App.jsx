import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PhotoComponent from './component/PhotoComponent'
import Todo from './component/Todo'
import { Route,Routes } from 'react-router-dom'
import Acceuil from './Acceuil'

function App() {
  return (
    <Routes>
        <Route  exact path="/" Component ={Acceuil} />
        <Route  exact path="/photo" Component ={PhotoComponent} />
        <Route  exact path="/todo" Component ={Todo} />
     
      
    </Routes>
  )
}

export default App
