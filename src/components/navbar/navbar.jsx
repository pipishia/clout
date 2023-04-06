import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';
import { Row, Col } from 'antd';
import 'antd/dist/reset.css'
import { useState } from "react";
import CartSummary from '../cartsummary/cart'
export default function NavBar() {
    return (
    <div class={styles.navbar}>  
    <a>  <h1 className={styles.new}>home{title}</h1></a>
       <a>  <h1 className={styles.new}>news{title}</h1></a>
       <div class={styles.wrap}>
                   <div class={styles.flwrap}>
                           <div class={styles.mainsearchinputitem}>
                               <input type="text"  value="" placeholder="..."/>
                               <button class={styles.searchbutton}>Search</button>
                           </div>
                       </div>
                   </div>
                   <div class={styles.user}>
                    <button class={styles.signbutton}>Sign Up</button>
                    <button class={styles.loginbutton}>Login</button>
                    </div>
               <CartSummary/>          
   </div>
    );
}