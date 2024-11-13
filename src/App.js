import './App.css';
import Header from './Header.js';
import Home from './Home.js'
import Checkout from './checkout.js';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './layout.js';
function App() {
  return (

    <BrowserRouter>
      <Layout>
        <Routes>

        <Route path='/checkout'
        element={<Checkout/>}>
        </Route>

        <Route path='/'
        element={<Home/>}> 
        </Route>
        

      
        
        

     
        {/* Header */}
        {/* Body */}

        </Routes>
      </Layout>
    </BrowserRouter>
   
  );
}

export default App;
