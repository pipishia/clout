import style from './header.module.css'
//import 'antd/dist/reset.css'
import { useState } from "react";
import ShoppingCart from '../ShoppingCart/ShoppingCart'
import { Link } from "react-router-dom"
import NavBar from '../navbar/navbar';
import UserInfo from '../userinfo/userinfo'
export default function header({ title }) {
    const [isOnTouch, setIsOnTouch] = useState(false);
    return (

        <header className={style.header}>

            <img className={style.clout} src="/images/cloutlogo.png" alt="clout" />
            <div className={style.navbar}>
                <a>  <h1 className={style.about}>about us{title}</h1></a>
                < Link to='/' className={style.link}>
                    <h1 className={style.home}>homse{title}</h1>
                </Link>

                <div className={style.wrap}>
                    <div className={style.flwrap}>
                        <div className={style.mainsearchinputitem}>
                            <input type="text" />
                            <button className={style.searchbutton}><img src="/images/search.png" width="18vw" /></button>
                        </div>
                    </div>
                </div>
            
                    <UserInfo/>
                 
                <ShoppingCart />

            </div>
            <div className={style.rwdshit}><NavBar /></div>
        </header>
    );


}

