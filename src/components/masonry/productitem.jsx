import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import product from '../json/product.json'
import  './masonry.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Activity from "../../pages/Activity";
export default function Productitems({product}){
    return (
        <>
        <div style={{backgroundColor: '#B3C9DB',padding:'20px'}} >
         <ResponsiveMasonry
                     columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
                 >
                     <div  class="all"> 
                        <Masonry gutter="20px">
                            {product.map((product) => (
                            <>
                            <img className="images"
                                    key={product.i}
                                    src={product.images}
                                    alt={product.name} />
                                    <div className="inside">
                                        <div className="text">
                                            {product.name}
                                        </div>
                                        <button className="btn">
                                        < Link to={`/Activity/id/${Activity.id}`} className="link">
                                        {product.button}
                                        </Link>
                                        </button>
                                    </div>
                                    </>
                                    
                            ))}
                        </Masonry>
                     </div>
                    
                 </ResponsiveMasonry>
        </div>
 
     </>
      );
    }