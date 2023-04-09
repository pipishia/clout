import React from "react"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import  './masonry.css'
import product from '../json/product.json'
import Productitems from "./productitem";

const masonry = () =>{
    return(
        <Productitems key={product.i} img={product.images} product={product}/>
    );

};

export default masonry