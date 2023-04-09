import style from './header.module.css'
import 'antd/dist/reset.css'
import { useState } from "react";
import CartSummary from '../cartsummary/cart'
import { Link } from "react-router-dom"
import NavBar from '../navbar/navbar';

export default function header({ title})
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
                               <input type="text" />
                               <button class={style.searchbutton}><img src="./images/search.png" width="18vw" ></img></button>
                           </div>
                       </div>
                   </div>
                   <div class={style.user}>
                    <button class={style.signbutton}>Sign Up</button>
                    <button class={style.loginbutton}>Login</button>
                    </div>
               <CartSummary/>  
                    
   </div>
   <div class={style.rwdshit}><NavBar /></div>
        </header>
    );

    
}

