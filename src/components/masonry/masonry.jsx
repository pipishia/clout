import React from "react"
import  './masonry.css'
import product from '../json/product.json'
import Productitems from "./productitem";




const masonry = () =>{
    return(
        <Productitems key={product.id} img={product.images} product={product}/>
    );

};

export default masonry