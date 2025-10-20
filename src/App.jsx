import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import NotFound from './pages/notFound';
import Navbar from './components/navbar';
import Contact from './pages/contact';
import Dashboard from './pages/dashboard/dashboard';
import Profile from './pages/dashboard/profile';
import Settings from './pages/dashboard/setting';
import Login from './pages/Login';
import { AuthProvider } from './components/authContext';
import ProtectedRoute from './components/protectedRoute';

function App() {

  return (
    <>
    <div>
      <AuthProvider>
      <Navbar />  
      <Routes>
        <Route path='/login' element={<Login/>}/>

      <Route path='/' element={
        <ProtectedRoute> 
        <Home /> 
        </ProtectedRoute> 
        }/>

      <Route path='/about' element={
        <ProtectedRoute> 
        <About /> 
        </ProtectedRoute> 
      }/>
      <Route path='/contact' element={
        <ProtectedRoute>
        <Contact />
        </ProtectedRoute> 
      }/>
      <Route path='/dashboard' element={
        <ProtectedRoute>
        <Dashboard />
        </ProtectedRoute> 
      }>
      <Route index element={<Profile />} />
      <Route path='profile' element={<Profile />} />
      <Route path='settings' element={<Settings />} />
      </Route>

      <Route path='*' element={<NotFound/>}/>
      </Routes>
      </AuthProvider>
    </div>
    </>
  )
}

export default App
