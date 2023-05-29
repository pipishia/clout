
import style from './Content.module.css'
import { Select } from "antd";
import { InputNumber, Space } from 'antd';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ticket from '../json/ticket.json'
import AddToCart from "../AddToBasket/AddToBasket"
import {useState} from 'react';
const { Option } = Select;

export default function Content({ product }) {
    const [qty, setQty] = useState(product.stock > 0 ? 1 : 0);
    const [qty0 ,setQty0] = useState(product.stock > 0 ? 1 : 0);
    const [qty1 ,setQty1] = useState(product.stock > 0 ? 1 : 0);
    const [qty2 , setQty2] = useState(product.stock > 0 ? 1 : 0);
    const [qty3,setQty3] = useState(product.stock > 0 ? 1 : 0);
    const onChange = (value) => {
        console.log('changed', value);
      };
      var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    }
    return (
  <div className={style.container}>
        <div className={style.all}>
            <div className={style.pic}>
                <img  className={style.pic_style} src={product.images} />
            </div>

            <div className = {style.big_info}>
                        <div class = {style.info_container}>
                            <div className={style.title}>{product.name} </div>
                            <div className={style.info_wrapper}>
                                <div className= {style.info_col}>
                                    <div className = {style.info_title}> 開始時間:  </div>
                                    <div className = {style.info_text}>{product.time} </div>
                                </div>
                                <div className= {style.info_col}>
                                    <div className = {style.info_title}> 活動地點: </div>
                                    <div className = {style.info_text}> {product.place}</div>
                                </div>
                                <div className= {style.info_col}>
                                    <div className = {style.info_title}> 主辦單位: </div>
                                    <div className = {style.info_text}> {product.organizer}</div>
                                </div>
                                <div className= {style.info_col}>
                                    <div className = {style.info_title}> 票種種類: </div>
                                    <div className = {style.info_text}> {product.ticket}</div>
                                </div>
                                <div className= {style.info_col}>
                                    <div className = {style.info_title}> 付款方式: </div>
                                    <div className = {style.info_text}> {product.payment}</div>
                                </div>
                                <div className={style.info_title}> 售票種類: </div>
                            </div> 
                            <div class={style.sort}>
                            <div className= {style.sort_container}>
                                <div className = {style.sort_col}>
                                    <div className={style.st_box}>
                                        <div className ={style.sort_text}>
                                            {ticket.map((ticket, id)=>(
                                                <h2 key={id}>{ticket.name}</h2>
                                            ))}
                                        </div>
                                    </div>
                                    <div className={style.counter}>
                                          <Space className = {style.number}>
                                              
                                      <InputNumber min={0} max={100000} defaultValue={qty0} onChange={val => setQty0(val)} />
                                      {[...Array(product.tickets[0].countInStock).keys()].map((x) => (
                                            <Option key={x + 1} value={x + 1}>
                                                {x + 1}
                                            </Option>
                                            ))}
                                      <p className={style.status}>
                                        {product.tickets[0].countInStock > 0 ? "尚有座位" : "已售完"} </p>
                                     </Space>
                                     <Space className = {style.number}>
                                      <InputNumber min={0} max={100000} defaultValue={qty1} onChange={val => setQty1(val)} />
                                      {[...Array(product.tickets[1].countInStock).keys()].map((x) => (
                                            <Option key={x + 1} value={x + 1}>
                                                {x + 1}
                                            </Option>
                                            ))}
                                      <p className={style.status}>
                                        {product.tickets[1].countInStock > 0 ? "尚有座位" : "已售完"} </p>
                                     </Space>
                                    <Space className = {style.number}>
                                      <InputNumber min={0} max={100000} defaultValue={qty2} onChange={val => setQty2(val)} />
                                      {[...Array(product.tickets[3].countInStock).keys()].map((x) => (
                                            <Option key={x + 1} value={x + 1}>
                                                {x + 1}
                                            </Option>
                                            ))}
                                      <p className={style.status}>
                                        {product.tickets[2].countInStock > 0 ? "尚有座位" : "已售完"} </p>
                                   </Space>
                                   <Space className = {style.number}>
                                    <InputNumber min={0} max={100000} defaultValue={qty3} onChange={val => setQty3(val)} />
                                            {[...Array(product.tickets[3].countInStock).keys()].map((x) => (
                                            <Option key={x + 1} value={x + 1}>
                                                {x + 1}
                                            </Option>
                                            ))}
                                      
                                    <p className={style.status}>
                                        {product.tickets[3].countInStock > 0 ? "尚有座位" : "已售完"} </p>
                                    </Space>
                                   </div>

                                    <div className={style.sort_money}>
                                          {ticket.map((ticket, id)=>(
                                                <h2 key={id}>{ticket.price}</h2>
                                            ))}
                                    </div>
                                 
                                </div>  
                             
        
                  <p className={style.qty}>
                     Total Price: $ {product.tickets[0].price * qty0+product.tickets[1].price * qty1+product.tickets[2].price * qty2+product.tickets[3].price * qty3}
                  </p>
                                            
                        <AddToCart total={product.tickets[0].price * qty0+product.tickets[1].price * qty1+product.tickets[2].price * qty2+product.tickets[3].price * qty3} product={product} qty={qty0+qty1+qty2+qty3} qty0={qty0} qty1={qty1} qty2={qty2} qty3={qty3}/>

                            </div>
                           
                            </div>
                        </div>
        </div>
    </div>
        <div className = {style.all_2}>


        <article className= {style.activity} >
            <div className = {style.de_title}> 
                <div className={style.de_title_text}>活動介紹</div>
            </div>

        <div className={style.description_box}>
            <div className={style.description_text}>
            政大黑音第六屆謝幕專場【黯陰陽】預售票正式開賣
            接連產出數首佳作，在街聲排行榜上嶄露頭角的政大黑音第六屆，將帶來屬於他們最後的表演！
            從大家耳熟能詳的熱門歌曲，到你沒聽過的隱藏作品。
            從你不可能不認識、才華足以衝擊饒舌圈的新生代饒舌歌手，到平時隱藏在他們之下，但才華一點都不遜色的神秘玩家。
            這一次，政大黑音第六屆全員都將在這最後的舞台上集結！
            更是特邀兩組重量級前輩擔任嘉賓，無需猶豫，保證值回票價。  -
            至於為什麼要叫黯陰陽，7/10你們會明白的
            </div>
        </div>

        </article>

        <div className = {style.superstar}>
            <div className = {style.ar_title}>
                <div className={style.ar_title_text}>演出藝人</div>
            </div>
        
        
            
                
                <Slider {...settings}>
                    <div className = {style.artist}>
                        <img src="/images/jadan.jpg" alt="" className={style.art_pic} />
                    </div>
                    <div className = {style.artist}>
                        <img src="/images/gunna2.png" alt="" className={style.art_pic} />
                    </div>
                    <div className = {style.artist}>
                        <img src="/images/thug2.png" alt="" className={style.art_pic} /> 
                    </div>
                    <div className = {style.artist}>
                        <img src="/images/billie.jpg" alt="" className={style.art_pic} />   
                    </div>
                    <div className = {style.artist}>
                        <img src="/images/uzi.jpg" alt="" className={style.art_pic} />
                    </div>
                    <div className = {style.artist}>
                        <img src="/images/will2.png" alt="" className={style.art_pic} />
                    </div>
                </Slider>  
        </div>

        </div>

       
       
           
    
 </div> 

 
 

    )

}
