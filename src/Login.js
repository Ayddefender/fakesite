import React, { useState } from 'react'
import { supabase } from './supabase'

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin(e) {
    e.preventDefault()
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    if (error) {
      alert(error.message)
    } else {
      onLogin(data.session)
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      /><br/>
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      /><br/>
      <button type="submit">Login</button>
    </form>
  )
}
