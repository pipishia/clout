import React from 'react';
import 'antd/dist/reset.css';
import {ConfigProvider} from'antd';
import Home from './pages/home';
import './App.css';
import 'antd/dist/reset.css'
import Activity from './pages/Activity'
import Login from './pages/login'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store';
function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="activity">
        <Route path="/activity" element={<Activity />} />
      </Route>
      <Route path="login">
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  </BrowserRouter>  
   </Provider>
  );
}



export default App
