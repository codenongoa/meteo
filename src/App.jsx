import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PhotoComponent from './component/PhotoComponent'
import Todo from './component/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Todo />
    <PhotoComponent />
    </>
  )
}

export default App
