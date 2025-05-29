import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import DoctorListPage from './pages/DoctorListPage'
import BookAppointment from './pages/BookAppointment'
import AppointmentPage from './pages/AppointmentPage'
import SignInPage from './pages/Signin'
import MyAppointmentPage from './pages/myAppointmentPage'
import Header from './components/Header'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { adminAccountId } from './config/config'
import { Navigate } from 'react-router-dom'
import Footer from './components/Footer'
import Cardiology from './pages/Cardiology'
import FamilyDoctor from './pages/FamilyDoctor'
import Neurology from './pages/Neurology'
import Pediatrics from './pages/Pediatrics'
import Orthopedic from './pages/Orthopedic'
import Dermatology from './pages/Dermatology'




function App() {
  const userInfo = JSON.parse(localStorage.getItem('user'));
  console.log(userInfo);
  const isLoggedIn = userInfo !== null;
  const isAdmin = isLoggedIn && userInfo.uid === adminAccountId;
  const { loading } = useSelector((state) => state.loader);
  const darkMode = useSelector((state) => state.theme.darkMode);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });
    const AppWrapper = () => {
    const location = useLocation();
    const shouldDisplayHeader = location.pathname !== '/signin' && location.pathname !== '/register' && location.pathname !== '/resetpassword';
    const navigate = useNavigate();

    useEffect(() => {
      console.log('home page');
      navigate('/');
    }
    , []);
    
    
    return (
      <>
        {shouldDisplayHeader && <Header />}
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/signin" element={<SignInPage />} />
            <Route
              path="/createdoctor"
              element={isAdmin ? <CreateDoctor /> : <Navigate to="/" />}
            />
            <Route
              path="doctorlist"
              element={isLoggedIn ? <DoctorListPage /> : <Navigate to="/" />}
              
            />
            
            <Route
              path="/book-appointment/:id"
              element={isLoggedIn ? <BookAppointment /> : <Navigate to="/" />
              }
            />
            
            <Route
              path="/appointment/:id"
              element={isLoggedIn ? <AppointmentPage /> : <Navigate to="/" />
              }
            />

            <Route
              path="/myappointments"
              element={isLoggedIn ? <MyAppointmentPage /> : <Navigate to="/" />
              }
            />

            <Route
            path="/cardiologist"
            element={isLoggedIn ? <Cardiology /> : <Navigate to="/" />
            }
          />

                    <Route
            path="/familydoctor"
            element={isLoggedIn ? <FamilyDoctor /> : <Navigate to="/" />
            }
          />

          <Route
            path="/neurology"
            element={isLoggedIn ? <Neurology /> : <Navigate to="/" />
            }
          />

          <Route
            path="/pediatrics"
            element={isLoggedIn ? <Pediatrics /> : <Navigate to="/" />
            }
          />

          <Route
            path="/orthopedic"
            element={isLoggedIn ? <Orthopedic /> : <Navigate to="/" />
            }
          />

          <Route
            path="/dermatology"
            element={isLoggedIn ? <Dermatology /> : <Navigate to="/" />
            }
          />

          </Routes>
          <Footer />


      </>

    )
  }


    







  return (
    <>
      <div>
        <AppWrapper />

      </div>
    </>
  )
}

export default App
