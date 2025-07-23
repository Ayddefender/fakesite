import React, { useState } from 'react'
import { supabase } from './supabase'
import Dashboard from './Dashboard'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) alert('Login failed')
    else setUser(data.user)
  }

  if (user) return <Dashboard user={user} />

  return (
    <div style={{ padding: 40 }}>
      <h2>Login to FakeGPT</h2>
      <input
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      /><br /><br />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      /><br /><br />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}
