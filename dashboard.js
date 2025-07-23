import React from 'react'

export default function Dashboard({ user }) {
  return (
    <div style={{ padding: 40 }}>
      <h2>Welcome, {user.email}</h2>
      <p>This is a fake GPT dashboard. But your token is real 😏</p>
    </div>
  )
}
