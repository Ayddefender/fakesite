import React from 'react'

export default function Dashboard({ session }) {
  return (
    <div>
      <h2>Welcome to FakeGPT Dashboard</h2>
      <p>You are logged in as {session.user.email}</p>
    </div>
  )
}
