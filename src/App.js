import React from 'react'
import Login from './Login'
import Dashboard from './Dashboard'

export default function App() {
  const [session, setSession] = React.useState(null)

  return (
    <div>
      {session ? (
        <Dashboard session={session} />
      ) : (
        <Login onLogin={setSession} />
      )}
    </div>
  )
}
