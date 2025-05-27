import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { useRoutes } from 'react-router-dom'
import DoctorListPage from './pages/DoctorListPage'
import DoctorForm from './components/DoctorForm'
import BookAppointment from './pages/BookAppointment'
import Appointment from './pages/AppointmentPage'
import SignInPage from './pages/Signin'
import MyAppointmentPage from './pages/myAppointmentPage'
import Header from './components/Header'
import { useEffect } from 'react'

function App() {
  let element = useRoutes([
    {path: '/', element: <Home />},
    {path: '/doctorlist', element: <DoctorListPage />},
    {path: '/doctorform', element: <DoctorForm />},
    {path: '/book-appointment/:id', element: <BookAppointment />},
    {path: '/appointment/:id', element: <Appointment />}, 
    {path: '/signin', element: <SignInPage />},
    {path: '/myappointments', element: <MyAppointmentPage />},
  ])

  //   useEffect(() => {
  //   window.location.reload(); // reloads the current page
  // }, []); 


  return (
    <>
      <div>
        <Header />
        {element}

      </div>
    </>
  )
}

export default App
