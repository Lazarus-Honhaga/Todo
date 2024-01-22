import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo, Todos } from './components/CreateTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={[
        {
          title: 'hello world',
          description: 'My name is monkey',
          completed: false,
        },
        {
          title: 'hello world',
          description: 'My name is monkey',
          completed: false,
        }
      ]}></Todos>
    </div>
  )
}

export default App
