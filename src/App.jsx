
import 'antd/dist/reset.css';
import {ConfigProvider} from'antd';
import Home from './pages/home';
import './App.css';
import 'antd/dist/reset.css'
import Activity from './pages/Activity'
import Login from './pages/login'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
function App() {
  return (
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
  );
}



export default App
