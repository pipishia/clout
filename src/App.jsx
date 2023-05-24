
// import 'antd/dist/reset.css'
// import './App.css'
// import Home from './pages/home'
// import Login from './pages/login'
// import Activity from './pages/Activity';
// function App() {
//   return (
//     <div>
//     <Activity />
//     {/* <Login /> */}
//     </div>


import 'antd/dist/reset.css';
import {ConfigProvider} from'antd';
import Home from './pages/home';
import './App.css';
import 'antd/dist/reset.css'
import Activity from './pages/Activity'
import Login from './pages/login'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
const queryClient = new QueryClient();

import { feedProducts } from "./api";
feedProducts();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
</QueryClientProvider>
  );
}



export default App
