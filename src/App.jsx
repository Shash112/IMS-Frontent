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
import ProductDetails from './pages/ProductDetails'
import Supplier from './pages/Supplier'
import Order from './pages/Order'


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<ProtectedRoute><Layout /></ProtectedRoute>} >
          <Route path='/' element={<Dashboard/>}></Route>
          <Route path='/inventroy' element={<Products/>}></Route>
          <Route path='/inventory/:id' element={<ProductDetails/>}></Route>
          <Route path='/report' element={<Report/>}></Route>
          <Route path='/supplier' element={<Supplier />}></Route>
          <Route path='/order' element={<Order />}></Route>
          <Route path='/store' element={<Store />}></Route>
        </Route>
      </Routes>
      <ToastContainer />
    </Router>
  )
}

export default App
