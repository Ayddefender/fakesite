import React from 'react'
import { createRoot } from 'react-dom/client'
import Login from './Login.js'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<Login />)
