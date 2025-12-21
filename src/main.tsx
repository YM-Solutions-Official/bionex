// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import './styles.css'
import { routeTree } from '../src/routeTree.gen.ts'
import Page404 from './components/ui/404page/404page.tsx'

const router = createRouter({
  routeTree,
  defaultNotFoundComponent: Page404,
})

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
