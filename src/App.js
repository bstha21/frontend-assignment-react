import React from 'react'
import './App.css'
import Homepage from './Product_Components/Homepage'
import Searchpage from './Product_Components/Searchpage'
import Productdetails from './Product_Components/Productdetails'
import Navbar from './NavBar/Navbar';
import Error from './ErrorHandler/Error';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { QueryClientProvider, QueryClient } from 'react-query';


const queryclient = new QueryClient()

function App() {
  const mystyle = {
    height: "300px",
    backgroundSize: "contain"
  }
  return (
    <QueryClientProvider client={queryclient}>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Homepage mystyle={mystyle} />} />
            <Route exact path='/search' element={<Searchpage mystyle={mystyle} />} />
            <Route exact path='/productdetails/:id' element={<Productdetails />} />
            <Route path='/*' element={<Error />} />
          </Routes>
        </BrowserRouter>
      </div>
    </QueryClientProvider>

  )
}

export default App