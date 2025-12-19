// src/main.tsx   ← replace everything with this

import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import './styles.css'

// This is the correct path when routeTree.gen.ts is in the project root
// import { routeTree } from '../routeTree.gen.ts'   // ← one folder up
import { routeTree } from '../src/routeTree.gen.ts' // ← current src folder

// Create router instance
const router = createRouter({ routeTree })

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
