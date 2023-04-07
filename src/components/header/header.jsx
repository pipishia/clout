import style from './header.module.css'
import 'antd/dist/reset.css'
import { useState } from "react";
import CartSummary from '../cartsummary/cart'
import { Link } from "react-router-dom"
import NavBar from '../navbar/navbar';

export default function header({ title,slogan})
{
    const [isOnTouch, setIsOnTouch] = useState(false);
    return (
        
        <header className={style.header}>
            <img className={style.clout} src="./images/cloutlogo.png" alt="clout" />
             <div class={style.navbar}>  
    <a>  <h1 className={style.about}>about us{title}</h1></a>
       <a>  <h1 className={style.new}>news{title}</h1></a>
       <div class={style.wrap}>
                   <div class={style.flwrap}>
                           <div class={style.mainsearchinputitem}>
                               <input type="text"  value="" placeholder="..."/>
                               <button class={style.searchbutton}>Search</button>
                           </div>
                       </div>
                   </div>
                   <div class={style.user}>
                    <button class={style.signbutton}>Sign Up</button>
                    <button class={style.loginbutton}>Login</button>
                    </div>
               <CartSummary/>  
               <NavBar />        
   </div>
        </header>
    );

    
}

