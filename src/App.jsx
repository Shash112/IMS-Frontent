import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Layout from './layouts/Layout'
import Products from './pages/Products'
import { ToastContainer } from 'react-toastify'
import ProtectedRoute from './components/ProtectedRoute'
import Dashboard from './pages/Dashboard'
import Report from './pages/Report'
import Store from './pages/Store'


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<ProtectedRoute><Layout /></ProtectedRoute>} >
          <Route index element={<Dashboard/>}></Route>
          <Route path='/inventroy' element={<Products/>}></Route>
          <Route path='/report' element={<Report/>}></Route>
          <Route path='/store' element={<Store />}></Route>
        </Route>

      </Routes>
      <ToastContainer />
    </Router>
  )
}

export default App
