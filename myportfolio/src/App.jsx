import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './pages/About.css'
import './pages/Contact.css'
import './pages/Header.css'
import './pages/Project.css'
import AppLayout from './layouts/AppLayout'
import Home from "./pages/Home"
import About from "./pages/About"
import Project from "./pages/Project"
import Contact from "./pages/Contact"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<Home />}>
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
      <Route path ="project" element={<Project />}/>
      </Route>
  )
)

function App() {

  return <RouterProvider router = {router} />
}

export default App
