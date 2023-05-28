import React from 'react';
import 'antd/dist/reset.css';
import {ConfigProvider} from'antd';
import './App.css';
import 'antd/dist/reset.css'
import Home from './pages/home';
import Activity from './pages/Activity'
import Login from './pages/login'
import Register from "./pages/register"
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
const queryClient = new QueryClient();

// import { feedProducts } from "./api";
// feedProducts();
import {Provider} from 'react-redux'
import store from './redux/store';
function App() {
  return (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="activity"> 
        < Route path="id/:productId"  element={<Activity />} />
      </Route> 
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      
      {/* <Route path="auth">
     
      
      </Route> */}
    </Routes>
  </BrowserRouter>  
 </QueryClientProvider>
  );
}


export default App
