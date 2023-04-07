import { NavLink } from 'react-router-dom';
import './navbar.css';
import { Row, Col } from 'antd';
import 'antd/dist/reset.css'
import { useState } from "react";
import CartSummary from '../cartsummary/cart'

const Nav =()=>{
    const [navOpen, setnavOpen] = useState(false);
return(
    <div className="nav">
        <div className="nav-container">
            <div className="navbar">
                <div className="menu-toggle" onClick={() => setnavOpen(!navOpen)}>
                    <div  className={navOpen ? "hambox hamboxOpen": "hambox"}>
                        <span  className={navOpen ? "linetop spin": "linetop"}></span>
                        <span  className={navOpen ? "linebottom spin": "linebottom"}></span>
                    </div>
                </div>
            </div>
            <div className="nav-overlay" style={{top:navOpen ? "0" : "-100%",transitionDelay:navOpen ? "0s" : "0s"}}></div>
        </div>
    </div>
)
}

export default Nav






// export default function NavBar() {
//     return (
  
//     );
// }