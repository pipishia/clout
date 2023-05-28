import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import  './masonry.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

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
                                    key={product.id}
                                    src={product.images}
                                    alt={product.name} />
                                    <div className="inside">
                                        <div className="text">
                                            {product.name}
                                        </div>
                                        <button className="btn">
                                        < Link to={`/activity/id/${product.id}`}  className="link">
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