import style from './header.module.css'
import { Row, Col } from 'antd';
import 'antd/dist/reset.css'
import { useState } from "react";
import CartSummary from "../CartSummary";


export default function header({ title, slogan,pic})
{
    const [isOnTouch, setIsOnTouch] = useState(false);
    return (
        <header className={style.header}>
            <div className="container d-flex flex-column align-items-center">
                <img className={style.avatar} src="./images/DICK.png" alt="avatar" />
                <h1 className={style.headerTitle}>最新消息{title}</h1>
                <CartSummary />
                <img className={style.pic} src="./images/cart.jpg" alt="pic"/>
                <p className={style.slogan} src="./images/login.jfif">login{slogan}</p>
            </div>
        </header>
    );
}

