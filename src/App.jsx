
import 'antd/dist/reset.css';
import {ConfigProvider} from'antd';
import Home from './pages/home';
import './App.css';
import 'antd/dist/reset.css'
import Activity from './pages/Activity'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="activity">
        <Route path="id/:productId" element={<Activity />} />
      </Route>
    </Routes>
  </BrowserRouter>  
  );
}



export default App
