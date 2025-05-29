import React from 'react'
import DoctorForm from '../components/DoctorForm'
import DoctorListPage from './DoctorListPage'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CarouselShow from '../components/CarouselShow';
import Category from '../components/Category';


export default function Home() {



  
  return (
    <div>
      <CarouselShow />
      <Category />
      <DoctorListPage />
    </div>
  )
}
