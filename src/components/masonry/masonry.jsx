import React from "react"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import styles from './masonry.css'
const images = [
    "./images/01.jpg",
    "./images/02.jpg",
    "./images/03.jpg",
    "./images/04.jpg",
    "./images/05.jpg",
    "./images/06.jpg",
    "./images/07.jpg",
    "./images/08.jpg",
    "./images/09.png",
    "./images/10.jpg",
    "./images/11.jpg",
    "./images/12.jpg",
    "./images/13.jpg",
    "./images/14.jpg",
    "./images/15.jpg",
    "./images/16.jpg",
    "./images/17.jpg",

]
const masonry = () =>{
    return(

        <>
       <div style={{backgroundColor: '#B3C9DB',padding:'20px'}} >
        <ResponsiveMasonry
                    columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
                    
                >
                    <Masonry  gutter="20px">
                        {images.map((image, i) => (
                            <img
                                key={i}
                                src={image}
                                style={{width: "100%", display: "block"}}
                                alt=""
                            />
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
       </div>

    </>
    );

};

export default masonry