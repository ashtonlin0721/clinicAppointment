import React from 'react'
import DoctorForm from '../components/DoctorForm'
import DoctorListPage from './DoctorListPage'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Home() {



  
  return (
    <div>
        <DoctorListPage />
    </div>
  )
}
