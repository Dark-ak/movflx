import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Movie from './components/movie/Movie.jsx'

const router= createBrowserRouter([
  {
    path:"/",
    element: <App />
  },
  {
    path:"/:movieId",
    element: <Movie />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
