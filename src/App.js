import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './Login'
import Dashboard from './Dashboard'

function App() {
  return (
    <div>
      <h1>FakeGPT</h1>
      <Login />
      <Dashboard />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
