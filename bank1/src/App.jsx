import React,{useState} from 'react'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import StepContext from '../src/context/StepContext'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Addcustomer from './pages/Addcustomer/Addcustomer'
import Customer from './pages/customer/Customer'
import Customers from './pages/customers'
import Landing from './pages/Landing'
import Transaction from './pages/Transaction'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
   
            <Routes>
            
            <Route  path="/" element={<Landing/>} />
                <Route  path="/employees" element={<Customers/>} />
                <Route  path="/employees/:id" element={<Customer/>} />
                <Route  path="/transactions" element={<Transaction/>} />
                <Route  path="/add" element={<Addcustomer/>} />
            
            </Routes>
           
    </div>
  )
}

export default App
