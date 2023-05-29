import { Link } from 'react-router-dom';
import './navbar.css';
import { Row, Col } from 'antd';
import 'antd/dist/reset.css'
import { useState } from "react";
// import CartSummary from '../cartsummary/cart'
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
            <div className="nav-overlay" style={{top:navOpen ? "0%" : "-100%",transitionDelay:navOpen ? "0s" : "0s"}}>
            <div className="wrap">
                   <div className="flwrap">
                           <div className="mainsearchinputitem">
                               <input type="text" />
                               <button className="searchbutton"><img src="/images/search.png" width="20vw" ></img></button>
                           </div>
                       </div>
                   </div>
                <ul className="nav-links">
                    <li className="nav-item">
                        <a onClick={() => setnavOpen(!navOpen)} style={{top:navOpen ? "0" : "20px",transitionDelay:navOpen ? "0.1s" : "0s"}}>about us</a>
                        <div className="nav-item-wrapper"></div>
                    </li>
                    <li className="nav-item">
                        <a onClick={() => setnavOpen(!navOpen)} style={{top:navOpen ? "0" : "20px",transitionDelay:navOpen ? "0.1s" : "0s"}}>news</a>
                        <div className="nav-item-wrapper"></div>
                    </li>
                    <li className="nav-item">
                        <a onClick={() => setnavOpen(!navOpen)} style={{top:navOpen ? "0" : "20px",transitionDelay:navOpen ? "0.1s" : "0s"}}>sign up</a>
                        <div className="nav-item-wrapper"></div>
                    </li> 
                    <li className="nav-item">
                        <a onClick={() => setnavOpen(!navOpen)} style={{top:navOpen ? "0" : "20px",transitionDelay:navOpen ? "0.1s" : "0s"}}>login</a>
                        <div className="nav-item-wrapper"></div>
                    </li>
                </ul>
              
            </div>
        </div>
    </div>
)
}

export default Nav






// export default function NavBar() {
//     return (
  
//     );
// }