import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import  './masonry.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Activity from "../../pages/Activity";
export default function Productitems({prod}){
    return (
        <>
        <div style={{backgroundColor: '#B3C9DB',padding:'20px'}} >
         <ResponsiveMasonry
                     columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
                 >
                     <div  class="all"> 
                        <Masonry gutter="20px">
                            {prod.map((prod) => (
                            <>
                            <img className="images"
                                    key={prod.i}
                                    src={prod.images}
                                    alt={prod.name} />
                                    <div className="inside">
                                        <div className="text">
                                            {prod.name}
                                        </div>
                                        <button className="btn">
                                        < Link to='/Activity' className="link">
                                        {prod.button}
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