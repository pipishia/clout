import React from "react"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import  './masonry.css'
import prod from '../json/prod.json'
import Productitems from "./productitem";

const masonry = () =>{
    return(
        <Productitems key={prod.i} img={prod.images} prod={prod}/>
    );

};

export default masonry